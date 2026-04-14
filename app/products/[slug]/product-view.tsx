"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Share2, Minus, Plus, Check, ChevronDown } from "lucide-react";
import { products } from "@/mock/products";
import { formatMoney, discountPercent, cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/lib/types";

export function ProductView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    product.variants[0]?.id ?? null
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const sizeVariants = product.variants.filter((v) => v.name === "Size");
  const colorVariants = product.variants.filter((v) => v.name === "Color");

  const handleAddToCart = () => {
    if (!selectedVariantId) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product.id, selectedVariantId);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const related = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link href={`/collections/${product.categoryId}`} className="hover:text-black transition-colors capitalize">
          {product.categoryId.replace(/-/g, " ")}
        </Link>
        <ChevronRight size={12} />
        <span className="text-neutral-700 line-clamp-1">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
        {/* Gallery */}
        <div className="space-y-3">
          <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
            <Image
              src={product.images[activeImage]}
              alt={product.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                <span className="bg-white px-4 py-2 text-sm font-semibold border border-neutral-300">
                  Sold Out
                </span>
              </div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative w-16 h-20 bg-neutral-100 overflow-hidden border-2 transition-colors",
                    activeImage === i ? "border-black" : "border-transparent"
                  )}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info panel */}
        <div className="lg:sticky lg:top-24 space-y-5">
          {product.brand && (
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
              {product.brand}
            </p>
          )}
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{product.title}</h1>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setWishlist((v) => !v)}
                className="p-2 text-neutral-500 hover:text-black transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart
                  size={20}
                  className={wishlist ? "fill-red-500 text-red-500" : ""}
                />
              </button>
              <button
                className="p-2 text-neutral-500 hover:text-black transition-colors"
                aria-label="Share"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <StarRating rating={product.rating} reviewCount={product.reviewCount} />

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">{formatMoney(product.price)}</span>
            {product.compareAtPrice && (
              <>
                <span className="text-base text-neutral-400 line-through">
                  {formatMoney(product.compareAtPrice)}
                </span>
                <Badge
                  label={`Save ${discountPercent(product.price, product.compareAtPrice)}%`}
                  variant="sale"
                />
              </>
            )}
          </div>

          {/* Color picker */}
          {colorVariants.length > 0 && (
            <div>
              <p className="text-sm font-semibold mb-2">Color</p>
              <div className="flex flex-wrap gap-2">
                {colorVariants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariantId(v.id)}
                    disabled={v.stock === 0}
                    className={cn(
                      "border text-sm px-3.5 py-1.5 transition-colors disabled:opacity-40 disabled:line-through",
                      selectedVariantId === v.id
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 hover:border-black"
                    )}
                  >
                    {v.value}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size picker */}
          {sizeVariants.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold">Size</p>
                <button className="text-xs underline text-neutral-500">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizeVariants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariantId(v.id)}
                    disabled={v.stock === 0}
                    className={cn(
                      "border text-sm w-12 h-10 transition-colors disabled:opacity-40 disabled:line-through",
                      selectedVariantId === v.id
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 hover:border-black"
                    )}
                  >
                    {v.value}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to cart */}
          <div className="flex gap-3 pt-2">
            <div className="flex items-center border border-neutral-300">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-12 flex items-center justify-center hover:bg-neutral-100 transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-12 flex items-center justify-center hover:bg-neutral-100 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || !selectedVariantId}
              className="flex-1 h-12 text-sm"
            >
              {addedToCart ? (
                <span className="flex items-center gap-2">
                  <Check size={16} /> Added to Bag
                </span>
              ) : product.inStock ? (
                "Add to Bag"
              ) : (
                "Sold Out"
              )}
            </Button>
          </div>

          {/* Description */}
          <div className="border-t border-neutral-200 pt-5">
            <p className="text-sm text-neutral-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-neutral-100 text-neutral-500 px-2.5 py-1"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Accordion */}
          <div className="border-t border-neutral-200 pt-2 space-y-0">
            <AccordionItem title="Details & Care">
              <ul className="space-y-1.5 text-sm text-neutral-600">
                <li>Imported fabric, locally tailored</li>
                <li>Hand wash cold or dry clean recommended</li>
                <li>Do not tumble dry</li>
                <li>Style number: {product.id.toUpperCase()}</li>
              </ul>
            </AccordionItem>
            <AccordionItem title="Size & Fit">
              <p className="text-sm text-neutral-600 leading-relaxed">
                Model is 5&apos;9&quot; and wearing size M. This style runs true to size.
                For a relaxed fit, we recommend sizing up. See our full{" "}
                <button className="underline hover:text-black transition-colors">
                  Size Guide
                </button>{" "}
                for detailed measurements.
              </p>
            </AccordionItem>
            <AccordionItem title="Delivery & Returns">
              <ul className="space-y-1.5 text-sm text-neutral-600">
                <li>Standard delivery: 3–5 business days</li>
                <li>Express delivery: 1–2 business days</li>
                <li>Free returns within 14 days of delivery</li>
                <li>Items must be unworn, unwashed, and with original tags</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="text-xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-4 text-sm font-semibold text-left"
      >
        {title}
        <ChevronDown
          size={16}
          className={`text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pb-5">{children}</div>}
    </div>
  );
}
