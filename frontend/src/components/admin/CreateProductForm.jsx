import React, { useState } from 'react'
import { TwitterPicker } from "react-color";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CreateProductForm = () => {
    const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU"

    const [sizes] = useState([
        { name: "xsm" },
        { name: "sm" },
        { name: "md" },
        { name: "lg" },
        { name: "xl" },
        { name: "1 year" },
        { name: "2 years" },
        { name: "3 years" },
        { name: "4 years" },
        { name: "5 years" },
      ]);
  return (
    <div className='flex flex-col  gap-8'>
        <div className='flex gap-8 items-center'>
            <div className='w-[30%]'>
            <input type="text"
        className='bg-gray-800 text-white hover:border-gray-200 border
        border-gray-800
        outline-none w-full  p-4 rounded-lg' placeholder='Name' />
            </div>
            <div className='w-[30%]'>
            <input type="number"
        className='bg-gray-800 text-white hover:border-gray-200 border
        border-gray-800
        outline-none w-full  p-4 rounded-lg' placeholder='Price' />
            </div>
            <div className='w-[30%]'>
            <input type="text"
        className='bg-gray-800 text-white hover:border-gray-200 border
        border-gray-800
        outline-none  w-full p-4 rounded-lg' placeholder='Discount' />
            </div>
        </div>
        <div className='flex gap-8 items-center'>
            <div className='w-[30%]'>
            <input type="number"
        className='bg-gray-800 text-white hover:border-gray-200 border
        border-gray-800
        outline-none  w-full p-4 rounded-lg' placeholder='Stock' />
            </div>
        <div className='w-[30%] flex'>
        <select id="countries" 
        class="bg-gray-800 text-white hover:border-gray-200 border
        border-gray-800
        outline-none  w-full p-4 rounded-lg">
  <option selected>Choose a Category</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
        </div>
        </div>
        <div className='flex gap-8 items-center'>
        <div className='w-[40%]'>
        <label htmlFor="colors" className="block mb-2 ml-2 text-base capitalize text-gray-400">
                choose colors
              </label>
              <TwitterPicker onChangeComplete />
        </div>
        <div className="w-[60%]">
              <label htmlFor="sizes" className="block mb-2 ml-2 text-base capitalize text-gray-400 ">
                choose sizes
              </label>
              {sizes.length > 0 && (
                <div className="flex flex-wrap ">
                  {sizes.map((size) => (
                    <div
                    //   onClick={() => chooseSize(size)}
                      key={size.name}
                      className="border
                       border-gray-400 ml-2 text-sm px-3 py-1.5 mt-1 uppercase cursor-pointer rounded text-gray-400 "
                    >
                      {size.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
        </div>
        <div className='flex w-full gap-8 items-center'>
        <div className='flex flex-col gap-2 w-[39%]'>
        <label htmlFor="sizes" className="block mb-2 ml-2 text-base capitalize text-gray-400 ">
                colors list
              </label>
        <div className='flex gap-4 items-center '>
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
        <div className="w-[50%]">
              <label htmlFor="sizes" className="block mb-2 ml-2 text-base capitalize text-gray-400 ">
                sizes list
              </label>
              {sizes.length > 0 && (
                <div className="flex flex-wrap ">
                  {sizes.map((size) => (
                    <div
                    //   onClick={() => chooseSize(size)}
                      key={size.name}
                      className="border
                       border-gray-400
                        ml-2 text-sm px-3 py-1.5 mt-1 uppercase cursor-pointer rounded text-gray-400 "
                    >
                      {size.name}
                    </div>
                  ))}
                </div>
              )}
        </div>
        </div>
        <div className='flex gap-8 items-center'>
            <div className='flex flex-col gap-2'>
            <label htmlFor="image1" className="block mb-2 ml-2 text-base capitalize text-gray-400">
                image 1
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
            <div className='flex flex-col gap-2'>
            <label htmlFor="image1" className="block mb-2 ml-2 text-base capitalize text-gray-400">
                image 1
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
            <div className='flex flex-col gap-2'>
            <label htmlFor="image1" className="block mb-2 ml-2 text-base capitalize text-gray-400">
                image 1
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
        </div>
        <div className='flex justify-between gap-8 items-center'>
        <div className='flex items-center   w-4/12'>
         <img className='rounded-lg' src={productImage} alt="product" />
         </div>
        <div className='flex items-center  w-4/12'>
         <img className='rounded-lg' src={productImage} alt="product" />
         </div>
        <div className='flex items-center  w-4/12'>
         <img className='rounded-lg' src={productImage} alt="product" />
         </div>
        </div>
        <div className='flex gap-8 items-center'>
            <div className='flex flex-col gap-2 w-[50%]'>
            <label htmlFor="description" className="block mb-2 ml-2 text-base capitalize text-gray-400">
            Description
            </label>
            <ReactQuill theme="snow" id="description" placeholder="Description..." value onChange />
            </div>
        </div>
    </div>
  )
}

export default CreateProductForm

 