import React, { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper'
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from 'react-icons/bi';
import { useDeleteCouponMutation, useGetCouponsQuery } from '../../../store/services/adminServices/couponServices';
import moment from 'moment'

const CouponList = () => {
    const [coupons, setCoupons] = useState([])
  const {data,isFetching} = useGetCouponsQuery()
  const [dltCoupon,res] = useDeleteCouponMutation()
  useEffect(()=>{
    if(isFetching === false){
      setCoupons(data)
    }
  },[isFetching])
  const deleteCoupon = (id) => {
    dltCoupon(id)
  }
  return (
    <Wrapper>
        <div className=' flex  flex-col gap-8'>
        <div className='mx-4 my-4'>
        <Link to={"/admin/create-coupon"} className='bg-sidebar-item items-center w-[22%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-lg border border-black font-semibold text-black'>
                <p className='font-medium  text-lg text-gray-900'>Create Coupon</p>
                <IoMdAdd size={24}/>
                </Link>
        </div>
        {
          isFetching === false && <table className="rounded-lg overflow-hidden w-[100%] my-4 mr-4">
          <thead className="w-full rounded-full bg-gray-800">
            <tr>
              <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
              name
              </th>
              <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
                expiry date
              </th>
              <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
                discount 
              </th>
              <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
                edit
              </th>
              <th className="py-4 px-10  uppercase text-xs font-bold text-white text-left">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
          { coupons.length > 0 && coupons.map(coupon => (
             <tr className="bg-gray-900  even:bg-gray-800">
              <td className="p-4 text-sm text-gray-700">
               <div className="flex items-center justify-center">
                 <h6 className="font-semibold text-lg text-white">{coupon.name}</h6>
               </div>
             </td>
             <td className="p-4   text-sm text-gray-700">
             <div className="flex  -ml-6 items-center justify-center">
             <h6 className="font-semibold text-lg text-white">{moment(coupon.expiry).format('L')}</h6>
             </div>
             </td>
             <td className="p-4   text-sm text-gray-700">
             <div className="flex  -ml-6 items-center justify-center">
             <h6 className="font-semibold text-lg text-white">{coupon.discount}</h6>
             </div>
             </td>
             <td>
               <Link to={`/admin/update-coupon/${coupon._id}`} className="flex -ml-6 items-center justify-center">
                 <BiEdit size={20} color="white"/>
               </Link>
             </td>
             <td>
               <div className="flex -ml-6 items-center justify-center">
                 <AiFillDelete className=' cursor-pointer' onClick={()=>deleteCoupon(coupon._id)} size={20} color="red"/>
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

export default CouponList