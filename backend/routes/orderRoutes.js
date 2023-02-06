import express from "express";
import { createOrder, getAllOrders, getSingleOrder, getUserOrders, updateOrderStatus } from "../controllers/orderControllers.js";
import { authMiddleware,isAdmin } from "../middlewares/authMiddleware.js";

const orderRouter = express.Router();

orderRouter.post("/create-order",authMiddleware, createOrder);
orderRouter.get("/get-user-orders",authMiddleware,getUserOrders)
orderRouter.get("/get-all-orders",[authMiddleware,isAdmin],getAllOrders)
orderRouter.put("/update-order/:id",[authMiddleware,isAdmin],updateOrderStatus)
orderRouter.get("/get-order/:id",[authMiddleware,isAdmin],getSingleOrder)

export default orderRouter;
