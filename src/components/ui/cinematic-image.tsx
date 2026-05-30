"use client";

import { useState } from "react";
import { clsx } from "@/lib/utils";

/**
 * A cinematic still that always looks intentional: it renders over a
 * gradient "film-poster" base, so if the image is slow or fails to load,
 * the frame degrades gracefully instead of showing a broken image.
 */
export function CinematicImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={clsx("film-poster overflow-hidden", className)}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={clsx(
            "h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName
          )}
        />
      )}
    </div>
  );
}
