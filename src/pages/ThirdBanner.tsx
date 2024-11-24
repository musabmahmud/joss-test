import Link from 'next/link'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Image from 'next/image';

import VideoLeft from '../../public/assets/thirdbanner/video.png';
import VideoRight from '../../public/assets/thirdbanner/image.png';

import Download from '../../public/assets/icons/download.png';
import Play from '../../public/assets/icons/play.png';


const ThirdBanner = () => {
    return (
        <div className='bg-ctm-gray'>
            <div className='bg-white py-[15px] container-bg'>
                <div className="flex justify-between py-[30px]">
                    {/* left section  */}
                    <div className='relative flex flex-col justify-between py-4 w-[500px]'>
                        <h1 className='font-semibold text-5xl text-ctm-dark leading-[120%]'>Order our products to build your dream.</h1>
                        <div className='inline-flex flex-col gap-[10px] border-ctm-dark py-[10px] border-b-[1px] border-opacity-25 w-fit text-ctm-dark'>
                            <Link href="/" className='inline-flex items-center gap-[10px] opacity-75 text-xl leading-5'>
                                <span>Quiry now</span>
                                <BsArrowRightShort />
                            </Link>
                        </div>
                    </div>
                    {/* right section */}
                    <div className="flex gap-[20px]">
                        {/* left*/}
                        <div className='relative rounded-[5px] overflow-hidden'>
                            <div className="z-10 absolute inset-0 bg-overlay-black opacity-25 w-full h-full" />
                            <div className="top-[109px] left-[109px] z-20 absolute bg-ctm-sky opacity-40 filter-blur-30 w-[225px] h-[225px]" />
                            <div className="top-5 right-5 z-30 absolute">
                                <Image src={Download}
                                    alt="Our Category" className='justify-end' />
                            </div>
                            <div className="bottom-[30px] left-5 z-30 absolute w-full text-left text-white">
                                <p className='opacity-50 text-sm'>Download</p>
                                <p className='text-2xl text-white'>Our catalog</p>
                            </div>
                            <Image src={VideoLeft}
                                alt="Our Category" className='w-[240px] h-[240px]' />
                        </div>
                        {/* right  */}

                        <div className='relative rounded-[5px] overflow-hidden'>
                            <div className="z-10 absolute inset-0 bg-overlay-linear-mix opacity-25 w-full h-full" />
                            <div className="z-10 absolute inset-0 bg-overlay-linear-mix opacity-25 w-full h-full" />
                            <div className="top-5 right-5 z-30 absolute">
                                <Image src={Play}
                                    alt="Our Category" className='justify-end' />
                            </div>
                            <div className="bottom-[30px] left-5 z-30 absolute w-full text-left text-white">
                                <p className='text-2xl text-white'>About BOARD</p>
                            </div>
                            <Image src={VideoRight}
                                alt="Our Category" className='w-[240px] h-[240px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdBanner