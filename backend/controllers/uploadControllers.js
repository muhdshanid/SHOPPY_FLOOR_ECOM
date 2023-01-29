import { cloudinaryDeleteImg, cloudinaryUploadImg } from "../utils/cloudinary.js";
import asyncHandler from "express-async-handler";


export const uploadImages = asyncHandler(async (req, res) => {
    try {
      const uploader = (path) => cloudinaryUploadImg(path,"images")
      let urls = []
      const files = req.files
      for(const file of files){
        const {path} = file
        const newPath = await uploader(path)
        urls.push(newPath)
      }
      const images = urls.map(file => {return file})
      res.status(200).json(images)
    } catch (error) {
      throw new Error(error);
    }
  });

  export const deleteImages = asyncHandler(async (req, res) => {
    const {id} =req.params
    try {
      const deleteImg = cloudinaryDeleteImg(id,"images")
      return res.status(200).json({message:"Image deleted successfully"})
    } catch (error) {
      throw new Error(error);
    }
  });