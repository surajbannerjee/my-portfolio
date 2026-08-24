"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONTENT } from "@/data/siteContent";
import AnimatedButton from "@/components/common/AnimatedButton";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState("idle");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus("success");
    setTimeout(() => {
      setSubStatus("idle");
      setEmail("");
    }, 5000);
  };

  return (
    <footer id="mxd-footer" className="mxd-footer">
      {/* Footer Block - Fullwidth Text Start */}
      <div className="mxd-footer__text-wrap">
        <div className="fullwidth-text__tl-trigger"></div>
        <div className="mxd-footer__fullwidth-text anim-top-to-bottom">
          <svg
            className="mxd-footer__svg-v2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 70"
            xmlSpace="preserve"
          >
            <style type="text/css">
              {`
                .mxd-footer__big-text {
                  font-family: var(--_font-accent, "Funnel Display", sans-serif);
                  font-weight: 800;
                  font-size: 64px;
                  letter-spacing: -0.03em;
                  fill: currentColor;
                  text-anchor: middle;
                  dominant-baseline: central;
                }
              `}
            </style>
            <text x="50%" y="45%" className="mxd-footer__big-text">
              {SITE_CONTENT.footer.svgText}
            </text>
          </svg>
        </div>
      </div>
      {/* Footer Block - Fullwidth Text End */}

      {/* Footer Block - Info Columns Start */}
      <div className="mxd-footer__footer-blocks">
        {/* single column 1 */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card fullheight-card">
            <div className="footer-blocks__nav">
              <ul className="footer-nav">
                {SITE_CONTENT.menu.map((item, idx) => (
                  <li key={idx} className="footer-nav__item anim-uni-in-up">
                    <AnimatedButton
                      href={item.url}
                      className="footer-nav__link btn-anim"
                      caption={item.title}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-blocks__links anim-uni-in-up" style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "1.6rem" }}>
              {SITE_CONTENT.exploreLinks?.map((item, idx) => (
                <AnimatedButton
                  key={idx}
                  href={item.url}
                  className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
                  caption={item.title}
                  iconClass="ph ph-arrow-up-right"
                />
              ))}
              {SITE_CONTENT.footer.legalLinks.map((item, idx) => (
                <AnimatedButton
                  key={`legal-${idx}`}
                  href={item.url}
                  className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
                  caption={item.title}
                  iconClass="ph ph-arrow-right"
                />
              ))}
            </div>
          </div>
        </div>

        {/* single column 2 */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card">
            <p className="mxd-point-subtitle anim-uni-in-up">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
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
              <a className="cursor-pointer break-all" href={`mailto:${SITE_CONTENT.email}?subject=Message%20from%20your%20site`}>
                {SITE_CONTENT.email}
              </a>
            </p>
          </div>
          <div className="footer-blocks__card">
            <p className="mxd-point-subtitle anim-uni-in-up">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
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
              <a href={`tel:${SITE_CONTENT.phone.replace(/[^+\d]/g, "")}`}>
                {SITE_CONTENT.phone}
              </a>
            </p>
          </div>
          <div className="footer-blocks__card fill-card notify">
            <div className="footer-blocks__title anim-uni-in-up">
              <p className="footer-blocks__title-m">{SITE_CONTENT.footer.subscribeTitle}</p>
            </div>
            <div className="form-container anim-uni-in-up">
              <div
                className={`form__reply subscription-ok ${subStatus === "success" ? "is-visible" : ""
                  }`}
              >
                <span className="reply__text">Done! Thanks for subscribing.</span>
              </div>
              <div
                className={`form__reply subscription-error ${subStatus === "error" ? "is-visible" : ""
                  }`}
              >
                <span className="reply__text">
                  Ooops! Something went wrong. Please try again later.
                </span>
              </div>
              <form
                className={`form notify-form form-light ${subStatus !== "idle" ? "is-hidden" : ""
                  }`}
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="btn btn-form btn-absolute-right btn-muted slide-right-up anim-no-delay"
                  type="submit"
                  aria-label="Submit"
                >
                  <i className="ph ph-arrow-up-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* single column 3 */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card fullheight-card">
            <div className="footer-blocks__block">
              <div className="footer-blocks__title anim-uni-in-up">
                <p className="footer-blocks__title-l">{SITE_CONTENT.footer.socialsTitle}</p>
              </div>
              <div className="footer-blocks__socials">
                <ul className="footer-socials">
                  {SITE_CONTENT.socials.map((item, idx) => (
                    <li key={idx} className="footer-socials__item anim-uni-in-up">
                      <a
                        href={item.url}
                        className="footer-socials__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-blocks__links anim-uni-in-up">
              <p className="t-xsmall t-muted">
                <Link className="no-effect" href={SITE_CONTENT.authorUrl}>
                  {SITE_CONTENT.author}
                </Link>{" "}
                <i className="ph-bold ph-copyright"></i> {SITE_CONTENT.copyrightYear}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Block - Info Columns End */}
    </footer>
  );
}
