"use client";

import React from "react";
import RotatingButton from "@/components/common/RotatingButton";
import { ICON_300X300_OBJ_BTN_02 } from "@/constant";

export default function ParallaxDivider({
  imageClass = "divider-image-6",
  circleHref = "/contact",
  circleText = "Let's start new project * Let's start new project * ",
  circleImage = ICON_300X300_OBJ_BTN_02,
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
