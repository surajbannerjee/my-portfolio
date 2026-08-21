"use client";

import React from "react";
import Link from "next/link";
import { ALL_PROJECTS } from "@/data/projects";

export default function ProjectsMasonry() {
  return (
    <div className="mxd-section mxd-section-inner-headline grid-headline padding-default">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block loading-wrap">
          <div className="mxd-projects-masonry loading__item">
            <div className="container-fluid p-0">
              <div className="row g-0 mxd-projects-masonry__gallery">
                {/* Title */}
                <div className="col-12 col-xl-6 mxd-projects-masonry__title headline-title">
                  <div className="mxd-block__inner-headline">
                    <h1 className="inner-headline__title headline-img-before headline-img-07">
                      Projects
                      <br />
                      to explore
                    </h1>
                  </div>
                </div>

                {/* Project Items */}
                {ALL_PROJECTS.map((project) => (
                  <div
                    key={project.id}
                    className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item"
                  >
                    <Link
                      className="mxd-project-item__media masonry-media anim-uni-in-up"
                      href={project.url}
                    >
                      <div
                        className={`mxd-project-item__preview masonry-preview ${project.previewClass} parallax-img-small`}
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
                    <div className="mxd-project-item__promo masonry-promo">
                      <div className="mxd-project-item__name">
                        <Link href={project.url} className="anim-uni-in-up">
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
  );
}
