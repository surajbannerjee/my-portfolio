"use client"
import { ME } from '@/constants/images'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import NeonButton from '../NeonButton'

const SideBarInfoBox = () => {
    const socialLinks = [
        {
            href: '#',
            icon: 'hugeicons:facebook-02',
            className: 'hover:border-secondary hover:text-secondary',
        },
        {
            href: '#',
            icon: 'radix-icons:instagram-logo',
            className: '',
        },
        {
            href: '#',
            icon: 'meteor-icons:linkedin',
            className: '',
        },
    ];
    return (
        <div className='sidebar-info-box custom-container lg:py-0 py-[5rem] flex justify-center items-center'>
            <div className="left-sidebar flex flex-col gap-[1rem] justify-center items-stretch lg:fixed static max-w-[450px] w-full h-auto top-1/5 left-[2rem] transform -translate-y-1.5 border border-gray-300 p-[3rem] z-10 rounded-[2rem]">
                <div className="sidebar-header flex items-center justify-between pb-2">
                    <span className='font-medium text-[3.2rem] uppercase'>Drake</span>
                    <span className='text-[1.8rem]'>Web Designer</span>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image height={1000} width={1000} className="me rounded-full h-[22rem] w-[22rem] object-cover mb-2" src={ME} alt="Me" />
                    <span className="email text-WhiteT text-[1.8rem]">hello@drake.design</span>
                    <span className="address text-[1.8rem]">Base in Los Angeles, CA</span>
                </div>
                <ul className="social-profile flex items-center justify-center gap-6 py-[1rem]">
                    {socialLinks.map((link, idx) => (
                        <a
                            key={idx}
                            className="h-[4rem] w-[4rem] text-[2rem] border-1 rounded-full border-white transition all duration-300 ease-in-out flex justify-center items-center hover:border-secondary hover:text-secondary"
                            href={link.href}
                        >
                            <Icon icon={link.icon} />
                        </a>
                    ))}
                </ul>

                <NeonButton
                    btnText="Hire Me!"
                    href="#"
                    icon="akar-icons:person"
                />
            </div>
        </div>
    )
}

export default SideBarInfoBox
