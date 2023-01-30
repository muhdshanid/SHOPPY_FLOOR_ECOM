import React from 'react'
import BrandList from '../../components/home/BrandList'
import CategoriesSwiper from '../../components/home/CategoriesSwiper'
import HomeSlider from '../../components/home/HomeSlider'
import ProductCard from '../../components/home/ProductCard'

const Home = () => {
  return (
    <div className='w-12/12  flex flex-col px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100'>
      <HomeSlider/>
      <CategoriesSwiper/>
      
      <ProductCard caption={"Headphones For You"}/>
      <BrandList/>
      <ProductCard caption={"Popular Deals"}/>
    </div>
  )
}

export default Home