const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const app = express();

app.use(express.json());

app.use("/user", user);
// app.use("/Receip", Receip);
const recipe = require("./routes/recipe");
app.use("/recipe", recipe);
//router cart require
const favorite = require("./routes/favorite");
app.use("/favorite", favorite);
connectDB();

app.listen(5000, (err) =>
  err ? console.error(err) : console.log("server is running on port 5000")
);
