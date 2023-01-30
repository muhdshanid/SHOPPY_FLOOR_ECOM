import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import CartTable from '../../components/cart/CartTable'

const Cart = () => {
  return (
    <div>
         <BreadCrumbs title={"Cart"} />
    <div className='w-12/12  flex  px-4
     lg:px-16 md:px-14 sm:px-8 bg-gray-100'>
        <CartTable/>
    </div>
    </div>
  )
}

export default Cart