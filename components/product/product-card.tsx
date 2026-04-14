"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
    <div className={cn("group flex flex-col", className)}>
      {/* Image area */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <Link href={`/products/${product.slug}`} className="block absolute inset-0">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover object-[50%_40%] transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={product.title}
              fill
              className="object-cover object-[50%_40%] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}
        </Link>

        {badge && (
          <div className="absolute top-2 left-2 pointer-events-none">
            <Badge label={badge.label} variant={badge.variant} />
          </div>
        )}

        {/* Wishlist */}
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

        {/* Quick Add */}
        {product.inStock && quickAddVariant && (
          <button
            onClick={() => addItem(product.id, quickAddVariant.id)}
            className="absolute bottom-0 left-0 right-0 z-10 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-neutral-800"
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
