const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RecipesSchema = Schema({
  RecipeName: String,
  ingredients: String,
  type_of_cuisine: String,
  photo: String,
});
module.exports = mongoose.model("Recipe", RecipesSchema);
