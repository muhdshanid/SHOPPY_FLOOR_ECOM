import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const brandService = createApi({
  reducerPath: "brand",
  tagTypes: "brands",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/brand/",
    prepareHeaders: (headers, { getState }) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDg4OWRmNzI1MDVhNWYxNTI4OWVlZiIsImlhdCI6MTY3NTIyNTMzNSwiZXhwIjoxNjc1MzExNzM1fQ.2uV4AM8RUZXjLv9XfEv_HJudZ0VzMEGecekMm6E_DQ0"
      // const reducers = getState();
      // const token = reducers?.authReducer?.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      createBrand: builder.mutation({
        query: (data) => {
          return {
            url: "create-brand",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["brands"],
      }),
      updateBrand: builder.mutation({
        query: (data) => {
          return {
            url: `update-brand/${data.id}`,
            method: "PUT",
            body: data.data,
          };
        },
        invalidatesTags: ["brands"],
      }),
      deleteBrand: builder.mutation({
        query: (id) => {
          return {
            url: `delete-brand/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["brands"],
      }),
      getBrands: builder.query({
        query: (page) => {
          return {
            url: `get-allbrand`,
            method: "GET",
          };
        },
        providesTags: ["brands"],
      }),
      getBrand: builder.query({
        query: (id) => {
          return {
            url: `get-brand/${id}`,
            method: "GET",
          };
        },
        providesTags: ["brands"],
      }),
    };
  },
});

export const {
  useCreateBrandMutation,useDeleteBrandMutation,useGetBrandsQuery,useGetBrandQuery,
  useUpdateBrandMutation
} = brandService;

export default brandService;
