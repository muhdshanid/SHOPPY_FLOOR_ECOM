import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_USERNAME  = process.env.MONGO_USERNAME ;
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASS}@cluster0.oszojok.mongodb.net/?retryWrites=true&w=majority`;
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database error", error.message);
  }
};












