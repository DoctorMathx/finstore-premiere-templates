import Link from "next/link";
import { products } from "@/mock/products";
import { ProductGrid } from "@/components/product/product-grid";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  filter: "isFeatured" | "isBestSeller" | "isNew";
  ctaLabel?: string;
  ctaHref?: string;
  limit?: number;
}

export function FeaturedProducts({
  title,
  subtitle,
  filter,
  ctaLabel = "View All",
  ctaHref = "/collections/new-arrivals",
  limit = 4,
}: FeaturedProductsProps) {
  const filtered = products.filter((p) => p[filter]).slice(0, limit);

  return (
    <section className="w-full pb-16 sm:pb-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-2">
              {subtitle}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-tight">
              {title}
            </h2>
          </div>
          <Link
            href={ctaHref}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 hover:text-black transition-colors shrink-0 mb-1"
          >
            {ctaLabel} →
          </Link>
        </div>
        <ProductGrid products={filtered} columns={4} />
      </div>
    </section>
  );
}
