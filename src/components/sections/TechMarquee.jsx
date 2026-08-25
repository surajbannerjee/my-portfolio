"use client";

import React from "react";
import Marquee from "@/components/common/Marquee";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiWordpress,
  SiFigma,
  SiWebflow,
  SiMui,
  SiGreensock,
  SiHtml5,
  SiGit,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

const TECH_ITEMS = [
  { name: "Next.js", icon: <SiNextdotjs size={46} className="text-white" /> },
  { name: "React.js", icon: <SiReact size={46} className="text-[#61DAFB]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={46} className="text-[#38BDF8]" /> },
  { name: "TypeScript", icon: <SiTypescript size={46} className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <SiJavascript size={46} className="text-[#F7DF1E]" /> },
  { name: "WordPress", icon: <SiWordpress size={46} className="text-[#21759B]" /> },
  { name: "Figma", icon: <SiFigma size={46} className="text-[#F24E1E]" /> },
  { name: "Material UI", icon: <SiMui size={46} className="text-[#007FFF]" /> },
  { name: "Webflow", icon: <SiWebflow size={46} className="text-[#146EF5]" /> },
  { name: "GSAP Animation", icon: <SiGreensock size={46} className="text-[#88CE02]" /> },
  { name: "HTML5", icon: <SiHtml5 size={46} className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt size={46} className="text-[#1572B6]" /> },
  { name: "Git & GitHub", icon: <SiGit size={46} className="text-[#F05032]" /> },
];

export default function TechMarquee({
  direction = "right",
  speed = 30,
}) {
  return (
    <div className="mxd-section overflow-hidden py-6 md:py-10">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <Marquee direction={direction} speed={speed} repeatCount={4} className="marquee marquee-right--gsap">
            {TECH_ITEMS.map((tech, idx) => (
              <div key={idx} className="marquee__item one-line item-regular px-2 sm:px-3">
                <div
                  className="group flex flex-col items-center justify-center w-[135px] h-[125px] sm:w-[160px] sm:h-[145px] md:w-[185px] md:h-[160px] rounded-2xl md:rounded-3xl bg-[#141414]/95 border border-white/10 hover:border-lime-400 hover:bg-[#1c1c1c] transition-all duration-300 shadow-lg hover:shadow-lime-400/20"
                  style={{
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <p
                    className="text-center font-bold tracking-wide text-white/90 group-hover:text-white mt-2 px-2 whitespace-nowrap"
                    style={{
                      fontSize: "clamp(13px, 1.4vw, 16px)",
                      lineHeight: "1.2",
                    }}
                  >
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
