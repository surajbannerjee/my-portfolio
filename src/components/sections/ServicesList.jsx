"use client";

import React, { useState } from "react";

const SERVICES_LIST = [
  {
    id: "design",
    title: "Design",
    description:
      "We create visually compelling designs that enhance user experience. From UI/UX design to stunning websites, mobile apps, and print materials, we make sure your brand’s visuals resonate with your audience.",
    tags: [
      "UI/UX",
      "Web design",
      "Applications",
      "Print design",
      "Packaging",
      "Motion",
      "3D models",
    ],
    image: "/img/illustrations/360x440_list-01.webp",
  },
  {
    id: "development",
    title: "Development",
    description:
      "We build high-performance websites and applications using modern technologies. Our solutions are designed to be scalable and functional for optimal performance.",
    tags: [
      "Frontend",
      "Interactions",
      "Backend",
      "WordPress",
      "Next.js",
      "E-commerce",
      "Optimization",
    ],
    image: "/img/illustrations/360x440_list-02.webp",
  },
  {
    id: "branding",
    title: "Brand Identity",
    description:
      "We craft distinct and memorable brand identities that set you apart. From logo design to typography and complete visual systems, we build brands that connect.",
    tags: [
      "Logo design",
      "Brand strategy",
      "Typography",
      "Style guides",
      "Iconography",
      "Illustrations",
    ],
    image: "/img/illustrations/360x440_list-03.webp",
  },
  {
    id: "marketing",
    title: "Marketing & SEO",
    description:
      "We amplify your digital presence with strategic marketing and SEO solutions. From search optimization to social media strategies, we help you reach the right audience.",
    tags: [
      "SEO Audit",
      "On-page SEO",
      "Social media",
      "Content strategy",
      "Analytics",
      "Conversion rate",
    ],
    image: "/img/illustrations/360x440_list-04.webp",
  },
];

export default function ServicesList() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, idx) => {
    setHoveredIdx(idx);
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };

  return (
    <div className="mxd-section overflow-hidden padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-services-list grid-top hover-reveal">
            {SERVICES_LIST.map((item, idx) => (
              <div
                key={item.id}
                className="mxd-services-list__item hover-reveal__item"
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mxd-services-list__border anim-uni-in-up"></div>
                <div
                  className="hover-reveal__content hover-reveal-360x440"
                  style={{
                    opacity: hoveredIdx === idx ? 1 : 0,
                    left: `${mousePos.x}px`,
                    transform: "translate(-80%, -50%)",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="hover-reveal__image"
                    src={item.image}
                    alt=""
                    style={{
                      transform: hoveredIdx === idx ? "scale(1, 1)" : "scale(1, 1.4)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                <div className="mxd-services-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                        <div className="mxd-services-list__title anim-uni-in-up">
                          <p>{item.title}</p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                        <div className="mxd-services-list__descr anim-uni-in-up">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-services-list__tagslist">
                          <ul>
                            {item.tags.map((tag, tagIdx) => (
                              <li key={tagIdx} className="anim-uni-in-up">
                                <p>{tag}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-services-list__border anim-uni-in-up"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
