import express from "express";
import {
  addToWishlist,
  createProduct,
  deleteProduct,
  getAllProducts,
  getAProduct,
  rating,
  updateProduct,
} from "../controllers/productControllers.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const productRouter = express.Router();

productRouter.post("/create-product", [authMiddleware, isAdmin], createProduct);
productRouter.get("/get-product/:id", getAProduct);
productRouter.put(
  "/update-product/:id",
  [authMiddleware, isAdmin],
  updateProduct
);
productRouter.delete(
  "/delete-product/:id",
  [authMiddleware, isAdmin],
  deleteProduct
);
productRouter.get("/get-allproducts", getAllProducts);
productRouter.put("/add-to-wishlist", authMiddleware, addToWishlist);
productRouter.put("/rating", authMiddleware, rating);



export default productRouter;
