import React from 'react'
import { Link } from 'react-router-dom'

const SignupForm = () => {
  return (
    <div className='w-full px-8'>
    <div className='flex flex-col gap-6'>
    <input type="text"
    className='bg-gray-50 border
    outline-none  border-green-900 w-full p-4 rounded-lg' placeholder='Name' />
    <input type="email"
    className='bg-gray-50 border
    outline-none  border-green-900 w-full p-4 rounded-lg' placeholder='Email' />
    <input type="password"
    className='bg-gray-50 border
    outline-none  border-green-900 w-full p-4 rounded-lg' placeholder='Password' />
    <div>
    <button className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
         rounded-full w-full border border-black font-semibold text-white'>Login</button>
    </div>
    <div>
        <p className='font-semibold  text-md text-gray-900'>Already have an account ?
         <Link to={"/login"} className='font-semibold underline text-md text-gray-900'> Login</Link></p>
    </div>
    </div>
</div>
  )
}

export default SignupForm