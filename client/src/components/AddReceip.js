import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe, getOneRecipe } from "../redux/actions";
import Entete from "../front/Entete";
import { Redirect } from "react-router-dom";

const AddReceip = () => {
  const [RecipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [type_of_cuisine, setType_of_cuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      RecipeName,
      ingredients,
      type_of_cuisine,
      photo,
    };
    if (RecipeName && ingredients && type_of_cuisine && photo) {
      dispatch(createRecipe(newRecipe));
    }
    dispatch(getOneRecipe());
    setRecipeName("");
    setIngredients("");
    setType_of_cuisine("");
    setPhoto("");
  };
  const Redirect = (e) => {
    e.preventDefault();
    dispatch(<Redirect to="/AddResult"></Redirect>);
  };
  return (
    <div>
      {" "}
      <Entete />
      <div>
        <form className="add" action="" onSubmit={handleSubmit}>
          <div className="addlabel">
            <input
              className="addinput"
              placeholder="Recipe Name"
              type="text"
              value={RecipeName}
              onChange={(e) => {
                setRecipeName(e.target.value);
              }}
            />
          </div>
          <div className="addlabel">
            <input
              className="addinput"
              placeholder="Ingredients"
              type="text"
              value={ingredients}
              onChange={(e) => {
                setIngredients(e.target.value);
              }}
            />
          </div>
          <div className="addlabel">
            <input
              className="addinput"
              placeholder="Type of Cuisine"
              type="text"
              value={type_of_cuisine}
              onChange={(e) => {
                setType_of_cuisine(e.target.value);
              }}
            />
          </div>
          <div className="addlabel">
            <input
              className="addinput"
              placeholder="please put the meal's picture between two '' "
              type="text"
              value={photo}
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
            />
          </div>
          <button onSubmit={Redirect} className="addbutt" type="submit">
            <img
              className="AddButtom"
              src="https://st.depositphotos.com/3279699/4828/v/600/depositphotos_48286193-stock-illustration-woman-chef-showing-thumb.jpg"
              alt="img"
            />
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddReceip;
