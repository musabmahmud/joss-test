import Image from 'next/image'
import React from 'react'

import card1 from '../../public/assets/card/1.png';
import card2 from '../../public/assets/card/2.png';
import card3 from '../../public/assets/card/3.png';


const FirstBanner = () => {
    return (
        <div className="relative bg-linear-sky backdrop-blur-[35px] overflow-visible mix-blend-normal">
            <div className="right-0 bottom-0 z-10 absolute bg-first-banner bg-contain bg-no-repeat bg-right-top w-full h-[776px] transform -translate-y-[138px]" />
            <div className='-top-[238px] left-[135px] z-30 absolute flex flex-row gap-[30px]'>
                <div className='b1-card-body'>
                    <Image src={card1} alt='Natural' />
                    <div>
                        <p className='text-2xl'>Natural Aesthetics</p>
                        <p className='opacity-60'>Our boards showcase wood&apos;s inherent beauty, offering a range of finishes that celebrate nature&apos;s textures and patterns in your designs.</p>
                    </div>
                </div>
                <div className='b1-card-body'>
                    <Image src={card2} alt='Natural' />
                    <div>
                        <p className='text-2xl'>Sustainable Sourcing</p>
                        <p className='opacity-60'>Our MDF boards start with responsibly harvested wood, ensuring forests thrive while we create. We balance resource use with environmental stewardship.</p>
                    </div>
                </div>
                <div className='b1-card-body'>
                    <Image src={card3} alt='Natural' />
                    <div>
                        <p className='text-2xl'>Eco-Friendly Production</p>
                        <p className='opacity-60'>Advanced manufacturing processes minimize waste and energy consumption, reducing our carbon footprint without compromising on quality or durability.</p>
                    </div>
                </div>
            </div>
            <div className='pt-[150px] pb-[136px] container-bg'>
                <div className="flex flex-col justify-center items-start w-[870px] text-white">
                    <h1 className='text-header'>
                        Where Quality Meets Sustainability
                    </h1>
                    <p className='mt-[30px] text-base'>Emphasise the transformation of raw materials into refined products</p>
                </div>
            </div>
        </div>
    )
}

export default FirstBanner