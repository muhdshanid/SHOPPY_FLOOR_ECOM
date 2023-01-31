import asyncHandler from 'express-async-handler'
import CouponModel from '../models/CouponModel.js'
import { validateMongoDBID } from '../utils/validateMongoDBID.js'

export const createCoupon = asyncHandler(async (req, res) => {
    try {
        const newCoupon = await CouponModel.create(req.body)
        return res.status(200).json(newCoupon)
    } catch (error) {
      throw new Error(error);
    }
  });
export const getAllCoupons = asyncHandler(async (req, res) => {
    try {
        const allCoupons = await CouponModel.find({})
        return res.status(200).json(allCoupons)
    } catch (error) {
      throw new Error(error);
    }
  });
export const getCoupon = asyncHandler(async (req, res) => {
    try {
      const {id} = req.params
      
        const coupon = await CouponModel.findById(id)
        
        return res.status(200).json(coupon)
    } catch (error) {
      throw new Error(error);
    }
  });
export const updateCoupon = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        validateMongoDBID(id)
        const updateCoupon = await CouponModel.findByIdAndUpdate(id,req.body,{new:true})
        return res.status(200).json(updateCoupon)
    } catch (error) {
      throw new Error(error);
    }
  });
export const deleteCoupon = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        validateMongoDBID(id)
        const deleteCoupon = await CouponModel.findByIdAndDelete(id)
        return res.status(200).json("Coupon deleted successfully")
    } catch (error) {
      throw new Error(error);
    }
  });

 