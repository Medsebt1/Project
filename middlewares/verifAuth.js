const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const secret = config.get("secret");

exports.verifAuth = async (req, res, next) => {
  let token = req.headers.authorization;

  try {
    var decoded = jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({ msg: "invalid token" });
    const user = await User.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(401).json({ msg: "unauthorized" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
