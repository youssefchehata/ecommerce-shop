import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";
// Protect Route
const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user = await  User.findById(decoded.userId).select("-password");
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error(" Not Authorized , token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized , token not found");
  }
});

//Admin middleware
const admin =(req, res , next )=>{
  if(req.user && req.user.isAdmin){
    next();
  }else{
    res.status(401);
    throw new Error("Not Authorized , Admin access denied");
  }
}
export { protect, admin };