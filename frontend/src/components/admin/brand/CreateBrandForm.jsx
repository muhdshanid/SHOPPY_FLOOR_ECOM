import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { useCreateBrandMutation } from '../../../store/services/adminServices/brandServices';
import { useUploadImagesMutation } from '../../../store/services/adminServices/uploadServices';
const CreateBrandForm = () => {
  const navigate = useNavigate()
  const [imageData, setImageData] = useState(null)
  const [name, setName] = useState("")
  const [uploadImage,res] = useUploadImagesMutation()
  const [createBrand,result] = useCreateBrandMutation()
  const uploadBrandImage = (acceptedFiles) => {
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
        navigate("/admin/brand-list")
      }
    },[result.isSuccess])
    const createBrandHandler = () =>{
      if(name !== "" && imageData !== null){
        createBrand({name,image:imageData})
      }
    }
  return (
    <div className='flex flex-col  gap-8'>
    <div className='flex gap-8 items-center'>
        <div className='w-[30%]'>
        <input value={name ? name : ""} onChange={(e)=>setName(e.target.value)}
         type="text"
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
          <Dropzone onDrop={(acceptedFiles) =>uploadBrandImage(acceptedFiles)}>
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
      imageData && <div className='flex items-center  px-8  w-6/12'>
      <img className='rounded-lg' src={imageData.url} alt="product" />
      </div>
    }
    </div>
    <div className="my-4">
        <div onClick={createBrandHandler}
          className="bg-sidebar-item items-center w-[16%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-lg border border-black font-semibold text-black">
          <p className="font-medium  text-lg text-gray-900">Create Brand</p>
        </div>
      </div>
</div>
  )
}

export default CreateBrandForm