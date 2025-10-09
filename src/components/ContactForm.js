import React, { useState } from 'react';
import NeonButton from './NeonButton';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    'Web Design',
    'React Native App Development',
    'Web Development',
    'UI/UX Design',
    'WordPress',
    "Webflow",
    'Web App Development',
    'Other',
];

const ContactForm = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [showPopup, setShowPopup] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission (e.g., send to API)
    //     setShowPopup(true);
    //     setTimeout(() => setShowPopup(false), 3000); // Hide after 3s
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
            .then(res => res.json())
            .then(data => {
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
            })
            .catch(err => {
                console.error(err);
            });

        setForm({
            fullName: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        });
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className=" bg-transparent backdrop-blur-sm md:px-[5rem] px-[3rem] md:py-[5rem] py-[3rem] rounded-[3rem] shadow-[0_0_20px_#00fef521] flex flex-col gap-[2.6rem] mt-[7rem]">
                <div className='flex flex-col md:flex-row gap-[2rem]'>
                    <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full p-4 rounded-xl bg-gray-900 text-WhiteT border border-gray-700 focus:border-secondary outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full p-4 rounded-xl bg-gray-900 text-WhiteT border border-gray-700 focus:border-secondary outline-none"
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-[2rem]'>
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full p-4 rounded-xl bg-gray-900 text-WhiteT border border-gray-700 focus:border-secondary outline-none"
                    />
                    {/* Custom select box for service */}
                    <div className="w-full relative">
                        <button
                            type="button"
                            className={`w-full mySelect p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-secondary outline-none flex justify-between items-center cursor-pointer ${form.service ? 'text-WhiteT' : 'text-[#888c94]'}`}
                            onClick={() => setDropdownOpen((open) => !open)}
                        >
                            {form.service || 'Choose Service'}
                            <span className="ml-2 text-secondary">
                                <Icon icon="pepicons-pop:angle-down-circle" />
                            </span>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute left-0 top-full w-full bg-gray-900 border border-gray-700 rounded-xl mt-2 z-10 shadow-lg max-h-[20rem] overflow-y-auto">
                                {services.map((service, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 cursor-pointer hover:bg-secondary hover:text-black ${form.service === service ? 'bg-secondary text-black' : 'text-WhiteT'}`}
                                        onClick={() => {
                                            setForm({ ...form, service });
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {service}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full p-4 rounded-xl bg-gray-900 text-WhiteT border border-gray-700 focus:border-secondary outline-none"
                />
                <button
                    type="submit"
                    className="submitButton flex items-center justify-center text-center gap-2 rounded-[1.2rem] px-[3rem] py-[1.6rem] font-medium text-[2rem] leading-[1.2] w-fit mt-[2rem]"
                >
                    Send Message
                </button>
            </form>
            {/* Thank You Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7, y: 80 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.7, y: 80 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-lg"
                    >
                        <motion.div
                            initial={{ rotate: -8 }}
                            animate={{ rotate: 0 }}
                            exit={{ rotate: 8 }}
                            transition={{ duration: 0.5 }}
                            className="bg-background rounded-[2.5rem] shadow-[0_0_40px_var(--color-secondary)] px-[5rem] py-[4rem] flex flex-col items-center gap-4 border-2 border-secondary"
                        >
                            <Icon icon="mdi:check-circle-outline" className="text-secondary text-[7rem] mb-2" />
                            <h3 className="text-[3rem] font-bold text-secondary mb-2">Thank You!</h3>
                            <p className="text-WhiteT text-[1.8rem] text-center">Your message has been sent.<br />I will get back to you soon.</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;