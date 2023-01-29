import React from 'react'
import "swiper/css";
import "swiper/css/virtual";
import { Virtual } from "swiper";
import {Link} from 'react-router-dom'
import { SwiperSlide, Swiper } from "swiper/react";
const CategoriesSwiper = () => {
    const category = "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&w=1000&q=80"
  return (
    <div className='my-'>
           <div className='flex my-8 items-center justify-between'>
        <div className='flex'>
            <h6 className='font-bold text-lg text-gray-900'>Shop by Categories</h6>
        </div>
        <div>
            <button className='bg-green-900 px-4 py-2 hover:bg-gray-200 hover:text-black
             rounded-full border border-black font-semibold text-white'>See All</button>
        </div>
    </div>
    <div className='my-4'>
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
        >       {[1,2,3,4,5,6,7,8,9,1,2].map(el => (
            <SwiperSlide
            className="w-full h-[200px] overflow-hidden rounded-lg relative"
          >                
                <div className="w-full h-[150px]  rounded-lg overflow-hidden">
                    <img src={category} className='w-full h-[300px] object-cover' alt="category" />
                </div>
                <div className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center p-4">
                    <p className="text-white text-base font-medium capitalize">Mobiles</p>
                </div>               
          </SwiperSlide>
        ))}      
        </Swiper>
    </div>
    </div>
  )
}

export default CategoriesSwiper