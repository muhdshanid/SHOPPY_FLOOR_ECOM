import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { connectDB } from './config/connectDB.js'
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import { errorHandler, notFound } from './middlewares/errorHandler.js'
import productRouter from './routes/productRoutes.js'
import blogRouter from './routes/blogRoutes.js' 
import productCategoryRouter from './routes/productCategoryRoutes.js'
import blogCategoryRouter from './routes/blogCategoryRoutes.js'
import brandRouter from './routes/brandRoutes.js'
import couponRouter from './routes/couponRoutes.js'
import enqRouter from './routes/endRoutes.js'
import uploadRouter from './routes/uploadRoutes.js'
import paymentRouter from './routes/paymentRoutes.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

connectDB()
app.use(morgan('dev'))
app.use(cors())
app.post(
    "/api/webhook",
    express.json({
        verify: (req, res, buf) => {
            req.rawBody = buf.toString();
        },
    }) 
    );
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
 app.use(express.json())
 app.use("/api",paymentRouter)
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/blog",blogRouter)
app.use("/api/pro-category",productCategoryRouter)
app.use("/api/blog-category",blogCategoryRouter)
app.use("/api/brand",brandRouter)
app.use("/api/coupon",couponRouter)
app.use("/api/enquiry",enqRouter)
app.use("/api/upload",uploadRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})