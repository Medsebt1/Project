import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editeUser, getAllUsers, removeUser } from "../redux/actions";
import { useEffect } from "react";
import Entete from "../front/Entete";

const AllUsers = () => {
  const { loading, users } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [blocking, setBlocking] = useState(editeUser.blocking);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedUser = { _id: editeUser._id, blocking };
    dispatch(editeUser(editedUser));
    dispatch(getAllUsers());
    setBlocking(_id);
  };
  const { _id } = useParams();
  const HandleDelete = (e) => {
    e.preventDefault();
    dispatch(removeUser(_id));
  };
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <div>
        <Entete />
      </div>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div className="PoPMain">
          {" "}
          {users &&
            React.Children.toArray(
              users.map((el) => (
                <div className="PoP" key={el._id}>
                  {" "}
                  <h1 className="RecipeName">Name : {el.fullName}</h1>
                  <h1 className="RecipeName">Email :{el.email}</h1>
                  <h1 className="RecipeName">Blocked User : {el.blocking}</h1>
                  <h1 className="RecipeName">Role : {el.userRole}</h1>
                  <Button onClick={HandleDelete} variant="warning">
                    Delete User
                  </Button>
                  <Button variant="danger" onClick={handleSubmit}>
                    {!blocking ? "BlockUser" : "UnBlock"}
                  </Button>
                </div>
              ))
            )}
        </div>
      )}
      ;
      {/* {user && user.userRole === "admin" ? (
        <Redirect to="BLOCK">
          <Button> Block User</Button>
        </Redirect>
      ) : null} */}
    </div>
  );
};

export default AllUsers;
