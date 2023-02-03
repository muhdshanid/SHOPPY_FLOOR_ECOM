import React from 'react'
import Stepper from '../stepper/Stepper'

const OrderProductCard = () => {
    const product = "https://res.cloudinary.com/dlrujkhvx/image/upload/v1675319563/teugbgeyz7uhzbgukmbp.jpg"
  return (
    <div className='p-4 bg-white w-6/12 sm:w-8/12 md:w-6/12 rounded-lg border flex flex-col gap-4'>
    <div className='p-4 flex flex-col gap-4'>
       <div className='flex gap-4 items-center'>
 <div className='bg-gray-200 rounded-lg p-2'>
           <img src={product} className="object-cover
           rounded-lg w-[8rem] h-[6rem]" alt="product" />
       </div>
       <div className='flex grow flex-col gap-6'>
           <h6 className='font-bold text-xl text-gray-900'>gafjakfjakfafjaf</h6>
           <div className='flex gap-4'>
           <p className='font-normal text-md text-gray-600'>Color: 
           </p>
           <div style={{backgroundColor:"white"}} className=' rounded-full w-8 h-8'>
                  </div>
           </div>
       </div>
       <div className='flex  flex-col gap-6'>
           <h6h6 className='font-semibold text-xl text-gray-900'>19999</h6h6>
           <p className='font-normal text-md text-gray-600'>Quantity: 
            1</p>
       </div>
   </div>
    </div>
    <Stepper/>
</div>
    // <div className='p-4 bg-white  w-6/12 rounded-lg'>
    //     <div className='grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3'>
    //         <div className=''>
    //             <img className='w-[100px] object-contain h-[100px] rounded-lg' src={product} alt="product" />
    //         </div>
    //         <div className='flex flex-col gap-2'>
    //         <h6 className='font-semibold text-lg text-gray-900 capitalize'>apple headphone asf</h6>
    //         <h6 className='font-semibold text-lg text-gray-900 capitalize'>4999</h6>
    //         <div className='flex gap-2'>
    //         <p className='font-semibold  text-lg text-gray-400'>color:blue</p>
    //         <p className='font-semibold  text-lg text-gray-400'>size:blue</p>
    //         </div>
    //         </div>
    //         <div>
    //         <h6 className='font-semibold text-lg text-gray-900 capitalize'>delivered at 3/33/3333</h6>
    //         </div>
    //     </div>
    // </div>
  )
}

export default OrderProductCard