import React from 'react'
import "react-filter-box/lib/react-filter-box.css"
const Filter = () => {
  return (
    <div className='w-3/12  p-6 flex flex-col gap-4 bg-white rounded-lg '>
        <div className='flex gap-8 flex-col'>
            <div className=''>
            <h6 className="font-semibold text-lg capitalize text-gray-900">Filter by</h6>
            </div>
            <select id="brands"  name='brand'
         className="bg-green-900 px-4 py-2 text-white hover:border-gray-200 border
         border-gray-800
         outline-none  w-full  rounded-lg">
   <option selected>Choose a Brand</option>
   </select>
            <select id="brands"  name='brand'
         className="bg-green-900 px-4 py-2 text-white hover:border-gray-200 border
         border-gray-800
         outline-none  w-full  rounded-lg">
   <option selected>Choose a Category</option>
   </select>
   
        </div>
    </div>
  )
}

export default Filter