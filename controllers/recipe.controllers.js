const Recipe = require("../Models/Recipe");
//add
exports.addRecipe = async (req, res) => {
  const { RecipeName, ingredients, type_of_cuisine, photo } = req.body;
  try {
    const newRecipe = new Recipe({
      RecipeName,
      ingredients,
      type_of_cuisine,
      photo,
    });
    await newRecipe.save();
    newRecipe
      ? res.status(200).json(newRecipe)
      : res.status(401).json({ msg: "create recipe error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//get all
exports.getAllRecipes = async (req, res) => {
  try {
    const AllRecipes = await Recipe.find();
    AllRecipes
      ? res.status(201).json(AllRecipes)
      : res.status(401).json({ msg: "getAll error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//get one
exports.getOneRecipe = async (req, res) => {
  try {
    const oneRecipe = await Recipe.findById(req.params._id);
    oneRecipe
      ? res.status(201).send(oneRecipe)
      : res.status(401).json({ msg: "get one recipe error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//delete one
exports.deleteRecipe = async (req, res) => {
  try {
    const deleteRecipe = await Recipe.findByIdAndDelete(req.params._id);
    res.status(201).json({ msg: "recipe deleted successfully" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//update one
exports.updateRecipe = async (req, res) => {
  try {
    const updateRecipe = await Recipe.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(updateRecipe);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.getFrenchRecipes = async (req, res) => {
  try {
    const FrenchRecipes = await Recipe.find({ type_of_cuisine: "french" });
    FrenchRecipes
      ? res.status(201).json(FrenchRecipes)
      : res.status(401).json({ msg: "get  recipes error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getAmericanRecipes = async (req, res) => {
  try {
    const AmericanRecipes = await Recipe.find({ type_of_cuisine: "american" });
    AmericanRecipes
      ? res.status(201).json(AmericanRecipes)
      : res.status(401).json({ msg: "get  recipes error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getIndianRecipes = async (req, res) => {
  try {
    const IndianRecipes = await Recipe.find({ type_of_cuisine: "indian" });
    IndianRecipes
      ? res.status(201).json(IndianRecipes)
      : res.status(401).json({ msg: "get  recipes error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getItalianRecipes = async (req, res) => {
  try {
    const ItalianRecipes = await Recipe.find({ type_of_cuisine: "italian" });
    ItalianRecipes
      ? res.status(201).json(ItalianRecipes)
      : res.status(401).json({ msg: "get  recipes error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getKidFriendlyRecipes = async (req, res) => {
  try {
    const KidFriendlyRecipes = await Recipe.find({
      type_of_cuisine: "kid_friendly",
    });
    KidFriendlyRecipes
      ? res.status(201).json(KidFriendlyRecipes)
      : res.status(401).json({ msg: "get frech recipes error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getMexicanRecipes = async (req, res) => {
  try {
    const MexicanRecipes = await Recipe.find({ type_of_cuisine: "mexican" });
    MexicanRecipes
      ? res.status(201).json(MexicanRecipes)
      : res.status(401).json({ msg: "get  recipes error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getTunisianRecipes = async (req, res) => {
  try {
    const TunisianRecipes = await Recipe.find({ type_of_cuisine: "tunisian" });
    TunisianRecipes
      ? res.status(201).json(TunisianRecipes)
      : res.status(401).json({ msg: "get  recipes error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
