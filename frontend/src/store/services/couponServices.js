import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const couponService = createApi({
  reducerPath: "coupon",
  tagTypes: "coupons",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/coupon/",
    prepareHeaders: (headers, { getState }) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDg4OWRmNzI1MDVhNWYxNTI4OWVlZiIsImlhdCI6MTY3NTMxOTM0NiwiZXhwIjoxNjc1NDA1NzQ2fQ.tr0CQ6VA-tGbGN_ApISdbruIsbpqlJPAGolUK6NH1YU"
      // const reducers = getState();
      // const token = reducers?.authReducer?.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      createCoupon: builder.mutation({
        query: (data) => {
          return {
            url: "create-coupon",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["coupons"],
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
  useCreateCouponMutation,useDeleteCouponMutation,useGetCouponsQuery,useGetCouponQuery,
  useUpdateCouponMutation,useApplyCouponQuery
} = couponService;

export default couponService;
