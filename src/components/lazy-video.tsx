"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  ariaLabel: string;
}

export default function LazyVideo({ src, ariaLabel }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      aria-label={ariaLabel}
      width="100%"
      height="auto"
      style={{ objectFit: "cover" }}
      loop
      muted
      playsInline
      preload="none"
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
}
