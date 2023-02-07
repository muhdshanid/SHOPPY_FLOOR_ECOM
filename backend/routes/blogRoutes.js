import express from 'express'
import { createBlog, deleteBlog, getABlog, getAllBlogs, likeBlog, updateBlog } from '../controllers/blogControllers.js'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js'

const blogRouter = express.Router()

blogRouter.post("/create-blog",[authMiddleware,isAdmin],createBlog)
blogRouter.put("/update-blog/:id",[authMiddleware,isAdmin],updateBlog)
blogRouter.get("/get-blog/:id",getABlog)
blogRouter.get("/get-allblogs",getAllBlogs)
blogRouter.delete("/delete-blog/:id",[authMiddleware,isAdmin],deleteBlog)
blogRouter.put("/like-blog/:id",authMiddleware,likeBlog)


export default blogRouter