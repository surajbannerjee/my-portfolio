"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { TESTIMONIALS } from "@/data/testimonials";
import AnimatedButton from "@/components/common/AnimatedButton";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  return (
    <div id="testimonials" className="mxd-section overflow-hidden padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="testimonials-slider-2 no-padding">
            <Swiper
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              slidesPerView={1}
              effect="fade"
              spaceBetween={30}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={1000}
              loop={true}
              className="swiper-testimonials-2 no-padding"
            >
              {TESTIMONIALS.map((item) => (
                <SwiperSlide key={item.id} className="mxd-fullwidth-slide no-blur">
                  <div className="mxd-testimonials-image">
                    <div className="container-fluid p-0 fullheight-l">
                      <div className="row g-0 d-flex align-items-stretch fullheight-l">
                        <div className="col-12 col-xl-7 mxd-testimonials-image__content mxd-grid-item no-margin">
                          <div className="mxd-testimonials-image__author">
                            <div className="mxd-testimonials-image__avatar">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={item.avatar} alt={item.name} />
                            </div>
                            <div className="mxd-testimonials-image__info">
                              <p className="mxd-testimonials-image__name">{item.name}</p>
                              <p className="mxd-testimonials-image__position t-small">
                                {item.position}{" "}
                                <a className="link-small-underline" href={item.companyUrl || "#"}>
                                  {item.company}
                                </a>
                              </p>
                              <div className="mxd-testimonials-image__rating">
                                {Array.from({ length: item.rating }).map((_, rIdx) => (
                                  <i key={rIdx} className="ph-fill ph-star"></i>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mxd-testimonials-image__text">
                            <p className="t-large">{item.text}</p>
                            <AnimatedButton
                              href={item.projectUrl || "/my-works"}
                              className="btn btn-anim btn-default btn-small btn-opposite slide-right-up"
                              caption="Project Page"
                              iconClass="ph ph-arrow-up-right"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-xl-5 mxd-testimonials-image__img mxd-grid-item no-margin">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
