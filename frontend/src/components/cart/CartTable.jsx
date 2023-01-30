import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CartTable = () => {
  const productImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU";

  return (
    <div className="w-full flex flex-col bg-gray-200 rounded-lg">
      <table className="rounded-lg">
        <thead className="w-full rounded-lg bg-green-900">
          <tr>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              image
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              name
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              color
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              size
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              price
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              quantities
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              total
            </th>
            <th className="py-4 px-12  uppercase text-xs font-bold text-white text-left">
              delete
            </th>
          </tr>
        </thead>
        <tbody>
        { [1,2,3,4].map(el => (
           <tr className="even:bg-gray-100 bg-gray-50">
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
             <div className="flex items-center justify-center">
               <h6 className="font-semibold text-lg text-gray-900">Apple Headphones</h6>
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
               <h6 className="font-semibold text-lg text-gray-900">SM</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg text-gray-900">$999</h6>
             </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className=' overflow-hidden flex items-center
                       justify-between rounded-full bg-gray-200'>
                          <div className='py-2 px-6  cursor-pointer hover:bg-gray-300'>
                          <h6 className='text-gray-900 text-3xl'>-</h6>
                          </div>
                          <div className='py-3 px-6  cursor-pointer hover:bg-gray-300'>
                          <h6 className='text-gray-900 text-lg'>2</h6>
                          </div>
                          <div className='py-2 px-6  cursor-pointer hover:bg-gray-300'>
                          <h6 className='text-gray-900 text-2xl'>+</h6>
                          </div>                                
                      </div>
           </td>
           <td className="p-4 text-sm text-gray-700">
           <div className='flex   items-center  justify-center'>
               <h6 className="font-semibold text-lg text-gray-900">$2999</h6>
             </div>
           </td>
           <td>
             <div className="flex items-center justify-center">
               <AiFillDelete size={20} color="red"/>
             </div>
           </td>
           </tr>
        )) }
        </tbody>
      </table>
      <div className="w-full p-4 bg-gray-200 rounded-lg">
        <div className="flex justify-end">
          <div className="flex items-center gap-4">
            <div>
            <h6 className="font-semibold text-lg text-gray-900">$999</h6>
            </div>
            <div>
            <button className='bg-green-900 px-10 py-2 hover:bg-gray-200 hover:text-black
       rounded-full border border-black font-semibold text-white'>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
