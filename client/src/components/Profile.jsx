import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfile } from "../redux/actions";
import Entete from "../front/Entete";

const Profile = () => {
  const { isAuth, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  console.log(isAuth);
  return (
    <div className="profile">
      {loading ? (
        <h3>loading</h3>
      ) : !isAuth ? (
        <Redirect to="/signin" />
      ) : (
        <div>
          {" "}
          <Entete />
          <br />
          <br />
          <div>
            <Link to={{ pathname: "/AllCuisines" }}>
              <img
                className="home_logo"
                src="https://woody.cloudly.space/app/uploads/bretagne-35/2020/05/thumbs/u8b8440-chickenadrian-kilchherr-640x480.jpg"
                alt="img"
              />
            </Link>
            <h1>DISCOVER NEW RECIPES</h1>
          </div>
          <div>
            <Link to={{ pathname: "/AddReceip" }}>
              <img
                className="home_logo"
                src="https://thumbs.dreamstime.com/z/thinking-food-rgb-color-icon-thinking-food-rgb-color-icon-hungry-person-thought-eating-dieting-issues-intermittent-213438756.jpg"
                alt="img"
              />
            </Link>
            <h1>ADD NEW RECIPES</h1>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default Profile;
