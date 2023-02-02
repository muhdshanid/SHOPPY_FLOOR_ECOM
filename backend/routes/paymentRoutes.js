import express from 'express'
import { checkoutSession, paymentProcess, paymentVerify } from '../controllers/paymentControllers.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const paymentRouter = express.Router()

paymentRouter.post("/create-checkout-session",authMiddleware,paymentProcess);

paymentRouter.post('/webhook',express.raw({type: 'application/json'}),checkoutSession);
paymentRouter.get("/verify-payment/:id",authMiddleware,paymentVerify)


export default paymentRouter