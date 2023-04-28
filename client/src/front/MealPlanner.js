import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../redux/actions";

const MealPlanner = () => {
  const { Recipes } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);
  var myArray = Recipes && React.Children.toArray();
  //   var rand = Math.floor(Math.random() * myArray.length);
  console.log(myArray);
  return (
    <div>
      <h>you can cook today</h>
      {/* <h3> For Lunch :</h3> <h3>{myArray[rand]}</h3>
      <h3> For Dinner :</h3> <h3>{myArray[rand]}</h3> */}
    </div>
  );
};

export default MealPlanner;
