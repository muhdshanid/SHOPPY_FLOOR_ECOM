import OrderModel from "../models/OrderModel.js";
import UserModel from "../models/UserModel.js";
import asyncHandler from "express-async-handler";
import ProductModel from '../models/ProductModel.js'
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
      })
      const product = await ProductModel.findOne({ _id: item._id });
          if (product) {
            let stock = product.stock - item.quantity;
            if (stock < 0) {
              stock = 0;
            }
            await ProductModel.findByIdAndUpdate(
              item._id,
              { stock },
              { new: true }
            );
          }
    })
      return res.status(200).json(orders)
    } catch (error) {
        console.log(error.message);
        return response.status(500).json("Server internal error");
    }
});

export const getUserOrders = asyncHandler(async(req,res)=> {
    try {
        const {_id} = req.user
        const id = _id.toString()
        const userOrders = await OrderModel.find({userId:id}).populate("productId").sort({_id:-1})
        return res.status(200).json(userOrders)
    } catch (error) {
        throw new Error(error)
    }
})
export const getAllOrders = asyncHandler(async(req,res)=> {
  try {
      const allUserOrders = await OrderModel.find({}).populate("productId userId").sort({_id:-1})
      return res.status(200).json(allUserOrders)
  } catch (error) {
      throw new Error(error)
  }
})
export const getSingleOrder = asyncHandler(async(req,res)=> {
  try {
    const {id} = req.params
      const singleOrder = await OrderModel.findById(id).populate("productId userId")
      return res.status(200).json(singleOrder)
  } catch (error) {
      throw new Error(error)
  }
})
export const updateOrderStatus = asyncHandler(async(req,res)=> {
  try {
      const {status} = req.body
      const {id} = req.params
      const findOrder = await OrderModel.findByIdAndUpdate(id,{
          orderStatus:status,
      },{new:true})
      return res.status(200).json(status)
  } catch (error) {
      throw new Error(error)
  }
})
