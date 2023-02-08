import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs'
import ProductCard from '../../components/home/ProductCard'
import ProductSkeleton from '../../components/loading/ProductSkeleton'
import { useGetSearchProductsQuery } from '../../store/services/productServices'

const Search = () => {
    const {search} = useParams()
    const [products, setProducts] = useState([])
    const {data,isFetching} = useGetSearchProductsQuery({keyword:search})
    useEffect(() => {
        if (isFetching === false) {
          setProducts(data);
        }
      }, [data, isFetching]);
  return (
    <div>
        <BreadCrumbs title={search}/>
   {isFetching === false ? <div className='w-12/12 pt-8   px-4
    lg:px-16 md:px-14 sm:px-8 min-h-screen bg-gray-100'>
    <ProductCard products={products} page={"category"} caption={`${search}  (${products.length} Products)`}/>
    </div>
    :
    <div className='w-12/12 pt-8   px-4
    lg:px-16 md:px-14  sm:px-8 min-h-screen bg-gray-100'>
      <div className='my-2 w-full
        grid grid-cols-2 sm:grid-cols-2
         md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
    <ProductSkeleton/>
    <ProductSkeleton/>
    <ProductSkeleton/>
    <ProductSkeleton/>
      </div>
    </div>
    }
    </div>
  )
}

export default Search