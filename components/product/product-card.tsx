"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatMoney, discountPercent, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();
  const [wishlist, setWishlist] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const images = product.images.length > 0 ? product.images : ["/images/placeholder.jpg"];
  const count = images.length;
  const hasMultiple = count > 1;

  const go = useCallback(
    (idx: number) => {
      setActiveIdx(((idx % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => go(activeIdx + 1), [activeIdx, go]);
  const prev = useCallback(() => go(activeIdx - 1), [activeIdx, go]);

  // Auto-advance: on desktop only when hovered, on mobile always
  useEffect(() => {
    if (!hasMultiple) return;
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 3000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [hasMultiple, next, isHovered]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
      dx < 0 ? next() : prev();
      if (autoRef.current) {
        clearInterval(autoRef.current);
        autoRef.current = setInterval(next, 3000);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Prefer an in-stock Size variant; fall back to first in-stock; fall back to first
  const quickAddVariant =
    product.variants.find((v) => v.name === "Size" && v.stock > 0) ??
    product.variants.find((v) => v.stock > 0) ??
    product.variants[0];

  const badge = !product.inStock
    ? { label: "Sold Out", variant: "soldout" as const }
    : product.isNew
    ? { label: "New", variant: "new" as const }
    : product.isBestSeller
    ? { label: "Best Seller", variant: "bestseller" as const }
    : product.compareAtPrice
    ? {
        label: `-${discountPercent(product.price, product.compareAtPrice)}%`,
        variant: "sale" as const,
      }
    : null;

  return (
    <div
      className={cn("group flex flex-col", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image area */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-neutral-100 select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* All images stacked; only active one is visible */}
        {images.map((src, i) => (
          <Link
            key={i}
            href={`/products/${product.slug}`}
            className="block absolute inset-0"
            tabIndex={i === activeIdx ? 0 : -1}
            aria-hidden={i !== activeIdx}
          >
            <Image
              src={src}
              alt={`${product.title} – view ${i + 1}`}
              fill
              className={cn(
                "object-cover object-[50%_40%] transition-opacity duration-400",
                i === activeIdx ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={i === 0}
            />
          </Link>
        ))}

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 pointer-events-none z-10">
            <Badge label={badge.label} variant={badge.variant} />
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={() => setWishlist((v) => !v)}
          className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          aria-label="Add to wishlist"
        >
          <Heart
            size={14}
            className={wishlist ? "fill-red-500 text-red-500" : "text-neutral-600"}
          />
        </button>

        {/* Slide indicators (Penningtons-style thin dashes) */}
        {hasMultiple && (
          <div className="absolute bottom-2 left-0 right-0 z-10 flex items-center justify-center gap-1 px-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  go(i);
                  if (autoRef.current) {
                    clearInterval(autoRef.current);
                    autoRef.current = setInterval(next, 3000);
                  }
                }}
                aria-label={`View image ${i + 1}`}
                className={cn(
                  "h-[2px] rounded-full transition-all duration-300 flex-1 max-w-[24px]",
                  i === activeIdx ? "bg-white" : "bg-white/45"
                )}
              />
            ))}
          </div>
        )}

        {/* Quick Add */}
        {product.inStock && quickAddVariant && (
          <button
            onClick={() => addItem(product.id, quickAddVariant.id)}
            className="absolute bottom-0 left-0 right-0 z-20 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-neutral-800"
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Info */}
      <div className="mt-2.5 space-y-0.5 flex-1">
        {product.brand && (
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
            {product.brand}
          </p>
        )}
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm text-black leading-snug hover:underline line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="flex items-center gap-2 pt-0.5">
          <span className="text-sm font-semibold">{formatMoney(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-neutral-400 line-through">
              {formatMoney(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
