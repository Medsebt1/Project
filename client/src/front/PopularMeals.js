import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, getAllRecipes } from "../redux/actions";
import Entete from "./Entete";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcLike } from "@react-icons/all-files/fc/FcLike";
const PopularMeals = () => {
  const { loading, Recipes } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);
  const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      outline: none;
    }
  `;
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
          {Recipes &&
            React.Children.toArray(
              Recipes.map((el) => (
                <div className="PoP" key={el._id}>
                  <StyledLink to={{ pathname: `/RecipeCard/${el._id}` }}>
                    {" "}
                    <h1 className="RecipeName">{el.RecipeName}</h1>
                    <img className="recipeimg" src={el.photo} alt="img" />
                  </StyledLink>{" "}
                  <button
                    onClick={() => dispatch(addToFavorite(el.id))}
                    className="like"
                  >
                    <FcLike />
                  </button>
                </div>
              ))
            )}
        </div>
      )}
      ;
    </div>
  );
};

export default PopularMeals;
