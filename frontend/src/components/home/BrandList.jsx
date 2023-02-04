import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetBrandsQuery } from '../../store/services/brandServices';
import BrandSkeleton from '../loading/BrandSkeleton';
const BrandList = () => {
    const [brands, setBrands] = useState([]);
  const { data, isFetching } = useGetBrandsQuery();
  useEffect(() => {
    if (isFetching === false) {
      setBrands(data);
    }
  }, [data, isFetching]);
  return (
    <div className='my-4 flex flex-col gap-4'>
          <div className='flex   items-center justify-between'>
        <div className='flex'>
            <h6 className='font-semibold text-2xl text-gray-900'>Popular Brands</h6>
        </div>
    </div>
    <div className='my-2 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
       {
        isFetching ? 
        <>
        <BrandSkeleton/>
        <BrandSkeleton/>
        <BrandSkeleton/>
        <BrandSkeleton/>
        </>
        :
        brands.length > 0 && brands.map(brand => (
            <div  className='p-6 border border-gray-200
            cursor-pointer hover:border-green-900 flex gap-8 rounded-lg bg-gray-200'>
               <div  className=' flex items-center justify-center bg-white
               sm:smimg img '>
                   <img src={brand.image.url} className=" 
                   object-cover sm:smimg img  " alt="brand" />
               </div>
               <div className='flex flex-col gap-4'>
                   <h6 className='font-bold uppercase text-lg text-gray-900'>{brand.name}</h6>
                   <Link to={`/brand-products/${brand.name}`} className='bg-green-900 px-4 py-1 hover:bg-gray-200 hover:text-black
             rounded-full border border-black font-semibold text-white'>Explore</Link>
               </div>
           </div>
        ))
       }
    </div>
    </div>
  )
}

export default BrandList