import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useGetCouponQuery, useUpdateCouponMutation } from '../../../store/services/adminServices/couponServices';
const UpdateCouponForm = ({id}) => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [expiry, setExpiry] = useState("")
  const [discount, setDiscount] = useState(0)
  const {data,isFetching} = useGetCouponQuery(id)
  const [updateCoupn,result] = useUpdateCouponMutation()
    useEffect(()=>{
        if(isFetching === false){
            setName(data.name)
            setExpiry(data.expiry)
            setDiscount(data.discount)
        }
    },[isFetching])
  useEffect(()=>{
    if(result.isSuccess){
      navigate("/admin/coupons-list")
    }
  },[result.isSuccess])
  const updateCoupon = () =>{
    if(name !== "" && expiry !== "" && discount !== ""){
        const data = {name,expiry,discount}
      updateCoupn({data,id})
    }
  }
  const onChangeDate = e => {
    const newDate = moment(new Date(e.target.value)).format("YYYY/MM/DD");
    setExpiry(newDate);
  };
  return (
  isFetching === false ?   <div className='flex flex-col  gap-8'>
  <div className='flex gap-8 items-center'>
        <div className='w-[30%]'>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
    className='bg-gray-800 text-white hover:border-gray-200 border
    border-gray-800
    outline-none w-full  p-4 rounded-lg' placeholder='Name' />
        </div>    
   
        <div className='w-[30%]'>
        <input type="text" value={discount} onChange={(e)=>setDiscount(e.target.value)}
    className='bg-gray-800 text-white hover:border-gray-200 border
    border-gray-800
    outline-none w-full  p-4 rounded-lg' placeholder='Discount' />
        </div>    
   
    <div className='w-[30%]'>
        <input type="date"  onChange={onChangeDate}
    className='bg-gray-800 text-white hover:border-gray-200 border
    border-gray-800
    outline-none w-full   p-4 rounded-lg' placeholder='Expiry Date' />
        </div> 
    </div>
  <div className='my-4 '>
  <div onClick={updateCoupon}
        className="bg-sidebar-item
         cursor-pointer items-center w-[19%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
         rounded-lg border border-black font-semibold text-black">
        <p className="font-medium  cursor-pointer text-lg text-gray-900">Update Category</p>
      </div>
  </div>
</div> : ""
  )
}

export default UpdateCouponForm