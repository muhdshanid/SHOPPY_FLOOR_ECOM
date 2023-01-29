import React from 'react'

const ProductSpecifications = () => {
  return (
    <div className='w-12/12 my-8 flex flex-col gap-8'>
       <div className='flex   items-center justify-between'>
      <div className='flex'>
            <h6 className='font-bold text-2xl text-gray-900'>Apple Airpods Max Wireless full specifications</h6>
        </div>
        </div>
        <div className='my-2 w-full md:grid-cols-1 lg:grid-cols-2  grid grid-cols-1 sm:grid-cols-1   gap-8'>
        <div className=''>
         <div className='bg-gray-200 flex flex-col gap-2 p-4 rounded-lg '>
          <div>
            <h6 className=' font-bold text-lg text-gray-900'>General</h6>
          </div>
          <div className='flex flex-col'>
          {
            [1,2,3,4,5].map(it => (
              <>
              <div className='flex gap-8 bg-white rounded-lg px-4 py-2'>
              <h6 className=' font-semibold text-md text-gray-900'>Brand</h6>
              <h6 className=' font-semibold text-md text-gray-500'>Apple</h6>
             </div>
             <div className='flex gap-8 bg-gray-200 rounded-lg px-4 py-2'>
              <h6 className=' font-semibold text-md text-gray-900'>Brand</h6>
              <h6 className=' font-semibold text-md text-gray-500'>Apple</h6>
             </div>
              </>
            ))
          }
          </div>
          </div>
         </div>
         <div className=''>
         <div className='bg-gray-200 flex flex-col gap-2 p-4 rounded-lg '>
          <div>
            <h6 className=' font-bold text-lg text-gray-900'>Product Details</h6>
          </div>
          <div className='flex flex-col'>
          {
            [1,2,3,4,5].map(it => (
              <>
              <div className='flex gap-8 bg-white rounded-lg px-4 py-2'>
              <h6 className=' font-semibold text-md text-gray-900'>Brand</h6>
              <h6 className=' font-semibold text-md text-gray-500'>Apple</h6>
             </div>
             <div className='flex gap-8 bg-gray-200 rounded-lg px-4 py-2'>
              <h6 className=' font-semibold text-md text-gray-900'>Brand</h6>
              <h6 className=' font-semibold text-md text-gray-500'>Apple</h6>
             </div>
              </>
            ))
          }
          </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default ProductSpecifications