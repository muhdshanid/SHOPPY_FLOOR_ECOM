import asyncHandler from 'express-async-handler'
import ProductCategoryModel from '../models/ProductCategoryModel.js'
import { validateMongoDBID } from '../utils/validateMongoDBID.js'

export const createCategory = asyncHandler(async (req,res) => {
    try {
      const newCategory = await ProductCategoryModel.create(req.body)
      return res.status(200).json(newCategory)
    } catch (error) {
     throw new Error(error)
    }
})
export const updateCategory = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const updateCategory = await ProductCategoryModel.findByIdAndUpdate(id,req.body,{new:true})
      return res.status(200).json(updateCategory)
    } catch (error) {
     throw new Error(error)
    }
})
export const deleteCategory = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const deleteCategory = await ProductCategoryModel.findByIdAndDelete(id)
      return res.status(200).json("Category deleted successfully")
    } catch (error) {
     throw new Error(error)
    }
})
export const getCategory = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const getACategory = await ProductCategoryModel.findById(id)
      return res.status(200).json(getACategory)
    } catch (error) {
     throw new Error(error)
    }
})
export const getAllCategory = asyncHandler(async (req,res) => {
    try {
      const getAllCategory = await ProductCategoryModel.find({})
      return res.status(200).json(getAllCategory)
    } catch (error) {
     throw new Error(error)
    }
})
