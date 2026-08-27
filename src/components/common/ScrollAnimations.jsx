"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    let ctx;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // 1. anim-uni-in-up (smooth fade in and slide up)
        const animateInUp = document.querySelectorAll(".anim-uni-in-up");
        animateInUp.forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 40 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // 2. anim-uni-scale-in (smooth zoom in)
        const animateScaleIn = document.querySelectorAll(".anim-uni-scale-in");
        animateScaleIn.forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 35, scale: 0.94 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
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
            { opacity: 0, y: 30, x: -50, scale: 0.95 },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
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
            { opacity: 0, y: 30, x: 50, scale: 0.95 },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // 5. Grid Batch Cards (.animate-card-2, .animate-card-3, .animate-card-4)
        if (document.querySelector(".animate-card-2")) {
          gsap.set(".animate-card-2", { y: 40, opacity: 0 });
          ScrollTrigger.batch(".animate-card-2", {
            interval: 0.1,
            batchMax: 2,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                stagger: { each: 0.12, grid: [1, 2] },
                overwrite: true,
              }),
            onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
            onEnterBack: (batch) =>
              gsap.to(batch, { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, overwrite: true }),
            onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 40, overwrite: true }),
          });
        }

        if (document.querySelector(".animate-card-3")) {
          gsap.set(".animate-card-3", { y: 40, opacity: 0 });
          ScrollTrigger.batch(".animate-card-3", {
            interval: 0.1,
            batchMax: 3,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                stagger: { each: 0.12, grid: [1, 3] },
                overwrite: true,
              }),
            onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
            onEnterBack: (batch) =>
              gsap.to(batch, { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, overwrite: true }),
            onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 40, overwrite: true }),
          });
        }

        if (document.querySelector(".animate-card-4")) {
          gsap.set(".animate-card-4", { y: 40, opacity: 0 });
          ScrollTrigger.batch(".animate-card-4", {
            interval: 0.1,
            batchMax: 4,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                stagger: { each: 0.12, grid: [1, 4] },
                overwrite: true,
              }),
            onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
            onEnterBack: (batch) =>
              gsap.to(batch, { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, overwrite: true }),
            onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 40, overwrite: true }),
          });
        }

        // 6. Top to Bottom Animation (Footer large text)
        const toBottomEl = document.querySelectorAll(".anim-top-to-bottom");
        toBottomEl.forEach((element) => {
          const triggerEl = document.querySelector(".fullwidth-text__tl-trigger") || element;
          gsap.fromTo(
            element,
            { yPercent: -50, opacity: 0.5 },
            {
              yPercent: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: triggerEl,
                start: "top 95%",
                end: "bottom bottom",
                scrub: 1,
              },
            }
          );
        });

        // 7. Zoom Container Animations (.anim-zoom-out-container & .anim-zoom-in-container)
        const zoomOutContainer = document.querySelectorAll(".anim-zoom-out-container");
        zoomOutContainer.forEach((element) => {
          gsap.fromTo(
            element,
            {
              borderRadius: "100px",
              scaleX: 1.08,
              scaleY: 1.04,
              transformOrigin: "center center",
            },
            {
              borderRadius: "38px",
              scaleX: 1,
              scaleY: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                end: "center 60%",
                scrub: 1,
              },
            }
          );

          // Additional parallax on CTA illustration images inside the container
          const promoImg1 = element.querySelector(".promo-image-1");
          const promoImg2 = element.querySelector(".promo-image-2");

          if (promoImg1) {
            gsap.fromTo(
              promoImg1,
              { y: 40 },
              {
                y: -30,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );
          }

          if (promoImg2) {
            gsap.fromTo(
              promoImg2,
              { y: -30 },
              {
                y: 35,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );
          }
        });

        const zoomInContainer = document.querySelectorAll(".anim-zoom-in-container");
        zoomInContainer.forEach((element) => {
          gsap.fromTo(
            element,
            {
              borderRadius: "100px",
              scaleX: 0.94,
              scaleY: 0.96,
              transformOrigin: "center center",
            },
            {
              borderRadius: "38px",
              scaleX: 1,
              scaleY: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                end: "center 60%",
                scrub: 1,
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

        // 9. Floating items (.mxd-move)
        const movingObjects = document.querySelectorAll(".mxd-move");
        movingObjects.forEach((el) => {
          gsap.fromTo(
            el,
            { y: -12 },
            {
              y: 12,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              duration: 3,
            }
          );
        });

        ScrollTrigger.refresh();
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [pathname]);

  return null;
}
