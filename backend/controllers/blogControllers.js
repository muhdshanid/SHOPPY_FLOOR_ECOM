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

export const likeBlog = asyncHandler(async (req, res) => {
    try {
      const { _id } = req.user;
      const { id } = req.params;
      const {button} = req.body
      const blog = await BlogModel.findById(id)
      if (blog.likes.includes(_id)) {
        if(button === "dislike"){
          const dislike = await BlogModel.findByIdAndUpdate(id,{ $push: { dislikes: _id } },{new:true});
          const liked = await BlogModel.findByIdAndUpdate(id,{ $pull: { likes: _id } },{new:true});
          return res.status(200).json(liked);
        }else{
          const liked = await BlogModel.findByIdAndUpdate(id,{ $pull: { likes: _id } },{new:true});
          return res.status(200).json(liked);
        }
      } else if(blog.dislikes.includes(_id)){
        if(button === "like"){
          const dislike = await BlogModel.findByIdAndUpdate(id,{ $pull: { dislikes: _id } },{new:true});
          const liked = await BlogModel.findByIdAndUpdate(id,{ $push: { likes: _id } },{new:true});
          return res.status(200).json(liked);
        }else{
          const dislike = await BlogModel.findByIdAndUpdate(id,{ $pull: { dislikes: _id } },{new:true});
          return res.status(200).json(dislike);
  
        }
      }
        else if(!blog.likes.includes(_id)){
          if(button === "like"){
            const liked = await BlogModel.findByIdAndUpdate(id,{ $push: { likes: _id } },{new:true});
            return res.status(200).json(liked);
          }else{
            const disliked = await BlogModel.findByIdAndUpdate(id,{ $push: { dislikes: _id } },{new:true});
            return res.status(200).json(disliked);
          }
        }
    } catch (error) {
      throw new Error(error);
    }
  });
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
