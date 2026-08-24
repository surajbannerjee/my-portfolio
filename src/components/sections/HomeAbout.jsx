"use client";

import React from "react";
import Image from "next/image";
import AnimatedButton from "@/components/common/AnimatedButton";
import CountUpNumber from "@/components/common/CountUpNumber";
import SplitTextReveal from "@/components/common/SplitTextReveal";
import {
  SiFigma,
  SiReact,
  SiWordpress,
  SiNextdotjs,
} from "react-icons/si";

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
      icon: <SiNextdotjs size={34} className="text-white" />,
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
    <div id="about" className="mxd-section padding-default">
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
          <div className="container-fluid px-0">
            <div className="row gx-0 gy-4 align-items-stretch">
              {/* Left Column: Bio & Highlights */}
              <div className="col-12 col-xl-5 mxd-grid-item no-margin mb-4 mb-xl-0">
                <div className="bg-[#141414]/90 border border-white/10 radius-m p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-lime-400/40 shrink-0">
                        <Image
                          src="https://res.cloudinary.com/drrw18aos/image/upload/v1787163087/ChatGPT_Image_Aug_19_2026_11_41_05_PM_dtr5z4.png"
                          alt="Suraj Banerjee"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                          Suraj Banerjee
                        </h3>
                        <p className="text-lime-400 font-medium" style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
                          Frontend UI &amp; WordPress Developer
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold text-white/95 mb-3 leading-snug" style={{ fontSize: "clamp(16px, 1.6vw, 19px)" }}>
                      Bridging the gap between creative Figma UI designs and high-performance React &amp; Next.js web applications.
                    </p>

                    <p className="text-neutral-400 mb-4 leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 16px)", lineHeight: "1.65" }}>
                      With over 3 years of hands-on experience, I specialize in building responsive, blazing-fast interfaces with <strong>React.js, Next.js, Tailwind CSS, and Material UI</strong>. I also create custom WordPress solutions with Elementor Pro and ACF that give clients seamless digital workflows.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex flex-wrap gap-3 pt-3 border-t border-white/10">
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

              {/* Right Column: Key Pillars */}
              <div className="col-12 col-xl-7">
                <div className="container-fluid p-0">
                  <div className="row g-3">
                    {pillars.map((pillar, idx) => (
                      <div key={idx} className="col-12 col-md-6 mxd-grid-item no-margin">
                        <div className="bg-[#141414]/90 border border-white/10 hover:border-lime-400/50 radius-m p-4 h-100 d-flex flex-column justify-content-between transition-all duration-300 hover:bg-[#191919]">
                          <div>
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <div className="p-3 rounded-2xl bg-black/50 border border-white/10">
                                {pillar.icon}
                              </div>
                              <span className="tag tag-default text-xs font-semibold">
                                {pillar.tag}
                              </span>
                            </div>
                            <h4 className="font-bold text-white mb-2" style={{ fontSize: "clamp(16px, 1.6vw, 19px)" }}>
                              {pillar.title}
                            </h4>
                            <p className="text-neutral-400 leading-relaxed" style={{ fontSize: "clamp(13px, 1.3vw, 15px)", lineHeight: "1.6" }}>
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mxd-block pt-4">
          <div className="container-fluid px-0">
            <div className="row gx-3 gy-3">
              <div className="col-6 col-md-3 mxd-grid-item no-margin">
                <div className="bg-[#141414]/90 border border-white/10 radius-m p-4 text-center">
                  <div className="d-flex justify-content-center">
                    <CountUpNumber
                      end={3}
                      suffix="+"
                      id="home-stat-1"
                      className="mxd-counter__number mxd-stats-number xsmall"
                    />
                  </div>
                  <p className="font-medium text-neutral-300 mt-2" style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
                    Years Experience
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3 mxd-grid-item no-margin">
                <div className="bg-[#141414]/90 border border-white/10 radius-m p-4 text-center">
                  <div className="d-flex justify-content-center">
                    <CountUpNumber
                      end={70}
                      suffix="+"
                      id="home-stat-2"
                      className="mxd-counter__number mxd-stats-number xsmall"
                    />
                  </div>
                  <p className="font-medium text-neutral-300 mt-2" style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
                    Completed Projects
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3 mxd-grid-item no-margin">
                <div className="bg-[#141414]/90 border border-white/10 radius-m p-4 text-center">
                  <div className="d-flex justify-content-center">
                    <CountUpNumber
                      end={40}
                      suffix="%"
                      id="home-stat-3"
                      className="mxd-counter__number mxd-stats-number xsmall"
                    />
                  </div>
                  <p className="font-medium text-neutral-300 mt-2" style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
                    UX Speed Boost
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3 mxd-grid-item no-margin">
                <div className="bg-[#141414]/90 border border-white/10 radius-m p-4 text-center">
                  <div className="d-flex justify-content-center">
                    <CountUpNumber
                      end={100}
                      suffix="%"
                      id="home-stat-4"
                      className="mxd-counter__number mxd-stats-number xsmall"
                    />
                  </div>
                  <p className="font-medium text-neutral-300 mt-2" style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
                    Pixel Precision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
