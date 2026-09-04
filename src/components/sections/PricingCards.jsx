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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {PRICING_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className="w-full flex flex-col mxd-pricing-table__item mxd-grid-item animate-card-3"
                  >
                    <div
                      className={`relative flex flex-col h-full rounded-[2rem] bg-[var(--base-tint)] p-[3.2rem] lg:p-[4rem] transition-all duration-300 ${plan.isBestChoice
                        ? "border-2 border-[var(--accent)] shadow-[0_14px_35px_rgba(247,0,4,0.39)]"
                        : "border border-white/10 hover:border-white/20 hover:shadow-[0_14px_28px_rgba(0,0,0,0.4)]"
                      }`}
                    >
                      {/* Top Badge Tag */}
                      {plan.tag && (
                        <div className="absolute bg-[var(--base-tint)] rounded-full -top-[1.6rem] left-[3.2rem] lg:left-[4rem]">
                          <span
                            className={`tag ${plan.isBestChoice
                              ? "tag-accent !px-[1.6rem] !py-[0.6rem] !text-[1.3rem] !font-bold uppercase tracking-wider rounded-full"
                              : "tag-default tag-outline !px-[1.6rem] !py-[0.6rem] !text-[1.3rem] !font-medium"
                              }`}
                          >
                            {plan.tag}
                          </span>
                        </div>
                      )}

                      {/* Header (Title & Description) */}
                      <div className="pt-[1rem]">
                        <h3 className="text-[2.6rem] lg:text-[3rem] font-medium leading-[1.2] text-[var(--t-bright)] mb-[1rem] font-accent">
                          {plan.title}
                        </h3>
                        {plan.description && (
                          <p className="text-[1.6rem] text-[var(--t-muted)] leading-[1.5] min-h-[5.2rem]">
                            {plan.description}
                          </p>
                        )}
                      </div>

                      {/* Price Section */}
                      <div className="mt-[2rem] mb-[2.4rem] pb-[2.4rem] border-b border-[var(--base-opp)] flex flex-col justify-start">
                        <div className="flex items-baseline gap-[0.6rem] flex-wrap">
                          {plan.price.toLowerCase() !== "custom" && (
                            <span className="text-[2.4rem] font-normal text-[var(--t-muted)] font-accent">
                              ₹
                            </span>
                          )}
                          <span className="text-[4.8rem] lg:text-[5.4rem] font-semibold leading-[0.95] tracking-tight text-[var(--t-bright)] font-accent">
                            {plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-[1.6rem] text-[var(--t-muted)] font-normal font-accent">
                              {plan.period}
                            </span>
                          )}
                        </div>

                        {plan.timeline && (
                          <p className="text-[1.4rem] text-[var(--t-muted)] mt-[1rem] leading-[1.4]">
                            {plan.timeline}
                          </p>
                        )}

                        {/* CTA Button */}
                        <div className="mt-[2.4rem] w-full">
                          <AnimatedButton
                            href={plan.ctaUrl}
                            className={`btn btn-anim btn-default btn-fullwidth slide-right-up ${plan.isBestChoice
                              ? "btn-accent"
                              : "btn-opposite"
                              }`}
                            caption={plan.ctaText}
                            iconClass="ph-bold ph-arrow-up-right"
                          />
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="flex-1 flex flex-col justify-start">
                        <p className="text-[1.6rem] font-semibold text-[var(--t-bright)] mb-[1.6rem]">
                          What&apos;s included:
                        </p>
                        <ul className="flex flex-col gap-[1.2rem] mb-[3rem]">
                          {plan.features.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-[1.2rem] text-[1.5rem] lg:text-[1.6rem] text-[var(--t-medium)] leading-[1.4]"
                            >
                              <i className="ph ph-check text-[1.8rem] text-[var(--accent)] shrink-0 mt-[0.1rem]"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Footer Link */}
                      <div className="mt-auto pt-[2rem] border-t border-[var(--base-opp)] text-center">
                        <Link
                          href={plan.infoLinkUrl}
                          className="text-[1.4rem] lg:text-[1.5rem] text-[var(--t-muted)] hover:text-[var(--t-bright)] underline transition-colors"
                        >
                          {plan.infoLinkText}
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


