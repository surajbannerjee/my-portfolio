"use client";

import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

export default function CountUpNumber({
  end,
  suffix = "+",
  prefix = "",
  duration = 2,
  decimalPlaces = 0,
  className = "mxd-counter__number mxd-stats-number xsmall",
  id,
}) {
  const spanRef = useRef(null);

  useEffect(() => {
    if (!spanRef.current) return;

    const countUpInstance = new CountUp(spanRef.current, end, {
      duration,
      suffix,
      prefix,
      decimalPlaces,
      enableScrollSpy: true,
      scrollSpyOnce: true,
    });

    if (!countUpInstance.error) {
      countUpInstance.start();
    } else {
      console.error(countUpInstance.error);
    }
  }, [end, suffix, prefix, duration, decimalPlaces]);

  return (
    <p ref={spanRef} id={id} className={className}>
      0
    </p>
  );
}
