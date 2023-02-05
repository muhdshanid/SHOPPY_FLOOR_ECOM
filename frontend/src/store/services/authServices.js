import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authService = createApi({
    reducerPath:"auth",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/user/"
    }),
    endpoints:(builder) => {
        return {
            adminLogin: builder.mutation({
                query:(loginData) => {
                    return {
                        url:"admin-login",
                        method:"POST",
                        body:loginData
                    }
                }
            }),
            addToWishlist: builder.mutation({
                query: (data) => {
                  return {
                    url: `add-to-wishlist`,
                    method: "PUT",
                    body: data,
                  };
                },
              }),
            userRegister: builder.mutation({
                query:(data) => {
                    return {
                        url:"register",
                        method:"POST",
                        body:data
                    }
                }
            }),
            userLogin: builder.mutation({
                query:(data) => {
                    return {
                        url:"login",
                        method:"POST",
                        body:data
                    }
                }
            }),
        }
    }
})
export const {useAdminLoginMutation,useUserRegisterMutation,useUserLoginMutation,
useAddToWishlistMutation} = authService

export default authService