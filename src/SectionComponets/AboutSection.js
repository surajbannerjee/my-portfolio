"use client"
import { Icon } from '@iconify/react'
import React from 'react'

const AboutSection = () => {
    return (
        <section id="about" className="about-section sectionPadding custom-container">
            <div className="md:max-w-[100rem] w-full ml-auto">
                <span className="section-number flex gap-[0.8rem] items-center uppercase py-[1rem] text-white text-[1.6rem] font-medium px-[1.5rem] border-[1px] border-secondary w-[fit-content] rounded-full"><Icon icon="famicons:home-outline" /> about</span>
                <div className="intro">
                    <h1>Crafting <span className="text-secondary">Experiences</span>, Not Just <span className="text-secondary">Websites </span></h1>

                    <div className="max-w-[80%]">
                        <p className="md:text-[2rem] text-gray text-[1.8rem]">I am a passionate Web Designer with hands-on experience in crafting responsive, user-friendly, and visually appealing websites. With a strong foundation in UI/UX principles, I specialize in transforming ideas into functional digital experiences that improve usability and engagement. I have worked with modern tools and frameworks such as Tailwind CSS, Bootstrap, React, WordPress, and Elementor, enabling me to deliver both creative and technically robust solutions.
                            My goal is to combine creativity with technology to design seamless web experiences that help businesses grow online.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection