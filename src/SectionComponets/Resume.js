"use client"
import { Icon } from '@iconify/react'
import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
    {
        year: "2023 - Present",
        title: "UI/WordPress Developer",
        company: "Websadroit, Kolkata",
    },
    {
        year: "2022 - 2023",
        title: "Web Designer",
        company: "Technosys Future, New Delhi",
    },
    {
        year: "2017 - 2019",
        title: "ITI (Fitter Trade)",
        company: "Kalpana Foundation Pvt. ITI, Bardhaman",
    },
    {
        year: "2015",
        title: "Higher Secondary (Arts)",
        company: "Patrasayer Bamira Gurudas Institution",
    },
    {
        year: "2013",
        title: "Madhyamik",
        company: "Krishnanagar High School, Bankura",
    },
];

const Resume = () => {
    return (
        <section id="resume" className="about-section sectionPadding custom-container">
            <div className="csWidth w-full ml-auto">
                <motion.span initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                    }} className="section-number flex gap-[0.8rem] mb-[2.5rem] items-center uppercase py-[1rem] text-white text-[1.6rem] font-medium px-[1.5rem] border-[1px] border-secondary w-[fit-content] rounded-full"><Icon icon="ix:about" /> Resume</motion.span>
                <div className="intro flex flex-col gap-[4rem] pb-[5rem]">
                    <motion.h2 initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}> Education & <span className="text-secondary">Experience</span></motion.h2>


                </div>
                {/* Timeline container */}
                <div className="relative mt-[5rem]">
                    {/* Center vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, var(--color-secondary), var(--color-secondary), transparent)' }} />

                    <ul className="space-y-16">
                        {timeline.map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                    }`}
                            >
                                {/* Dot */}
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-secondary shadow-[0_0_20px_rgb(0,255,246,0.8)] border-4 border-B z-10"
                                />

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`relative w-full md:w-[40%] bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-secbg-secondary hover:shadow-[0_0_30px_rgb(0,255,246,0.6)] ${idx % 2 === 0 ? "md:ml-12" : "md:mr-12"
                                        }`}
                                >
                                    <span className="text-[1.6rem] font-semibold text-secbg-secondary">
                                        {item.year}
                                    </span>
                                    <h3 className="my-2 text-[2rem] md:text-[2.4rem] font-bold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-[1.6rem]">{item.company}</p>
                                </motion.div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>

    );
};

export default Resume;
