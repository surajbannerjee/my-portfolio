"use client"
import { Icon } from '@iconify/react'
import React from 'react'

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section sectionPadding custom-container">
            <div className="md:max-w-[100rem] w-full ml-auto">
                <span className="section-number flex gap-[0.8rem] items-center uppercase py-[1rem] text-white text-[1.6rem] font-medium px-[1.5rem] border-[1px] border-secondary w-[fit-content] rounded-full"><Icon icon="famicons:home-outline" /> contact</span>
                <div className="intro">
                    <h1>Welcome to My contact</h1>
                    <p>This is the contact section where I provide my contact information.</p>
                </div>
            </div>

        </section>
    )
}

export default ContactSection