import asyncHandler from 'express-async-handler'
import ColorModel from '../models/ColorModel.js'
import { validateMongoDBID } from '../utils/validateMongoDBID.js'

export const createColor = asyncHandler(async (req,res) => {
    try {
      const newColor = await ColorModel.create(req.body)
      return res.status(200).json(newColor)
    } catch (error) {
     throw new Error(error)
    }
})
export const updateColor = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const updateColor = await ColorModel.findByIdAndUpdate(id,req.body,{new:true})
      return res.status(200).json(updateColor)
    } catch (error) {
     throw new Error(error)
    }
})
export const deleteColor = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const deleteColor = await ColorModel.findByIdAndDelete(id)
      return res.status(200).json("Color deleted successfully")
    } catch (error) {
     throw new Error(error)
    }
})
export const getColor = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const getAColor = await ColorModel.findById(id)
      return res.status(200).json(getAColor)
    } catch (error) {
     throw new Error(error)
    }
})
export const getAllColor = asyncHandler(async (req,res) => {
    try {
      const getAllColor = await ColorModel.find({})
      return res.status(200).json(getAllColor)
    } catch (error) {
     throw new Error(error)
    }
})
