import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const uploadService = createApi({
  reducerPath: "upload",
  tagTypes: "uploads",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/upload/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.userToken;
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
      uploadBlogImage: builder.mutation({
        query: (data) => {
          return {
            url: "upload-image/blog",
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
  useUploadImagesMutation,useUploadProductImagesMutation,useUploadBlogImageMutation
} = uploadService;

export default uploadService;
