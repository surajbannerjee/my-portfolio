"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Loader() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if previously loaded in session
    if (sessionStorage.getItem("rayo_loaded")) {
      setIsLoaded(true);
      triggerPageAppearance();
      return;
    }

    let currentVal = 0;
    let timer;
    let safetyTimer;

    function updateCounter() {
      if (currentVal < 100) {
        const increment = Math.floor(Math.random() * 20) + 10;
        currentVal = Math.min(currentVal + increment, 100);
        setCount(currentVal);
        const delay = Math.floor(Math.random() * 60) + 20;
        timer = setTimeout(updateCounter, delay);
      } else {
        hideLoader();
      }
    }

    function hideLoader() {
      sessionStorage.setItem("rayo_loaded", "true");

      gsap.to(".loader__count", {
        duration: 0.4,
        ease: "power2.in",
        y: "100%",
        delay: 0.2,
      });

      gsap.to(".loader__wrapper", {
        duration: 0.5,
        ease: "power4.in",
        y: "-100%",
        delay: 0.4,
        onComplete: () => {
          setIsLoaded(true);
          triggerPageAppearance();
        },
      });
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
          startAt: { y: 60 },
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
          { opacity: 0, y: -40, scale: 0.9 },
          {
            duration: 0.6,
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            ease: "back.out(1.7)",
            stagger: 0.05,
          }
        );
      }
    }

    updateCounter();

    // Fallback safety timeout
    safetyTimer = setTimeout(() => {
      setIsLoaded(true);
      triggerPageAppearance();
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div id="loader" className={`loader ${isLoaded ? "loaded" : ""}`} style={{ pointerEvents: isLoaded ? "none" : "auto" }}>
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
