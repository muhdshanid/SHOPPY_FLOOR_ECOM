import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import StarRating from './StarRating'

const SingleProduct = ({products}) => {
  return (
    <div className='my-4'>
          <div className='my-2 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
    {
        products.length > 0 ? products.map(product => {
            let description = product.description.slice(0,30).concat("...")
             return(
            <div className='flex flex-col gap-2 '>
            <div className=' w-full  bg-white rounded-lg relative'>
                <img src={product.images[0].url} className="bg-gray-200 object-cover h-[20rem] w-full rounded-lg" alt="product" />
                <div className='absolute hover:bg-gray-200 cursor-pointer p-2 top-2 right-2 rounded-full bg-gray-100'>
                    <AiOutlineHeart  size={20}/>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
               <div className='flex flex-col'>
               <div className='flex items-center justify-between'>
                    <h6 className='font-bold text-lg text-gray-900'>{product.name}</h6>
                    <h6 className='font-bold text-lg text-gray-900'>₹{product.price}</h6>
                </div>
                <div>
                    <p className=' font-semibold text-sm text-gray-400'>{description}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex'>
                        <StarRating rating={product.totalRatings}/>
                    </div>
                    <div>
                        <p className=' font-semibold text-lg text-gray-400'>(121)</p>
                    </div>
                </div>
               </div>
                <div>
                <button className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
                 rounded-full border border-black font-semibold text-white'>Add To Cart</button>
                </div>
            </div>
        </div> 
        )}) 
      
    : ""
    }
 
    </div>
    </div>
  )
}

export default SingleProduct