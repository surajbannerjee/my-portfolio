"use client";

import React from "react";
import AnimatedButton from "@/components/common/AnimatedButton";
import SplitTextReveal from "@/components/common/SplitTextReveal";

export default function ManifestSection() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0 d-xl-flex justify-content-xl-center">
              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__manifest centered anim-uni-in-up">
                    <SplitTextReveal
                      as="p"
                      className="mxd-manifest mxd-manifest-l reveal-type"
                    >
                      I believe high-converting websites exist at the intersection of intuitive UI design and clean, scalable code. By translating complex Figma designs into responsive, blazing-fast React and Next.js applications, I help brands achieve measurable business growth.
                    </SplitTextReveal>
                    <div className="mxd-manifest__controls anim-uni-in-up">
                      <div className="mxd-btngroup centered">
                        <AnimatedButton
                          href="/my-works"
                          className="btn btn-anim btn-default btn-accent slide-right-up"
                          caption="Featured Works"
                          iconClass="ph-bold ph-arrow-up-right"
                        />
                        <AnimatedButton
                          href="/img/pdf/CV.pdf"
                          download="Suraj_Banerjee_CV.pdf"
                          id="download-cv-btn"
                          className="btn btn-anim btn-default btn-outline slide-down"
                          caption="Download Resume"
                          iconClass="ph-bold ph-arrow-down"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
