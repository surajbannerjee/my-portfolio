"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedHeadline({
  strings,
  typeSpeed = 70,
  backSpeed = 30,
  backDelay = 2500,
  loop = true,
  className = "inner-headline__title animated-type loading__item",
}) {
  const elRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    const typed = new Typed(elRef.current, {
      strings,
      showCursor: true,
      cursorChar: "_",
      loop,
      typeSpeed,
      backSpeed,
      backDelay,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return (
    <h1 className={className}>
      <span ref={elRef}></span>
    </h1>
  );
}
