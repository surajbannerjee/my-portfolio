"use client";

import React, { useEffect, useRef } from "react";
import { ImageWithSkeleton } from "@/components/common/Skeleton";
import Link from "next/link";
import { ALL_PROJECTS } from "@/data/projects";
import AnimatedButton from "@/components/common/AnimatedButton";
import { gsap } from "@/lib/gsap";

export default function ProjectModal({ project, onClose, onSelectProject }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const contentRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Reset scroll position when switching project
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    // Prevent background page scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Smooth entrance animation
    const tl = gsap.timeline();
    tl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 35, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" },
      "-=0.15"
    );

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? ALL_PROJECTS[currentIndex - 1] : ALL_PROJECTS[ALL_PROJECTS.length - 1];
  const nextProject =
    currentIndex < ALL_PROJECTS.length - 1 ? ALL_PROJECTS[currentIndex + 1] : ALL_PROJECTS[0];

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onClose();
      },
    });
    tl.to(contentRef.current, {
      opacity: 0,
      y: 25,
      scale: 0.97,
      duration: 0.22,
      ease: "power2.in",
    });
    tl.to(backdropRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-8"
      role="dialog"
      aria-modal="true"
      data-lenis-prevent=""
    >
      {/* Backdrop overlay */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div
        ref={contentRef}
        className="relative z-10 w-full xl:max-w-[70dvw] lg:max-w-[80dvw] md:max-w-[90dvw] max-h-[90dvh] bg-[#141414] border border-white/10 rounded-[1.8rem] md:rounded-[2.4rem] shadow-2xl flex flex-col overflow-hidden"
        style={{
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(190, 242, 100, 0.08)",
        }}
        data-lenis-prevent=""
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 md:px-8 md:py-5 bg-[#141414]/95 border-b border-white/10 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <span
              className="tag tag-default font-semibold uppercase tracking-wider"
              style={{ fontSize: "13px", padding: "6px 14px" }}
            >
              {project.industry || "Case Study"}
            </span>
            <span className="text-neutral-400 text-sm hidden sm:inline">•</span>
            <span
              className="text-neutral-300 font-medium hidden sm:inline"
              style={{ fontSize: "15px" }}
            >
              {project.year || "2026"}
            </span>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close Project Details"
            className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/15 hover:border-lime-400 hover:bg-white/10 text-white transition-all duration-200"
          >
            <i className="ph-bold ph-x text-xl transition-transform duration-200 group-hover:rotate-90"></i>
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div
          ref={scrollContainerRef}
          className="overflow-y-auto px-6 py-6 md:px-10 md:py-8 space-y-8 flex-1"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255, 255, 255, 0.2) transparent",
          }}
          data-lenis-prevent=""
        >
          {/* Project Title & Summary */}
          <div>
            <h2
              className="font-bold text-white mb-3 tracking-tight"
              style={{ fontSize: "clamp(24px, 3.2vw, 36px)", lineHeight: "1.2" }}
            >
              <span className="text-[var(--accent)] font-extrabold">{project.highlightTitle}</span>{" "}
              — {project.title}
            </h2>
            <p
              className="text-neutral-300 leading-relaxed "
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)", lineHeight: "1.65" }}
            >
              {project.summary}
            </p>
          </div>

          {/* Featured Hero Banner */}
          <div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-black/40">
            <ImageWithSkeleton
              src={project.image}
              alt={project.title}
              fill
              imageClassName="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
              rounded="rounded-2xl md:rounded-3xl"
            />
          </div>

          {/* Project Meta Details Grid */}
          <div className="flex flex-wrap justify-between gap-4 p-5 md:p-6 bg-[#1C1C1C] border border-white/10 rounded-2xl">
            <div>
              <p
                className="uppercase font-semibold text-neutral-400 tracking-wider mb-1"
                style={{ fontSize: "13px" }}
              >
                Client
              </p>
              <p className="font-bold text-white" style={{ fontSize: "16px" }}>
                {project.client || "Confidential"}
              </p>
            </div>
            <div>
              <p
                className="uppercase font-semibold text-neutral-400 tracking-wider mb-1"
                style={{ fontSize: "13px" }}
              >
                Services
              </p>
              <p className="font-bold text-white" style={{ fontSize: "16px" }}>
                {project.services || "Frontend Development"}
              </p>
            </div>
            <div>
              <p
                className="uppercase font-semibold text-neutral-400 tracking-wider mb-1"
                style={{ fontSize: "13px" }}
              >
                Role
              </p>
              <p className="font-bold text-white" style={{ fontSize: "16px" }}>
                Frontend UI Developer
              </p>
            </div>
            <div>
              <p
                className="uppercase font-semibold text-neutral-400 tracking-wider mb-1"
                style={{ fontSize: "13px" }}
              >
                Year
              </p>
              <p className="font-bold text-white" style={{ fontSize: "16px" }}>
                {project.year || "2026"}
              </p>
            </div>
          </div>

          {/* Challenge & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="p-6 md:p-8 bg-[#1C1C1C] border border-white/10 rounded-2xl flex flex-col justify-between">
              <div>
                <span
                  className="uppercase font-bold text-[var(--accent)] tracking-wider block mb-2"
                  style={{ fontSize: "13px" }}
                >
                  01. The Challenge
                </span>
                <h3
                  className="font-bold text-white mb-3"
                  style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
                >
                  Architecture &amp; UX Hurdles
                </h3>
                <p
                  className="text-neutral-300 leading-relaxed mb-0"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-[#1C1C1C] border border-white/10 rounded-2xl flex flex-col justify-between">
              <div>
                <span
                  className="uppercase font-bold text-[var(--accent)] tracking-wider block mb-2"
                  style={{ fontSize: "13px" }}
                >
                  02. The Solution
                </span>
                <h3
                  className="font-bold text-white mb-3"
                  style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
                >
                  Engineering &amp; Precision Execution
                </h3>
                <p
                  className="text-neutral-300 leading-relaxed mb-0"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Project Gallery Mockups */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3
                className="font-bold text-white mb-4"
                style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
              >
                Visual Showcase &amp; Design Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((imgUrl, gIdx) => (
                  <div
                    key={gIdx}
                    className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40"
                  >
                    <ImageWithSkeleton
                      src={imgUrl}
                      alt={`${project.title} Preview ${gIdx + 1}`}
                      fill
                      imageClassName="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      rounded="rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack & Action Links */}
          <div className="p-6 md:p-8 bg-[#1C1C1C] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="uppercase font-semibold text-neutral-400 tracking-wider mb-3"
                style={{ fontSize: "13px" }}
              >
                Technologies &amp; Libraries Used
              </p>
              <div className="flex flex-wrap gap-2">
                {(project.techStack || project.tags).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3.5 py-1.5 bg-black/40 border border-white/10 rounded-full font-semibold text-white/90"
                    style={{ fontSize: "14px" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.liveUrl && (
                <AnimatedButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-anim btn-default btn-accent slide-right-up"
                  caption="Explore Live"
                  iconClass="ph-bold ph-arrow-up-right"
                />
              )}
            </div>
          </div>

          {/* Prev / Next Project Switcher Navigation */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={() => (onSelectProject ? onSelectProject(prevProject) : null)}
              className="group flex items-center gap-3 text-left py-2.5 px-4 rounded-xl hover:bg-white/5 transition-colors"
            >
              <i className="ph-bold ph-arrow-left text-xl text-[var(--accent)] transition-transform group-hover:-translate-x-1"></i>
              <div>
                <p
                  className="uppercase tracking-wider text-neutral-400 font-semibold"
                  style={{ fontSize: "12px" }}
                >
                  Previous
                </p>
                <p
                  className="font-bold text-white group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontSize: "16px" }}
                >
                  {prevProject.highlightTitle}
                </p>
              </div>
            </button>

            <button
              onClick={() => (onSelectProject ? onSelectProject(nextProject) : null)}
              className="group flex items-center gap-3 text-right py-2.5 px-4 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div>
                <p
                  className="uppercase tracking-wider text-neutral-400 font-semibold"
                  style={{ fontSize: "12px" }}
                >
                  Next
                </p>
                <p
                  className="font-bold text-white group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontSize: "16px" }}
                >
                  {nextProject.highlightTitle}
                </p>
              </div>
              <i className="ph-bold ph-arrow-right text-xl text-[var(--accent)] transition-transform group-hover:translate-x-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
