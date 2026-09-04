"use client";

import React from "react";
import Link from "next/link";

export default function AnimatedButton({
  href,
  className = "btn btn-anim btn-default btn-outline slide-right-up",
  caption,
  iconClass,
  icon,
  download,
  target,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
  id,
  style,
  children,
}) {
  const textContent = caption || (typeof children === "string" ? children : "");
  const isAnimated = className.includes("btn-anim");

  const renderCaption = () => {
    if (!textContent) return children;

    if (!isAnimated) {
      return <span className="btn-caption">{textContent}</span>;
    }

    const letters = Array.from(textContent);

    return (
      <span className="btn-caption">
        <span className="btn-anim__block" aria-hidden="true">
          {letters.map((char, index) => (
            <span key={index} className="btn-anim__letter">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className="btn-anim__block" aria-hidden="true">
          {letters.map((char, index) => (
            <span key={index} className="btn-anim__letter">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    );
  };

  const content = (
    <>
      {renderCaption()}
      {icon ? (
        <span className="btn-icon inline-flex items-center justify-center">{icon}</span>
      ) : (
        iconClass && <i className={iconClass}></i>
      )}
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/") && !download;
    if (isInternal) {
      return (
        <Link
          href={href}
          className={className}
          aria-label={ariaLabel || textContent}
          onClick={onClick}
          id={id}
          style={style}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={className}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel || textContent}
        onClick={onClick}
        id={id}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      aria-label={ariaLabel || textContent}
      onClick={onClick}
      disabled={disabled}
      id={id}
      style={style}
    >
      {content}
    </button>
  );
}
