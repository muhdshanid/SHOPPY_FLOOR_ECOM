import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import { useCreateCouponMutation } from '../../../store/services/adminServices/couponServices';
const CreateCouponForm = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [expiry, setExpiry] = useState("")
  const [discount, setDiscount] = useState(0)
  const [createCoupn,result] = useCreateCouponMutation()

  useEffect(()=>{
    if(result.isSuccess){
      navigate("/admin/coupons-list")
    }
  },[result.isSuccess])
  const createCategory = () =>{
    if(name !== "" && expiry !== "" && discount !== 0 ){
        createCoupn({name,expiry,discount})
    }
  }
  const onChangeDate = e => {
    console.log(e.target.value);
    const newDate = moment(new Date(e.target.value)).format("YYYY/MM/DD");
    setExpiry(newDate);
  };
  return (
    <div className='flex flex-col  gap-8'>
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
        <input type="date" onChange={onChangeDate}
    className='bg-gray-800 text-white hover:border-gray-200 border
    border-gray-800
    outline-none w-full   p-4 rounded-lg' placeholder='Expiry Date' />
        </div> 
    </div>  
    <div className='my-4 '>
    <div onClick={createCategory}
          className="bg-sidebar-item
           cursor-pointer items-center w-[19%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
           rounded-lg border border-black font-semibold text-black">
          <p className="font-medium  cursor-pointer text-lg text-gray-900">Create Coupon</p>
        </div>
    </div>
</div>
  )
}

export default CreateCouponForm