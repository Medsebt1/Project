import React, { Children, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneRecipe } from "../redux/actions";
import Entete from "../front/Entete";
import { useParams } from "react-router-dom";
import { getAllRecipes } from "../redux/actions";

const RecipeCard = () => {
  const { loading, Recipes } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes);
  }, []);
  const params = useParams();
  const Rece = Recipes.filter((el) => el._id === params.id);
  const Recette = Rece[0];
  console.log(Recette);
  console.log(Recipes);
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
          <div className="Detail">
            {" "}
            <h1 className="Detail">Name : {Recette.RecipeName}</h1>
            <h3>Type Of Cuisine : {Recette.type_of_cuisine}</h3>
            <img className="recipeimg" src={Recette.photo} alt="" />
            <h3>Ingredients :{Recette.ingredients}</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
