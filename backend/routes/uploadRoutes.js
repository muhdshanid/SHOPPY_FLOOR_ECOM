import express from "express";
import {
  deleteImages,
  uploadImages,
} from "../controllers/uploadControllers.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import uploadPhoto, { blogsImgResize, categoryImgResize, productImgResize } from "../middlewares/uploadImages.js";

const uploadRouter = express.Router();
 
  
uploadRouter.delete( 
  "/delete-img/:id",
  [authMiddleware, isAdmin],
  deleteImages
);

uploadRouter.post(
  "/upload-image/cat",
  [authMiddleware, isAdmin, uploadPhoto.array("images", 10), categoryImgResize],
  uploadImages
);
uploadRouter.post(
  "/upload-image/product",
  [authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImgResize],
  uploadImages
);
uploadRouter.post(
  "/upload-image/blog",
  [authMiddleware, isAdmin, uploadPhoto.array("images", 10), blogsImgResize],
  uploadImages
);


export default uploadRouter; 
