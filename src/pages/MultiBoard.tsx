import Image from 'next/image'
import React from 'react'
import slider1 from '../../public/assets/multiboard/1.png';

import ArrowRight from '../../public/assets/arrow-right.png';
// import { BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';

const MultiBoard = () => {
    return (
        <>
            <div className='bg-gradient-to-t from-ctm-yellow-dark to-white h-[200px]' />
            <div className='relative bg-ctm-yellow-dark'>
                <div className='pt-100 pb-[112px] container-bg'>
                    <h1 className='text-header'>Expect elegance with <br /><span className='text-ctm-sky'>BOARD’s</span> multi-boards</h1>
                    <div className="relative">
                        <div className="inline-flex flex-col justify-center items-center gap-4 pt-20 overflow-auto">
                            <Image
                                src={slider1}
                                height={50}
                                width={50}
                                alt="Picture of the author"
                                className='border-1 border-ctm-dark rounded-full'
                            />
                            <Image
                                src={slider1}
                                height={50}
                                width={50}
                                alt="Picture of the author"
                                className='border-1 border-ctm-dark rounded-full'
                            />
                            <Image
                                src={slider1}
                                height={50}
                                width={50}
                                alt="Picture of the author"
                                className='border-1 border-ctm-dark rounded-full'
                            />
                            <Image
                                src={slider1}
                                height={100}
                                width={100}
                                className='border-4 border-ctm-sky rounded-full'
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='bottom-[47px] left-[100px] z-10 absolute border-[1.5px] border-ctm-sky w-full h-auto'></div>
                        <div className='bottom-[44px] left-[460px] z-30 absolute bg-ctm-sky rounded-full w-2 h-2'></div>
                        <div className="top-[80px] bg-multiboard-right left-[370px] z-20 absolute bg-no-repeat bg-center w-full h-[750px]" />
                    </div>
                    <div className='pt-20 w-[326px]'>
                        <h3 className='mb-5 font-semibold text-2xl leading-8'>Superior Durability</h3>
                        <span className='mb-10'>Enjoy a long-lasting performance. Our boards are designed to withstand everyday wear and tear.</span>
                        <br />
                        <Link href="/" className='inline-flex relative items-center gap-3 opacity-75 pt-10 pb-3 text-ctm-dark text-xl leading-5'>
                            <div className='bottom-hr border-ctm-dark' />
                            <span>Inquiry now</span>
                            {/* <Image
                                src={ArrowRight}
                                alt="Picture of the author"
                            /> */}
                            <BsArrowRightShort size={25} />
                        </Link>
                    </div>
                    <div className="right-0 bottom-0 left-0 z-10 absolute bg-multiboard-bg bg-no-repeat bg-bottom w-full h-full" />
                </div>
            </div>
            <div className='bg-gradient-to-b from-ctm-yellow-dark to-white h-[200px]' />
        </>
    )
}

export default MultiBoard