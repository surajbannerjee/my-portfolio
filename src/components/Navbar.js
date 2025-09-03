
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const navLinks = [
    { href: "#home", icon: "fluent:home-28-regular", y: "1.3rem" },
    { href: "#about", icon: "ix:about", y: "6rem" },
    { href: "#resume", icon: "qlementine-icons:resume-16", y: "11rem" },
    { href: "#skills", icon: "hugeicons:ai-idea", y: "16rem" },
    { href: "#portfolio", icon: "hugeicons:files-01", y: "21rem" },
    { href: "#contact", icon: "fluent:chat-mail-20-regular", y: "26rem" },
];


const Navbar = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [hoveredIdx, setHoveredIdx] = useState(null);

    // Use hovered index if hovering, else use active index
    const currentIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

    return (
        <div className='navbar h-auto w-[7rem] py-[1.2rem] fixed top-1/2 transform -translate-y-1/2 right-[5rem] bg-background border-[1px] border-[#fff] rounded-full flex flex-col justify-between items-center z-50 '>
            {navLinks.map((link, idx) => {
                const isActive = hoveredIdx !== null ? hoveredIdx === idx : activeIdx === idx;
                return (
                    <Link
                        href={link.href}
                        className={`w-[5rem] h-[5rem] ${isActive ? 'text-background' : 'text-white'} flex justify-center items-center text-[2.6rem] relative z-[1]`}
                        key={idx}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        onClick={() => setActiveIdx(idx)}
                    >
                        <Icon icon={link.icon} />
                    </Link>
                );
            })}
            {/* Animated white circle with Framer Motion */}
            <motion.span
                className='bg-white w-[5rem] h-[5rem] flex justify-center items-center rounded-full absolute left-1/2 top-0'
                animate={{ y: navLinks[currentIdx].y }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                style={{ translateX: '-50%' }}
            />
        </div>
    );
}

export default Navbar