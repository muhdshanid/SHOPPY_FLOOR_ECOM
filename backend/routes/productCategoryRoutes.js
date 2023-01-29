import express from 'express'
import { createCategory, deleteCategory, getAllCategory, getCategory, updateCategory } from '../controllers/productCategoryControllers.js'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js'

const productCategoryRouter = express.Router()

productCategoryRouter.post("/create-cat",[authMiddleware,isAdmin],createCategory)
productCategoryRouter.put("/update-cat/:id",[authMiddleware,isAdmin],updateCategory)
productCategoryRouter.delete("/delete-cat/:id",[authMiddleware,isAdmin],deleteCategory)
productCategoryRouter.get("/get-cat/:id",getCategory)
productCategoryRouter.get("/get-allcat",getAllCategory)

export default productCategoryRouter