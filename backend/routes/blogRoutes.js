import express from 'express'
import { createBlog, deleteBlog, dislikeBlog, getABlog, getAllBlogs, likeBlog, updateBlog, uploadImages } from '../controllers/blogControllers.js'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js'
import uploadPhoto, { blogsImgResize } from '../middlewares/uploadImages.js'

const blogRouter = express.Router()

blogRouter.post("/create-blog",[authMiddleware,isAdmin],createBlog)
blogRouter.put("/update-blog/:id",[authMiddleware,isAdmin],updateBlog)
blogRouter.get("/get-blog/:id",getABlog)
blogRouter.get("/get-allblogs",getAllBlogs)
blogRouter.delete("/delete-blog/:id",[authMiddleware,isAdmin],deleteBlog)
blogRouter.put("/like-blog",authMiddleware,likeBlog)
blogRouter.put("/dislike-blog",authMiddleware,dislikeBlog)
blogRouter.put(
    "/upload/:id",
    [authMiddleware, isAdmin, uploadPhoto.array("images", 2), blogsImgResize],
    uploadImages
  );

export default blogRouter