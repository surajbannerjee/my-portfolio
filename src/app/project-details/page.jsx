import React from "react";
import Link from "next/link";
import InnerHeadline from "@/components/sections/InnerHeadline";
import CtaSection from "@/components/sections/CtaSection";
import AnimatedButton from "@/components/common/AnimatedButton";
import SplitTextReveal from "@/components/common/SplitTextReveal";

export const metadata = {
  title: "Studio Template — Project Details — Suraj Banerjee",
  description: "Detailed case study for the Studio Template project by Suraj Banerjee.",
};

export default function ProjectDetailsPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      {/* 1. Inner Headline */}
      <InnerHeadline
        subtitle="Works"
        colSize="col-xl-10"
        title={<h1 className="inner-headline__title loading__item">Studio template</h1>}
        extraContent={
          <div className="row g-0">
            <div className="col-12 col-xl-2"></div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="inner-headline__paragraph loading__item">
                <p>
                  Inspiring ideas, creative insights, and the latest in design and tech.
                  Fueling innovation for your digital journey.
                </p>
              </div>
              <div className="inner-headline__data">
                <div className="mxd-data-list">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                        <div className="mxd-data-list__item">
                          <p className="mxd-data-list__name">Client</p>
                          <p className="mxd-data-list__content">Mix Design</p>
                        </div>
                        <div className="mxd-data-list__item">
                          <p className="mxd-data-list__name">Services</p>
                          <p className="mxd-data-list__content">Web development</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                        <div className="mxd-data-list__item">
                          <p className="mxd-data-list__name">Industries</p>
                          <p className="mxd-data-list__content">HTML template</p>
                        </div>
                        <div className="mxd-data-list__item">
                          <p className="mxd-data-list__name">Date</p>
                          <p className="mxd-data-list__content">January 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 mxd-grid-item no-margin">
              <div className="inner-headline__tags loading__fade">
                <span className="tag tag-default tag-outline-medium">Web design</span>
                <span className="tag tag-default tag-outline-medium">UI/UX design</span>
                <span className="tag tag-default tag-outline-medium">Development</span>
                <span className="tag tag-default tag-outline-medium">Branding</span>
              </div>
            </div>
          </div>
        }
      />

      {/* 2. Parallax Divider */}
      <div className="mxd-section">
        <div className="mxd-container">
          <div className="mxd-divider loading__fade">
            <div className="mxd-divider__image prj-details-img-01 parallax-img"></div>
          </div>
        </div>
      </div>

      {/* 3. Project Details Content */}
      <div className="mxd-section mxd-project overflow-hidden">
        <div className="mxd-container grid-container">
          {/* Challenge */}
          <div className="mxd-project__block pre-grid">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-project__subtitle">
                    <SplitTextReveal as="h2" className="reveal-type anim-uni-in-up">
                      Challenge
                    </SplitTextReveal>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-project__content">
                    <div className="mxd-project__paragraph">
                      <p className="t-large t-bright anim-uni-in-up">
                        Donec maximus lorem quam, a aliquam erat aliquam quis. Sed accumsan
                        sagittis condimentum. Proin eu nulla.
                      </p>
                      <p className="anim-uni-in-up">
                        Nunc vel ligula tincidunt, fermentum velit ac, sodales eros.
                        Vivamus ac leo in arcu accumsan condimentum. Nullam ac est quis dolor
                        scelerisque interdum in at risus. Pellentesque mattis est vel
                        maximus posuere. Integer tristique ipsum velit, vitae gravida purus
                        laoreet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Cards */}
          <div className="mxd-project__block no-margin">
            <div className="mxd-project-cards">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-project-cards__inner align-end bg-base-tint radius-m">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/works/1200x1200_prj-details-01.webp"
                        alt="Project Preview"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-project-cards__inner align-end bg-base-tint radius-m">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/works/1400x1000_prj-details-01.webp"
                        alt="Project Preview"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-project-cards__inner bg-base-tint radius-m">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/works/1400x1000_prj-details-02.webp"
                        alt="Project Preview"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-project-cards__inner bg-base-tint radius-m">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/works/1200x1200_prj-details-02.webp"
                        alt="Project Preview"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="mxd-project__block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-project__subtitle">
                    <SplitTextReveal as="h2" className="reveal-type anim-uni-in-up">
                      Solution
                    </SplitTextReveal>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-project__content">
                    <div className="mxd-project__paragraph medium-text">
                      <p className="anim-uni-in-up">
                        Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Quisque ut arcu pulvinar, rhoncus libero
                        id, lobortis metus. Morbi tristique dolor sit amet turpis faucibus
                        malesuada.
                      </p>
                      <p className="anim-uni-in-up">
                        Morbi non ipsum vel risus scelerisque sagittis nec a ipsum. Nulla
                        odio neque, feugiat a arcu et, tristique cursus diam. Duis
                        consectetur massa nibh, ut rhoncus nibh vestibulum in. Sed
                        imperdiet metus sed arcu efficitur posuere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parallax Fullwidth Image */}
          <div className="mxd-project__block mxd-grid-item no-margin">
            <div className="mxd-divider">
              <div className="mxd-divider__image prj-details-img-02 parallax-img"></div>
            </div>
          </div>

          {/* Client's Feedback */}
          <div className="mxd-project__block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-project__subtitle">
                    <SplitTextReveal as="h2" className="reveal-type anim-uni-in-up">
                      Client&apos;s
                      <br />
                      feedback
                    </SplitTextReveal>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-project__content">
                    <div className="mxd-project__paragraph medium-text">
                      <p className="anim-uni-in-up">
                        Working with Suraj Banerjee was an absolute pleasure! He took the
                        time to understand our business needs and translated them into a
                        beautifully designed, user-friendly website. The team&apos;s attention
                        to detail, creativity, and technical expertise exceeded our
                        expectations. We&apos;ve received so much positive feedback from our
                        customers already.
                      </p>
                      <div className="mxd-project__client">
                        <p className="mxd-project__client-name anim-uni-in-up">
                          Lea Tomato
                        </p>
                        <p className="t-small anim-uni-in-up">
                          Senior designer in <Link href="#">The Way</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next / Prev Navigation */}
          <div className="mxd-project__block no-margin">
            <div className="mxd-project__nav">
              <div className="mxd-project__divider anim-uni-in-up"></div>
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-6 mxd-project__navitem left mxd-grid-item no-margin anim-uni-in-up">
                    <AnimatedButton
                      href="/project-details"
                      className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left"
                      caption="Prev"
                      iconClass="ph ph-arrow-left"
                    />
                    <Link className="mxd-project__link anim-uni-in-up" href="/project-details">
                      <span>Mobile app design</span>
                    </Link>
                  </div>
                  <div className="col-6 mxd-project__navitem right mxd-grid-item no-margin anim-uni-in-up">
                    <AnimatedButton
                      href="/project-details"
                      className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right"
                      caption="Next"
                      iconClass="ph ph-arrow-right"
                    />
                    <Link className="mxd-project__link anim-uni-in-up" href="/project-details">
                      <span>AI experiments</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}
