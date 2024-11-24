import React from 'react'
import Image from 'next/image'

import Logo from '../../public/assets/logo/logo.png';

import FooterLeft from '../../public/assets/footer/left.png';
import FooterRight from '../../public/assets/footer/right.png';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='bg-linear-sky backdrop-blur-35 mix-blend-normal'>
      <div className="flex">
        {/* Left  Section*/}
        <div className='relative'>
          <Image src={FooterLeft} alt="Our Category" className='w-fit h-full' />
          <div className="absolute inset-0 flex flex-col justify-between p-10 pb-[46px]">
            <Image src={Logo} alt='logo' />
            <div className='text-white'>
              <p className='mb-4 text-sm'>Follow us</p>
              <div className='flex gap-[27px]'>
                <Link href=""><FaFacebook size={20} /></Link>
                <Link href=""><FaLinkedin size={20} /></Link>
                <Link href=""><FaTwitter size={20} /></Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right  Section*/}
        <div className='py-[40px] pr-[125px] pl-[55px] w-full h-full'>
          <div className='flex justify-between pb-[30px]'>
            {/* section 1 */}
            <div className='text-white'>
              <p className='mb-[15px] text-base leading-[26px]'>About</p>
              <div className='flex flex-col gap-[10px] opacity-75 text-sm'>
                <Link href="">About us</Link>
                <Link href="">Mission & Vision</Link>
                <Link href="">Directors</Link>
              </div>
            </div>
            {/* section 2 */}
            <div className='text-white'>
              <p className='mb-[15px] text-base leading-[26px]'>Products</p>
              <div className='flex flex-col gap-y-[10px] opacity-75 text-sm'>
                <Link href="">MDF</Link>
                <Link href="">HDF Flooring</Link>
                <Link href="">Particle Board</Link>
                <Link href="">HPL</Link>
                <Link href="">Doors</Link>
                <Link href="">All Products</Link>
              </div>
            </div>
            {/* section 3 */}
            <div className='text-white'>
              <p className='mb-[15px] text-base leading-[26px]'>About</p>
              <div className='flex flex-col gap-y-[10px] opacity-75 text-sm'>
                <Link href="">Contact</Link>
                <Link href="">Contact Us</Link>
                <Link href="">Career</Link>
                <Link href="">Product Query</Link>
              </div>
            </div>

            {/* section 4 */}
            <div className='text-white'>
              <p className='mb-[15px] text-base leading-[26px]'>Resources</p>
              <div className='flex flex-col gap-y-[10px] opacity-75 text-sm'>
                <Link href="">Application</Link>
                <Link href="">Installation Instructions</Link>
                <Link href="">House builder Support</Link>
                <Link href="">Merchants</Link>
                <Link href="">Architect Resources</Link>
                <Link href="">Case Studies</Link>
              </div>
            </div>
          </div>
          {/* Footer Bottom copyright */}
          <div className="flex justify-between items-center opacity-75 mt-14 text-white text-xs">
            <p>&copy;2024 BOARD multiboard industries LTD.</p>
            <p>Crafted by <Link href="">JOSS</Link></p>
            <div className='flex justify-between items-center gap-[10px]'>
              <Link href="">Terms and Conditions</Link>
              <span className='text-[#B2BBBE] text-xl'>•</span>
              <Link href="Privacy Policy">Terms and Conditions</Link>
            </div>
          </div>
        </div>
        {/* Right Top  */}
      </div>
    </div>
  )
}

export default Footer