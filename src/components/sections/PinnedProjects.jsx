"use client";

import React from "react";
import Link from "next/link";
import { PINNED_PROJECTS } from "@/data/projects";
import AnimatedButton from "@/components/common/AnimatedButton";
import SplitTextReveal from "@/components/common/SplitTextReveal";

export default function PinnedProjects() {
  return (
    <div id="projects" className="mxd-section padding-hero-09 padding-grid-pre-mtext">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-pinned-projects">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-pinned-projects__static">
                  <div className="mxd-pinned-projects__static-inner no-margin">
                    <div className="mxd-section-title no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title">
                              <SplitTextReveal as="h2" className="h2-large reveal-type">
                                Projects
                              </SplitTextReveal>
                            </div>
                          </div>
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <AnimatedButton
                                href="/my-works"
                                className="btn btn-anim btn-default btn-outline slide-right-up"
                                caption="See All"
                                iconClass="ph-bold ph-arrow-up-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-pinned-projects__scroll">
                  <div className="mxd-pinned-projects__scroll-inner mxd-grid-item no-margin">
                    {PINNED_PROJECTS.map((project) => (
                      <div key={project.id} className="mxd-project-item">
                        <Link
                          className="mxd-project-item__media anim-uni-in-up"
                          href={project.url}
                        >
                          <div
                            className={`mxd-project-item__preview ${project.previewClass} parallax-img-small`}
                            style={{ backgroundImage: `url(${project.image})` }}
                          ></div>
                          <div className="mxd-project-item__tags">
                            {project.tags.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="tag tag-default tag-permanent"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Link>
                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <Link className="anim-uni-in-up" href={project.url}>
                              <span>{project.highlightTitle}</span> {project.title}
                            </Link>
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
      </div>
    </div>
  );
}
