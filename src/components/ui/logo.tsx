"use client";

import { useState } from "react";
import { clsx } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Brand logo.
 *
 * Drop the official logo file in `public/brand/` named `logo.svg` (preferred,
 * vector) or `logo.png` (transparent background, light/gold for the dark UI).
 * It will render automatically everywhere this component is used.
 *
 * Until that file exists, it falls back gracefully to the typographic
 * "E7 PICTURES" wordmark — so the UI never shows a broken image.
 */
const SOURCES = ["/brand/logo.svg", "/brand/logo.png"];

export function Logo({
  height = 30,
  className,
  textClassName = "font-serif text-headline-md uppercase tracking-widest text-primary",
}: {
  height?: number;
  className?: string;
  textClassName?: string;
}) {
  const [idx, setIdx] = useState(0);

  if (idx >= SOURCES.length) {
    return <span className={clsx(textClassName, className)}>{site.name.toUpperCase()}</span>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SOURCES[idx]}
      alt={site.name}
      style={{ height }}
      onError={() => setIdx((i) => i + 1)}
      className={clsx("w-auto select-none", className)}
    />
  );
}
