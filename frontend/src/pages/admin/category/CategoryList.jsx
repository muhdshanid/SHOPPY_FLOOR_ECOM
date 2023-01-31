import React, { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper'
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from 'react-icons/bi';
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../../store/services/adminServices/categoryServices';

const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const {data,isFetching} = useGetCategoriesQuery()
  const [deleteCat,res] = useDeleteCategoryMutation()
  useEffect(()=>{
    if(isFetching === false){
      setCategories(data)
    }
  },[isFetching])
  const deleteCategory = (id) => {
    deleteCat(id)
  }
  return (
    <Wrapper>
        <div className=' flex  flex-col gap-8'>
        <div className='mx-4 my-4'>
        <Link to={"/admin/create-category"} className='bg-sidebar-item items-center w-[22%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-lg border border-black font-semibold text-black'>
                <p className='font-medium  text-lg text-gray-900'>Create Category</p>
                <IoMdAdd size={24}/>
                </Link>
        </div>
        {
          isFetching === false && <table className="rounded-lg overflow-hidden w-[100%] my-4 mr-4">
          <thead className="w-full rounded-full bg-gray-800">
            <tr>
              <th className="py-4 px-20  uppercase text-xs font-bold text-white text-left">
              name
              </th>
              <th className="py-4 px-20  uppercase text-xs font-bold text-white text-left">
                image
              </th>
              <th className="py-4 px-20  uppercase text-xs font-bold text-white text-left">
                edit
              </th>
              <th className="py-4 px-20  uppercase text-xs font-bold text-white text-left">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
          { categories.length > 0 && categories.map(cat => (
             <tr className="bg-gray-900  even:bg-gray-800">
              <td className="p-4 text-sm text-gray-700">
               <div className="flex items-center justify-center">
                 <h6 className="font-semibold text-lg text-white">{cat.name}</h6>
               </div>
             </td>
             <td className="p-4   text-sm text-gray-700">
             <div className="flex  -ml-6 items-center justify-center">
             <img
                 className="w-16  h-16 object-cover rounded-lg"
                 src={cat.image.url}
                 alt="item"
               />
             </div>
             </td>
             <td>
               <Link to={`/admin/update-category/${cat._id}`} className="flex -ml-6 items-center justify-center">
                 <BiEdit size={20} color="white"/>
               </Link>
             </td>
             <td>
               <div className="flex -ml-6 items-center justify-center">
                 <AiFillDelete className=' cursor-pointer' onClick={()=>deleteCategory(cat._id)} size={20} color="red"/>
               </div>
             </td>
             </tr>
          )) }
          </tbody>
            </table>
        }
        </div>
    </Wrapper>
  )
}

export default CategoryList