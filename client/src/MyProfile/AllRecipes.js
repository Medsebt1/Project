import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getAllRecipes, removeRecipe } from "../redux/actions";
import Entete from "../front/Entete";
import { Button } from "react-bootstrap";
import EditRecipe from "./EditRecipe";

const AllRecipes = () => {
  const { loading, Recipes } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { _id } = useParams();
  const HandleDelete = (e) => {
    e.preventDefault();
    dispatch(removeRecipe(_id));
  };
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
                <StyledLink to={{ pathname: `/RecipeCard/${el._id}` }}>
                  <div className="PoP" key={el._id}>
                    {" "}
                    <h1 className="RecipeName">{el.RecipeName}</h1>
                    <img className="recipeimg" src={el.photo} alt="img" />
                    <Button onClick={HandleDelete} variant="warning">
                      Delete Recipe
                    </Button>
                    {/* <Link to="/EditRecipe">
                      <Button variant="warning">Edit Recipe</Button>
                    </Link> */}
                    {/* <EditRecipe el={el} /> */}
                  </div>
                </StyledLink>
              ))
            )}
        </div>
      )}
      ;
    </div>
  );
};

export default AllRecipes;
