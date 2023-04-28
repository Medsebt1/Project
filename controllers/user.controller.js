const User = require("../Models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");

exports.register = async (req, res) => {
  const { fullName, email, password, userRole, blocking } = req.body;

  const existantUser = await User.findOne({ email });
  if (existantUser) res.status(409).json({ msg: "user already exists" });

  try {
    const newUser = new User({
      fullName,
      email,
      password,
      userRole,
      blocking,
    });

    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);
    newUser.password = hash;

    await newUser.save();
    const payload = {
      _id: newUser._id,
      name: newUser.fullName,
      email: newUser.email,
      blocking: newUser.blocking,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        userRole: newUser.userRole,
        blocking: newUser.blocking,
      },
    });
    //res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "wrong informations" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "wrong informations" });
    const payload = {
      _id: user._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        userRole: user.userRole,
        blocking: user.blocking,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.auth = (req, res) => {
  res.send(req.user);
};
exports.getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    allUsers
      ? res.status(201).json(allUsers)
      : res.status(401).json({ msg: "getAll error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//delete one user
exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params._id);
    res.status(201).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
//edit user to block
exports.updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(updateUser);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
