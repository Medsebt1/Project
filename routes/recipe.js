const express = require("express");

const {
  addRecipe,
  getAllRecipes,
  getFrenchRecipes,
  getAmericanRecipes,
  getIndianRecipes,
  getMexicanRecipes,
  getTunisianRecipes,
  deleteRecipe,
  updateRecipe,
  getOneRecipe,
  getKidFriendlyRecipes,
  getItalianRecipes,
} = require("../controllers/recipe.controllers");

router = express.Router();

//router
router.post("/addRecipe", addRecipe);

router.get("/getAllRecipes", getAllRecipes);

router.get("/getFrenchRecipes", getFrenchRecipes);
router.get("/getAmericanRecipes", getAmericanRecipes);
router.get("/getIndianRecipes", getIndianRecipes);
router.get("/getItalianRecipes", getItalianRecipes);
router.get("/getKidfriendlyRecipes", getKidFriendlyRecipes);
router.get("/getMexicanRecipes", getMexicanRecipes);

router.get("/getTunisianRecipes", getTunisianRecipes);

router.get("/getOneRecipe/:_id", getOneRecipe);

router.delete("/deleteOneRecipe/:_id", deleteRecipe);

router.put("/updateRecipe/:_id", updateRecipe);

module.exports = router;
