import React from 'react'
import { discount } from '../../utils/discount'

const OrderDetails = ({cart}) => {

  return (
    <div className='w-12/12 p-4 border flex flex-col gap-4'>
        <div className='px-4'>
            <h6 className='font-bold text-2xl text-gray-900 '>Review Item And Shipping</h6>
        </div>
        <div className='p-4 flex flex-col gap-4'>
           {cart?.length > 0  && cart?.map(item => (
            <div className='flex gap-4 items-center'>
            <div className='bg-gray-200 rounded-lg p-2'>
                <img src={item?.images[0]?.url} className="object-cover
                rounded-lg w-[8rem] h-[6rem]" alt="product" />
            </div>
            <div className='flex grow flex-col gap-6'>
                <h6 className='font-bold text-xl text-gray-900'>{item?.name}</h6>
                <div className='flex gap-4'>
                <p className='font-normal text-md text-gray-600'>Color: 
                </p>
                <div style={{backgroundColor:item?.color ? item?.color?.color : ""}} className=' rounded-full w-8 h-8'>
                       </div>
                </div>
            </div>
            <div className='flex  flex-col gap-6'>
                <h6 className='font-semibold text-xl text-gray-900'>{discount(item?.price,item?.discount)}</h6>
                <p className='font-normal text-md text-gray-600'>Quantity:  {item.quantity}</p>
            </div>
        </div>
           ))}
        </div>
    </div>
  )
}

export default OrderDetails