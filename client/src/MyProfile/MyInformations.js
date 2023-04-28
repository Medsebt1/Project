import React from "react";
import { useSelector } from "react-redux";

const MyInformations = () => {
  const { users } = useSelector((state) => state);
  return (
    <div>
      Name : {users.fullName}
      email : {users.email}
    </div>
  );
};

export default MyInformations;
