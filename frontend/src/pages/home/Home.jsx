import React, { useEffect, useState } from 'react'
import Blogs from '../../components/home/Blogs'
import BrandList from '../../components/home/BrandList'
import CategoriesSwiper from '../../components/home/CategoriesSwiper'
import HomeSlider from '../../components/home/HomeSlider'
import OurServices from '../../components/home/OurServices'
import ProductCard from '../../components/home/ProductCard'
import { useGetCatProductsQuery } from '../../store/services/productServices'

const Home = () => {
  const [catProducts, setCatProducts] = useState([])
  const [slicedProducts, setSlicedProducts] = useState([])
  const {data,isFetching} = useGetCatProductsQuery("mobiles")
  useEffect(() => {
    if (isFetching === false) {
      setCatProducts(data);
      setSlicedProducts(data.slice(0,4))
    }
  }, [data, isFetching]);
  return (
    <div className='w-12/12  fc px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100'>
      <HomeSlider/>
      <CategoriesSwiper/>
      <ProductCard isFetching={isFetching} products={slicedProducts} link={`/cat-products/mobiles`} caption={"Mobiles For You"}/>
      <BrandList/>
      <ProductCard isFetching={isFetching} products={catProducts} link={`/popular-products`} caption={"Popular Deals"}/>
      <OurServices/>
      <Blogs/>
    </div>
  )
}

export default Home