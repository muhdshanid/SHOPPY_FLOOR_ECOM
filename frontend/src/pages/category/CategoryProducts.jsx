import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import ProductCard from '../../components/home/ProductCard'
import SingleProduct from '../../components/product/SingleProduct'

const CategoryProducts = () => {
  return (
    <div>
        <BreadCrumbs title={"Headphones"}/>
        <div className='w-12/12  flex flex-col px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100'>
        <ProductCard  page={"category"} caption={"Headphones  (844 Products)"}/>
        <SingleProduct/>
        <SingleProduct/>
        </div>
    </div>
  )
}

export default CategoryProducts