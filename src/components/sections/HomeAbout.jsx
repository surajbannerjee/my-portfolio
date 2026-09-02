"use client";

import React from "react";
import Image from "next/image";
import AnimatedButton from "@/components/common/AnimatedButton";
import SplitTextReveal from "@/components/common/SplitTextReveal";
import {
  SiFigma,
  SiReact,
  SiWordpress,
  SiNextdotjs,
} from "react-icons/si";
import { ME } from "@/constant";

export default function HomeAbout() {
  const pillars = [
    {
      icon: <SiFigma size={34} className="text-[#F24E1E]" />,
      title: "Figma to Code Precision",
      description:
        "Pixel-perfect translation of complex Figma and Adobe XD design systems into clean, semantic, and maintainable React/Next.js components.",
      tag: "100% Fidelity",
    },
    {
      icon: <SiNextdotjs size={34} className="text-[var(--t-bright)]" />,
      title: "Next.js & React Engineering",
      description:
        "Building scalable, high-performance web applications using Tailwind CSS, Material UI, and modern React 18+ architecture for 40% faster UX.",
      tag: "High Performance",
    },
    {
      icon: <SiWordpress size={34} className="text-[#21759B]" />,
      title: "Custom WordPress & ACF",
      description:
        "Developing tailored WordPress themes, Elementor Pro templates, and ACF dynamic blocks for effortless client content management.",
      tag: "CMS Flexibility",
    },
    {
      icon: <SiReact size={34} className="text-[#61DAFB]" />,
      title: "Interactive UX & GSAP",
      description:
        "Implementing fluid micro-animations, scroll-driven interactions, and mobile-first responsive behaviors across all devices.",
      tag: "Modern UX",
    },
  ];

  return (
    <div id="about" className="mxd-section padding-hero-09">
      <div className="mxd-container grid-container">
        {/* Section Header */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <SplitTextReveal as="h2" className="reveal-type">
                      About Me
                    </SplitTextReveal>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up" style={{ fontSize: "16px" }}>Frontend UI Developer</p>
                    <p className="anim-uni-in-up" style={{ fontSize: "16px" }}>WordPress &amp; UI Developer</p>
                    <p className="anim-uni-in-up" style={{ fontSize: "16px" }}>Kolkata, India</p>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <AnimatedButton
                      href="/about-me"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      caption="Full Biography"
                      iconClass="ph-bold ph-arrow-up-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mxd-block">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 md:gap-6 items-stretch">
            {/* Left Column: Bio & Highlights */}
            <div className="xl:col-span-5 h-full">
              <div className="home-about-card p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[var(--accent)] shrink-0">
                      <Image
                        src={ME}
                        alt="Suraj Banerjee"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--t-bright)] mb-1" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                        Suraj Banerjee
                      </h3>
                      <p className="text-[var(--accent)] font-medium" style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
                        Frontend UI &amp; WordPress Developer
                      </p>
                    </div>
                  </div>

                  <p className="font-semibold text-[var(--t-bright)] mb-3 leading-snug" style={{ fontSize: "clamp(16px, 1.6vw, 19px)" }}>
                    Bridging the gap between creative Figma UI designs and high-performance React &amp; Next.js web applications.
                  </p>

                  <p className="text-[var(--t-muted)] mb-4 leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 16px)", lineHeight: "1.65" }}>
                    With over 3 years of hands-on experience, I specialize in building responsive, blazing-fast interfaces with <strong className="text-[var(--t-bright)] font-semibold">React.js, Next.js, Tailwind CSS, and Material UI</strong>. I also create custom WordPress solutions with Elementor Pro and ACF that give clients seamless digital workflows.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--st-muted)] mt-4">
                  <AnimatedButton
                    href="/about-me"
                    className="btn btn-anim btn-default btn-accent slide-right-up"
                    caption="Know More"
                    iconClass="ph-bold ph-arrow-up-right"
                  />
                  <AnimatedButton
                    href="/img/pdf/CV.pdf"
                    download="Suraj_Banerjee_CV.pdf"
                    id="home-about-cv"
                    className="btn btn-anim btn-default btn-outline slide-down"
                    caption="Download CV"
                    iconClass="ph-bold ph-arrow-down"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Key Pillars Grid */}
            <div className="xl:col-span-7 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 h-full">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="home-about-card p-5 md:p-6 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div className="home-about-iconbox p-3 rounded-2xl flex items-center justify-center">
                          {pillar.icon}
                        </div>
                        <span className="home-about-tag">
                          {pillar.tag}
                        </span>
                      </div>
                      <h4 className="font-bold text-[var(--t-bright)] mb-2" style={{ fontSize: "clamp(16px, 1.6vw, 19px)" }}>
                        {pillar.title}
                      </h4>
                      <p className="text-[var(--t-muted)] leading-relaxed mb-0" style={{ fontSize: "clamp(13px, 1.3vw, 15px)", lineHeight: "1.6" }}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
