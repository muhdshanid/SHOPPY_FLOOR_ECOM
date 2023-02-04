import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import authService from "./services/authServices";
import blogService from "./services/blogServices";
import brandService from "./services/brandServices";
import categoryService from "./services/categoryServices";
import couponService from "./services/couponServices";
import paymentService from "./services/paymentServices";
import productServices from "./services/productServices";
import uploadService from "./services/uploadServices";

const store = configureStore({
  reducer: {
    [categoryService.reducerPath]: categoryService.reducer,
    [uploadService.reducerPath]: uploadService.reducer,
    [brandService.reducerPath]: brandService.reducer,
    [productServices.reducerPath]: productServices.reducer,
    [couponService.reducerPath]: couponService.reducer,
    [blogService.reducerPath]: blogService.reducer,
    [paymentService.reducerPath]: paymentService.reducer,
    [authService.reducerPath]: authService.reducer,
    cartReducer: cartReducer,
    authReducer: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authService.middleware,
      paymentService.middleware,
      blogService.middleware,
      couponService.middleware,
      categoryService.middleware,
      productServices.middleware,
      uploadService.middleware,
      brandService.middleware,
    ]),
});

export default store;
