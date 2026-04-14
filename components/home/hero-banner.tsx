"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroBanners } from "@/mock/banners";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const go = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 80);
    },
    [transitioning]
  );

  useEffect(() => {
    const t = setInterval(
      () => go((current + 1) % heroBanners.length),
      6000
    );
    return () => clearInterval(t);
  }, [current, go]);

  const banner = heroBanners[current];
  const total = heroBanners.length;

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-950 select-none"
      style={{ height: "clamp(480px, 88vh, 900px)" }}
    >
      {/* Slides */}
      {heroBanners.map((b, i) => (
        <div
          key={b.id}
          aria-hidden={i !== current}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            i === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={b.image}
            alt={b.title}
            fill
            priority={i === 0}
            /*
             * Anchor at 15% from top: keeps model faces in frame
             * across all viewport widths for our landscape-format editorial shots.
             */
            className="object-cover object-[50%_15%]"
            sizes="100vw"
          />
          {/*
           * Two-layer scrim:
           * 1. Bottom-up gradient — strongest at the text zone, clears at top so the image breathes
           * 2. Subtle left-side vignette — grounds the left-aligned text on wide screens
           */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </div>
      ))}

      {/* Editorial content — bottom-left anchored */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-10 lg:px-14">
          <div className="max-w-xl">

            {/* Badge — eyebrow label */}
            {banner.badge && (
              <p className="text-white/60 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
                {banner.badge}
              </p>
            )}

            {/* Headline */}
            <h1 className="text-white font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
              {banner.title}
            </h1>

            {/* Subtitle */}
            {banner.subtitle && (
              <p className="mt-4 text-white/65 text-sm leading-relaxed max-w-sm">
                {banner.subtitle}
              </p>
            )}

            {/* CTA */}
            {banner.ctaHref && (
              <Link
                href={banner.ctaHref}
                className="mt-8 inline-flex items-center gap-3 border border-white/70 text-white text-[11px] font-semibold uppercase tracking-[0.2em] px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
              >
                {banner.ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Slide counter — top right, editorial */}
      <div className="absolute top-6 right-6 sm:right-10 lg:right-14 z-10 flex items-center gap-2">
        <span className="text-white text-[11px] font-semibold tabular-nums">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="w-8 h-px bg-white/40" />
        <span className="text-white/40 text-[11px] font-semibold tabular-nums">
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Progress bars — bottom right */}
      <div className="absolute bottom-6 right-6 sm:right-10 lg:right-14 z-10 flex items-center gap-1.5">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "h-[2px] transition-all duration-500 ease-out",
              i === current ? "bg-white w-10" : "bg-white/30 w-5 hover:bg-white/50"
            )}
          />
        ))}
      </div>

      {/* Prev / Next — minimal, edge-positioned */}
      <button
        onClick={() => go((current - 1 + total) % total)}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronLeft size={22} strokeWidth={1.5} />
      </button>
      <button
        onClick={() => go((current + 1) % total)}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronRight size={22} strokeWidth={1.5} />
      </button>
    </section>
  );
}
