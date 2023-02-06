import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleOrderQuery } from '../../../store/services/orderServices';
import { discount } from '../../../utils/discount';
import Wrapper from '../Wrapper';
import OrderDetailsTable from './OrderDetailsTable';
import AdminStepper from './AdminStepper';
const OrderDetails = () => {
  const {id} = useParams()
  const {data,isFetching} = useGetSingleOrderQuery(id)
  const [order, setOrder] = useState([])
  console.log(data);
  useEffect(()=>{
    if(isFetching === false){
      setOrder(data)
    }
  },[data, isFetching])
  return (
    <Wrapper>
       <div className=' flex flex-col gap-8'>
       <div className="mx-4 my-4">
          <Link
            to={"/admin/order-list"}
            className="bg-sidebar-item items-center w-[21%] flex gap-2 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-lg border border-black font-semibold text-black">
            <BiArrowBack size={24} />
            <p className="font-medium  text-lg text-gray-900">Orders List</p>
          </Link>
        </div>
     {
      isFetching ? ""
      :
      <>
      <OrderDetailsTable order={order}/>
      <AdminStepper order={order}/>
      </>
    }
    </div>
    </Wrapper>
  )
}

export default OrderDetails