import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc   Auth & get token
//@route  POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
    console.log(req.body);
res.send("auth user")
});

//@desc   Register user
//@route  POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
res.send("register user")
});

//@desc   Logout user / clear cookie
//@route  POST /api/users/logout
//@access Private
const logoutUser = asyncHandler(async (req, res) => {
res.send("logout user")
});

//@desc   Get user profile
//@route  GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
res.send("get user profile")
});

//@desc   Update user profile
//@route  PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
res.send("update user profile")
});

//@desc  GET users 
//@route GET /api/users
//@access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  
 res.send("get users")
});
 //@desc  GET users by id
//@route GET /api/users/:id
//@access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
 res.send("get user by id")
});

//@desc  DELETE users
//@route DELETE /api/users/:id
//@access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
 res.send("delete user")
});

//@desc  Update user by id
//@route PUT /api/users/:id
//@access Private/Admin
const updateUserById = asyncHandler(async (req, res) => {
 res.send("update user by id")
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUserById };




