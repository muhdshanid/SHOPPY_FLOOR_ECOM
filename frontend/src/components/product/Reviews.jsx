import React from 'react'
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import {  BiImageAdd } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'
import { SlEmotsmile } from 'react-icons/sl'
const Reviews = () => {
    const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU"

  return (
    <div className='w-12/12 my-4 flex flex-col gap-8'>
         <div className='flex   items-center justify-between'>
      <div className='flex'>
            <h6 className='font-bold text-2xl text-gray-900'>Reviews</h6>
        </div>
        </div>
        <div className='my- w-full md:grid-cols-1 lg:grid-cols-2  grid grid-cols-1 sm:grid-cols-1  gap-8'>
            <div className='bg-gray-200 flex flex-col gap-2 p-4 rounded-lg '>
                <div className='flex flex-col gap-4'>
                   <div>
                   <h6 className='font-semibold text-lg text-gray-800'>
                        Customer Reviews
                    </h6>
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
                    <p className=' font-semibold text-lg text-gray-400'>Based on 121 Reviews</p>
                </div>
            </div>
                </div>
                <div className='flex 
                 overflow-hidden overflow-y-scroll h-[40rem] p-4 bg-white rounded-lg flex-col my-4 gap-4'>
                {[1,2,3,4,5,6].map(el => (
                      <div className='flex flex-col gap-4'>
                      <div className='flex items-center gap-4'>
                       <div>
                        <h6 className='font-semibold text-xl text-gray-800'>Shanid</h6>
                       </div>
                       <div className='flex'>
                    <AiFillStar size={20} color='green'/>
                    <AiFillStar size={20} color='green'/>
                    <AiFillStar size={20} color='green'/>
                    <AiFillStar size={20} color='green'/>
                    <AiFillStar size={20} color='green'/>
                    </div>
                       </div>
                       <div className='w-full'>
                        <p className=' font-semibold text-sm text-gray-400'>Lorem, 
                        ipsum dolor sit amet consectetur adipisicing elit. Sint nulla
                         molestias voluptates perferendis expedita nemo soluta similique
                          impedit, odio odit labore numquam beatae pariatur! Accusantium 
                          deleniti eos natus est tempore?</p>
                       </div>
                       <div className='flex gap-2'>
                       <div className='p-4 border rounded-lg  w-3/12'>
             <img className='rounded-lg' src={productImage} alt="product" />
             </div>
             <div className='p-4 border rounded-lg w-3/12'>
             <img className='rounded-lg' src={productImage} alt="product" />
             </div>
             <div className='p-4 border rounded-lg w-3/12'>
             <img className='rounded-lg' src={productImage} alt="product" />
             </div>
             <div className='p-4 border rounded-lg w-3/12'>
             <img className='rounded-lg' src={productImage} alt="product" />
             </div>
                       </div>
                      </div>
                ))}
                </div>
                <div className=' py-2 px-2 gap-2 flex items-center bg-white rounded-lg'>
                    <div className='hover:bg-gray-200 p-2 rounded-full'>
                        <SlEmotsmile size={20} color="green"/>
                    </div>
                    <div className='grow'>
                    <input className='outline-none border-none px-2' placeholder='Write a review' type="text" />
                    </div>
                    <div className='hover:bg-gray-200 p-2 rounded-full'>
                        <BiImageAdd size={20} color="green"/>
                    </div>
                    <div>
                    <button className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-full border border-black font-semibold text-white'>Add Review</button>
                    </div>
                </div>
            </div> 
            <div className='bg-gray-200 flex flex-col gap-2 p-4 rounded-lg '>
                <div className='flex flex-col gap-4'>
                   <div>
                   <h6 className='font-semibold text-lg text-gray-800'>
                         Question and Answers
                    </h6>
                   </div>
                </div>
                <div className='flex 
                 overflow-hidden overflow-y-scroll h-[42.8rem] p-4 bg-white rounded-lg flex-col my-4 gap-4'>
                {[1,2,3,4,5,6].map(el => (
                      <div className='flex flex-col border-b border-gray-200 pb-4 gap-4'>
                       <div className='w-full'>
                        <p className=' break-words font-semibold text-sm text-gray-900'>
                           <span className='font-bold text-sm text-gray-900'>Q:</span> Lorem, 
                        ipsum dolor sit amet consectetur adipisicing elit. Sint null?
                        Lorem, 
                        ipsum dolor sit amet consectetur adipisicing elit. Sint null?</p>
                       </div>
                       <div className='w-full'>
                        <p className='break-words font-semibold text-sm text-gray-900'>
                           <span className='font-bold text-sm text-gray-900'>A:</span> Lorem, 
                        ipsum dolor sit amet consectetur adipisicing elit. Sint null</p>
                       </div>
                       <div className='flex justify-between items-center gap-2'>
                       <div className='flex gap-2'>
                       <h6 className='font-semibold text-md text-gray-800'>Asked by :Shanid</h6>
                       <div className='flex '>
                        <TiTick size={20} color="green"/>
                        <p className='font-semibold text-sm text-gray-400'>Certified Buyer</p>
                       </div>
                       </div>
                       <div className='flex gap-2 '>
                        <div className='rounded-full items-center flex gap-2 cursor-pointer p-2 hover:bg-gray-200'>
                        <AiOutlineLike size={20} color="green"/>
                        <p className='font-semibold text-md text-green-900'>13</p>
                        </div>
                        <div className='rounded-full items-center flex gap-2 cursor-pointer p-2 hover:bg-gray-200'>
                        <AiOutlineDislike size={20} color="green"/>
                        <p className='font-semibold text-md text-green-900'>13</p>
                        </div>
                       </div>
                       </div>
                      </div>
                ))}
                </div>
                <div className=' py-2 px-2 gap-2 flex items-center bg-white rounded-lg'>
                    <div className='hover:bg-gray-200 p-2 rounded-full'>
                        <SlEmotsmile size={20} color="green"/>
                    </div>
                    <div className='grow'>
                    <input className='outline-none border-none px-2' placeholder='Ask a question' type="text" />
                    </div>
                    <div>
                    <button className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-full border border-black font-semibold text-white'>Ask Question</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Reviews