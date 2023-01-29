import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({title}) => {
  return (
    <div className='w-12/12 py-4 flex flex-col px-4
    lg:px-16 md:px-14 sm:px-8  bg-gray-100'>
            <div className="w-12/12">
                <p className='text-start mb-0'>
                    <Link to={"/"} 
                    className='text-dark'>Home&nbsp;</Link> / {title}
                </p>
            </div>
        </div>
  )
}

export default BreadCrumbs