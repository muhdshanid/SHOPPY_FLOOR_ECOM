import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CreateCategoryForm from '../../components/admin/CreateCategoryForm';
import Wrapper from "./Wrapper";
const CreateCategory = () => {
  return (
    <Wrapper>
    <div className=" flex flex-col gap-8">
      <div className="mx-4 my-4">
        <Link
          to={"/admin/category-list"}
          className="bg-sidebar-item items-center w-[21%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-lg border border-black font-semibold text-black">
          <BiArrowBack size={24} />
          <p className="font-medium  text-lg text-gray-900">Category List</p>
        </Link>
      </div>
      <div className="mx-4 w-full">
          <CreateCategoryForm/>
      </div> 
      <div className="mx-4 my-4">
        <div
          className="bg-sidebar-item items-center w-[19%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-lg border border-black font-semibold text-black">
          <p className="font-medium  text-lg text-gray-900">Create Category</p>
        </div>
      </div>
    </div>
  </Wrapper>
  )
}

export default CreateCategory