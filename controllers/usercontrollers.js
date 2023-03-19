const UserModel = require("../schemas/schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const welcome = (req, res) => {
  return res.send("welcome");
};

const getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find();
  return res.status(200).json({ data: allUsers });
};

// token method (creating token) (private key = he token cha password)
// add salt
// then mix salt into password (hash)
const createUsers = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUserdata = {
      ...req.body,
      password: hashedPassword,
    };
    const savetoDatabase = await UserModel.create(newUserdata);
    const token = await jwt.sign(
      { user: savetoDatabase },
      "123456"
    );
    return res.status(200).json({ data: savetoDatabase, jwToken: token });
  } catch (error) {
    return res.status(200).json({ data: error.message });
  }
};
const signIN = async (req, res) => {
  try {
    const { email, password } = req.body;
    const requiredUser = await UserModel.findOne({ email: email });
    const verifyUser = await bcrypt.compare(password, requiredUser.password);
    if(!verifyUser) return res.status(400).json({data : "no access"})
    return res.status(200).json({ data: "access granted"});
  } catch (error) {
    return res.status(200).json({ data: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = req.params.user;
    const deleteUser = await UserModel.deleteOne({ name: user });
    return res.status(200).json({ data: deleteUser });
  } catch (error) {
    return res.status(200).json({ data: error.message });
  }
};

module.exports = {
  welcome,
  getAllUsers,
  createUsers,
  deleteUser,
  signIN,
};
