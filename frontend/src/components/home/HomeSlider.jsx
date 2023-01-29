import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper";

const HomeSlider = () => {
    const dummyBanner = "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-mobile-phone-promotion-season-carnival-colorful-banner-image_179703.jpg"
  return (
    <div className='w-full  my-10 h-[50vh] rounded-lg '>
         <Swiper className='h-full w-full'
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide className='relative'>
        <div className='w-full h-full absolute inset-0  bg-no-repeat bg-cover '>
            <img src={dummyBanner} className='w-full h-full rounded-lg object-cover' alt="banner" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='relative'>
        <div className='w-full h-full absolute inset-0  bg-no-repeat bg-cover '>
            <img src={dummyBanner} className='w-full h-full rounded-lg object-cover' alt="banner" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='relative'>
        <div className='w-full h-full absolute inset-0  bg-no-repeat bg-cover '>
            <img src={dummyBanner} className='w-full h-full rounded-lg object-cover' alt="banner" />
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default HomeSlider