
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const navLinks = [
    { href: "#home", icon: "fluent:home-28-regular", y: "1.3rem", x: "0", title: "Home" },
    { href: "#about", icon: "ix:about", y: "6rem", x: "0", title: "About" },
    { href: "#resume", icon: "qlementine-icons:resume-16", y: "11rem", x: "0", title: "Resume" },
    { href: "#skills", icon: "hugeicons:ai-idea", y: "16rem", x: "0", title: "Skills" },
    { href: "#portfolio", icon: "hugeicons:files-01", y: "21rem", x: "0", title: "Portfolio" },
    { href: "#contact", icon: "fluent:chat-mail-20-regular", y: "26rem", x: "2rem", title: "Contact" },
];


const Navbar = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [hoveredIdx, setHoveredIdx] = useState(null);


    // Use hovered index if hovering, else use active index
    const currentIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

    // Responsive: detect if mobile (width < 1024px)
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className='navbar lg:h-auto h-[6.5rem] lg:w-[7rem] w-auto lg:py-[1.2rem] py-0 lg:px-0 px-[1rem] fixed lg:bottom-1/2 bottom-[5rem] transform lg:translate-y-1/2 translate-y-[0] lg:translate-x-0 translate-x-1/2 lg:right-[5rem] right-1/2 bg-[#00060e4d] border-[1px] border-B shadow-[0_0_10px_#00fef521] rounded-full flex lg:flex-col flex-row justify-between items-center z-50 '>
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
                        <motion.span
                            className="customTooltip md:block hidden"
                            initial={false}
                            animate={hoveredIdx === idx ? { opacity: 1, y: -10 } : { opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            {link.title}
                        </motion.span>
                    </Link>
                );
            })}
            {/* Animated white circle with Framer Motion */}
            <motion.span
                className='bg-secondary w-[5rem] h-[5rem] flex justify-center items-center rounded-full absolute left-1/2 top-0'
                animate={
                    isMobile
                        ? { x: `calc(${currentIdx} * 5rem)`, y: 0 }
                        : { y: navLinks[currentIdx].y, x: '-50%' }
                }
                transition={{ type: 'linear', duration: 0.2 }}
                style={isMobile ? { left: 0, top: '50%', translateY: '-50%' } : { translateX: '-50%' }}
            />
        </div>
    );
}

export default Navbar