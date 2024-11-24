"use client";
import React from 'react'

import ArrowRight from '../../public/assets/arrow-right.png';
import Image from 'next/image';
// import { BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import slider1 from '../../public/assets/news/1.png';


import { Swiper, SwiperSlide } from 'swiper/react';


const NewsAndEvent = () => {
    return (
        <>
            <div className='bg-gradient-to-t from-ctm-yellow-dark to-white h-[200px]' />
            <div className='relative bg-ctm-yellow-dark'>
                <div className="bg-board-top top-0 left-0 absolute inset-0 bg-cover bg-no-repeat w-full h-full">
                </div>
                <div className='pt-[70px] pb-[124px] container-bg'>
                    <div className="flex gap-[120px]">
                        <div className='text-center text-white b2-card-body'>
                            <h1 className='text-header'>
                                4 years
                            </h1>
                            <p className='text-right font-light text-xl leading-[30px]'>Experience
                            </p>
                        </div>
                        <div className='text-center text-white b2-card-body'>
                            <h1 className='text-header'>
                                120+
                            </h1>
                            <p className='text-right font-light text-xl leading-[30px]'>Products
                            </p>
                        </div>
                        <div className='text-center text-white b2-card-body'>
                            <h1 className='text-header'>
                                3M+
                            </h1>
                            <p className='text-right font-light text-xl leading-[30px]'>cbm Production
                            </p>
                        </div>
                    </div>
                </div>

                {/* news slider header*/}
                <div className="pt-[76px] pb-10 container-bg">
                    <div className="flex justify-between text-ctm-dark">
                        <h1 className='text-header'>News & events</h1>
                        <Link href="/" className='inline-flex relative items-center gap-[10px] opacity-75 pt-10 pb-3 text-xl leading-5'>
                            <div className='bottom-hr border-ctm-dark' />
                            <span>Explore now</span>
                            {/* <Image
                                src={ArrowRight}
                                alt="Picture of the author"
                            /> */}
                            <BsArrowRightShort />
                        </Link>
                    </div>
                </div>
                {/* Slider  */}
                <div className="mt-10 pl-[135px]">
                    <Swiper
                        // install Swiper modules
                        spaceBetween={30}
                        slidesPerView={4}
                    >
                        <SwiperSlide className='w-[370px]'>
                            <Image src={slider1} alt='Slider' className='rounded-[5px]' />
                            <div className='pt-6'>
                                <span className='mb-[10px] text-[14px] text-ctm-sky leading-5'>12 Oct 2024</span>
                                <p className='mb-6 text-black text-xl leading-[32px]'>BOARD pioneers contemporary designs for modern living</p>
                                <Link href="/" className='inline-flex relative items-center gap-[10px] opacity-75 pb-3 text-xl leading-5'>
                                    <div className='bottom-hr border-ctm-dark' />
                                    <span>Read More</span>
                                    {/* <Image
                                src={ArrowRight}
                                alt="Picture of the author"
                            /> */}
                                    <BsArrowRightShort />
                                </Link>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[370px]'>
                            <Image src={slider1} alt='Slider' className='rounded-[5px]' />
                            <div className='pt-6'>
                                <span className='mb-[10px] text-[14px] text-ctm-sky leading-5'>12 Oct 2024</span>
                                <p className='mb-6 text-black text-xl leading-[32px]'>BOARD pioneers contemporary designs for modern living</p>
                                <Link href="/" className='inline-flex relative items-center gap-[10px] opacity-75 pb-3 text-xl leading-5'>
                                    <div className='bottom-hr border-ctm-dark' />
                                    <span>Read More</span>
                                    {/* <Image
                                src={ArrowRight}
                                alt="Picture of the author"
                            /> */}
                                    <BsArrowRightShort />
                                </Link>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[370px]'>
                            <Image src={slider1} alt='Slider' className='rounded-[5px]' />
                            <div className='pt-6'>
                                <span className='mb-[10px] text-[14px] text-ctm-sky leading-5'>12 Oct 2024</span>
                                <p className='mb-6 text-black text-xl leading-[32px]'>BOARD pioneers contemporary designs for modern living</p>
                                <Link href="/" className='inline-flex relative items-center gap-[10px] opacity-75 pb-3 text-xl leading-5'>
                                    <div className='bottom-hr border-ctm-dark' />
                                    <span>Read More</span>
                                    {/* <Image
                                src={ArrowRight}
                                alt="Picture of the author"
                            /> */}
                                    <BsArrowRightShort />
                                </Link>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[370px]'>
                            <Image src={slider1} alt='Slider' className='rounded-[5px]' />
                            <div className='pt-6'>
                                <span className='mb-[10px] text-[14px] text-ctm-sky leading-5'>12 Oct 2024</span>
                                <p className='mb-6 text-black text-xl leading-[32px]'>BOARD pioneers contemporary designs for modern living</p>
                                <Link href="/" className='inline-flex relative items-center gap-[10px] opacity-75 pb-3 text-xl leading-5'>
                                    <div className='bottom-hr border-ctm-dark' />
                                    <span>Read More</span>
                                    {/* <Image
                                src={ArrowRight}
                                alt="Picture of the author"
                            /> */}
                                    <BsArrowRightShort />
                                </Link>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >
            <div className='bg-gradient-to-b from-ctm-yellow-dark to-white h-[160px]' />
        </>
    )
}

export default NewsAndEvent