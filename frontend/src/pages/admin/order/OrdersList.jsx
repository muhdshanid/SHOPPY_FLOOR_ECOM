import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { useGetAllOrdersQuery } from '../../../store/services/orderServices';
import Wrapper from '../Wrapper';

const OrdersList = () => {
  const {data,isFetching} = useGetAllOrdersQuery()
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    if(isFetching === false){
      setOrders(data)
    }
  },[data, isFetching])
  return (
    <Wrapper>
       <div className=' flex flex-col gap-8'>
       <div className='mx-4 my-4'>
        <div className='bg-sidebar-item items-center w-[10%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-lg border border-black font-semibold text-black'>
                <p className='font-medium  text-lg text-gray-900'>Orders</p>
                </div>
        </div>
       <table className="rounded-lg mx-4">
        <thead className="w-full rounded-full bg-gray-800">
          <tr>
            <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
            name
            </th>
            <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
              quantities
            </th>
            <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
              image
            </th>
            <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
              orderStatus
            </th>
            <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
              detail
            </th>
          </tr>
        </thead>
        <tbody>
        { orders?.length > 0 ? orders?.map(order => (
           <tr className="bg-gray-900  even:bg-gray-800">
            <td className="p-4 text-sm text-gray-700">
             <div className="flex items-center justify-center">
               <h6 className="font-semibold text-lg text-white">{order?.productId?.name}</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
             <div className='flex -ml-6  items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">{order?.quantities}</h6>
             </div>
           </td>
           <td className="p-4     text-sm text-gray-700">
           <div className="flex -ml-6 items-center justify-center">
           <img
               className="w-16  h-16 object-cover rounded-lg"
               src={order?.productId?.images[0]?.url}
               alt="item"
             />
           </div>
           </td>
           <td className="p-4    text-sm text-gray-700">
           <div className='flex -ml-10  items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">{order?.orderStatus}</h6>
             </div>
           </td>
           <td className="p-4    text-sm text-gray-700">
           <Link to={`/admin/order-details/${order?._id}`} className='bg-sidebar-item items-center
            w-[75%] flex gap-2 px-4 py-1 hover:bg-gray-200  hover:text-black
             rounded-lg border border-black font-semibold text-black'>
                <p className='font-medium  text-lg text-gray-900'>Details</p>
                </Link>
           </td>
           </tr>
        )): "" }
        </tbody>
          </table>
       </div>
    </Wrapper>
  )
}

export default OrdersList