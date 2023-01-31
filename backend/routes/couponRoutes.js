import express from 'express'
import { createCoupon, deleteCoupon, getAllCoupons, getCoupon, updateCoupon } from '../controllers/couponControllers.js'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js'

const couponRouter = express.Router()

couponRouter.post("/create-coupon",[authMiddleware,isAdmin],createCoupon)
couponRouter.get("/all-coupon",[authMiddleware,isAdmin],getAllCoupons)
couponRouter.put("/update-coupon/:id",[authMiddleware,isAdmin],updateCoupon)
couponRouter.get("/get-coupon/:id",[authMiddleware,isAdmin],getCoupon)
couponRouter.delete("/delete-coupon/:id",[authMiddleware,isAdmin],deleteCoupon)

export default couponRouter 