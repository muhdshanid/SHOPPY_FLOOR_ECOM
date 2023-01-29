import express from 'express'
import { createBrand, deleteBrand, getAllBrand, getBrand, updateBrand } from '../controllers/brandControllers.js'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js'

const brandRouter = express.Router()

brandRouter.post("/create-brand",[authMiddleware,isAdmin],createBrand)
brandRouter.put("/update-brand/:id",[authMiddleware,isAdmin],updateBrand)
brandRouter.delete("/delete-brand/:id",[authMiddleware,isAdmin],deleteBrand)
brandRouter.get("/get-brand/:id",getBrand)
brandRouter.get("/get-allbrand",getAllBrand)

export default brandRouter