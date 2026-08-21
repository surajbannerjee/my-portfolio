"use client";

import React from "react";
import RotatingButton from "@/components/common/RotatingButton";

export default function ParallaxDivider({
  imageClass = "divider-image-6",
  circleHref = "/contact",
  circleText = "Let's start new project * Let's start new project * ",
  circleImage = "/img/icons/300x300_obj-btn-02.webp",
  className = "mxd-section padding-pre-title",
  download,
}) {
  return (
    <div className={className}>
      <div className="mxd-container">
        <div className="mxd-container__circle">
          <RotatingButton
            href={circleHref}
            text={circleText}
            imageSrc={circleImage}
            download={download}
          />
        </div>
        <div className="mxd-divider">
          <div className={`mxd-divider__image ${imageClass} parallax-img`}></div>
        </div>
      </div>
    </div>
  );
}
