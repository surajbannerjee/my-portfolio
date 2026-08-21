"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Marquee({
  children,
  direction = "right",
  speed = 30,
  className = "marquee marquee-right--gsap muted-extra",
  innerClassName = "marquee__toright",
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const mod = gsap.utils.wrap(0, 50);

    const dirParam = direction === "right" ? "+=50%" : "-=50%";

    const marqueeTween = gsap.to(track, {
      duration: speed,
      ease: "none",
      x: dirParam,
      modifiers: {
        x: (x) => {
          const val = parseFloat(x);
          return mod(val) + "%";
        },
      },
      repeat: -1,
    });

    const master = gsap.timeline().add(marqueeTween, 0);

    const tween = gsap.to(master, {
      duration: 1.5,
      timeScale: 1,
      paused: true,
    });

    const timeScaleClamp = gsap.utils.clamp(1, 6);

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
        tween.invalidate().restart();
      },
    });

    return () => {
      master.kill();
      tween.kill();
      trigger.kill();
    };
  }, [direction, speed]);

  return (
    <div ref={containerRef} className={className}>
      <div ref={trackRef} className={innerClassName} style={{ display: "flex", width: "max-content" }}>
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
