"use client";

import React from "react";
import Link from "next/link";
import { PRICING_PLANS } from "@/data/pricing";
import AnimatedButton from "@/components/common/AnimatedButton";

export default function PricingCards() {
  return (
    <div className="mxd-section padding-grid-pre-mtext">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-pricing-table loading__fade">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {PRICING_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className="col-12 col-xl-4 mxd-pricing-table__item mxd-grid-item animate-card-3"
                  >
                    <div
                      className={`mxd-pricing-table__inner ${
                        plan.isBestChoice ? "best-choice" : ""
                      }`}
                    >
                      {plan.tag && (
                        <div className="mxd-pricing-table__tag">
                          <span
                            className={`tag tag-default ${plan.tagClass || "tag-accent"}`}
                          >
                            {plan.tag}
                          </span>
                        </div>
                      )}
                      <div className="mxd-pricing-table__data">
                        <div className="pricing-data__header">
                          <p className="pricing-header__title anim-uni-in-up">
                            {plan.title}
                          </p>
                          {plan.description && (
                            <p className="pricing-header__descr anim-uni-in-up">
                              {plan.description}
                            </p>
                          )}
                        </div>
                        <div className="pricing-data__info">
                          {plan.price && (
                            <div className="pricing-data__price">
                              <div className="pricing-data__num anim-uni-in-up">
                                {plan.price.toLowerCase() !== "custom" && (
                                  <span className="pricing-data__currency">₹</span>
                                )}
                                <span className="pricing-data__amount">
                                  {plan.price}
                                </span>
                                {plan.period && (
                                  <span className="pricing-data__period">
                                    {plan.period}
                                  </span>
                                )}
                              </div>
                              {plan.timeline && (
                                <p className="t-small t-muted t-140 anim-uni-in-up">
                                  {plan.timeline}
                                </p>
                              )}
                            </div>
                          )}
                          <div className="pricing-data__btnholder anim-uni-in-up">
                            <AnimatedButton
                              href={plan.ctaUrl}
                              className="btn btn-anim btn-default btn-opposite btn-fullwidth slide-right-up"
                              caption={plan.ctaText}
                              iconClass="ph-bold ph-arrow-up-right"
                            />
                          </div>
                          <div className="pricing-data__divider anim-uni-in-up"></div>
                        </div>
                      </div>
                      <div className="mxd-pricing-table__plan">
                        <p className="pricing-plan__caption t-semibold t-bright anim-uni-in-up">
                          What&apos;s included:
                        </p>
                        <div className="pricing-plan__list">
                          <ul className="mxd-check-list">
                            {plan.features.map((feature, fIdx) => (
                              <li key={fIdx} className="anim-uni-in-up">
                                <i className="ph ph-check"></i>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mxd-pricing-table__link anim-uni-in-up mt-auto pt-4">
                        <Link href={plan.infoLinkUrl}>{plan.infoLinkText}</Link>
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
