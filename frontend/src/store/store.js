import { configureStore } from "@reduxjs/toolkit";
import blogService from "./services/blogServices";
import brandService from "./services/brandServices";
import categoryService from "./services/categoryServices";
import couponService from "./services/couponServices";
import productServices from "./services/productServices";
import uploadService from "./services/uploadServices";
// import authReducer from "./reducers/authReducer";
// import cartReducer from "./reducers/cartReducer";
// import globalReducer from "./reducers/globalReducer";
// import authService from "./services/authServices";
// import categoryService from "./services/categoryService";
// import homeProductsService from "./services/homeProductsServices";
// import orderService from "./services/orderService";
// import paymentService from "./services/paymentServices";
// import productServices from "./services/productService";
// import userOrdersService from "./services/userOrdersService";

const store = configureStore({
  reducer: {
    [categoryService.reducerPath]: categoryService.reducer,
    [uploadService.reducerPath]: uploadService.reducer,
    [brandService.reducerPath]: brandService.reducer,
    [productServices.reducerPath]: productServices.reducer,
    [couponService.reducerPath]: couponService.reducer,
    [blogService.reducerPath]: blogService.reducer,
    // [userOrdersService.reducerPath]: userOrdersService.reducer,
    // authReducer: authReducer,
    // globalReducer: globalReducer,
    // cartReducer: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([blogService.middleware,couponService.middleware,categoryService.middleware,productServices.middleware
        ,uploadService.middleware,brandService.middleware])
});

export default store;
