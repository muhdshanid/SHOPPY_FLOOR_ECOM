import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderService = createApi({
  reducerPath: "order",
  tagTypes: "orders",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/order/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.userToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      createOrder: builder.mutation({
        query: (data) => {
          return {
            url: "create-order",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["orders"],
      }),
      updateCoupon: builder.mutation({
        query: (data) => {
          return {
            url: `update-coupon/${data.id}`,
            method: "PUT",
            body: data.data,
          };
        },
        invalidatesTags: ["coupons"],
      }),
      deleteCoupon: builder.mutation({
        query: (id) => {
          return {
            url: `delete-coupon/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["coupons"],
      }),
      getCoupons: builder.query({
        query: () => {
          return {
            url: `all-coupon`,
            method: "GET",
          };
        },
        providesTags: ["coupons"],
      }),
      getCoupon: builder.query({
        query: (id) => {
          return {
            url: `get-coupon/${id}`,
            method: "GET",
          };
        },
        providesTags: ["coupons"],
      }),
      applyCoupon: builder.query({
        query: (name) => {
          return {
            url: `apply-coupon/${name}`,
            method: "GET",
          };
        },
        providesTags: ["coupons"],
      }),
    };
  },
});

export const {
  useCreateOrderMutation
} = orderService;

export default orderService;
