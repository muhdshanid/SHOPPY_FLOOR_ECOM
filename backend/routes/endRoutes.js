import express from 'express'
import { createEnquiry, deleteEnquiry, getAllEnquiry, getEnquiry, updateEnquiry } from '../controllers/enqControllers.js'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js'

const enqRouter = express.Router()

enqRouter.post("/create-enquiry",authMiddleware,createEnquiry)
enqRouter.put("/update-enquiry/:id",authMiddleware,updateEnquiry)
enqRouter.delete("/delete-enquiry/:id",authMiddleware,deleteEnquiry)
enqRouter.get("/get-enquiry/:id",getEnquiry)
enqRouter.get("/get-allenquiry",getAllEnquiry)

export default enqRouter