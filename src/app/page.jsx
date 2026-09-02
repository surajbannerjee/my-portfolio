import React from "react";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import PinnedProjects from "@/components/sections/PinnedProjects";
import Marquee from "@/components/common/Marquee";
import StackingCards from "@/components/sections/StackingCards";
import ManifestSection from "@/components/sections/ManifestSection";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import CtaSection from "@/components/sections/CtaSection";
import {
  TECH_HTML,
  TECH_CSS,
  TECH_JAVASCRIPT,
  TECH_NEXT_JS,
  TECH_REACT,
  TECH_TAILWIND_CSS,
  TECH_MATERIAL_UI,
  TECH_WORDPRESS,
  TECH_FIGMA,
  TECH_WEBFLOW,
  TECH_PHOTOSHOP,
  ICON_300X300_OBJ_BTN_02,
} from "@/constant/image";

export default function HomePage() {
  const techStack = [
    { name: "HTML", icon: TECH_HTML },
    { name: "CSS", icon: TECH_CSS },
    { name: "JavaScript", icon: TECH_JAVASCRIPT },
    { name: "Next.js", icon: TECH_NEXT_JS },
    { name: "React.js", icon: TECH_REACT },
    { name: "Tailwind CSS", icon: TECH_TAILWIND_CSS },
    { name: "Material UI", icon: TECH_MATERIAL_UI },
    { name: "WordPress", icon: TECH_WORDPRESS },
    { name: "Figma", icon: TECH_FIGMA },
    { name: "Webflow", icon: TECH_WEBFLOW },
    { name: "Photoshop", icon: TECH_PHOTOSHOP },
  ];

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

  return (
    <main id="mxd-page-content" className="mxd-page-content">
      {/* Hero Section */}
      <Hero />

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

      {/* About Me Section */}
      <HomeAbout />

      {/* Projects Section */}
      <PinnedProjects />

      {/* Marquee Section */}
      <div className="mxd-section padding-mtext-pre-stack">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <Marquee direction="right">
              <div className="marquee__item one-line item-regular text">
                <p className="marquee__text">I Can Do Best</p>
                <div className="marquee__image">{renderStarIcon()}</div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* Stacking Services Section */}
      <StackingCards />

      {/* Manifest & About Section */}
      <ManifestSection />

      {/* Parallax Divider */}
      <ParallaxDivider
        imageClass="divider-image-6"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage={ICON_300X300_OBJ_BTN_02}
      />

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}
