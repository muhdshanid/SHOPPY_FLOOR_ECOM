import express from "express";
import {
  addToWishlist,
  adminLogin,
  blockUser,
  createOrder,
  deleteUser,
  forgotPasswordToken,
  getAllOrders,
  getAllUsers,

  getSingleUser,
  getUserOrders,
  getWishList,
  handleRefreshToken,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  saveAddress,
  unblockUser,
  updateOrderStatus,
  updatePassword,
  updateUser,
} from "../controllers/userControllers.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin-login", adminLogin);


//order routes
userRouter.post("/create-order",authMiddleware,createOrder)
userRouter.get("/get-user-orders",authMiddleware,getUserOrders)
userRouter.get("/get-all-orders",[authMiddleware,isAdmin],getAllOrders)
userRouter.put("/update-order/:id",[authMiddleware,isAdmin],updateOrderStatus)
 
//others
userRouter.put("/add-to-wishlist", addToWishlist);
userRouter.post("/forgot-pass-token", forgotPasswordToken);
userRouter.put("/reset-password/:token", resetPassword);
userRouter.get("/logout", logoutUser);
userRouter.put("/update-password", authMiddleware, updatePassword);
userRouter.get("/all-users", getAllUsers);
userRouter.get("/get-singleuser/:id", [authMiddleware, isAdmin], getSingleUser);
userRouter.get("/get-wishlist", authMiddleware, getWishList);
userRouter.delete("/delete-user/:id", deleteUser);
userRouter.put("/update-user/", authMiddleware, updateUser);
userRouter.put("/block-user/:id", [authMiddleware, isAdmin], blockUser);
userRouter.put("/unblock-user/:id", [authMiddleware, isAdmin], unblockUser);
userRouter.get("/refresh", handleRefreshToken);
userRouter.put("/save-address",authMiddleware,saveAddress)
export default userRouter;
