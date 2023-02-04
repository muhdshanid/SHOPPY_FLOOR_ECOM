import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import ProductCard from '../home/ProductCard'
const Sort = () => {
  const [categoryShow, setCategoryShow] = useState(false)
  return (
    <div className='flex w-9/12 flex-col items-center justify-center '>
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-4 md:grid-cols-7  my-10'>
         {  [1,].map(el => (
          <>
        
          </>
         ))
         }
        </div>
        <ProductCard />
    </div>
  )
}

export default Sort