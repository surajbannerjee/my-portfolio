"use client";

import React from "react";
import AnimatedButton from "@/components/common/AnimatedButton";
import SplitTextReveal from "@/components/common/SplitTextReveal";

export default function CtaSection({
  caption = "Let's talk about your project!",
  btnText = "Contact Me",
  btnHref = "/contact",
}) {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
              {/* background */}
              <div className="mxd-promo__bg"></div>
              {/* caption */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  <span className="mxd-promo__icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/icons/300x300_obj-cta-01.webp" alt="Icon" />
                  </span>
                  <SplitTextReveal as="span" className="mxd-promo__caption reveal-type">
                    {caption}
                  </SplitTextReveal>
                </p>
                <div className="mxd-promo__controls anim-uni-in-up">
                  <AnimatedButton
                    href={btnHref}
                    className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                    caption={btnText}
                    iconClass="ph-bold ph-arrow-up-right"
                  />
                </div>
              </div>
              {/* parallax images */}
              <div className="mxd-promo__images">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="promo-image promo-image-1"
                  src="/img/illustrations/cta-img-01.webp"
                  alt="Image"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="promo-image promo-image-2"
                  src="/img/illustrations/cta-img-02.webp"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
