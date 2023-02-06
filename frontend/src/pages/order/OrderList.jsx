import React, { useEffect, useState } from 'react'
import OrderProductCard from '../../components/profile/OrderProductCard'
import { useGetUserOrdersQuery } from '../../store/services/orderServices'

const OrderList = () => {
  const [orders, setOrders] = useState([])
  const {data,isFetching} = useGetUserOrdersQuery()
  useEffect(()=>{
    setOrders(data)
  },[data, isFetching])
  console.log(data);
  return (
   isFetching ? ""
   : 
   <div className='grid grid-cols-1 md:grid-cols-2  bg-gray-200   gap-8 p-8'>
   {
       orders?.length > 0 ? orders.map(order => (
           <OrderProductCard order={order}/>   ))
   : ""}
</div>
  )
}

export default OrderList