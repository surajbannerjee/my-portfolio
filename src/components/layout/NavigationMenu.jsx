"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONTENT } from "@/data/siteContent";
import { gsap, Flip } from "@/lib/gsap";

export default function NavigationMenu({ isOpen, onToggle }) {
  const pathname = usePathname();
  const wrapRef = useRef(null);
  const hamburgerRef = useRef(null);
  const flipBaseRef = useRef(null);
  const menuContainRef = useRef(null);
  const menuWrapperRef = useRef(null);
  const menuBaseRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      onToggle(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (!wrapRef.current || !flipBaseRef.current || !menuContainRef.current || !hamburgerRef.current) return;

    const flipItem = flipBaseRef.current;
    const menuContain = menuContainRef.current;
    const hamburger = hamburgerRef.current;
    const menuWrap = menuWrapperRef.current;
    const menuBase = menuBaseRef.current;
    const navLines = wrapRef.current.querySelectorAll(".hamburger__line");
    const menuItems = wrapRef.current.querySelectorAll(".main-menu__item");
    const videoEl = wrapRef.current.querySelector(".menu-promo__video");
    const fadeInEls = wrapRef.current.querySelectorAll(".menu-fade-in");

    function flip(forwards) {
      const state = Flip.getState(flipItem);
      if (forwards) {
        menuContain.appendChild(flipItem);
      } else {
        hamburger.appendChild(flipItem);
      }
      Flip.from(state, { ease: "power4.inOut", duration: 0.8 });
    }

    const tl = gsap.timeline({ paused: true });
    tl.set(menuWrap, { display: "flex" });
    tl.from(menuBase, {
      opacity: 0,
      duration: 0.6,
      ease: "none",
      onStart: () => flip(true),
    });
    tl.to(navLines[0], { y: 5, duration: 0.16 }, "<");
    tl.to(navLines[1], { y: -5, duration: 0.16 }, "<");
    tl.to(navLines[0], { rotate: 45, duration: 0.16 }, 0.2);
    tl.to(navLines[1], { rotate: -45, duration: 0.16 }, 0.2);
    tl.add("fade-in-up")
      .from(
        menuItems,
        {
          opacity: 0,
          yPercent: 50,
          duration: 0.2,
          stagger: { amount: 0.2 },
          onReverseComplete: () => flip(false),
        },
        "fade-in-up"
      )
      .from(
        videoEl,
        {
          opacity: 0,
          yPercent: 20,
          duration: 0.2,
        },
        "fade-in-up"
      );
    tl.from(fadeInEls, { opacity: 0, duration: 0.3 });

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;

    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onToggle(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onToggle]);

  return (
    <nav ref={wrapRef} className="mxd-nav__wrap" data-lenis-prevent="">
      {/* Hamburger Start */}
      <div className="mxd-nav__contain loading__fade">
        <a
          ref={hamburgerRef}
          href="#0"
          className={`mxd-nav__hamburger ${isOpen ? "nav-open" : ""}`}
          aria-label="Menu"
          onClick={(e) => {
            e.preventDefault();
            onToggle(!isOpen);
          }}
        >
          <div ref={flipBaseRef} className="hamburger__base"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </a>
      </div>
      {/* Hamburger End */}

      {/* Main Navigation Start */}
      <div ref={menuWrapperRef} className="mxd-menu__wrapper" style={{ display: "none" }}>
        <div
          ref={menuBaseRef}
          className="mxd-menu__base"
          onClick={() => onToggle(false)}
        ></div>
        <div ref={menuContainRef} className="mxd-menu__contain">
          <div className="mxd-menu__inner">
            {/* left side */}
            <div className="mxd-menu__left">
              <p
                className="mxd-menu__caption menu-fade-in"
                dangerouslySetInnerHTML={{ __html: SITE_CONTENT.tagline }}
              ></p>
              <div className="main-menu">
                <nav className="main-menu__content">
                  <ul id="main-menu" className="main-menu__accordion">
                    {SITE_CONTENT.menu.map((item, idx) => (
                      <li key={idx} className="main-menu__item">
                        <Link
                          className="main-menu__toggle"
                          href={item.url}
                          onClick={() => onToggle(false)}
                        >
                          <span className="main-menu__link btn btn-anim">
                            <span className="btn-caption">
                              <span className="btn-anim__block" aria-hidden="true">
                                {Array.from(item.title).map((char, cIdx) => (
                                  <span key={cIdx} className="btn-anim__letter">
                                    {char === " " ? "\u00A0" : char}
                                  </span>
                                ))}
                              </span>
                              <span className="btn-anim__block" aria-hidden="true">
                                {Array.from(item.title).map((char, cIdx) => (
                                  <span key={cIdx} className="btn-anim__letter">
                                    {char === " " ? "\u00A0" : char}
                                  </span>
                                ))}
                              </span>
                            </span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1.1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            {/* right side */}
            <div className="mxd-menu__right">
              <div className="menu-promo">
                <div className="menu-promo__content">
                  <p
                    className="menu-promo__caption menu-fade-in"
                    dangerouslySetInnerHTML={{ __html: SITE_CONTENT.greeting }}
                  ></p>
                  <div className="menu-promo__video">
                    <video
                      className="menu-video"
                      id="inner-video"
                      preload="auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={SITE_CONTENT.video?.poster}
                    >
                      {SITE_CONTENT.video?.webm && (
                        <source type="video/webm" src={SITE_CONTENT.video.webm} />
                      )}
                      {SITE_CONTENT.video?.mp4 && (
                        <source type="video/mp4" src={SITE_CONTENT.video.mp4} />
                      )}
                      {SITE_CONTENT.video?.ogv && (
                        <source type="video/ogv" src={SITE_CONTENT.video.ogv} />
                      )}
                    </video>
                  </div>
                </div>
              </div>
            </div>
            {/* data bottom line */}
            <div className="mxd-menu__data menu-fade-in">
              <div className="mxd-menu__data-left">
                {SITE_CONTENT.exploreLinks && SITE_CONTENT.exploreLinks.length > 0 && (
                  <div
                    className="menu-explore-buttons mb-3"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.8rem",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {SITE_CONTENT.exploreLinks.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.url}
                        onClick={() => onToggle(false)}
                        className="btn btn-line-xsmall btn-outline tag tag-default tag-outline-medium"
                        style={{
                          padding: "0.6rem 1.4rem",
                          borderRadius: "2rem",
                          textDecoration: "none",
                          fontSize: "1.3rem",
                        }}
                      >
                        {item.title}{" "}
                        <i
                          className="ph ph-arrow-up-right"
                          style={{ marginLeft: "4px" }}
                        ></i>
                      </Link>
                    ))}
                  </div>
                )}
                <p className="t-xsmall">
                  Made with <i className="ph-fill ph-heart t-additional"></i> by{" "}
                  <Link className="no-effect" href={SITE_CONTENT.authorUrl}>
                    {SITE_CONTENT.author}
                  </Link>
                </p>
              </div>
              <p className="t-xsmall">
                <i className="ph ph-copyright"></i> {SITE_CONTENT.copyrightYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
