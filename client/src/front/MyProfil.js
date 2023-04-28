import React from "react";
import { Link } from "react-router-dom";
import Entete from "./Entete";

const MyProfil = () => {
  return (
    <div className="prof">
      <Entete />
      <Link className="textt" to="/MyInformations">
        <img
          className="Pro"
          src="https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/compte-utilisateur-1.png"
          alt=""
        />{" "}
        <h3> My Informations</h3>
      </Link>
      <Link className="textt" to="/MyFavorite">
        <img
          className="Pro"
          src="https://c8.alamy.com/compfr/dnm3c4/illustration-d-un-chef-tenant-un-coeur-sur-un-plateau-le-concept-d-aimer-ou-de-cuisson-des-aliments-ou-de-mettre-votre-coeur-dans-la-cuisine-dnm3c4.jpg"
          alt=""
        />{" "}
        <h3>My Favorite Recipes</h3>
      </Link>
      <Link className="textt" to="/EditRecipe">
        <img
          className="Pro"
          src="https://media.istockphoto.com/id/1173055339/fr/vectoriel/un-chef-masculin-%C3%A2g%C3%A9-utilisant-un-manteau-de-cuisinier-pense.jpg?s=612x612&w=0&k=20&c=crprCcSGbUjpUdk3CJ8jUMHH4dQYBRHBu4xHpfz9Q-k="
          alt=""
        />
        <h3> Edit Recipe</h3>
      </Link>
      <Link className="textt" to="/AllRecipes">
        <img
          className="Pro"
          src="https://us.123rf.com/450wm/sararoom/sararoom1301/sararoom130100037/17338227-illustration-de-bande-dessin%C3%A9e-policier.jpg"
          alt=""
        />{" "}
        <h3> Recipes Management</h3>
      </Link>
      <Link className="textt" to="/AllUsers">
        <img
          className="Pro"
          src="https://us.123rf.com/450wm/sararoom/sararoom1301/sararoom130100037/17338227-illustration-de-bande-dessin%C3%A9e-policier.jpg"
          alt=""
        />{" "}
        <h3> Users Management</h3>
      </Link>
    </div>
  );
};

export default MyProfil;
