"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. anim-uni-in-up
      const animateInUp = document.querySelectorAll(".anim-uni-in-up");
      animateInUp.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50, ease: "sine" },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: element,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 2. anim-uni-scale-in
      const animateScaleIn = document.querySelectorAll(".anim-uni-scale-in");
      animateScaleIn.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 1, y: 50, scale: 1.2, ease: "sine" },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: element,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 3. anim-uni-scale-in-right
      const animateScaleInRight = document.querySelectorAll(".anim-uni-scale-in-right");
      animateScaleInRight.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 1, y: 50, x: -70, scale: 1.2, ease: "sine", duration: 5 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: element,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 4. anim-uni-scale-in-left
      const animateScaleInLeft = document.querySelectorAll(".anim-uni-scale-in-left");
      animateScaleInLeft.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 1, y: 50, x: 70, scale: 1.2, ease: "sine" },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: element,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 5. Grid Batch Cards (.animate-card-2, .animate-card-3, .animate-card-4)
      if (document.querySelector(".animate-card-2")) {
        gsap.set(".animate-card-2", { y: 50, opacity: 0 });
        ScrollTrigger.batch(".animate-card-2", {
          interval: 0.1,
          batchMax: 2,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              ease: "sine",
              stagger: { each: 0.15, grid: [1, 2] },
              overwrite: true,
            }),
          onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
          onEnterBack: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
          onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
        });
      }

      if (document.querySelector(".animate-card-3")) {
        gsap.set(".animate-card-3", { y: 50, opacity: 0 });
        ScrollTrigger.batch(".animate-card-3", {
          interval: 0.1,
          batchMax: 3,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              ease: "sine",
              stagger: { each: 0.15, grid: [1, 3] },
              overwrite: true,
            }),
          onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
          onEnterBack: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
          onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
        });
      }

      if (document.querySelector(".animate-card-4")) {
        gsap.set(".animate-card-4", { y: 50, opacity: 0 });
        ScrollTrigger.batch(".animate-card-4", {
          interval: 0.1,
          batchMax: 4,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              ease: "sine",
              stagger: { each: 0.15, grid: [1, 4] },
              overwrite: true,
            }),
          onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
          onEnterBack: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
          onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
        });
      }

      // 6. Top to Bottom Animation (Footer text)
      const toBottomEl = document.querySelectorAll(".anim-top-to-bottom");
      toBottomEl.forEach((element) => {
        gsap.fromTo(
          element,
          { transform: "translate3d(0, -100%, 0)" },
          {
            transform: "translate3d(0, 0, 0)",
            scrollTrigger: {
              trigger: ".fullwidth-text__tl-trigger",
              start: "top 99%",
              end: "top 24%",
              scrub: true,
            },
          }
        );
      });

      // 7. Zoom Container Animations
      const docStyle = getComputedStyle(document.documentElement);
      const radiusL = docStyle.getPropertyValue("--_radius-l") || "3.8rem";

      const zoomInContainer = document.querySelectorAll(".anim-zoom-in-container");
      zoomInContainer.forEach((element) => {
        gsap.fromTo(
          element,
          { borderRadius: "200px", transform: "scale3d(0.94, 1, 1)" },
          {
            borderRadius: radiusL,
            transform: "scale3d(1, 1, 1)",
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              end: "top 14%",
              scrub: true,
            },
          }
        );
      });

      const zoomOutContainer = document.querySelectorAll(".anim-zoom-out-container");
      zoomOutContainer.forEach((element) => {
        gsap.fromTo(
          element,
          { borderRadius: "200px", transform: "scale3d(1.14, 1, 1)" },
          {
            borderRadius: radiusL,
            transform: "scale3d(1, 1, 1)",
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              end: "top 14%",
              scrub: true,
            },
          }
        );
      });

      // 8. Universal Parallax Image Effects
      const parallaxImages = document.querySelectorAll(".parallax-img");
      parallaxImages.forEach((img) => {
        gsap.fromTo(
          img,
          { backgroundPosition: "50% 0%" },
          {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      const parallaxImagesSmall = document.querySelectorAll(".parallax-img-small");
      parallaxImagesSmall.forEach((img) => {
        gsap.fromTo(
          img,
          { backgroundPosition: "50% 20%" },
          {
            backgroundPosition: "50% 80%",
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // 9. Floating images
      const movingObjects = document.querySelectorAll(".mxd-move");
      movingObjects.forEach((el) => {
        gsap.fromTo(
          el,
          { y: -15 },
          {
            y: 15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 3,
          }
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
