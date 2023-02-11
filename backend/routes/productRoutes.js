import express from "express";
import {
  askQuestion,
  createProduct,
  deleteProduct,
  getAllProducts,
  getAProduct,
  getBrandsProducts,
  getCategoryProducts,
  getFilteredProducts,
  getHeadphoneProducts,
  getPopularProducts,
  getSearchProducts,
  likeQuestion,
  likeReview,
  reviewProduct,
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
productRouter.get("/get-popular-product", getPopularProducts);
productRouter.get("/get-headphone-product", getHeadphoneProducts);
productRouter.get("/get-search-products/:keyword", getSearchProducts);
productRouter.get("/get-cat-product/:name",getCategoryProducts)
productRouter.get("/get-allproducts",[authMiddleware,isAdmin],getAllProducts)
productRouter.get("/get-brand-product/:name",getBrandsProducts)
productRouter.put("/review", authMiddleware, reviewProduct);
productRouter.put("/question", authMiddleware, askQuestion);
productRouter.put("/like-review/:id", authMiddleware, likeReview);
productRouter.put("/like-question/", authMiddleware, likeQuestion);
productRouter.get("/get-filtered-products/:category/:brand/:price/:rating",getFilteredProducts)
 

export default productRouter;
