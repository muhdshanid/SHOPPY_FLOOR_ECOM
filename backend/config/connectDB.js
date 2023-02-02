import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_USERNAME  = process.env.MONGO_USERNAME ;
const MONGO_URI = process.env.MONGO_URI 
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database error", error.message);
  }
};












