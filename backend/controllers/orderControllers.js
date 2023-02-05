import OrderModel from "../models/OrderModel.js";
import ProductModel from "../models/ProductModel.js";
import UserModel from "../models/UserModel.js";
import asyncHandler from "express-async-handler";

export const createOrder = asyncHandler(async (req, res) => {
    try {
        const {_id} = req.user
    const { cart,address} = req.body;
    const user = await UserModel.findOne({ _id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const orders = cart.map(async(item) => {
     const order = await OrderModel.create({
        productId: item._id,
        userId: user._id,
        size: item?.size?.name,
        color: item?.color?.color,
        quantities: item.quantity,
        address,
      })})
      return res.status(200).json(orders)
    } catch (error) {
        console.log(error.message);
        return response.status(500).json("Server internal error");
    }
  });