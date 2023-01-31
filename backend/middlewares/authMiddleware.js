import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import UserModel from '../models/UserModel.js'
dotenv.config()
export const authMiddleware = asyncHandler(async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token  = req.headers.authorization.split(" ")[1]
        try {
            if(token){
                const decoded = jwt.verify(token,process.env.JWT_SECRET)
                const user = await UserModel.findById(decoded.id)
                req.user = user
                next()
            }else{
                throw new Error("Token is not available")
            }
        } catch (error) {
            throw new Error("Not authorized token expired,Please login again")
        }
    }else{
        throw new Error("Token is not available")
    }
})


export const isAdmin = asyncHandler(async(req,res,next)=>{
    const {email} = req.user
    const adminUser = await UserModel.findOne({email})
    if(adminUser.role !== "admin"){
        throw new Error("You are not admin")
    }else{
        next()
    }
})