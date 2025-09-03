"use client"
import { Icon } from '@iconify/react'
import React from 'react'
import { motion } from 'framer-motion'
import ProgressBar from '@/components/ProgressBar'
import { CSS_SVG, HTML_SVG, JS_SVG, MUI_SVG, REACT_SVG, SASS_SVG, TAILWIND_SVG, WEBFLOW_SVG, WORDPRESS_SVG } from '@/constants/images'
import Image from 'next/image'

const SkillsSection = () => {
    // Sample skill images/icons (replace with your own)
    const skillImages = [
        HTML_SVG,
        CSS_SVG,
        JS_SVG,
        REACT_SVG,
        SASS_SVG,
        WORDPRESS_SVG,
        MUI_SVG,
        WEBFLOW_SVG,
        TAILWIND_SVG
    ];

    // Duplicate images for seamless infinite scroll
    const sliderImages = [...skillImages, ...skillImages];

    return (
        <section id="skills" className="skills-section sectionPadding custom-container">
            <div className="csWidth w-full ml-auto">
                <motion.span initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="section-number flex gap-[0.8rem] mb-[2.5rem] items-center uppercase py-[1rem] text-white text-[1.6rem] font-medium px-[1.5rem] border-[1px] border-secondary w-[fit-content] rounded-full">
                    <Icon icon="ix:about" /> my skills
                </motion.span>
                <div className="intro mb-[5rem]">
                    <motion.h2 initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        Where My Expertise <span className="text-secondary">Meets Your Vision</span>
                    </motion.h2>
                </div>
                {/* skills slider */}
                <div className="overflow-hidden skillsouter w-full py-[5rem] relative">
                    <motion.div
                        className="flex gap-12"
                        animate={{ x: [0, -sliderImages.length * 80 / 1] }}
                        transition={{
                            repeat: Infinity,
                            // repeatType: "loop",
                            duration: 20,
                            ease: "linear"
                        }}
                        style={{ width: 'max-content' }}
                    >
                        {sliderImages.map((src, idx) => (
                            <Image
                                height={500}
                                width={500}
                                key={idx}
                                src={src}
                                alt="skill"
                                className="w-[10rem] h-[10rem] object-contain rounded-full border-2 border-secondary  shadow-[0_0_20px_rgb(0,255,246,0.8)]"
                                draggable={false}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection