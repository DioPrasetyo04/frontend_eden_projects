"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { Props } from "@/app/types/heroslide";

export default function HeroCarousel({
  slides,
  interval = 2000,
  title,
  className = "",
}: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const active = slides[idx];

  return (
    <div className={`relative w-full h-[680px] lg:h-[680px] overflow-hidden ${className}`}>
      {/* Background Image */}
      <Image
        src={active.image}
        alt={active.subtitle || "carousel slide"}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`transition-all rounded-full ${
              i === idx
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
