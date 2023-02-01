import React, { useEffect, useState } from 'react'
import BrandList from '../../components/home/BrandList'
import CategoriesSwiper from '../../components/home/CategoriesSwiper'
import HomeSlider from '../../components/home/HomeSlider'
import ProductCard from '../../components/home/ProductCard'
import { useGetCatProductsQuery } from '../../store/services/productServices'

const Home = () => {
  const [catProducts, setCatProducts] = useState([])
  const {data,isFetching} = useGetCatProductsQuery("mobiles")
  useEffect(() => {
    if (isFetching === false) {
      setCatProducts(data);
    }
  }, [data, isFetching]);
  return (
    <div className='w-12/12  flex flex-col px-4
     lg:px-16 md:px-14 sm:px-8  min-h-screen bg-gray-100'>
      <HomeSlider/>
      <CategoriesSwiper/>
      <ProductCard products={catProducts} link={`/cat-products/mobiles`} caption={"Mobiles For You"}/>
      <BrandList/>
      <ProductCard products={catProducts} link={`/popular-products`} caption={"Popular Deals"}/>
    </div>
  )
}

export default Home