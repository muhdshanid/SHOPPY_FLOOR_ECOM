import { configureStore } from "@reduxjs/toolkit";
import brandService from "./services/adminServices/brandServices";
import categoryService from "./services/adminServices/categoryServices";
import couponService from "./services/adminServices/couponServices";
import productServices from "./services/adminServices/productServices";
import uploadService from "./services/adminServices/uploadServices";
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
    // [orderService.reducerPath]: orderService.reducer,
    // [userOrdersService.reducerPath]: userOrdersService.reducer,
    // authReducer: authReducer,
    // globalReducer: globalReducer,
    // cartReducer: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([couponService.middleware,categoryService.middleware,productServices.middleware
        ,uploadService.middleware,brandService.middleware])
});

export default store;
