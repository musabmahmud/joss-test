"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../public/assets/logo/logo.png';

import Image from 'next/image';
// import { FiMenu } from 'react-icons/fi'
// import NavLogo from '../../public/assets/logo.png'

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className={`flex justify-between z-10 items-center py-[30px] text-white ${open ? "hidden" : "block"}`}>
            <ul className='flex space-x-[70px]'>
                <li>
                    <Link href="#Company">Company</Link>
                </li>
                <li>
                    <Link href="#Products">Products</Link>
                </li>
                <li>
                    <Link href="#LookBook">LookBook</Link>
                </li>
            </ul>
            {/* // <Link href="/">
            //     <Image
            //         src={Logo}
            //         height={50}
            //         alt="Picture of the author"
            //     />
            // </Link> */}
            <ul className='flex space-x-[70px]'>
                <li>
                    <Link href="#Sustainability">Sustainability</Link>
                </li>
                <li>
                    <Link href="#Media">Media</Link>
                </li>
                <li>
                    <Link href="#Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar