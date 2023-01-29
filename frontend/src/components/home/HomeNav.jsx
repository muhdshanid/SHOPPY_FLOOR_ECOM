import React from 'react'
import {MdAddShoppingCart, MdKeyboardArrowDown} from 'react-icons/md'
import {IoSearchOutline} from 'react-icons/io5'
import {RiUser3Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'
const HomeNav = () => {
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDhYBltma0_qRGcKkgfpZZfne4dtTSTmfwA&usqp=CAU"

  return (
    <div className='w-12/12 flex flex-col px-4 lg:px-16 md:px-14 sm:px-8  bg-gray-100'>
    <div className='flex w-full items-center justify-between md:gap-12  gap-6 py-4 '>
    <Link to={"/"} className='flex  cursor-pointer gap-4 lg:gap-2 items-center '>
        <img src={logo} className="sm:w-8  md:flex sm:flex lg:flex 
        xl:flex w-10 h-10 sm:h-8  object-cover rounded-full" alt="logo" />
        <h2 className='text-2xl hidden sm:flex md:flex font-bold text-green-900 capitalize'>shoppy floor</h2>
    </Link>
    <div className=' gap-4 lg:flex hidden items-center'>
        <div className='flex gap-2 items-center'>
        <p className='font-semibold text-md text-gray-700 cursor-pointer '>Categories</p>
        <MdKeyboardArrowDown size={20} className="mt-2"/>
        </div>
        <p className='font-semibold text-md text-gray-700 cursor-pointer '>Deals</p>
        <p className='font-semibold text-md text-gray-700 cursor-pointer '>Contact us</p>
        <p className='font-semibold text-md text-gray-700 cursor-pointer '>Categories</p>
    </div>
    <div className='flex gap-2 items-center bg-gray-200  rounded-full py-2 px-4'>
        <input type="text"  className='bg-gray-200  px-2 rounded-full outline-none border-none'
        placeholder='Search Product'/>
        <div className=' '>
            <IoSearchOutline size={20}/>
        </div>
    </div>
    <div className='flex gap-8 items-center'>
        <div className='flex gap-2 cursor-pointer'>
            <RiUser3Line size={24} />
            <p className='font-bold md:flex  hidden text-md text-gray-700'>Account</p>
        </div>
        <div className='flex gap-2 cursor-pointer'>
        <MdAddShoppingCart size={24} />
            <p className='font-bold md:flex  hidden text-md text-gray-700'>Cart</p>
        </div>
    </div>
</div>
</div>
  )
}

export default HomeNav