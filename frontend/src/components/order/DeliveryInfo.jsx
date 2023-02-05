import React, { useState } from 'react'
import AddressForm from './AddressForm'

const DeliveryInfo = ({state,setState}) => {
 
  const [addressFormShow, setAddressFormShow] = useState(true)
  const handleInput = (e) => {
    setState({...state,[e.target.name]:e.target.value})
  }
  return (
    <div className='w-12/12 my-4 p-4 border flex flex-col gap-4'>
    <div className='flex px-4 items-center justify-between '>
        <h6 className='font-semibold text-2xl text-gray-900 '>Delivery Information</h6>
        {
          !addressFormShow && <button onClick={()=>setAddressFormShow(true)} className='button-gray !w-[20%]'>Edit</button>
        }
    </div>
   {
    addressFormShow ? 
    <AddressForm setAddressFormShow={setAddressFormShow} handleInput={handleInput} state={state}/>
    :
    <div className=' flex p-4 flex-col gap-2'>
    <h6 className='font-semibold text-lg text-gray-900'>{state.fullname}</h6>
    <p className='font-normal text-md text-gray-500 w-[60%]'>
      {state.addressLineOne}
    </p>
    <p className='font-normal text-md text-gray-500 w-[60%]'>
      {state.addressLineTwo}
    </p>
    <div className='flex items-center gap-2'>
    <p className='font-normal text-md text-gray-500 '>{state.city}</p>
    <p className='font-normal text-md text-gray-500 '>{state.country}</p>
    </div>
    <div className='flex items-center gap-2'>
    <p className='font-normal text-md text-gray-500 '>{state.state}</p>
    <p className='font-normal text-md text-gray-500 '>{state.zipCode}</p>
    </div>
    </div>
   }
</div>
  )
}

export default DeliveryInfo