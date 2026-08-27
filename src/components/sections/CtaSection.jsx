"use client";

import React from "react";
import Image from "next/image";
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
              <div className="mxd-promo__bg " style={{
                backgroundImage: "url(/img/backgrounds/bg1.webp)"
              }}></div>
              {/* caption */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  <span className="mxd-promo__icon">
                    <Image
                      src="/img/icons/300x300_obj-cta-01.webp"
                      alt="Icon"
                      width={300}
                      height={300}
                    />
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
                <Image
                  className="promo-image promo-image-1"
                  src="/img/illustrations/cta-img-01.webp"
                  alt="CTA illustration"
                  width={396}
                  height={396}
                />
                <Image
                  className="promo-image promo-image-2"
                  src="/img/illustrations/cta-img-02.webp"
                  alt="CTA illustration"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
