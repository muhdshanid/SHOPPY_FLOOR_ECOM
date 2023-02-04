import React, { useEffect, useState } from 'react'
import "swiper/css";
import "swiper/css/virtual";
import { Virtual } from "swiper";
import {Link} from 'react-router-dom'
import { SwiperSlide, Swiper } from "swiper/react";
import { useGetCategoriesQuery } from '../../store/services/categoryServices';
import CategorySkeleton from '../loading/CategorySkeleton';
const CategoriesSwiper = () => {
  const { data, isFetching } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (isFetching === false) {
      setCategories(data);
    }
  }, [data, isFetching]);
  return (
    <div className='my-'>
           <div className='flex my-8 items-center justify-between'>
        <div className='flex'>
            <h6 className='font-semibold text-2xl text-gray-900'>Shop by Categories</h6>
        </div>
    </div>
    <div className='my-4'>
      {
        isFetching ? 
        <Swiper
        className="w-full h-[150px] mb-10"
        modules={[Virtual]}
        spaceBetween={20}
        slidesPerView={3}
        virtual
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1080: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >       { [1,2,3,4,5,6].map(cat => (
          <SwiperSlide
          className="w-full h-[200px] overflow-hidden rounded-lg relative"
        >                
                      <CategorySkeleton/> 
        </SwiperSlide>
      ))}      
      </Swiper>
        : 
        <Swiper
        className="w-full h-[150px] mb-10"
        modules={[Virtual]}
        spaceBetween={20}
        slidesPerView={3}
        virtual
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1080: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >       { categories.length > 0 && categories.map(cat => (
          <SwiperSlide
          className="w-full h-[200px] overflow-hidden rounded-lg relative"
        >                
              <div className="w-full h-[150px]  rounded-lg overflow-hidden">
                  <img src={cat.image.url} className='w-full h-[300px] object-cover' alt="category" />
              </div>
              <div className="absolute inset-0 w-full h-full bg-black/30 flex items-center justify-center p-4">
                  <Link to={`/cat-products/${cat.name}`} className="text-white text-base font-medium capitalize">{cat.name}</Link>
              </div>               
        </SwiperSlide>
      ))}      
      </Swiper>
      }
    </div>
    </div>
  )
}

export default CategoriesSwiper