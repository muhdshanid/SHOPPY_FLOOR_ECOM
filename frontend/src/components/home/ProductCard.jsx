import React from 'react'
import { Link } from 'react-router-dom'
import ProductSkeleton from '../loading/ProductSkeleton'
import ProductCardDetails from '../product/ProductCardDetails'
const ProductCard = ({caption,page,products,link,isFetching}) => {
  return (
    <div className='my-4 flex flex-col gap-4'>
    <div className='flex  items-center justify-between'>
        <div className='flex'>
            <h6 className='font-semibold text-2xl text-gray-900'>{caption}</h6>
        </div>
        {page !== "category" && <div>
            <Link to={`${link}`} className='
            transition ease-in-out delay-150
             hover:-translate-y-1 hover:scale-110 
             duration-500 
            bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-full border border-black font-semibold text-white'>See All</Link>
        </div>}
    </div>
    <div className='my-2 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
    {
      isFetching ? 
      <>
      <ProductSkeleton/>
      <ProductSkeleton/>
      <ProductSkeleton/>
      <ProductSkeleton/>
      </>
       :
        products?.length > 0 ? products.map(product => {
            let description = product.description.slice(0,30).concat("...")
             return(
           <ProductCardDetails product={product} description={description}/>
        )}) 
      
    : ""
    }
 
    </div>
    </div>
  )
}

export default ProductCard