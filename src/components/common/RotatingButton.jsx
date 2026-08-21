"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function RotatingButton({
  href,
  text,
  imageSrc,
  className = "btn-rotating btn-rotating-blur-outline ver-02",
  download,
  target,
  rotateValue = 360,
  id,
}) {
  const svgRef = useRef(null);
  const pathId = `textPath-${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        svgRef.current,
        {
          rotate: 0,
          ease: "sine",
        },
        {
          rotate: rotateValue,
          scrollTrigger: {
            trigger: svgRef.current,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [rotateValue]);

  const content = (
    <>
      <svg
        ref={svgRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 160 160"
        className="btn-rotating__text"
      >
        <defs>
          <path
            id={pathId}
            d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
          />
        </defs>
        <g>
          <use xlinkHref={`#${pathId}`} fill="none" />
          <text>
            <textPath xlinkHref={`#${pathId}`}>{text}</textPath>
          </text>
        </g>
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="btn-rotating__image" src={imageSrc} alt="Object" />
    </>
  );

  const isInternal = href.startsWith("/") && !download;

  if (isInternal) {
    return (
      <Link href={href} className={className} id={id}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      id={id}
    >
      {content}
    </a>
  );
}
