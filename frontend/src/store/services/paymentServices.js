import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const paymentService = createApi({
    reducerPath:"payment",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/",
        prepareHeaders: (headers, { getState }) => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI3M2MwYmZhMmU5ZTYyMDcxM2Q2MSIsImlhdCI6MTY3NTQxMzk5OSwiZXhwIjoxNjc2MDE4Nzk5fQ.I2zxAPsbB93Tz5nAcJgKC9s6kV5g3n5uEZ456eyZgVc"
            // const reducers = getState();
            // const token = reducers?.authReducer?.userToken;
            headers.set("authorization", token ? `Bearer ${token}` : "");
            return headers;
          },
    }),
    endpoints:(builder) => {
        return {
            sendPayment: builder.mutation({ 
                query:(cart) => {
                    return {
                        url:"create-checkout-session",
                        method:"POST",
                        body:cart
                    }
                }
            }),
            verifyPayment:builder.query({
                query:id => {
                    return {
                        url:`verify-payment/${id}`,
                        method:'GET'
                    }
                }
            })
        }}
})

export const {useSendPaymentMutation,useVerifyPaymentQuery} = paymentService

export default paymentService