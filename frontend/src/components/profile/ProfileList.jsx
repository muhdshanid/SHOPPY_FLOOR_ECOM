import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {BiPackage} from 'react-icons/bi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logout } from '../../store/reducers/authReducer'
const ProfileList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutUser = () => {
        dispatch(logout())
        navigate("/login")
    }
  return (
    <div className='flex  transition-all  flex-col gap-4 p-4 bg-white rounded-lg'>
    <div className='flex flex-col gap-4'>
    <div onClick={logoutUser} className='bg-gray-200  rounded-lg p-4'>
        <div className='flex gap-4 items-center '>
            <CgProfile size={30} color="green"/>
            <h6 className='font-semibold text-lg text-gray-900 capitalize'> Logout</h6>
        </div>
    </div>
    <div className='bg-gray-200 rounded-lg p-4'>
        <Link to={"/orders"} className='flex gap-4 '>
            <BiPackage size={30} color="green"/>
            <h6 className='font-semibold text-lg text-gray-900 capitalize'>Orders</h6>
        </Link>
    </div>
    <div className='bg-gray-200 rounded-lg p-4'>
        <Link to={"/wishlist"} className='flex gap-4 '>
            <AiFillHeart size={30} color="green"/>
            <h6 className='font-semibold text-lg text-gray-900 capitalize'>Wishlist</h6>
        </Link>
    </div>
    </div>
</div>
  )
}

export default ProfileList