"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ALL_PROJECTS } from "@/data/projects";
import ProjectModal from "@/components/modals/ProjectModal";

function ProjectsMasonryContent() {
  const searchParams = useSearchParams();
  const [activeProject, setActiveProject] = useState(null);

  // Auto-open modal if project query param exists (e.g. /my-works?project=muvi-cinema)
  useEffect(() => {
    const projectId = searchParams.get("project");
    if (projectId) {
      const found = ALL_PROJECTS.find((p) => p.id === projectId);
      if (found) {
        setActiveProject(found);
      }
    }
  }, [searchParams]);

  return (
    <>
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
                      <a
                        className="mxd-project-item__media masonry-media anim-uni-in-up cursor-pointer"
                        href="#0"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveProject(project);
                        }}
                      >
                        <div
                          className={`mxd-project-item__preview masonry-preview ${project.previewClass} parallax-img-small bg-skeleton-loading`}
                          style={
                            project.image
                              ? { backgroundImage: `url(${project.image})` }
                              : undefined
                          }
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
                      </a>
                      <div className="mxd-project-item__promo masonry-promo">
                        <div className="mxd-project-item__name">
                          <a
                            href="#0"
                            className="anim-uni-in-up cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveProject(project);
                            }}
                          >
                            <span>{project.highlightTitle}</span> {project.title}
                          </a>
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

      {/* Project Details Popup Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onSelectProject={(proj) => setActiveProject(proj)}
        />
      )}
    </>
  );
}

export default function ProjectsMasonry() {
  return (
    <Suspense fallback={null}>
      <ProjectsMasonryContent />
    </Suspense>
  );
}
