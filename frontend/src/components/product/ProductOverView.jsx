import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdOutlineAssignmentReturned, MdOutlineLocalShipping } from 'react-icons/md'
const ProductOverView = () => {
    const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU"

  return (
    <div className='w-12/12 flex gap-8'>
   <div className='my-2 w-full  md:grid-cols-1 lg:grid-cols-2  grid grid-cols-1 sm:grid-cols-1   gap-8'>
   <div className=''>
     <div className='bg-gray-200 rounded-lg '>
          <div className='p-4 w-full'>
              <img className='w-full rounded-lg ' src={productImage} alt="product" />
          </div>
          <div className='flex gap-4 w-12/12 bg-gray-200 rounded-lg'>
         <div className='p-4  w-3/12'>
         <img className='rounded-lg' src={productImage} alt="product" />
         </div>
         <div className='p-4 w-3/12'>
         <img className='rounded-lg' src={productImage} alt="product" />
         </div>
         <div className='p-4 w-3/12'>
         <img className='rounded-lg' src={productImage} alt="product" />
         </div>
         <div className='p-4 w-3/12'>
         <img className='rounded-lg' src={productImage} alt="product" />
         </div>
          </div>
      </div>
     </div>
      <div className=''>
          <div className='px-4 flex flex-col gap-4'>
              <div className='flex border-b border-gray-200  pb-4 flex-col gap-4'>
                  <div className='flex items-center justify-start'>
                      <h2 className='font-bold text-3xl text-gray-900'>Apple Headphone</h2>
                  </div>
                  <div className='w-[80%]'>
                      <p className='font-semibold text-sm text-gray-400'>product quanilit is awaont afaaogaohtnaoogaof fhaofofahtoaofho ahgoa</p>
                  </div>
                  <div className='flex items-center gap-2'>
          <div className='flex'>
          <AiFillStar size={20} color='green'/>
          <AiFillStar size={20} color='green'/>
          <AiFillStar size={20} color='green'/>
          <AiFillStar size={20} color='green'/>
          <AiFillStar size={20} color='green'/>
          </div>
          <div>
              <p className=' font-semibold text-lg text-gray-400'>(121)</p>
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
              <div className='flex flex-col gap-4 border-b border-gray-200 pb-4 pt-2'>
                  <div>
                      <h4 className='font-bold text-lg text-gray-900'>Choose a color</h4>
                  </div>
                  <div className='flex gap-4 items-center w-[80%]'>
                      <div className='bg-green-200 rounded-full w-8 h-8'>
                      </div>
                      <div className='bg-green-200 rounded-full w-8 h-8'>
                      </div>
                      <div className='bg-green-200 rounded-full w-8 h-8'>
                      </div>
                      <div className='bg-green-200 rounded-full w-8 h-8'>
                      </div>
                      <div className='bg-green-200 rounded-full w-8 h-8'>
                      </div>
                      <div className='bg-green-200 rounded-full w-8 h-8'>
                      </div>
                      <div className='bg-green-200 rounded-full w-8 h-8'>
                      </div>
                  </div>
              </div>
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
    </div>
  )
}

export default ProductOverView