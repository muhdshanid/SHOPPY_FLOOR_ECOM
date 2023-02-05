import React from 'react'
import OrderProductCard from '../../components/profile/OrderProductCard'

const OrderList = () => {
  return (
    <div className='flex bg-gray-200 flex-col gap-8 p-8'>
        {
            [1,23,3,3,33,3].map(el => (
                <OrderProductCard/>   ))
        }
    </div>
  )
}

export default OrderList