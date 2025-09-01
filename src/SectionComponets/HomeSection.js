"use client"
import React, { useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react'
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ROUND_TEXT } from "@/constants/images";

const TypingEffect = ({
    words = ["Web Designer", "UI/Wordpress Developer"],
    delayTypingChar = 120,
    delayErasingText = 80,
    delayTypingText = 1000,
}) => {
    const [displayed, setDisplayed] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const spanRef = useRef(null);

    useEffect(() => {
        let typingTimeout;
        let erasingTimeout;
        let nextTimeout;

        if (isTyping) {
            if (charIndex < words[wordIndex].length) {
                typingTimeout = setTimeout(() => {
                    setDisplayed((prev) => prev + words[wordIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                    gsap.fromTo(spanRef.current, { x: 10 }, { x: 0, duration: 0.18, ease: "power2.out" });
                }, delayTypingChar);
            } else {
                nextTimeout = setTimeout(() => setIsTyping(false), delayTypingText);
            }
        } else {
            if (charIndex > 0) {
                erasingTimeout = setTimeout(() => {
                    setDisplayed(words[wordIndex].substring(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                    gsap.fromTo(spanRef.current, { x: 0 }, { x: -10, duration: 0.18, ease: "power2.in" });
                }, delayErasingText);
            } else {
                setIsTyping(true);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }
        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(erasingTimeout);
            clearTimeout(nextTimeout);
        };
    }, [
        isTyping,
        charIndex,
        wordIndex,
        words,
        delayTypingChar,
        delayErasingText,
        delayTypingText,
    ]);

    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setShowCursor((v) => !v);
        }, 500);
        return () => clearInterval(cursorBlink);
    }, []);

    return (
        <span className="typing-effect text-secondary">
            <h1 ref={spanRef}>{displayed} <span style={{ fontWeight: "bold", visibility: showCursor ? "visible" : "hidden" }}>|</span></h1>

        </span>
    );
};

const HomeSection = () => {
    const roundTextRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        if (roundTextRef.current) {
            gsap.to(roundTextRef.current, {
                rotate: 360,
                duration: 8,
                repeat: -1,
                ease: "linear",
                transformOrigin: "50% 50%"
            });
        }
        if (arrowRef.current) {
            gsap.to(arrowRef.current, {
                y: -20,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }
    }, []);

    return (
        <section id="home" className="home-section sectionPadding custom-container">
            <div className="md:max-w-[100rem] w-full ml-auto">
                <span className="section-number flex gap-[0.8rem] items-center uppercase py-[1rem] text-white text-[1.6rem] font-medium px-[1.5rem] border-[1px] border-secondary w-[fit-content] rounded-full"><Icon icon="famicons:home-outline" /> Introduce</span>
                <div className="intro mt-[2rem]">
                    <span className="mb-[4rem] block">
                        <span className='text-secondary text-[1.6rem] font-medium'>I AM</span>
                        <h1 className="" >Ralph Edwards, a</h1>
                        <TypingEffect text="Web Designer" speed={120} />
                    </span>
                    <div className="max-w-[70%]">
                        <p className="md:text-[2.2rem] text-[1.8rem]">I want to build my career with a leading corporate of hi-tech environment with committed & dedicated people, which will help me to explore myself fully and realize my potential. I am a quick learner and have the ability to work under pressure to meet deadlines through effective time management.</p>
                    </div>

                </div>
                <div className="flex justify-end items-center mt-[-10rem]">
                    <Link href="#about" className="relative h-[17rem] w-[17rem] flex justify-center items-center border-1 border-B rounded-full  transition-all duration-300 ease-in-out">
                        <span ref={arrowRef} className="text-secondary text-[3rem] font-medium absolute top-1/2 left-1/2.2 transform -translate-x-1/2 -translate-y-1/2"><Icon icon="line-md:arrow-down" /></span>
                        <Image ref={roundTextRef} src={ROUND_TEXT} alt="Round Text" height={700} width={700} className="w-[88%] h-[88%] object-contain rounded-full" />
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default HomeSection