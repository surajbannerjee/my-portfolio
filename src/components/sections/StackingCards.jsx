"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { STACKING_SERVICES } from "@/data/services";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function StackingCards() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const offsetRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const cards = containerRef.current.querySelectorAll(".stack-item");
    const stickySpace = offsetRef.current;
    if (!cards.length) return;

    const animation = gsap.timeline();
    let cardHeight = cards[0].offsetHeight;

    function initCards() {
      animation.clear();
      cardHeight = cards[0].offsetHeight;
      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, { y: index * cardHeight });
          animation.to(card, { y: 0, duration: index * 0.5, ease: "none" }, 0);
        }
      });
    }

    initCards();

    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      pin: true,
      end: () => `+=${cards.length * cardHeight + (stickySpace ? stickySpace.offsetHeight : 0)}`,
      scrub: true,
      animation: animation,
      invalidateOnRefresh: true,
    });

    ScrollTrigger.addEventListener("refreshInit", initCards);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", initCards);
      trigger.kill();
      animation.kill();
    };
  }, []);

  return (
    <div className="mxd-section padding-stacked-section" ref={containerRef}>
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div ref={wrapperRef} className="stack-wrapper">
              <div ref={offsetRef} className="stack-offset"></div>
              <div className="services-stack">
                {STACKING_SERVICES.map((service) => (
                  <div key={service.id} className="stack-item">
                    <div
                      className={`mxd-services-stack__inner justify-between ${service.bgClass}`}
                    >
                      <div className="mxd-services-stack__controls">
                        <Link
                          className={`btn btn-round btn-round-large ${service.buttonClass || "btn-additional"} slide-right-up anim-no-delay`}
                          href={service.url}
                          aria-label="Services Page Link"
                        >
                          <i className="ph ph-arrow-up-right"></i>
                        </Link>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3 className={service.titleClass || ""}>{service.title}</h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          {service.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className={`tag tag-default ${service.tagClass}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className={service.textClass || ""}>{service.description}</p>
                      </div>
                      <div className="services-stack__image">
                        <Image
                          className="service-img service-img-s"
                          src={service.imageSmall}
                          alt={service.title}
                          width={300}
                          height={300}
                        />
                        <Image
                          className="service-img service-img-m"
                          src={service.imageMedium}
                          alt={service.title}
                          width={800}
                          height={800}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
