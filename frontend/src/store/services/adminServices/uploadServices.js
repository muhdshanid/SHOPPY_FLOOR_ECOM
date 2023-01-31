import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const uploadService = createApi({
  reducerPath: "upload",
  tagTypes: "uploads",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/upload/",
    prepareHeaders: (headers, { getState }) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDg4OWRmNzI1MDVhNWYxNTI4OWVlZiIsImlhdCI6MTY3NTEzNTQ1NywiZXhwIjoxNjc1MjIxODU3fQ.KW9OwqXBZM0us-FhxlPVcalqY8s6G35ILlPLYwYzkww"
      // const reducers = getState();
      // const token = reducers?.authReducer?.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      uploadImages: builder.mutation({
        query: (data) => {
          return {
            url: "upload-image/cat",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["uploads"],
      }),
      uploadProductImages: builder.mutation({
        query: (data) => {
          return {
            url: "upload-image/product",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["uploads"],
      }),
      deleteProduct: builder.mutation({
        query: (id) => {
          return {
            url: `delete-product/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["products"],
      }),
    };
  },
});

export const {
  useUploadImagesMutation,useUploadProductImagesMutation
} = uploadService;

export default uploadService;