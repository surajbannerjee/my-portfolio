"use client";

import React from "react";
import CountUpNumber from "@/components/common/CountUpNumber";
import AnimatedButton from "@/components/common/AnimatedButton";

export default function Hero() {
  const tags = [
    "Frontend Developer",
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "WordPress",
    "Elementor Pro",
    "Figma to Code",
    "Material UI",
    "Webflow",
    "Responsive UI",
  ];

  return (
    <div className="mxd-section">
      <div className="mxd-hero-09">
        <div className="mxd-hero-09__wrap loading-wrap">
          <div className="mxd-hero-09__headline">
            <div className="hero-09-headline__caption loading__item">
              <p>
                Frontend UI Developer bridging the gap between Figma design and high-performance React &amp; Next.js engineering.
              </p>
            </div>
            <div className="hero-09-headline__title loading__item">
              <h1 className="hero-09-headline__hidden">Suraj Banerjee — Frontend UI Developer</h1>
              <svg
                className="hero-09-svg-mobile"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 160 74"
                xmlSpace="preserve"
              >
                <style>
                  {`
                    .hero-09-mobile-text {
                      font-family: var(--_font-accent, "Funnel Display", sans-serif);
                      font-weight: 800;
                      font-size: 34px;
                      letter-spacing: -0.03em;
                      fill: currentColor;
                      dominant-baseline: hanging;
                    }
                  `}
                </style>
                <text x="0" y="0" className="hero-09-mobile-text">
                  suraj
                </text>
                <text x="0" y="38" className="hero-09-mobile-text">
                  banerjee
                </text>
              </svg>
              <svg
                className="hero-09-svg-desktop"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 260 36"
                xmlSpace="preserve"
              >
                <style>
                  {`
                    .hero-09-desktop-text {
                      font-family: var(--_font-accent, "Funnel Display", sans-serif);
                      font-weight: 800;
                      font-size: 34px;
                      letter-spacing: -0.03em;
                      fill: currentColor;
                      dominant-baseline: hanging;
                    }
                  `}
                </style>
                <text x="0" y="0" className="hero-09-desktop-text">
                  suraj banerjee
                </text>
              </svg>
            </div>
            <div className="hero-09-headline__tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="tag tag-default tag-outline">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mxd-hero-09__objects">
            <div className="hero-09-objects__image loading__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="mxd-move"
                src="https://res.cloudinary.com/drrw18aos/image/upload/v1787163087/ChatGPT_Image_Aug_19_2026_11_41_05_PM_dtr5z4.png"
                alt="Suraj Banerjee — Frontend UI Developer"
              />
            </div>
            <div className="hero-09-objects__item item-01 loading__item">
              <div className="mxd-counter horizontal">
                <CountUpNumber
                  end={3}
                  id="stats-counter-1"
                  className="mxd-counter__number mxd-stats-number xsmall"
                />
                <p className="mxd-counter__descr t-140 t-bright t-small">
                  Years of
                  <br />
                  experience
                </p>
              </div>
            </div>
            <div className="hero-09-objects__item item-02 loading__item">
              <div className="mxd-counter horizontal">
                <p className="mxd-counter__descr t-140 t-bright t-small">
                  Pixel-Perfect Code &amp; 40% UX Boost
                </p>
              </div>
            </div>
            <div className="hero-09-objects__item item-03 loading__item">
              <div className="mxd-hero__mark">
                <span className="mark-icon"></span>
                <span className="mark-text">Available for Projects &amp; Roles</span>
              </div>
            </div>
          </div>
          {/* scroll for more */}
          <div className="mxd-hero-09__more loading__fade">
            <AnimatedButton
              href="#projects"
              className="btn btn-line-default btn-anim slide-down"
              caption="Explore Works"
              iconClass="ph-bold ph-arrow-elbow-right-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
