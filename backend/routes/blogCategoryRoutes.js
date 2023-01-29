import express from 'express'
import { createCategory, deleteCategory, getAllCategory, getCategory, updateCategory } from '../controllers/blogCategoryControllers.js'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js'

const blogCategoryRouter = express.Router()

blogCategoryRouter.post("/create-cat",[authMiddleware,isAdmin],createCategory)
blogCategoryRouter.put("/update-cat/:id",[authMiddleware,isAdmin],updateCategory)
blogCategoryRouter.delete("/delete-cat/:id",[authMiddleware,isAdmin],deleteCategory)
blogCategoryRouter.get("/get-cat/:id",getCategory)
blogCategoryRouter.get("/get-allcat",getAllCategory)

export default blogCategoryRouter