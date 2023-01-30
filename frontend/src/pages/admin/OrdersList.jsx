import React from 'react'

import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

const OrdersList = () => {
    const productImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU";

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
            <th className="py-4 px-6  uppercase text-xs font-bold text-white text-left">
            name
            </th>
            <th className="py-4 px-6  uppercase text-xs font-bold text-white text-left">
              quantities
            </th>
            <th className="py-4 px-6  uppercase text-xs font-bold text-white text-left">
              image
            </th>
            <th className="py-4 px-6  uppercase text-xs font-bold text-white text-left">
              received
            </th>
            <th className="py-4 px-6  uppercase text-xs font-bold text-white text-left">
              delivered
            </th>
            <th className="py-4 px-6  uppercase text-xs font-bold text-white text-left">
              detail
            </th>
          </tr>
        </thead>
        <tbody>
        { [1,2,3,4].map(el => (
           <tr className="bg-gray-900  even:bg-gray-800">
            <td className="p-4 text-sm text-gray-700">
             <div className="flex items-center justify-center">
               <h6 className="font-semibold text-lg text-white">Apple Headphones</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
             <div className='flex -ml-6  items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">02</h6>
             </div>
           </td>
           <td className="p-4     text-sm text-gray-700">
           <div className="flex -ml-6 items-center justify-center">
           <img
               className="w-16  h-16 object-cover rounded-lg"
               src={productImage}
               alt="item"
             />
           </div>
           </td>
           <td className="p-4    text-sm text-gray-700">
           <div className='flex -ml-10  items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">Yes</h6>
             </div>
           </td>
           <td className="p-4    text-sm text-gray-700">
           <div className='flex  -ml-10 items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">No</h6>
             </div>
           </td>
           <td className="p-4    text-sm text-gray-700">
           <Link to={"/admin/order-details"} className='bg-sidebar-item items-center
            w-[75%] flex gap-2 px-4 py-1 hover:bg-gray-200  hover:text-black
             rounded-lg border border-black font-semibold text-black'>
                <p className='font-medium  text-lg text-gray-900'>Details</p>
                </Link>
           </td>
           </tr>
        )) }
        </tbody>
          </table>
       </div>
    </Wrapper>
  )
}

export default OrdersList