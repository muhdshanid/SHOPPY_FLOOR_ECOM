import React from 'react'
import {MdAddShoppingCart, MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {IoSearchOutline} from 'react-icons/io5'
import {RiUser3Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CategoryListShow from '../category/CategoryListShow'
import { useSelector } from 'react-redux'
import ProfileList from '../profile/ProfileList'
const HomeNav = () => {
    const {items,total} = useSelector(state=>state.cartReducer)

    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDhYBltma0_qRGcKkgfpZZfne4dtTSTmfwA&usqp=CAU"
    const [catListShow, setCatListShow] = useState(false)
    const [profileListShow, setProfileListShow] = useState(false)
  return (
    <div className='w-12/12 relative flex flex-col px-4 lg:px-16 md:px-14 sm:px-8  bg-gray-100'>
    <div className='flex w-full items-center justify-between md:gap-12  gap-6 py-4 '>
    <Link to={"/"} className='flex  cursor-pointer gap-4 lg:gap-2 items-center '>
        <img src={logo} className="sm:w-8  md:flex sm:flex lg:flex 
        xl:flex w-10 h-10 sm:h-8  object-cover rounded-full" alt="logo" />
        <h2 className='text-2xl hidden sm:flex md:flex font-bold text-green-900 capitalize'>shoppy floor</h2>
    </Link>
    <div className='  gap-4 lg:flex hidden items-center'>
        <div className='flex gap-2 items-center'>
        <p className='font-semibold capitalize text-md text-gray-700 cursor-pointer '>Categories</p>
        {!catListShow ? <MdKeyboardArrowDown onClick={()=>setCatListShow(prev => !prev)} size={20} className="mt-2 
         cursor-pointer"/> :
        <MdKeyboardArrowUp onClick={()=>setCatListShow(prev => !prev)} size={20} className="mt-2 
         cursor-pointer"/>}
       {catListShow && <div className='absolute z-50 top-16 left-[16rem]'>
            <CategoryListShow/> 
        </div>}
        </div>
        <Link to={"/our-store"} className='font-semibold capitalize text-md text-gray-700 cursor-pointer '>Our store</Link>
        <p className='font-semibold capitalize text-md text-gray-700 cursor-pointer '></p>
        <p className='font-semibold capitalize text-md text-gray-700 cursor-pointer '>Contact us</p>
    </div>
    <div className='flex gap-2 items-center bg-gray-200  rounded-full py-2 px-4'>
        <input type="text"  className='bg-gray-200  px-2 rounded-full outline-none border-none'
        placeholder='Search Product'/>
        <div className=' '>
            <IoSearchOutline size={20}/>
        </div>
    </div>
    <div className='flex gap-8 items-center relative'>
        <div className='flex gap-2 cursor-pointer'>

            <p className='font-bold md:flex  hidden text-md text-gray-700'>Shanid</p>
            {!profileListShow ? <MdKeyboardArrowDown onClick={()=>setProfileListShow(prev => !prev)} size={20} className="mt-2 
         cursor-pointer"/> :
        <MdKeyboardArrowUp onClick={()=>setProfileListShow(prev => !prev)} size={20} className="mt-2 
         cursor-pointer"/>}
       {profileListShow && <div className='absolute z-50 top-10 right-16 '>
            <ProfileList/> 
        </div>}
        </div>
        <div className='flex gap-2  cursor-pointer'>
       <Link to={"/cart"} className='relative'>
       <MdAddShoppingCart size={24} />
        <div className='absolute -top-4 -right-4
         rounded-lg w-6 h-5 flex items-center justify-center text-white bg-green-900'>
            <p className='text-white -mt-[3px] font-semibold text-sm'>{items}</p>
        </div>
       </Link>
            <Link to={"/cart"} className='font-bold md:flex  hidden text-md text-gray-700'>Cart</Link>
        </div>
    </div>
</div>
</div>
  )
}

export default HomeNav