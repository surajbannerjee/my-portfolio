"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";

export default function FaqAccordion() {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mxd-section mxd-section-inner-form padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-accordion loading__fade">
                    {FAQ_ITEMS.map((item) => {
                      const isActive = activeId === item.id;
                      return (
                        <div key={item.id} className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up"></div>
                          <div
                            className={`mxd-accordion__title anim-uni-in-up ${
                              isActive ? "accordion-active" : ""
                            }`}
                            onClick={() => toggleItem(item.id)}
                            style={{ cursor: "pointer" }}
                          >
                            <p>{item.question}</p>
                            <div
                              className={`mxd-accordion__arrow ${
                                isActive ? "accordion-rotate" : ""
                              }`}
                            >
                              <i className="ph ph-plus"></i>
                            </div>
                          </div>
                          <div
                            className="mxd-accordion__content"
                            style={{
                              display: isActive ? "block" : "none",
                              overflow: "hidden",
                              transition: "all 0.4s ease",
                            }}
                          >
                            <p className="mxd-accordion__text">{item.answer}</p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up"></div>
                        </div>
                      );
                    })}
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
