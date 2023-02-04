import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productServices = createApi({
  reducerPath: "products",
  tagTypes: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/product/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.userToken;
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
      addToWishlist: builder.mutation({
        query: (data) => {
          return {
            url: `add-to-wishlist`,
            method: "PUT",
            body: data,
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
      getCatProducts: builder.query({
        query: (name) => {
          return {
            url: `get-cat-product/${name}`,
            method: "GET",
          };
        },
        providesTags: ["products"],
      }),
      getBrandProducts: builder.query({
        query: (name) => {
          return {
            url: `get-brand-product/${name}`,
            method: "GET",
          };
        },
        providesTags: ["products"],
      }),
      getPopularProducts: builder.query({
        query: () => {
          return {
            url: `get-popular-product`,
            method: "GET",
          };
        },
        providesTags: ["products"],
      }),
    };
  },
});

export const {
  useAddToWishlistMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useGetCatProductsQuery,
  useGetBrandProductsQuery,
  useGetPopularProductsQuery
} = productServices;

export default productServices;
