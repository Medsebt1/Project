const express = require("express");
const { createFavorite } = require("../controllers/favorite.controllers");

router = express.Router();

router.post("/addItem", createFavorite);

module.exports = router;
