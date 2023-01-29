import React from 'react'
import brand from '../../assets/images/brand-01.png'
const BrandList = () => {
  return (
    <div className='my-4 flex flex-col gap-4'>
          <div className='flex   items-center justify-between'>
        <div className='flex'>
            <h6 className='font-bold text-lg text-gray-900'>Popular Brands</h6>
        </div>
        <div>
            <button className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-full border border-black font-semibold text-white'>See All</button>
        </div>
    </div>
    <div className='my-2 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        <div className='p-6 border border-gray-200
         cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
            <div className='rounded-full flex items-center justify-center bg-white w-20 h-16'>
                <img src={brand} className=" 
                object-contain rounded-full" alt="brand" />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-lg text-gray-900'>Apple</h6>
                <p className='text-gray-400 font-semibold text-sm'>refund time upto 3 months</p>
            </div>
        </div>
        <div className='p-6 hover:border cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
            <div className='rounded-full flex items-center justify-center bg-white w-20 h-16'>
                <img src={brand} className=" 
                object-contain rounded-full" alt="brand" />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-lg text-gray-900'>Apple</h6>
                <p className='text-gray-400 font-semibold text-sm'>refund time upto 3 months</p>
            </div>
        </div>
        <div className='p-6 hover:border cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
            <div className='rounded-full flex items-center justify-center bg-white w-20 h-16'>
                <img src={brand} className=" 
                object-contain rounded-full" alt="brand" />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-lg text-gray-900'>Apple</h6>
                <p className='text-gray-400 font-semibold text-sm'>refund time upto 3 months</p>
            </div>
        </div>
        <div className='p-6 hover:border cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
            <div className='rounded-full flex items-center justify-center bg-white w-20 h-16'>
                <img src={brand} className=" 
                object-contain rounded-full" alt="brand" />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-lg text-gray-900'>Apple</h6>
                <p className='text-gray-400 font-semibold text-sm'>refund time upto 3 months</p>
            </div>
        </div>
        <div className='p-6 hover:border cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
            <div className='rounded-full flex items-center justify-center bg-white w-20 h-16'>
                <img src={brand} className=" 
                object-contain rounded-full" alt="brand" />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-lg text-gray-900'>Apple</h6>
                <p className='text-gray-400 font-semibold text-sm'>refund time upto 3 months</p>
            </div>
        </div>
        <div className='p-6 hover:border cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
            <div className='rounded-full flex items-center justify-center bg-white w-20 h-16'>
                <img src={brand} className=" 
                object-contain rounded-full" alt="brand" />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-lg text-gray-900'>Apple</h6>
                <p className='text-gray-400 font-semibold text-sm'>refund time upto 3 months</p>
            </div>
        </div>
        <div className='p-6 hover:border cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
            <div className='rounded-full flex items-center justify-center bg-white w-20 h-16'>
                <img src={brand} className=" 
                object-contain rounded-full" alt="brand" />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-lg text-gray-900'>Apple</h6>
                <p className='text-gray-400 font-semibold text-sm'>refund time upto 3 months</p>
            </div>
        </div>
        <div className='p-6 hover:border cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
            <div className='rounded-full flex items-center justify-center bg-white w-20 h-16'>
                <img src={brand} className=" 
                object-contain rounded-full" alt="brand" />
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-lg text-gray-900'>Apple</h6>
                <p className='text-gray-400 font-semibold text-sm'>refund time upto 3 months</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BrandList