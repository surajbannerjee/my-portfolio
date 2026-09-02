"use client";

import React from "react";
import Link from "next/link";
import { ImageWithSkeleton } from "@/components/common/Skeleton";
import { TEAM_MEMBERS } from "@/data/team";
import AnimatedButton from "@/components/common/AnimatedButton";
import SplitTextReveal from "@/components/common/SplitTextReveal";

export default function TeamGrid() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-team-cards">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {/* 1. Header / Intro Block */}
                <div className="col-12 col-md-6 col-xl-4 mxd-team-cards__item mxd-grid-item padding-bottom-desktop animate-card-3">
                  <div className="mxd-team-cards__h2-block left-block">
                    <div className="mxd-section-title pre-grid">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12">
                            <div className="mxd-section-title__title">
                              <SplitTextReveal as="h2" className="reveal-type">
                                Dreamers and doers
                              </SplitTextReveal>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mxd-section-title__descr">
                              <p className="anim-uni-in-up">
                                Creatives and strategists united by a passion for crafting
                                impactful digital solutions.
                              </p>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <AnimatedButton
                                href="/my-works"
                                className="btn btn-anim btn-default btn-outline slide-right-up"
                                caption="View Works"
                                iconClass="ph-bold ph-arrow-up-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. All Team Members dynamically rendered */}
                {TEAM_MEMBERS.map((member) => (
                  <div
                    key={member.id}
                    className="col-12 col-md-6 col-xl-4 mxd-team-cards__item mxd-grid-item padding-bottom-desktop animate-card-3"
                  >
                    <div className="mxd-team-cards__media anim-uni-in-up">
                      <div className="mxd-team-cards__photo">
                        <ImageWithSkeleton
                          src={member.photo}
                          alt={member.name}
                          width={600}
                          height={600}
                          style={{ width: "100%", height: "100%", aspectRatio: "1 / 1" }}
                          className="w-full h-full aspect-square"
                          imageClassName="w-full h-full object-cover aspect-square"
                          rounded="rounded-2xl"
                        />
                      </div>
                      <div className="mxd-team-cards__socials">
                        {member.socials.map((social, sIdx) => (
                          <AnimatedButton
                            key={sIdx}
                            href={social.url}
                            target="_blank"
                            className="btn btn-anim tag tag-default tag-permanent"
                            caption={social.name}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mxd-team-cards__info">
                      <p className="mxd-team-cards__name t-large t-bright t-caption">
                        {member.name}
                      </p>
                      <p className="mxd-team-cards__position t-small t-medium t-140">
                        {member.position}
                      </p>
                    </div>
                  </div>
                ))}

                {/* 3. Career Card */}
                <div className="col-12 col-md-6 col-xl-4 mxd-team-cards__item mxd-grid-item padding-bottom-desktop animate-card-3">
                  <div className="mxd-team-cards__media no-margin overflow-visible anim-uni-in-up">
                    <Link className="mxd-team-cards__career" href="/contact">
                      <div className="career__image flex items-center justify-center">
                        <ImageWithSkeleton
                          src="/img/illustrations/800x800_card-image-04.webp"
                          alt="Career"
                          width={240}
                          height={240}
                          style={{ width: "160px", height: "160px" }}
                          className="w-40 h-40 mx-auto aspect-square"
                          imageClassName="object-contain"
                          rounded="rounded-2xl"
                        />
                      </div>
                      <div className="career__caption">
                        <p className="mxd-team-cards__name t-large t-bright t-caption">
                          Maybe you?
                        </p>
                        <p className="mxd-team-cards__position t-small t-medium t-140">
                          Become a part of our team
                        </p>
                      </div>
                    </Link>
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
