"use client";

import React from "react";
import Image from "next/image";
import { ImageWithSkeleton } from "@/components/common/Skeleton";
import InnerHeadline from "@/components/sections/InnerHeadline";
import TypedHeadline from "@/components/common/TypedHeadline";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import Marquee from "@/components/common/Marquee";
import CtaSection from "@/components/sections/CtaSection";
import AnimatedButton from "@/components/common/AnimatedButton";
import CountUpNumber from "@/components/common/CountUpNumber";
import SplitTextReveal from "@/components/common/SplitTextReveal";

export default function AboutMePage() {
  const renderStarIcon = () => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      fill="currentColor"
    >
      <path
        fill="currentColor"
        d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
          c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
          c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
          C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
          c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
          s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
          c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z"
      />
    </svg>
  );

  const techStack = [
    { name: "Next.js", icon: "/img/tech/icon-html.svg" },
    { name: "React.js", icon: "/img/tech/icon-scketch.svg" },
    { name: "Tailwind CSS", icon: "/img/tech/icon-css.svg" },
    { name: "Material UI", icon: "/img/tech/icon-illustrator.svg" },
    { name: "WordPress", icon: "/img/tech/icon-notion.svg" },
    { name: "Figma", icon: "/img/tech/icon-figma.svg" },
    { name: "Webflow", icon: "/img/tech/icon-blender.svg" },
    { name: "Photoshop", icon: "/img/tech/icon-photoshop.svg" },
  ];

  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      {/* 1. Inner Headline */}
      <InnerHeadline
        subtitle="About me"
        title={
          <TypedHeadline
            strings={[
              "Frontend UI Developer",
              "WordPress Developer",
              "UI/UX Web Designer",
              "Responsive Web Developer",
            ]}
          />
        }
        description={
          <p className="inner-headline__text t-large t-bright loading__item">
            👋 Hello! I am <strong>Suraj Banerjee</strong>, a passionate Frontend UI Developer based in Kolkata, India. My core expertise lies in translating raw Figma &amp; Adobe XD designs into clean, maintainable, and highly responsive web applications using React.js, Next.js, Tailwind CSS, and Material UI. With extensive experience in custom WordPress and Webflow development, I bridge the gap between creative visual design and robust engineering to deliver pixel-perfect digital experiences.
          </p>
        }
      />

      {/* 2. Parallax Divider with CV Rotating Button */}
      <div className="mxd-section padding-pre-title">
        <div className="mxd-container fullwidth-container">
          <ParallaxDivider
            imageClass="divider-image-2"
            circleHref="/img/pdf/CV.pdf"
            circleText="Download CV * Download CV * Download CV * "
            circleImage="/img/icons/300x300_obj-btn-03.webp"
            className="mxd-section p-0"
            download="Suraj_Banerjee_CV.pdf"
          />
        </div>
      </div>

      {/* 3. Core Principles & Philosophy Section */}
      <div className="mxd-section padding-pre-grid">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <SplitTextReveal as="h2" className="reveal-type">
                        Engineering Philosophy
                      </SplitTextReveal>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">Clean Code</p>
                      <p className="anim-uni-in-up">Pixel Precision</p>
                      <p className="anim-uni-in-up">High Performance</p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                      <AnimatedButton
                        href="/contact"
                        className="btn btn-anim btn-default btn-outline slide-right-up"
                        caption="Get in Touch"
                        iconClass="ph-bold ph-arrow-up-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="mxd-approach-list">
              {/* Item 1 */}
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <ImageWithSkeleton src="/img/icons/h70_appr-01.webp" alt="Icon" width={70} height={70} rounded="rounded-lg" />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>Pixel-Perfect Precision</p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            Every design element from Figma and Adobe XD is translated into exact CSS dimensions, spacing, typography, and interactive behaviors without compromise.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>

              {/* Item 2 */}
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <ImageWithSkeleton src="/img/icons/h70_appr-02.webp" alt="Icon" width={70} height={70} rounded="rounded-lg" />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>Performance &amp; 40% UX Gain</p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            By optimizing component structures with Tailwind CSS and Material UI, I deliver lightweight, responsive pages that load fast and increase user engagement by over 40%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>

              {/* Item 3 */}
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <ImageWithSkeleton src="/img/icons/h70_appr-03.webp" alt="Icon" width={70} height={70} rounded="rounded-lg" />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>Modern CMS Flexibility</p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            From custom WordPress setups with Elementor Pro and ACF to no-code Webflow builds, I provide clients with intuitive content management workflows that scale effortlessly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Statistics Cards */}
      <div className="mxd-section overflow-hidden padding-grid-pre-pinned">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-stats-cards">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  {/* card 1 */}
                  <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                      <div className="mxd-counter align-end">
                        <CountUpNumber
                          end={40}
                          suffix="%"
                          id="stats-counter-1"
                          className="mxd-counter__number mxd-stats-number"
                        />
                        <p className="mxd-counter__descr t-140 t-bright">
                          User Experience (UX)
                          <br />
                          Performance Increase
                        </p>
                      </div>
                      <div className="mxd-stats-cards__btngroup">
                        <AnimatedButton
                          href="#experience"
                          className="btn btn-anim btn-default btn-outline slide-right-down"
                          caption="Work History"
                          iconClass="ph-bold ph-arrow-down-right"
                        />
                      </div>
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-1">
                        <ImageWithSkeleton
                          src="/img/illustrations/800x800_card-image-01.webp"
                          alt="Illustration"
                          width={800}
                          height={800}
                          rounded="rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* card 2 */}
                  <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                      <div className="mxd-stats-cards__btngroup">
                        <div className="mxd-avatars">
                          <div className="mxd-avatars__item">
                            <ImageWithSkeleton src="/img/avatars/300x300_ava-02.webp" alt="Avatar" width={300} height={300} rounded="rounded-full" />
                          </div>
                          <div className="mxd-avatars__item bg-base-opp">
                            <svg
                              className="mxd-avatars__icon"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="60px"
                              height="60px"
                              viewBox="0 0 60 60"
                            >
                              <style type="text/css">
                                {`.icon-star { fill: var(--additional); }`}
                              </style>
                              <path
                                className="icon-star"
                                d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7c-1.4-1-2.7-2.3-3.6-3.7
                                c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1
                                c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5
                                c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7
                                c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
                                c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3c1.4-1,3.1-1.5,4.8-1.7
                                c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z"
                              />
                            </svg>
                          </div>
                          <div className="mxd-avatars__item">
                            <ImageWithSkeleton src="/img/avatars/300x300_ava-01.webp" alt="Avatar" width={300} height={300} rounded="rounded-full" />
                          </div>
                        </div>
                      </div>
                      <div className="mxd-counter align-end">
                        <CountUpNumber
                          end={100}
                          suffix="%"
                          id="stats-counter-2"
                          className="mxd-counter__number mxd-stats-number"
                        />
                        <p className="mxd-counter__descr t-140 t-bright">
                          Pixel-Perfect Match
                          <br />
                          to Figma/XD Designs
                        </p>
                      </div>
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-2">
                        <ImageWithSkeleton
                          src="/img/illustrations/800x800_card-image-02.webp"
                          alt="Illustration"
                          width={800}
                          height={800}
                          rounded="rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Work Experience (Directly from CV) */}
      <div id="experience" className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-pinned-universal">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-pinned-universal__static">
                    <div className="mxd-pinned-universal__static-inner no-margin">
                      <div className="mxd-section-title h2-only no-margin-desktop">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__title card-split-title">
                                <SplitTextReveal as="h2" className="reveal-type">
                                  Work
                                  <br />
                                  Experience
                                </SplitTextReveal>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-xl-7 mxd-pinned-universal__scroll">
                    <div className="mxd-pinned-universal__scroll-inner mxd-grid-item no-margin">
                      <div className="mxd-res-list">
                        {/* item 1: Websadroit */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h3 className="anim-uni-in-up">UI / WordPress Developer</h3>
                                <p className="mxd-res-list__source anim-uni-in-up">
                                  Websadroit • Kolkata, India
                                </p>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">
                                  • Built responsive web applications with Tailwind CSS &amp; Material UI, improving overall UX and engagement by 40%.<br />
                                  • Converted raw Figma &amp; Adobe XD designs into clean, consistent, pixel-perfect code.<br />
                                  • Developed custom WordPress themes, Elementor Pro templates, and ACF dynamic components for client branding.<br />
                                  • Designed cross-platform React Native components and collaborated actively with Next.js &amp; PHP engineering teams.<br />
                                  • Delivered high-converting Webflow projects with custom animations.
                                </p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">2023 - Present</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>

                        {/* item 2: Technosys Future */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h3 className="anim-uni-in-up">Web Designer</h3>
                                <p className="mxd-res-list__source anim-uni-in-up">
                                  Technosys Future • New Delhi, India
                                </p>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">
                                  • Designed and developed responsive websites and web applications using HTML5, CSS3, JavaScript, and Bootstrap.<br />
                                  • Created visually appealing, user-friendly UI layouts with cross-browser compatibility across desktop and mobile.<br />
                                  • Applied mobile-first design principles for optimal load speed and interaction fluidity.
                                </p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">2022 - 2023</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Tech Stack Marquee */}
      <div className="mxd-section padding-grid-pre-pinned">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <Marquee direction="right">
              {techStack.map((tech, idx) => (
                <div key={idx} className="marquee__item one-line item-regular">
                  <div className="mxd-tech-stack-cards__item">
                    <div className="mxd-tech-stack-cards__inner-v3">
                      <div className="mxd-tech-stack-cards__icon">
                        <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                      </div>
                      <div className="mxd-tech-stack-cards__title">
                        <p className="t-bright t-caption">{tech.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* 7. Education (Directly from CV) */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-pinned-universal">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-pinned-universal__static">
                    <div className="mxd-pinned-universal__static-inner no-margin">
                      <div className="mxd-section-title h2-only no-margin-desktop">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__title card-split-title">
                                <SplitTextReveal as="h2" className="reveal-type">
                                  Education &amp;
                                  <br />
                                  Background
                                </SplitTextReveal>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-xl-7 mxd-pinned-universal__scroll">
                    <div className="mxd-pinned-universal__scroll-inner mxd-grid-item no-margin">
                      <div className="mxd-res-list">
                        {/* ITI */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h3 className="anim-uni-in-up">Kalpana Foundation Pvt. ITI</h3>
                                <p className="mxd-res-list__source anim-uni-in-up">
                                  Fitter Trade | ITI • Bardhaman, West Bengal (83.43%)
                                </p>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">
                                  Technical diploma foundation emphasizing engineering precision, technical problem solving, and analytical execution.
                                </p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">2017 - 2019</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>

                        {/* 12th */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h3 className="anim-uni-in-up">Patrasayer Bamira Gurudas Institution</h3>
                                <p className="mxd-res-list__source anim-uni-in-up">
                                  Higher Secondary Education (12th Arts)
                                </p>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">
                                  Completed higher secondary board certification with focus on humanities, communication, and visual arts.
                                </p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">2017</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>

                        {/* 10th */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h3 className="anim-uni-in-up">Krishnanagar High School</h3>
                                <p className="mxd-res-list__source anim-uni-in-up">
                                  Secondary Education (10th Board) • Bankura
                                </p>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">
                                  Secondary school board certificate completing fundamental academics with strong results (67.14%).
                                </p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">2015</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Spoken Languages Section */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <SplitTextReveal as="h2" className="reveal-type">
                        Languages Spoken
                      </SplitTextReveal>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="inner-headline__tags loading__fade">
                      <span className="tag tag-default tag-outline-medium">English (Professional)</span>
                      <span className="tag tag-default tag-outline-medium">Bengali / Bangla (Native)</span>
                      <span className="tag tag-default tag-outline-medium">Hindi (Fluent)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Marquee */}
      <div className="mxd-section padding-mtext">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <Marquee direction="right">
              <div className="marquee__item one-line item-regular text">
                <p className="marquee__text">Client-Focused Code</p>
                <div className="marquee__image">{renderStarIcon()}</div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>


      {/* 11. Parallax Divider */}
      <ParallaxDivider
        imageClass="divider-image-1"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage="/img/icons/300x300_obj-btn-02.webp"
      />

      {/* 12. CTA Banner */}
      <CtaSection
        caption="Ready to bring your Figma design to life?"
        btnText="Start Project"
        btnHref="/contact"
      />
    </main>
  );
}
