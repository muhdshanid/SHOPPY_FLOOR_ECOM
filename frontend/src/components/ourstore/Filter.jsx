import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import ProductCard from '../../components/home/ProductCard'
const Filter = () => {
  const [categoryShow, setCategoryShow] = useState(false)
  return (
    <div className='flex w-12/12 flex-col items-center justify-center '>
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-4 md:grid-cols-7  my-10'>
         {  [1,22,2,22,2,22,2].map(el => (
           <div className='px-4 py-2 flex rounded-full bg-gray-200'>
           <p className='font-bold flex text-md text-gray-700'>Category</p>
           {!categoryShow ? <MdKeyboardArrowDown onClick={()=>setCategoryShow(prev => !prev)} size={20} className="mt-2 
    cursor-pointer"/> :
   <MdKeyboardArrowUp onClick={()=>setCategoryShow(prev => !prev)} size={20} className="mt-2 
    cursor-pointer"/>}
       </div>
         ))
         }
        </div>
        <ProductCard caption={"HI"}/>
    </div>
  )
}

export default Filter