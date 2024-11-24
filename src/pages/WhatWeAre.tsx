"use client";
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


const WhatWeAre = () => {
    return (
        <div className="bg-linear-sky backdrop-blur-[35px] mix-blend-normal">
            <div className='pt-[150px] pb-[136px] container-bg'>
                <div className="w-[470px] text-white">
                    <h2 className='pb-10 text-header'>Why are we <span className='text-ctm-sky'>different?</span></h2>
                    <span>
                        At BOARD, we redefine excellence in multi-board manufacturing. Reliability, quality, and innovation - we are the complete package of everything!
                    </span>
                </div>
                {/* slider */}
                <div className="mt-[60px]">

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default WhatWeAre