import React from 'react'

const OrderDetails = () => {
    const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU"

  return (
    <div className='w-8/12 p-4 border flex flex-col gap-4'>
        <div>
            <h6 className='font-bold text-xl text-gray-900 '>Review Item And Shipping</h6>
        </div>
        <div>
            <div className='flex gap-4 items-center'>
                <div className='bg-gray-200 rounded-lg p-2'>
                    <img src={productImage} className="object-cover
                    rounded-lg w-[8rem] h-[6rem]" alt="product" />
                </div>
                <div className='flex grow flex-col gap-2'>
                    <h6 className='font-bold text-2xl text-gray-900'>Airpods-Max</h6>
                    <p className='font-normal text-md text-gray-600'>Color: Pink</p>
                </div>
                <div className='flex  flex-col gap-2'>
                    <h6 className='font-semibold text-xl text-gray-900'>$999.00</h6>
                    <p className='font-normal text-md text-gray-600'>Quantity:01</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails