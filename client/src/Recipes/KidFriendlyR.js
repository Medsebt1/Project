import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKidFriendlyRecipes } from "../redux/actions";
import Entete from "../front/Entete";

const KidFriendlyR = () => {
  const { loading, Recipes } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getKidFriendlyRecipes());
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
          {Recipes &&
            React.Children.toArray(
              Recipes.map((el) => (
                <div className="PoP" key={el._id}>
                  {" "}
                  <h1 className="RecipeName">{el.RecipeName}</h1>
                  <img className="recipeimg" src={el.photo} alt="img" />
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
                </div>
              ))
            )}{" "}
        </div>
      )}
    </div>
  );
};

export default KidFriendlyR;
