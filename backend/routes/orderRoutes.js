import express from "express";
import { createOrder } from "../controllers/orderControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const orderRouter = express.Router();

orderRouter.post("/create-order",authMiddleware, createOrder);

export default orderRouter;
