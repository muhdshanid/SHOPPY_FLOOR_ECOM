import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogService = createApi({
  reducerPath: "blogs",
  tagTypes: "blogs",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/blog/",
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
      createBlog: builder.mutation({
        query: (data) => {
          return {
            url: "create-blog",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["blogs"],
      }),
      updateBlog: builder.mutation({
        query: (data) => {
          return {
            url: `update-blog/${data.id}`,
            method: "PUT",
            body: data.data,
          };
        },
        invalidatesTags: ["blogs"],
      }),
      deleteBlog: builder.mutation({
        query: (id) => {
          return {
            url: `delete-blog/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["blogs"],
      }),
      getBlogs: builder.query({
        query: (page) => {
          return {
            url: `get-allblogs`,
            method: "GET",
          };
        },
        providesTags: ["blogs"],
      }),
      getBlog: builder.query({
        query: (id) => {
          return {
            url: `get-blog/${id}`,
            method: "GET",
          };
        },
        providesTags: ["blogs"],
      }),
    };
  },
});

export const {
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useGetBlogQuery,
} = blogService;

export default blogService;
