import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import UpdateProductForm from "../../../components/admin/UpdateProductForm";
import Wrapper from "../Wrapper";

const UpdateProduct = () => {
    const {id} = useParams()
  return (
    <Wrapper>
    <div className=" flex flex-col gap-8">
      <div className="mx-4 my-4">
        <Link
          to={"/admin/product-list"}
          className="bg-sidebar-item items-center w-[21%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-lg border border-black font-semibold text-black">
          <BiArrowBack size={24} />
          <p className="font-medium  text-lg text-gray-900">Product List</p>
        </Link>
      </div>
      <div className="mx-4 w-full">
          <UpdateProductForm id={id}/>
      </div> 
    </div>
  </Wrapper>
  )
}

export default UpdateProduct