"use client"
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'

const RadialFloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    const radialItems = [
        {
            id: 1,
            icon: "gis:location-poi",
            href: "#contact",
            title: "Location",
            x: -70,
            y: 15,
            action: () => {
                // Scroll to contact section or open location
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
        },
        {
            id: 2,
            icon: "ri:phone-fill",
            href: "tel:+1234567890",
            title: "Phone",
            x: -60,
            y: -35,
            action: () => {
                // Open phone dialer
                window.open('tel:+1234567890')
            }
        },
        {
            id: 3,
            icon: "fluent:chat-mail-20-filled",
            href: "mailto:contact@example.com",
            title: "Email",
            x: -28,
            y: -70,
            action: () => {
                // Open email client
                window.open('mailto:contact@example.com')
            }
        },
        {
            id: 4,
            icon: "mage:whatsapp-filled",
            href: "https://linkedin.com",
            title: "WhatsApp",
            x: 20,
            y: -80,
            action: () => {
                // Open WhatsApp
                window.open('https://wa.me/1234567890', '_blank')
            }
        }
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0
        },
        visible: (item) => ({
            opacity: 1,
            scale: 1,
            x: item.x, // Use custom x position
            y: item.y, // Use custom y position
            transition: {
                delay: item.id * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 20
            }
        })
    }

    return (
        <div className="radial-fab fixed md:bottom-8 bottom-60 right-8 z-50">
            {/* Trigger Button */}
            <motion.button
                className="trigger-button w-[5rem] h-[5rem] bg-secondary rounded-full flex items-center justify-center text-background text-[2.2rem] shadow-lg relative z-10 cursor-pointer"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <Icon icon="mdi:plus" />
            </motion.button>

            {/* Radial Menu Items */}
            <AnimatePresence>
                {isOpen && (
                    <ul className="radial-menu absolute top-0 left-0">
                        {radialItems.map((item, index) => (
                            <motion.li
                                key={item.id}
                                className="radial-item absolute top-0 left-0"
                                custom={item}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <motion.button
                                    className="cursor-pointer w-[4rem] h-[4rem] bg-background border border-secondary rounded-full flex items-center justify-center text-secondary text-[2.2rem] hover:bg-secondary hover:text-background transition-colors duration-200 shadow-md"
                                    onClick={() => {
                                        item.action()
                                        setIsOpen(false)
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    title={item.title}
                                >
                                    <Icon icon={item.icon} />
                                </motion.button>
                            </motion.li>
                        ))}
                    </ul>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            {/* <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed  bg-transparent -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence> */}
        </div>
    )
}

export default RadialFloatingButton
