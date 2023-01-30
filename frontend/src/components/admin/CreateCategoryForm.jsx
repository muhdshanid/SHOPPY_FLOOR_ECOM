import React from 'react'

const CreateCategoryForm = () => {
    const productImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU";

  return (
    <div className='flex flex-col  gap-8'>
    <div className='flex gap-8 items-center'>
        <div className='w-[30%]'>
        <input type="text"
    className='bg-gray-800 text-white hover:border-gray-200 border
    border-gray-800
    outline-none w-full  p-4 rounded-lg' placeholder='Name' />
        </div>    
    </div>
    <div className='flex justify-between gap-8 items-center'>
    <div className='flex flex-col gap-2'>
        <label htmlFor="image1" className="block mb-2 ml-2 text-base capitalize text-gray-400">
           select image 
          </label>
          <input
            onChange
            className="block file:py-2.5 file:px-4 file:rounded 
            file:cursor-pointer text-white file:bg-orange-300 file:text-black file:text-sm
            file:font-medium file:mr-4"
            type="file"
            name="image1"
            id="image1"
          />
        </div>
    <div className='flex items-center   w-4/12'>
     <img className='rounded-lg' src={productImage} alt="product" />
     </div>
    </div>
</div>
  )
}

export default CreateCategoryForm