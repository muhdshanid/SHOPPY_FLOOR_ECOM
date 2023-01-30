import React from 'react'

const DeliveryInfo = () => {
  return (
    <div className='w-12/12 my-4 p-4 border flex flex-col gap-4'>
    <div className='flex px-4 items-center justify-between '>
        <h6 className='font-bold text-2xl text-gray-900 '>Delivery Information</h6>
        <button className='hover:bg-green-900 px-4 py-2 bg-gray-200 text-black
             rounded-full border border-b-gray-200 hover:border-black font-semibold hover:text-white'>Edit</button>
    </div>
    <div className=' flex p-4 flex-col gap-2'>
    <h6 className='font-semibold text-lg text-gray-900'>Shanid Shanid</h6>
    <p className='font-normal text-md text-gray-500 w-[60%]'>
        4144 Parker Rd. alleert new mexicon 12324faofjasdjfffffffffffffffffffffffffffffffffffffffffffffffffffff
    </p>
    <p className='font-normal text-md text-gray-500 '>+0199999838389292</p>
    <p className='font-normal text-md text-gray-500 '>shani@gmail.com</p>
    </div>
</div>
  )
}

export default DeliveryInfo