import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import {  BiImageAdd } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'
import { SlEmotsmile } from 'react-icons/sl'
import StarRating from './StarRating'
import { useUploadProductImagesMutation } from '../../store/services/uploadServices'
import Dropzone from 'react-dropzone'
const Reviews = ({product}) => {
    const [star, setStar] = useState(1)
    const [comment, setComment] = useState("")
    const [imageUploading, setImageUploading] = useState(false)
    const [reviewImages, setReviewImages] = useState([])
    const [uploadImages,res] = useUploadProductImagesMutation()
    useEffect(()=>{
        if(res.isSuccess){
            setReviewImages(res.data)
          setImageUploading(false)
        }
      },[res?.data, res.isSuccess])
      const uploadReviewImages = (acceptedFiles) => {
        const formData = new FormData()
    for(let i = 0; i < acceptedFiles.length; i++){
      formData.append("images",acceptedFiles[i])
    }
    uploadImages(formData)
    setImageUploading(true)
      }
    const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjQ9RwiG9pVxYU4I_VJwivaEG2d6VWXF_kQ&usqp=CAU"
  return (
    <div className='w-12/12 my-4 flex flex-col gap-8'>
         <div className='flex   items-center justify-between'>
      <div className='flex'>
            <h6 className='font-semibold capitalize text-2xl text-gray-900'>Reviews</h6>
        </div>
        </div>
        <div className='my- w-full md:grid-cols-1 lg:grid-cols-2  grid grid-cols-1 sm:grid-cols-1  gap-8'>
            <div className='bg-gray-200 flex flex-col h-[14rem] gap-4 p-4 rounded-lg '>
                <div className='flex flex-col gap-4'>
                   <div>
                   <h6 className='font-semibold capitalize text-lg text-gray-800'>
                        Customer Reviews
                    </h6>
                   </div>
                    <div className='flex items-center gap-2'>
                <div className='flex'>
                <StarRating rating={product?.totalRatings} />
                </div>
                <div>
                    <p className=' font-semibold capitalize text-lg text-gray-400'>
                       {
                       product?.ratings?.length > 0 ?
                      `Based on  
                        ${product?.ratings?.length} Reviews`
                        : "0 Reviews"
                    }
                       </p>
                </div>
            </div>
                </div>
                { product?.ratings?.length > 0 ?
                product?.ratings.map(el => (
                    <div className='flex 
                     overflow-hidden overflow-y-scroll p-4 bg-white rounded-lg flex-col my-4 gap-4'>
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
                </div>
                ))
                :
                <div>
                <h6 className='font-semibold capitalize text-lg text-gray-800'>
                     No Reviews
                 </h6>
                </div>
            }
              {  <div className=' py-2 px-2 gap-2 flex items-center bg-white rounded-lg'>
                    <div className=''>
                    <select id="star"  name='star'
                    value={star}
                    onChange={(e)=>setStar(e.target.value)}
         className="button-gray
         outline-none  w-full">
   <option className='button-gray' value={1} selected>1 Star</option>
   <option className='button-gray' value={2} >2 Star</option>
   <option className='button-gray' value={3} >3 Star</option>
   <option className='button-gray' value={4} >4 Star</option>
   <option className='button-gray' value={5} >5 Star</option>
   </select>
                    </div>
                    <div className='grow'>
                    <input value={comment} onChange={(e)=>setComment(e.target.value)}
                     className='outline-none border-none px-2' placeholder='Write a review' type="text" />
                    </div>
                    <div className='hover:bg-gray-200 rounded-full'>
                        <Dropzone onDrop={(acceptedFiles) =>uploadReviewImages(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className='rounded-lg p-4'>
                    <input {...getInputProps()} />
                    <BiImageAdd className=' cursor-pointer' size={20} color="green"/>
                  </div>
                </section>
              )}
            </Dropzone>
                    </div>
                    <div>
                    <button disabled={imageUploading} className='button-green
                     !w-[100%]'>
                        {
                            imageUploading ? "Uploading..."
                            : "Add Review"
                        }
                    </button>
                    </div>
                </div>}
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
                    <button className='button-green !w-full'>Ask Question</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Reviews