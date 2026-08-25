"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Loader() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    let currentVal = 0;
    let timer = null;

    function step() {
      const increment = Math.floor(Math.random() * 12) + 6;
      currentVal += increment;

      if (currentVal >= 100) {
        currentVal = 100;
        setCount(100);
        setTimeout(hideLoader, 180);
      } else {
        setCount(currentVal);
        const delay = Math.floor(Math.random() * 35) + 25;
        timer = setTimeout(step, delay);
      }
    }

    timer = setTimeout(step, 40);

    function hideLoader() {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoaded(true);
          triggerPageAppearance();
        },
      });

      tl.to(".loader__count", {
        duration: 0.35,
        ease: "power2.in",
        y: "100%",
      });

      tl.to(
        ".loader__wrapper",
        {
          duration: 0.55,
          ease: "power4.inOut",
          y: "-100%",
        },
        "-=0.1"
      );
    }

    function triggerPageAppearance() {
      const loadingItems = document.querySelectorAll(".loading__item");
      const fadeInItems = document.querySelectorAll(".loading__fade");
      const heroTags = document.querySelectorAll(".hero-09-headline__tags .tag");

      if (loadingItems.length) {
        gsap.set(loadingItems, { opacity: 0 });
        gsap.to(loadingItems, {
          duration: 0.8,
          ease: "power4",
          startAt: { y: 50 },
          y: 0,
          opacity: 1,
          stagger: 0.06,
        });
      }

      if (fadeInItems.length) {
        gsap.set(fadeInItems, { opacity: 0 });
        gsap.to(fadeInItems, {
          duration: 0.6,
          ease: "none",
          opacity: 1,
        });
      }

      if (heroTags.length) {
        gsap.fromTo(
          heroTags,
          { opacity: 0, y: -30, scale: 0.9 },
          {
            duration: 0.5,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "back.out(1.7)",
            stagger: 0.05,
          }
        );
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div
      ref={loaderRef}
      id="loader"
      className="loader"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: isLoaded ? "none" : "auto",
      }}
    >
      <div className="loader__wrapper">
        <div className="loader__content">
          <div className="loader__count">
            <span className="count__text">{count}</span>
            <span className="count__percent">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
