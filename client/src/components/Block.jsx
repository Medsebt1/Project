import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import { editeUser, getAllUsers } from "../redux/actions";

const Block = ({ updatetUser }) => {
  const [blocking, setBlocking] = useState(updatetUser.blocking);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedUser = { _id: updatetUser._id, blocking };
    dispatch(editeUser(editedUser));
    dispatch(getAllUsers());
    setBlocking();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleSubmit}>
        BLOCK
      </Button>
    </div>
  );
};

export default Block;
