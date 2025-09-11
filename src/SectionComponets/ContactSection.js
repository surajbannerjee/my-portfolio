"use client"
import { Icon } from '@iconify/react'
import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section sectionPadding custom-container pb-[12rem]!">
            <div className="csWidth w-full ml-auto">
                <div className="csWidth w-full ml-auto">
                    <motion.span initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                        }} className="section-number flex gap-[0.8rem] mb-[2.5rem] items-center uppercase py-[1rem] text-white text-[1.6rem] font-medium px-[1.5rem] border-[1px] border-secondary w-[fit-content] rounded-full"><Icon icon="ix:about" /> Contact</motion.span>
                    <div className="intro flex flex-col gap-[4rem]">
                        <motion.h2 initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                            }}>Let&apos;s Work  <span className="text-secondary">Together!</span></motion.h2>
                    </div>
                    <ContactForm />
                </div>
            </div>

        </section>
    )
}

export default ContactSection