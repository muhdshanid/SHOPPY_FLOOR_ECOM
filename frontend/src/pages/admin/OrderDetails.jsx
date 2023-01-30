import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
const OrderDetails = () => {
    const productImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU";

  return (
    <Wrapper>
       <div className=' flex flex-col gap-8'>
       <div className="mx-4 my-4">
          <Link
            to={"/admin/order-list"}
            className="bg-sidebar-item items-center w-[21%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-lg border border-black font-semibold text-black">
            <BiArrowBack size={24} />
            <p className="font-medium  text-lg text-gray-900">Orders List</p>
          </Link>
        </div>
       <table className="rounded-lg mx-4">
        <thead className="w-full rounded-full bg-gray-800">
          <tr>
            <th className="py-4 px-14  uppercase text-xs font-bold text-white text-left">
            image
            </th>
            <th className="py-4 px-14  uppercase text-xs font-bold text-white text-left">
              quantities
            </th>
            <th className="py-4 px-14  uppercase text-xs font-bold text-white text-left">
              price
            </th>
            <th className="py-4 px-14  uppercase text-xs font-bold text-white text-left">
              size
            </th>
            <th className="py-4 px-14  uppercase text-xs font-bold text-white text-left">
              color
            </th>
            <th className="py-4 px-14  uppercase text-xs font-bold text-white text-left">
              total
            </th>
          </tr>
        </thead>
        <tbody>
        { [3,4].map(el => (
           <tr className="bg-gray-900  even:bg-gray-800">
            <td className="p-4  text-sm text-gray-700">
           <div className="flex items-center justify-center">
           <img
               className="w-16  h-16 object-cover rounded-lg"
               src={productImage}
               alt="item"
             />
           </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
             <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">02</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
             <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">$999</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">MD</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className='flex   items-center  justify-center'>
           <div className='bg-green-200 rounded-full w-8 h-8'>
                      </div>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg text-white">$1288</h6>
             </div>
           </td>
           </tr>
        )) }
        </tbody>
          </table>
          <div className='rounded-lg mx-4 bg-gray-800'>
            <div className='flex p-4 w-full gap-4'>
                <div className='flex w-[20%] flex-col gap-1'>
                    <h6 className='block mb-2 ml-2 text-base text-gray-400'>Customer Name</h6>
                    <h6 className='block mb-2 ml-2 font-semibold text-base text-gray-200'>Shanid</h6>
                </div>
                <div className='flex w-[20%] flex-col gap-1'>
                    <h6 className='block mb-2 ml-2 text-base text-gray-400'>Product Name</h6>
                    <h6 className='block mb-2 ml-2 font-semibold text-base text-gray-200'>Realme Xl</h6>
                </div>
                <div className='flex w-[20%] flex-col gap-1'>
                    <h6 className='block mb-2 ml-2 text-base text-gray-400'>Shipping Address</h6>
                    <h6 className='block mb-2 ml-2 font-semibold text-base text-gray-200'>Lahor ,</h6>
                    <h6 className='block mb-2 ml-2 font-semibold text-base text-gray-200'>malakath bathlahem,</h6>
                    <h6 className='block mb-2 ml-2 font-semibold text-base text-gray-200'>Lahor ,</h6>
                    <h6 className='block mb-2 ml-2 font-semibold text-base text-gray-200'>670645</h6>
                </div>
                <div className='flex w-[20%] flex-col gap-1'>
                    <h6 className='block mb-2 ml-2 text-base text-gray-400'>Ordered Date</h6>
                    <h6 className='block mb-2 ml-2 font-semibold text-base text-gray-200'>December 3rd 2022</h6>
                </div>
                <div className='flex w-[20%] flex-col gap-1'>
                    <h6 className='block mb-2 ml-2 text-base text-gray-400'>Received Date</h6>
                    <h6 className='block mb-2 ml-2 font-semibold text-base text-gray-200'>December 3rd 2022</h6>
                </div>
            </div>
          </div>
       </div>
    </Wrapper>
  )
}

export default OrderDetails