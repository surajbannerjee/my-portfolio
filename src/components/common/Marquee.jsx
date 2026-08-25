"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Marquee({
  children,
  direction = "right",
  speed = 28,
  className = "marquee",
  innerClassName = "marquee__inner",
  repeatCount = 8,
}) {
  const trackRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Determine direction
    const isRight = direction === "right";
    const fromX = isRight ? -50 : 0;
    const toX = isRight ? 0 : -50;

    // Set initial position
    gsap.set(track, { xPercent: fromX });

    // Create infinite seamless linear marquee loop
    const anim = gsap.to(track, {
      xPercent: toX,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
    animRef.current = anim;

    // Smooth velocity recovery on scroll
    let returnToNormal = gsap.to(anim, {
      timeScale: 1,
      duration: 0.8,
      ease: "power2.out",
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        if (velocity > 15) {
          const boost = Math.min(1 + velocity / 250, 4.5);
          anim.timeScale(boost);
          returnToNormal.invalidate().restart();
        }
      },
    });

    return () => {
      anim.kill();
      returnToNormal.kill();
      trigger.kill();
    };
  }, [direction, speed]);

  // Duplicate items to ensure uninterrupted seamless loop across all screen sizes
  const duplicates = Array.from({ length: repeatCount });

  return (
    <div
      className={`${className} overflow-hidden w-full relative`}
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)" }}
    >
      <div
        ref={trackRef}
        className={`${innerClassName} flex flex-nowrap will-change-transform`}
        style={{
          width: "max-content",
          display: "flex",
        }}
      >
        {duplicates.map((_, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
