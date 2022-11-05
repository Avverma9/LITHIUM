const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let mytoken = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "lithium",
      organisation: "FunctionUp",
    },
    "functionup-lithium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", mytoken);
  res.send({ status: true, token: mytoken });
};
//------------------fetching user data -----------------//
const getUserData = async function (req, res) {
  let userId = req.params.userId
  let userDetails = await userModel.findById({_id:userId})
  if (!userDetails) res.send({msg : " Invalid userId"})
  res.send({ status: true, data: userDetails });}
//-------------------Update User -------------------//
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};
//------------------Deleteuser------------------//
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let deletedUser = await userModel.findOneAndDelete({ _id: userId }, userData);
  res.send({ status: deletedUser, data: deletedUser });
};
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
