"use client";

import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";

export default function SplitTextReveal({
  children,
  as: Component = "h2",
  className = "reveal-type",
  start = "top 85%",
  end = "top 25%",
  stagger = 0.1,
  initialOpacity = 0.2,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const el = elementRef.current;
    const split = new SplitType(el, { types: "words,chars" });

    const anim = gsap.from(split.chars, {
      scrollTrigger: {
        trigger: el,
        start,
        end,
        scrub: true,
      },
      opacity: initialOpacity,
      stagger,
    });

    return () => {
      anim.kill();
      split.revert();
    };
  }, [start, end, stagger, initialOpacity]);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
}
