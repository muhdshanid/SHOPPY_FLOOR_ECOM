import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CreateCouponForm from '../../../components/admin/coupon/CreateCouponForm';
import Wrapper from "../Wrapper";
const CreateCoupon = () => {
  return (
    <Wrapper>
    <div className=" flex flex-col gap-8">
      <div className="mx-4 my-4">
        <Link
          to={"/admin/coupons-list"}
          className="bg-sidebar-item items-center w-[21%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-lg border border-black font-semibold text-black">
          <BiArrowBack size={24} />
          <p className="font-medium  text-lg text-gray-900">Coupons List</p>
        </Link>
      </div>
      <div className="mx-4 w-full">
          <CreateCouponForm/>
      </div> 
    </div>
  </Wrapper>
  )
}

export default CreateCoupon