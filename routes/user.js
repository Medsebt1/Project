const express = require("express");
const {
  register,
  login,
  auth,
  getAllUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const { registerRules, Validatorr } = require("../middlewares/validator");
const { verifAuth } = require("../middlewares/verifAuth");
const router = express.Router();

router.post("/register", registerRules(), Validatorr, register);
router.post("/login", login);
router.get("/auth", verifAuth, auth);

router.get("/getAllUser", getAllUser);
router.delete("/deleteOneUser/:_id", deleteUser);
router.put("/updateUser/:_id", updateUser);

module.exports = router;
