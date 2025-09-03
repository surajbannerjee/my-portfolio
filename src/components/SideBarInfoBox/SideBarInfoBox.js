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
    // Contact info array for mapping
    const contactInfo = [
        {
            href: "mailto:hello@drake.design",
            className: "text-WhiteT text-[1.6rem]",
            labelClass: "email",
            label: "hello@drake.design",
        },
        {
            href: "#",
            className: "",
            labelClass: "address",
            label: "Based in Los Angeles, CA",
        },
    ];

    return (
        <div className='sidebar-info-box custom-container lg:py-0 py-[5rem] flex justify-center items-center'>
            <div className="left-sidebar bg-background flex flex-col gap-[1rem] justify-center items-center lg:fixed static xl:max-w-[380px] max-w-[400px] w-full h-auto top-1/5 left-[5rem] transform -translate-y-1.5 z-10 rounded-[2rem]">
                <Image height={1000} width={1000} className="me rounded-[5rem] h-[20rem] w-[20rem] object-cover mb-2 border-[10px] border-background relative z-[1]" src={ME} alt="Me" />
                <div className='backgroundGr flex flex-col gap-[1.6rem] w-full pt-[12rem] pb-[2rem] px-[2rem] mt-[-12rem] rounded-[3rem]'>
                    <div className='flex flex-col justify-center items-center gap-2 '>
                        <span className="name text-WhiteT font-heading font-medium text-[3rem]">Suraj <span className='text-secondary'>Banerjee</span></span>
                        <span className="role text-[1.6rem] font-heading font-medium">Web Designer</span>
                    </div>
                    {/* contact box with email and address icon */}
                    <div className="contact-box flex flex-col items-center justify-center gap-2">
                        {contactInfo.map((info, idx) => (
                            <Link href={info.href} className={info.className} key={idx}>
                                <span className={info.labelClass}>{info.label}</span>
                            </Link>
                        ))}
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
                        type='link'
                        btnText="Hire Me!"
                        href="#"
                        icon="akar-icons:person"
                    />
                </div>
            </div>
        </div>
    )
}

export default SideBarInfoBox
