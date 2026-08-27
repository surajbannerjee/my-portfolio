"use client";

import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";

export default function SplitTextReveal({
  children,
  as: Component = "h2",
  className = "reveal-type",
  start = "top 90%",
  end = "bottom 70%",
  stagger = 0.08,
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
        scrub: 1,
      },
      opacity: initialOpacity,
      stagger,
    });

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
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
