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
            x: 35,
            y: 130,
            action: () => {
                // Scroll to contact section or open location
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
        },
        {
            id: 2,
            icon: "ri:phone-fill",
            href: "tel:9609618271",
            title: "Phone",
            x: 15,
            y: 85,
            action: () => {
                // Open phone dialer
                window.open('tel:9609618271')
            }
        },
        {
            id: 3,
            icon: "fluent:chat-mail-20-filled",
            href: "mailto:surajbanerjee255@gmail.com",
            title: "Email",
            x: 25,
            y: 35,
            action: () => {
                window.open('mailto:surajbanerjee255@gmail.com')
            }
        },
        {
            id: 4,
            icon: "mage:whatsapp-filled",
            href: "https://wa.me/9609618271",
            title: "WhatsApp",
            x: 70,
            y: 10,
            action: () => {
                // Open WhatsApp
                window.open('https://wa.me/9609618271', '_blank')
            }
        }
    ]

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const handleItemClick = (action) => {
        action()
        // Add a small delay before closing for smoother UX
        setTimeout(() => {
            setIsOpen(false)
        }, 150)
    }

    const itemVariants = {
        hidden: (item) => ({
            transition: {
                damping: 50
            }
        }),
        visible: (item) => ({
            transition: {
                damping: 50
            }
        }),
        exit: (item) => ({
            transition: {
                delay: (4 - item.id) * 0.05,
                duration: 0.5,
                ease: "easeInOut"
            }
        })
    }

    return (
        <div className="radial-fab fixed md:bottom-20 bottom-60 right-8 z-50">
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
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.ul
                        className="radial-menu bg-transparent h-[20rem] w-[20rem] absolute top-[-8rem] left-[-7rem] rounded-full"
                        initial={{ rotate: -40, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                            opacity: { duration: 0.3 }
                        }}
                    >
                        {radialItems.map((item, index) => (
                            <motion.li
                                key={item.id}
                                className="radial-item absolute"
                                style={{
                                    transform: `translate(${item.x}px, ${item.y}px)`
                                }}
                                custom={item}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.button
                                    className="cursor-pointer w-[4rem] h-[4rem] bg-background border border-secondary rounded-full flex items-center justify-center text-secondary text-[2.2rem] hover:bg-secondary hover:text-background transition-colors duration-200 shadow-md"
                                    onClick={() => handleItemClick(item.action)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    title={item.title}
                                >
                                    <Icon icon={item.icon} />
                                </motion.button>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

        </div>
    )
}

export default RadialFloatingButton
