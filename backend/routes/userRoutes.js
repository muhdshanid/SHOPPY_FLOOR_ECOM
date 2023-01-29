import express from "express";
import {
  adminLogin,
  applyCoupon,
  blockUser,
  createOrder,
  deleteUser,
  emptyCart,
  forgotPasswordToken,
  getAllOrders,
  getAllUsers,

  getSingleUser,
  getUserCart,
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
  userCart,
} from "../controllers/userControllers.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin-login", adminLogin);

// Cart routes
userRouter.post("/cart",authMiddleware, userCart);
userRouter.get("/get-usercart",authMiddleware, getUserCart);
userRouter.delete("/empty-cart",authMiddleware, emptyCart);

//apply coupon
userRouter.post("/cart/apply-coupon",authMiddleware,applyCoupon)

//order routes
userRouter.post("/create-order",authMiddleware,createOrder)
userRouter.get("/get-user-orders",authMiddleware,getUserOrders)
userRouter.get("/get-all-orders",[authMiddleware,isAdmin],getAllOrders)
userRouter.put("/update-order/:id",[authMiddleware,isAdmin],updateOrderStatus)
 
//others
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