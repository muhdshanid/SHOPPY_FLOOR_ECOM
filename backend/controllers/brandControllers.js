import asyncHandler from 'express-async-handler'
import BrandModel from '../models/BrandModel.js'
import { validateMongoDBID } from '../utils/validateMongoDBID.js'

export const createBrand = asyncHandler(async (req,res) => {
    try {
      const newBrand = await BrandModel.create(req.body)
      return res.status(200).json(newBrand)
    } catch (error) {
     throw new Error(error)
    }
})
export const updateBrand = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const updateBrand = await BrandModel.findByIdAndUpdate(id,req.body,{new:true})
      return res.status(200).json(updateBrand)
    } catch (error) {
     throw new Error(error)
    }
})
export const deleteBrand = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const deleteBrand = await BrandModel.findByIdAndDelete(id)
      return res.status(200).json("Brand deleted successfully")
    } catch (error) {
     throw new Error(error)
    }
})
export const getBrand = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const getABrand = await BrandModel.findById(id)
      return res.status(200).json(getABrand)
    } catch (error) {
     throw new Error(error)
    }
})
export const getAllBrand = asyncHandler(async (req,res) => {
    try {
      const getAllBrand = await BrandModel.find({}).sort({_id:-1})
      return res.status(200).json(getAllBrand)
    } catch (error) {
     throw new Error(error)
    }
})
