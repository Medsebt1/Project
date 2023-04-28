import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilSignUp from "./components/ProfilSignUp";
import ProfilSignIn from "./components/ProfilSignIn";
import Profile from "./components/Profile";
import Contact from "./front/Contact";
import AllCuisenes from "./front/AllCuisenes";

import AddReceip from "./components/AddReceip";
import Home from "./components/Home";
import Block from "./components/Block";
import PopularMeals from "./front/PopularMeals";
import AddResult from "./components/AddResult";
import AmericanR from "./Recipes/AmericanR";
import FrenchR from "./Recipes/FrenchR";
import Italian from "./Recipes/Italian";
import IndianR from "./Recipes/IndianR";
import KidFriendlyR from "./Recipes/KidFriendlyR";
import MexicanR from "./Recipes/MexicanR";
import TunisianR from "./Recipes/TunisianR";
import RecipeCard from "./Recipes/RecipeCard";
import MyInformations from "./MyProfile/MyInformations";
import MyFavorite from "./MyProfile/MyFavorite";
import EditRecipe from "./MyProfile/EditRecipe";
import AllUsers from "./MyProfile/AllUsers";
import AllRecipes from "./MyProfile/AllRecipes";
import MyProfil from "./front/MyProfil";
import MealPlanner from "./front/MealPlanner";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={ProfilSignUp} />
          <Route exact path="/signin" component={ProfilSignIn} />
          <Route exact path="/Myprofile" component={MyProfil} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/AllCuisines" component={AllCuisenes} />
          <Route exact path="/AddReceip" component={AddReceip} />
          <Route exact path="/BLOCK" component={Block} />
          <Route exact path="/Popular_Meals" component={PopularMeals} />
          <Route exact path="/AddResult" component={AddResult} />
          <Route exact path="/Amercian" component={AmericanR} />
          <Route exact path="/French" component={FrenchR} />
          <Route exact path="/Italian" component={Italian} />
          <Route exact path="/Indian" component={IndianR} />
          <Route exact path="/Kid-friendly" component={KidFriendlyR} />
          <Route exact path="/Mexican" component={MexicanR} />
          <Route exact path="/Tunisian" component={TunisianR} />
          <Route exact path="/RecipeCard/:id" component={RecipeCard} />

          <Route exact path="/MyFavorite" component={MyFavorite} />
          <Route exact path="/EditRecipe" component={EditRecipe} />
          <Route exact path="/AllUsers" component={AllUsers} />
          <Route exact path="/AllRecipes" component={AllRecipes} />
          <Route exact path="/MealPlanner" component={MealPlanner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
