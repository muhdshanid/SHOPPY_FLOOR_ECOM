import asyncHandler from 'express-async-handler'
import BlogModel from '../models/BlogModel.js'
import { cloudinaryUploadImg } from '../utils/cloudinary.js'
import { validateMongoDBID } from '../utils/validateMongoDBID.js'

export const createBlog = asyncHandler(async (req,res) => {
    try {
     const newBlog = await BlogModel.create(req.body)
     return res.status(200).json(newBlog)
    } catch (error) {
     throw new Error(error)
    }
})
export const updateBlog = asyncHandler(async (req,res) => {
    try {
    const {id} = req.params
    validateMongoDBID(id)
    const updateBlog = await BlogModel.findByIdAndUpdate(id,req.body,{new:true})
    return res.status(200).json(updateBlog)
    } catch (error) {
     throw new Error(error)
    }
})
export const getABlog = asyncHandler(async (req,res) => {
    try {
    const {id} = req.params
    validateMongoDBID(id)
    const getBlog = await BlogModel.findById(id).populate("likes","-password").populate("dislikes","-password")
    await BlogModel.findByIdAndUpdate(id,{
        $inc:{numViews:1}
    },{new:true})
    return res.status(200).json(getBlog)
    } catch (error) {
     throw new Error(error)
    }
})

export const getAllBlogs = asyncHandler(async (req,res) => {
    try {
        const allBlogs = await BlogModel.find({})
        return res.status(200).json(allBlogs)
    } catch (error) {
     throw new Error(error)
    }
})

export const deleteBlog = asyncHandler(async (req,res) => {
    try {
    const {id} = req.params
    validateMongoDBID(id)
    const deleteBlog = await BlogModel.findByIdAndDelete(id)
    return res.status(200).json("Blog deleted successfully")
    } catch (error) {
     throw new Error(error)
    }
})
export const likeBlog = asyncHandler(async (req,res) => {
    try {
     const {blogId} = req.body
     validateMongoDBID(blogId)
     // find the blog which you want to like
     const blog = await BlogModel.findById(blogId)
     // find login user
     const loginUserId = req?.user?._id 
     // if the user is liked the post
     const isLiked = blog?.isLiked
     // if the user is disliked the post
     const alreadyDisliked = blog?.dislikes.find(userId => userId.toString() === loginUserId.toString())
     if(alreadyDisliked){
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $pull:{dislikes:loginUserId},
            isDisliked:false
        },{new:true})
     }
     if(isLiked){
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $pull:{likes:loginUserId},
            isLiked:false
        },{new:true})
        return res.status(200).json(blog)
     }else{
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $push:{likes:loginUserId},
            isLiked:true
        },{new:true})
        return res.status(200).json(blog)
     }
    } catch (error) {
     throw new Error(error)
    }
})
export const dislikeBlog = asyncHandler(async (req,res) => {
    try {
     const {blogId} = req.body
     validateMongoDBID(blogId)
     // find the blog which you want to like
     const blog = await BlogModel.findById(blogId)
     // find login user
     const loginUserId = req?.user?._id 
     // if the user is liked the post
     const isDisliked = blog?.isDisliked
     // if the user is disliked the post
     const alreadyLiked = blog?.likes.find(userId => userId.toString() === loginUserId.toString())
     if(alreadyLiked){
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $pull:{likes:loginUserId},
            isLiked:false
        },{new:true})
     }
     if(isDisliked){
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $pull:{dislikes:loginUserId},
            isDisliked:false
        },{new:true})
        return res.status(200).json(blog)
     }else{
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $push:{dislikes:loginUserId},
            isDisliked:true
        },{new:true})
        return res.status(200).json(blog)
     }
    } catch (error) {
     throw new Error(error)
    }
})

export const uploadImages = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongoDBID(id)
    try {
      const uploader = (path) => cloudinaryUploadImg(path,"images")
      let urls = [] 
      const files = req.files
      for(const file of files){
        const {path} = file
        const newPath = await uploader(path)
        urls.push(newPath)
      }
      const findBlog = await BlogModel.findByIdAndUpdate(id,{
        images:urls.map(file => {return file})
      },{new:true})
      res.status(200).json(findBlog)
    } catch (error) {
      throw new Error(error);
    }
  });
