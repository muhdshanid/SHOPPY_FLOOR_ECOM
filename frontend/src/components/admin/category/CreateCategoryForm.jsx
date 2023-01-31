import React, { useEffect, useState } from 'react'
import { useUploadImagesMutation } from '../../../store/services/adminServices/uploadServices'
import Dropzone from "react-dropzone";
import { useCreateCategoryMutation } from '../../../store/services/adminServices/categoryServices';
import { useNavigate } from 'react-router-dom';
const CreateCategoryForm = () => {
  const navigate = useNavigate()
  const [imageData, setImageData] = useState(null)
  const [name, setName] = useState("")
  const [uploadImage,res] = useUploadImagesMutation()
  const [createCat,result] = useCreateCategoryMutation()
  const uploadCategoryImage = (acceptedFiles) => {
    const formData = new FormData()
    for(let i = 0; i < 1; i++){
      formData.append("images",acceptedFiles[i])
    }
    uploadImage(formData)
    }
  useEffect(()=>{
    if(res.isSuccess){
      setImageData(res?.data[0])
    }
  },[res.isSuccess])
  useEffect(()=>{
    if(result.isSuccess){
      navigate("/admin/category-list")
    }
  },[result.isSuccess])
  const createCategory = () =>{
    if(name !== "" && imageData !== null){
      createCat({name,image:imageData})
    }
  }
  return (
    <div className='flex flex-col  gap-8'>
    <div className='flex gap-8 items-center'>
        <div className='w-[30%]'>
        <input type="text" value={name ? name : ""} onChange={(e)=>setName(e.target.value)}
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
          <Dropzone onDrop={(acceptedFiles) =>uploadCategoryImage(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()} className='rounded-lg p-4 bg-orange-300'>
                    <input {...getInputProps()} />
                    <p className='block mb-2 ml-2 font-semibold text-base text-gray-900'>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
        </div>
  {
    imageData &&   <div className='flex justify-start items-center  px-8 w-6/12'>
    <img className='rounded-lg' src={imageData.url} alt="product" />
    </div>
  }
    </div>
    <div className='my-4 '>
    <div onClick={createCategory}
          className="bg-sidebar-item
           cursor-pointer items-center w-[19%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-lg border border-black font-semibold text-black">
          <p className="font-medium  cursor-pointer text-lg text-gray-900">Create Category</p>
        </div>
    </div>
</div>
  )
}

export default CreateCategoryForm