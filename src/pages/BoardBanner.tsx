import Link from 'next/link'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const BoardBanner = () => {
    return (
        <div className='relative h-[800px]'>
            <div className="z-10 absolute inset-0 bg-board-banner bg-cover bg-no-repeat">
            </div>
            <div className="z-20 absolute inset-0 bg-overlay-black opacity-25 w-full h-full"></div>

            {/* news slider*/}
            <div className="top-[150px] left-1/2 z-30 absolute w-full text-center text-white transform -translate-x-1/2">
                <p className='mb-5 text-[14px] leading-[100%]'>Explore the new additions</p>
                <h1 className='mb-10 text-header'>Let's Build with BOARD!</h1>
                <div className='inline-flex flex-col gap-[10px]'>
                    <Link href="/" className='inline-flex items-center gap-[10px] opacity-75 text-xl leading-5'>
                        <span>Explore Products</span>
                        <BsArrowRightShort />
                    </Link>
                    <hr className='bottom-line bg-white' />
                </div>
            </div>
            <div className='-bottom-[70px] z-50 absolute w-full text-center'>
                <span className='opacity-35 backgdrop-filter-10 font-bold text-[300px] text-white leading-[363px]'>BOARD</span>
            </div>
        </div >
    )
}

export default BoardBanner