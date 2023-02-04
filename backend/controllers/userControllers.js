import UserModel from "../models/UserModel.js";
import CartModel from "../models/CartModel.js";
import ProductModel from "../models/ProductModel.js";
import CouponModel from '../models/CouponModel.js'
import OrderModel from '../models/OrderModel.js'
import asyncHandler from 'express-async-handler'
import crypto from 'crypto'
import {v4 as uuid} from 'uuid'
import dotenv from 'dotenv'
import jwt from "jsonwebtoken";
import { generateToken } from "../config/jwtToken.js";
import { validateMongoDBID } from "../utils/validateMongoDBID.js";
import { generateRefreshToken } from "../config/refreshToken.js";
import { sendEmail } from "./email.js";
dotenv.config()
export const registerUser = asyncHandler(async (req,res) => {
        const {email} = req.body
        const existUser = await UserModel.findOne({email})
        if(!existUser){
            //create a new user
            const newUser = await UserModel.create(req.body)
            const token = generateToken(newUser?._id)
            return res.status(200).json({newUser,token})
        }else{
            //user already exist
            throw new Error("User already exist")
        }
})
export const loginUser = asyncHandler(async (req,res) => {
   const {email,password} = req.body
   const user = await UserModel.findOne({email})
   if(!user){
    return res.status(400).json({msg:"User not found",field:"Email"})
   }else{
    if( (await user.isPasswordMatched(password))){
        const refreshToken =  generateRefreshToken(user._id)
        const updateUser = await UserModel.findByIdAndUpdate(user._id,{
            refreshToken:refreshToken
        },{new:true})
        res.cookie('refreshToken',refreshToken,{
            httpOnly:true,
            maxAge:72*60*60*1000
        })
        const token = generateToken(user._id)
        return res.status(200).json({user,token})
   }else{
    return res.status(400).json({msg:"Password not matched",field:"Password"})
   }
   }
})
export const adminLogin = asyncHandler(async (req,res) => {
   const {email,password} = req.body
   const admin = await UserModel.findOne({email})
   if(admin.role !== "admin") throw new Error("Not authorized")
   if(admin && (await admin.isPasswordMatched(password))){
        const refreshToken =  generateRefreshToken(admin._id)
        const updateUser = await UserModel.findByIdAndUpdate(admin._id,{
            refreshToken:refreshToken
        },{new:true})
        res.cookie('refreshToken',refreshToken,{
            httpOnly:true,
            maxAge:72*60*60*1000
        })
        const token = generateToken(admin._id)
        return res.status(200).json({admin,token})
   }else{
    throw new Error("Password not matched")
   }
})
export const handleRefreshToken = asyncHandler(async (req,res) => {
   const cookie = req.cookies;
  if(!cookie?.refreshToken)throw new Error("No refresh token in cookies")
  const refreshToken = cookie.refreshToken
  const user = await UserModel.findOne({refreshToken})
  if(!user){
    throw new Error("No refresh token available")
  }
  jwt.verify(refreshToken,process.env.JWT_SECRET,(err,decoded)=>{
    if(err || user._id.toString() !== decoded.id){
        throw new Error("Something wrong with token")
    }
    const accessToken = generateToken(user._id)
    return res.status(200).json({accessToken})
  })
  
})
export const getAllUsers = asyncHandler(async (req,res) => {
   try {
    const getUsers = await UserModel.find({})
    const filter =  getUsers.filter(user => user.role !== 'admin')
    return res.status(200).json(filter)
   } catch (error) {
    throw new Error(error)
   }
})
export const getSingleUser = asyncHandler(async (req,res) => {
   try {
    const {id} = req.params
    validateMongoDBID(id)
    const user = await UserModel.findById(id)
    if(!user){
        throw new Error("User not found")
    }
    return res.status(200).json(user)
   } catch (error) {
    throw new Error(error)
   }
})
export const deleteUser = asyncHandler(async (req,res) => {
   try {
    const {id} = req.params
    validateMongoDBID(id)
    const user = await UserModel.findByIdAndDelete(id)
    if(!user){
        throw new Error("User not found")
    }
    return res.status(200).json({msg:"User deleted successfully"})
   } catch (error) {
    throw new Error(error)
   }
})
export const updateUser = asyncHandler(async (req,res) => {
   const {_id} = req.user
   validateMongoDBID(_id)
   try {
    const updateUser =await UserModel.findByIdAndUpdate(_id,{
       firstname:req.body?.firstname,
       lastname:req.body?.lastname,
       email:req.body?.email,
       mobile:req.body?.mobile,
       
    },{new:true})
    return res.status(200).json(updateUser)
   } catch (error) {
    throw new Error(error)
   }
})
export const blockUser = asyncHandler(async (req,res) => {
    const {id} = req.params
    validateMongoDBID(id)
    try {
        const blockUser = await UserModel.findByIdAndUpdate(id,{
            isBlocked:true
        },{new:true})
        return res.status(200).json("User blocked")
    } catch (error) {
        throw new Error(error)
    }
})
export const unblockUser = asyncHandler(async (req,res) => {
    const {id} = req.params
    validateMongoDBID(id)
    try {
        const unblockUser = await UserModel.findByIdAndUpdate(id,{
            isBlocked:false
        },{new:true})
        return res.status(200).json("User unblocked")
    } catch (error) {
        throw new Error(error)
    }
})
export const logoutUser = asyncHandler(async (req,res) => {
    const cookie = req.cookies;
    if(!cookie?.refreshToken)throw new Error("No refresh token in cookies")
    const refreshToken = cookie.refreshToken
    const user = await UserModel.findOne({refreshToken})
    if(!user){
        res.clearCookie('refreshToken',{
            httpOnly:true,
            secure:true
        })
        return res.status(204).json("No user found with refresh token")
    }
     await UserModel.findByIdAndUpdate(user._id,{
        refreshToken:""
    },{new:true})
    res.clearCookie('refreshToken',{
        httpOnly:true,
        secure:true
    })
    return res.status(200).json("Logout successfully")
})
export const updatePassword = asyncHandler(async (req,res) => {
    try {
     const {_id} = req.user
     const {password} = req.body
     validateMongoDBID(_id) 
     const user = await UserModel.findById(_id)
     if(password){
        user.password = password
        const updatePassword = await user.save()
        res.status(200).json(updatePassword)
     }else{
        res.status(200).json(user)
     }
    } catch (error) {
     throw new Error(error)
    }
})
export const forgotPasswordToken = asyncHandler(async (req,res) => {
    try {
     const {email} = req.body
     const user = await UserModel.findOne({email})
     if(!user)throw new Error("User not found");
     const token = await user.createPasswordResetToken();
     await user.save()
     const resetURL = `Hi, Please follow this link to reset your password .This link is valid only for 10 minutes from now.<a href="http://localhost:4000/api/user/reset-password/${token}">Click here</a>`
     const data = {
        to:email,
        text:'Hey User',
        subject:"Forgot Password Link",
        html:resetURL
     }
     sendEmail(data)
     res.status(200).json(token)
    } catch (error) {
     throw new Error(error)
    }
})
export const resetPassword = asyncHandler(async (req,res) => {
    try {
      const {password} = req.body
      const {token} = req.params
      const hashToken = crypto.createHash("sha256").update(token).digest("hex")
      const user = await UserModel.findOne({
        passwordResetToken:hashToken,
        passwordResetExpires:{$gt:Date.now()}
      })
      if(!user) throw new Error("Token expired ,Please try again later")
      user.password = password;
      user.passwordResetToken = undefined
      user.passwordResetExpires = undefined
      await user.save()
      res.status(200).json(user)
    } catch (error) {
     throw new Error(error)
    }
})
export const getWishList = asyncHandler(async(req,res) => {
    try {
        const {_id} = req.user
        validateMongoDBID(_id)
        const user  = await UserModel.findById(_id).populate("wishList")
        return res.status(200).json(user)
    } catch (error) {
        throw new Error(error)
    }
})
export const saveAddress = asyncHandler(async(req,res)=> {
    try {
        const {_id} = req.user
        validateMongoDBID(_id)
        const user  = await UserModel.findByIdAndUpdate(_id,{
            address:req?.body?.address
        },{new:true})
        return res.status(200).json(user)
    } catch (error) {
        throw new Error(error)
    }
})

export const createOrder  = asyncHandler(async(req,res)=> {
    try {
        const {COD,couponApplied} = req.body
        const {_id} = req.user
        validateMongoDBID(_id)
        if(!COD)throw new Error("Create cash order failed")
        const user = await UserModel.findById(_id)
        let userCart = await CartModel.findOne({orderBy:user._id})
        let finalAmount = 0
        if(couponApplied && userCart.totalAfterDiscount){
            finalAmount = userCart.totalAfterDiscount 
        }else{
            finalAmount = userCart.cartTotal 
        }
        let newOrder = await new OrderModel({
            products:userCart.products,
            paymentIntent:{
                id:uuid(),
                method:"COD",
                amount:finalAmount,
                status:"Cash on Delivery",
                created:Date.now(),
                currency:"inr"
            },
            orderBy:user._id,
            orderStatus:"Cash on Delivery"
        }).save()
        let update = userCart.products.map(item => {
            return {
                updateOne:{
                    filter:{_id:item.product._id},
                    update:{$inc:{quantity:-item.count,sold:+item.count}}
                }
            }
        })
        console.log(userCart.products);
        const updated = await ProductModel.bulkWrite(update,{})
        return res.status(200).json({message:"success",order:newOrder})
    } catch (error) {
        throw new Error(error)
    }
})
export const getAllOrders = asyncHandler(async(req,res)=> {
    try {
        const allUserOrders = await OrderModel.find({}).populate("products.product orderBy").exec()
        return res.status(200).json(allUserOrders)
    } catch (error) {
        throw new Error(error)
    }
})
export const getUserOrders = asyncHandler(async(req,res)=> {
    try {
        const {_id} = req.user
        validateMongoDBID(_id)
        const id = _id.toString()
        const userOrders = await OrderModel.find({orderBy:id}).populate("products.product orderBy").exec()
        return res.status(200).json(userOrders)
    } catch (error) {
        throw new Error(error)
    }
})
export const updateOrderStatus = asyncHandler(async(req,res)=> {
    try {
        const {status} = req.body
        const {id} = req.params
        validateMongoDBID(id)
        const findOrder = await OrderModel.findByIdAndUpdate(id,{
            orderStatus:status,
            paymentIntent:{ 
                status:status
            }
        },{new:true})
        return res.status(200).json(findOrder)
    } catch (error) {
        throw new Error(error)
    }
})
