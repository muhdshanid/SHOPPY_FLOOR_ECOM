import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productServices = createApi({
  reducerPath: "products",
  tagTypes: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/product/",
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
      createProduct: builder.mutation({
        query: (data) => {
          return {
            url: "create-product",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["products"],
      }),
      updateProduct: builder.mutation({
        query: (data) => {
          return {
            url: `update-product/${data.id}`,
            method: "PUT",
            body: data.data,
          };
        },
        invalidatesTags: ["products"],
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
      getProducts: builder.query({
        query: (page) => {
          return {
            url: `get-allproducts`,
            method: "GET",
          };
        },
        providesTags: ["products"],
      }),
      getProduct: builder.query({
        query: (id) => {
          return {
            url: `get-product/${id}`,
            method: "GET",
          };
        },
        providesTags: ["products"],
      }),
    };
  },
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
} = productServices;

export default productServices;