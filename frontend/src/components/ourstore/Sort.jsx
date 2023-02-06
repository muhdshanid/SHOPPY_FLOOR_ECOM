import React, { useEffect, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { useGetFilteredProductsQuery } from '../../store/services/productServices'
import ProductSkeleton from '../loading/ProductSkeleton'
import ProductCardDetails from '../product/ProductCardDetails'
const Sort = ({brand,category,setPrice,price,setRating,rating}) => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const {data,isFetching,refetch} = useGetFilteredProductsQuery({brand,category,rating,price})
  console.log(rating,price);
  useEffect(()=>{
    if(isFetching === false){
      setFilteredProducts(data)
    }
  },[data, isFetching])
  useEffect(()=>{
    refetch()
  },[brand, refetch])
  useEffect(()=>{
    refetch()
  },[category, refetch])
  return (
    <div className='flex md:w-9/12 w-full flex-col items-center justify-start '>
      <div className='bg-white flex gap-4  rounded-lg w-full py-4 px-2 md:px-8'>
       <div className='relative  w-4/12 flex items-center  md:w-2/12'>
       <select
       onChange={(e)=>setPrice(e.target.value)} value={price}
        className="appearance-none bg-gray-100 cursor-pointer
        border border-gray-400 w-full hover:border-gray-500 px-4 py-2 
        pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline"
         >
          <option selected  value={-1}>
            <h6 className='text-base text-gray-900 font-semibold'>Price</h6>
          </option>
          <option  className='text-base text-gray-900 font-semibold' value={1}>Low to High</option>
          <option className='text-base text-gray-900 font-semibold' value={-1}>High to Low</option>
        </select>
        <div className='pointer-events-none w-full justify-end pr-2 flex items-center  cursor-pointer absolute '>
          <AiFillCaretDown size={20}/>
        </div>
       </div>
       <div className='relative w-4/12 flex items-center  md:w-2/12'>
       <select
       onChange={(e)=>setRating(e.target.value)} value={rating}
        className="appearance-none bg-gray-100 cursor-pointer
        border border-gray-400 w-full hover:border-gray-500 px-4 py-2 
        pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline"
         >
          <option selected  value={5}>
            <h6 className='text-base text-gray-900 font-semibold'>Rating</h6>
          </option>
          <option className='text-base text-gray-900 capitalize font-semibold' value={1}>1 star</option>
          <option className='text-base text-gray-900 capitalize font-semibold' value={2}>2 star</option>
          <option className='text-base text-gray-900 capitalize font-semibold' value={3}>3 star</option>
          <option className='text-base text-gray-900 capitalize font-semibold' value={4}>4 star</option>
          <option className='text-base text-gray-900 capitalize font-semibold' value={5}>5 star</option>
        </select>
        <div className='pointer-events-none w-full justify-end pr-2 flex items-center  cursor-pointer absolute '>
          <AiFillCaretDown size={20}/>
        </div>
       </div>
      </div>
        <div className='grid grid-cols-1 w-full sm:w-full mt-2 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3  '>
        {
          isFetching ? 
          <>
          <ProductSkeleton/>
          <ProductSkeleton/>
          <ProductSkeleton/>
          </>
          :
          filteredProducts?.length > 0 ? filteredProducts?.map(product => (
            <ProductCardDetails  product={product}/>
          )) : ""
        }
        </div>
    </div>
  )
}

export default Sort