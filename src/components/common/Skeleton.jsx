"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export { Skeleton };

/**
 * Next.js Image with Automatic Shadcn Skeleton Shimmer Placeholder
 */
export function ImageWithSkeleton({
  src,
  alt = "Image",
  className = "",
  imageClassName = "",
  containerClassName = "",
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  style = {},
  rounded = "rounded-2xl",
  onLoad,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  return (
    <div
      className={cn("relative overflow-hidden", rounded, containerClassName || className)}
      style={{
        width: !fill && width ? width : "100%",
        height: !fill && height ? height : "100%",
        ...style,
      }}
    >
      {/* Shadcn Skeleton Shimmer Placeholder */}
      {!isLoaded && (
        <Skeleton
          className={cn("absolute inset-0 z-10 w-full h-full skeleton-shimmer", rounded)}
        />
      )}

      {/* Actual Image with smooth fade-in */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        onLoad={handleLoad}
        className={cn(
          "transition-all duration-700 ease-out",
          isLoaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-[1.02] blur-sm",
          imageClassName
        )}
        {...props}
      />
    </div>
  );
}

/**
 * Project Card Skeleton Placeholder using Shadcn Skeleton
 */
export function SkeletonProjectCard({ className = "" }) {
  return (
    <div
      className={cn(
        "w-full rounded-[1.8rem] bg-white/[0.03] border border-white/10 p-5 space-y-4",
        className
      )}
    >
      <Skeleton className="w-full aspect-[16/10] rounded-2xl" />
      <div className="space-y-2 pt-2">
        <Skeleton className="w-1/3 h-5" />
        <Skeleton className="w-3/4 h-7" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="w-16 h-6 rounded-full" />
          <Skeleton className="w-20 h-6 rounded-full" />
          <Skeleton className="w-16 h-6 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/**
 * Text Block Skeleton Placeholder using Shadcn Skeleton
 */
export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {Array.from({ length: lines }).map((_, idx) => (
        <Skeleton
          key={idx}
          className={cn(
            "h-4",
            idx === lines - 1 ? "w-2/3" : idx === 0 ? "w-full" : "w-5/6"
          )}
        />
      ))}
    </div>
  );
}

export default Skeleton;
