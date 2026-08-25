"use client";

import React from "react";
import { ImageWithSkeleton } from "@/components/common/Skeleton";
import CountUpNumber from "@/components/common/CountUpNumber";
import AnimatedButton from "@/components/common/AnimatedButton";

export default function StatsCards() {
  return (
    <div className="mxd-section mxd-section-inner-stats overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
              <div className="col-12 col-xl-10">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-stats">
                    <div className="mxd-stats-cards loading__fade">
                      <div className="container-fluid px-0">
                        <div className="row gx-0">
                          {/* item 1 */}
                          <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item">
                            <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                              <div className="mxd-counter">
                                <CountUpNumber
                                  end={3}
                                  id="stats-counter-3"
                                  className="mxd-counter__number mxd-stats-number"
                                />
                                <p className="mxd-counter__descr t-140 t-bright">
                                  Years of professional experience in designing digital
                                  products
                                </p>
                              </div>
                              <div className="mxd-stats-cards__btngroup">
                                <AnimatedButton
                                  href="/contact"
                                  className="btn btn-anim btn-default btn-outline slide-right-up"
                                  caption="Start New Project"
                                  iconClass="ph-bold ph-arrow-up-right"
                                />
                              </div>
                              <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                                <ImageWithSkeleton
                                  src="/img/illustrations/800x800_card-image-03.webp"
                                  alt="Stats Illustration"
                                  width={800}
                                  height={800}
                                  rounded="rounded-2xl"
                                />
                              </div>
                            </div>
                          </div>
                          {/* item 2 */}
                          <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item">
                            <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                              <div className="mxd-counter">
                                <CountUpNumber
                                  end={70}
                                  id="stats-counter-4"
                                  className="mxd-counter__number mxd-stats-number"
                                />
                                <p className="mxd-counter__descr t-140 t-bright">
                                  Successfully
                                  <br />
                                  completed projects
                                </p>
                              </div>
                              <div className="mxd-stats-cards__btngroup">
                                <AnimatedButton
                                  href="/my-works"
                                  className="btn btn-anim btn-default btn-outline slide-right-up"
                                  caption="Works"
                                  iconClass="ph-bold ph-arrow-up-right"
                                />
                              </div>
                              <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                                <ImageWithSkeleton
                                  src="/img/illustrations/800x800_card-image-04.webp"
                                  alt="Stats Illustration"
                                  width={800}
                                  height={800}
                                  rounded="rounded-2xl"
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
          </div>
        </div>
      </div>
    </div>
  );
}
