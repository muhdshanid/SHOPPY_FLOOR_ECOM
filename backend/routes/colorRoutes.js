import express from 'express'
import { createColor, deleteColor, getAllColor, getColor, updateColor } from '../controllers/colorControllers.js'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js'

const colorRouter = express.Router()

colorRouter.post("/create-color",[authMiddleware,isAdmin],createColor)
colorRouter.put("/update-color/:id",[authMiddleware,isAdmin],updateColor)
colorRouter.delete("/delete-color/:id",[authMiddleware,isAdmin],deleteColor)
colorRouter.get("/get-color/:id",getColor)
colorRouter.get("/get-allcolor",getAllColor)

export default colorRouter