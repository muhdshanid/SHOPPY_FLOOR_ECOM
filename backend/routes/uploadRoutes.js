import express from "express";
import {
  deleteImages,
  uploadImages,
} from "../controllers/uploadControllers.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import uploadPhoto, { productImgResize } from "../middlewares/uploadImages.js";

const uploadRouter = express.Router();

 
uploadRouter.delete( 
  "/delete-img/:id",
  [authMiddleware, isAdmin],
  deleteImages
);

uploadRouter.post(
  "/upload-image",
  [authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImgResize],
  uploadImages
);


export default uploadRouter; 
