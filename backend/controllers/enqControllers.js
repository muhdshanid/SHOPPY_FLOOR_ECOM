import asyncHandler from 'express-async-handler'
import EnqModel from '../models/EnqModel.js'
import { validateMongoDBID } from '../utils/validateMongoDBID.js'

export const createEnquiry = asyncHandler(async (req,res) => {
    try {
      const newEnquiry = await EnqModel.create(req.body)
      return res.status(200).json(newEnquiry)
    } catch (error) {
     throw new Error(error) 
    }
})
export const updateEnquiry = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const updateEnquiry = await EnqModel.findByIdAndUpdate(id,req.body,{new:true})
      return res.status(200).json(updateEnquiry)
    } catch (error) {
     throw new Error(error)
    }
})
export const deleteEnquiry = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const deleteEnquiry = await EnqModel.findByIdAndDelete(id)
      return res.status(200).json("Enquiry deleted successfully")
    } catch (error) {
     throw new Error(error)
    }
})
export const getEnquiry = asyncHandler(async (req,res) => {
    try {
      const {id} = req.params
      validateMongoDBID(id)
      const getAEnquiry = await EnqModel.findById(id)
      return res.status(200).json(getAEnquiry)
    } catch (error) {
     throw new Error(error)
    }
})
export const getAllEnquiry = asyncHandler(async (req,res) => {
    try {
      const getAllEnquiry = await EnqModel.find({})
      return res.status(200).json(getAllEnquiry)
    } catch (error) {
     throw new Error(error)
    }
})
 