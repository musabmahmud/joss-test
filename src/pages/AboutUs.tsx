import React from 'react'

import ArrowRight from '../../public/assets/arrow-right.png';
import Image from 'next/image';
import Link from 'next/link';

import background from '../../public/assets/about/right.png';
import { BsArrowRightShort } from 'react-icons/bs';

const AboutUs = () => {
    return (
        <div className='relative'>
            <div className='pt-[150px] pb-[182px] container-bg'>
                <div className='w-[670]'>
                    <h1 className='text-header'>Crafting the Future of Manufacturing</h1>
                </div>
                <div className='mt-[204px] w-[500px] text-base text-ctm-dark'>
                    <p className='opacity-60'>BOARD Multiboard Industry Ltd. was founded on September 29, 2021. It is a subsidiary of BOARD Group. The company was established by Someone, a top business pioneer in Bangladesh. After achieving great success in the xyz sector, he is now focusing on manufacturing various types of boards.</p>

                    <Link href="/" className='inline-flex relative items-center gap-3 opacity-75 pt-10 pb-3 text-ctm-dark text-xl leading-5'>
                        <div className='bottom-hr' />
                        <span>Inquiry now</span>
                        {/* <Image
                            src={ArrowRight}
                            alt="Picture of the author"
                        /> */}
                        <BsArrowRightShort size={25} />
                    </Link>
                </div>
            </div>
            {/* right  */}
            <div className='top-0 right-0 z-20 absolute h-full'>
                {/* mix-blend-normal backdrop-blur-[35px]*/}
                <Image
                    src={background}
                    className='lg:w-[505px] lg:h-[900px]'
                    alt="Picture of the author"
                />
            </div>
            <div className='top-0 right-0 z-10 absolute'>
                <div className='transform -translate-x-[252px] translate-y-[370px] -rotate-90'>
                    <h1 className='bg-clip-text bg-linear-gradient bg-linear-sky font-normal text-[150px] text-transparent leading-[100%] fill-transparent'>About us</h1>
                </div>

            </div>
        </div>
    )
}

export default AboutUs