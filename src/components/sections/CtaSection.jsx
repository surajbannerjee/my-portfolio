"use client";

import React from "react";
import Image from "next/image";
import AnimatedButton from "@/components/common/AnimatedButton";
import SplitTextReveal from "@/components/common/SplitTextReveal";

export default function CtaSection({
  label,
  caption = "Let's talk about your project!",
  description,
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
              <div
                className="mxd-promo__bg "
                style={{
                  backgroundImage: "url(/img/backgrounds/bg1.webp)",
                }}
              ></div>
              {/* caption */}
              <div className="mxd-promo__content">
                {label && (
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[var(--accent)] text-[1.2rem] font-semibold mb-3 anim-uni-in-up uppercase tracking-wider">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      height="14px"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill="currentColor"
                        d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                        c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                        c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                        c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                        c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                        c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                        c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
                      />
                    </svg>
                    {label}
                  </span>
                )}
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
                {description && (
                  <p
                    className="t-medium t-bright anim-uni-in-up mt-3 mb-4 max-w-xl"
                    style={{ fontSize: "clamp(1.4rem, 1.4vw, 1.8rem)", lineHeight: "1.6" }}
                  >
                    {description}
                  </p>
                )}
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
