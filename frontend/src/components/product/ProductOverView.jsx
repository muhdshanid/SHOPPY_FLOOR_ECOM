import React, { useEffect, useState } from 'react'
import { MdOutlineAssignmentReturned, MdOutlineLocalShipping } from 'react-icons/md'
import { useGetProductQuery } from '../../store/services/productServices'
import StarRating from './StarRating'
const ProductOverView = ({id}) => {
    const [product, setProduct] = useState({})
    const {data,isFetching,isSuccess,isLoading,} = useGetProductQuery(id)
  useEffect(() => {
    if (isFetching === false && isSuccess && !isLoading) {
      setProduct(data);
    }
  }, [data, isFetching, isLoading, isSuccess]);
  return (
  isFetching === false && isSuccess && !isLoading && data && product !== {} ?  <div className='w-12/12 flex gap-8'> 
  <div className='my-2 w-full  md:grid-cols-1 lg:grid-cols-2  grid grid-cols-1 sm:grid-cols-1   gap-8'>
  <div className=''>
     <div className='bg-gray-200  rounded-lg '>
         { product?.images?.length > 0 ? product?.images?.map((img,index)=>
            { 
              return  index === 0 ? <div className='p-4  w-full'>
                <img className='w-full object-cover h-[29pc] rounded-lg ' src={img.url} alt="product" />
            </div> : ""
            }
         ) : "" }
          <div className='flex gap-4 w-12/12 bg-gray-200 rounded-lg'>
         {
          product?.images?.length > 0 &&  product.images.slice(1).map(img => (
                <div className='p-4  w-3/12'>
         <img className='rounded-lg object-cover h-[8rem]' src={img.url} alt="product" />
         </div>
            ))
         }
        
          </div>
      </div>
     </div>
     <div className=''>
          <div className='px-4 flex flex-col gap-4'>
              <div className='flex border-b border-gray-200  pb-4 flex-col gap-4'>
                  <div className='flex items-center justify-start'>
                      <h2 className='font-bold text-3xl text-gray-900'>{product?.name}</h2>
                  </div>
                  <div className='w-[80%]'>
                      <p className='font-semibold text-sm text-gray-400'>
                        {product?.description}</p>
                  </div>
                  <div className='flex items-center gap-2'>
          <div className='flex'>
            <StarRating rating={product?.totalRatings}/>
          </div>
          <div>
              <p className=' font-semibold text-lg text-gray-400'>{(product?.ratings?.length)}</p>
          </div>
      </div>
              </div>
              <div className='flex flex-col gap-2 border-b border-gray-200 pb-4 pt-2'>
                  <div>
                      <h2 className='font-bold text-2xl text-gray-900'>$999 or $99/Month</h2>
                  </div>
                  <div className='w-[80%]'>
                      <p className='font-semibold text-sm text-gray-400'>product quanilit is awaont afaaogaohtnaoogaof fhaofofahtoaofho ahgoa</p>
                  </div>
                  <div></div>
              </div>
             {product?.colors?.length > 0 && <div className='flex flex-col gap-4 border-b border-gray-200 pb-4 pt-2'>
                  <div>
                      <h4 className='font-bold text-lg text-gray-900'>Choose a color</h4>
                  </div>
                  <div className='flex gap-4 items-center w-[80%]'>
                    {
                        product?.colors?.map(clr => (
                            <div style={{backgroundColor:clr.color}} className=' rounded-full w-8 h-8'>
                            </div>
                        ))
                    }
                  </div>
              </div>}
              <div className='flex flex-col gap-4 border-b border-gray-200 pb-4 pt-2'>
                  <div className='flex gap-8 items-center'>
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
                      <div className='flex flex-col gap-1 '>
                          <p className='font-semibold text-sm text-gray-600'>Only <span className='
                          font-semibold text-sm text-orange-500'>12 Items</span> left!</p>
                          <p className='font-semibold text-sm text-gray-600'>Don't miss it</p>
                      </div>
                  </div>
                  <div className='flex gap-4 items-center px-1 py-4'>
                      <button className='bg-green-900 px-12 py-2 hover:bg-gray-200 hover:text-black
       rounded-full border border-black font-semibold text-white'>Buy Now</button>
                      <button className='hover:bg-green-900 px-10 py-2 bg-gray-200 text-black
       rounded-full border border-black font-semibold hover:text-white'>Add to Cart</button>
                  </div>
              </div>
              <div className='flex flex-col w-[90%] gap- border-b border-gray-200 pb-4 pt-2'>
                  <div className='border flex flex-col py-4 px-8 border-gray-200'>
                      <div className='flex gap-2'>
                          <MdOutlineLocalShipping size={20} color='green'/>
                          <p className='font-bold text-sm text-gray-900'>Free Delivery</p>
                      </div>
                      <div className='text-gray-900 underline  '>
                          <p>Enter your postal code to check availabel or not</p>
                      </div>
                  </div>
                  <div className='border flex flex-col py-4 px-8 border-gray-200'>
                      <div className='flex gap-2'>
                          <MdOutlineAssignmentReturned size={20} color='green'/>
                          <p className='font-bold text-sm text-gray-900'>Return Policy</p>
                      </div>
                      <div className='text-gray-900 underline '>
                          <p>Enter your postal code to check availabel or not</p>
                      </div>
                  </div>
              </div>
          </div>
      </div> 
   </div>
    </div> : ""
  )
}

export default ProductOverView