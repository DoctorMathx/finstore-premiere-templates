"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { SlidersHorizontal, LayoutGrid, Grid3X3 } from "lucide-react";
import { products as allProducts, getProductsByIds } from "@/mock/products";
import { FilterSidebar, type ActiveFilters } from "@/components/collection/filter-sidebar";
import { ProductGrid } from "@/components/product/product-grid";
import type { Collection, Product } from "@/lib/types";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Best Rating", value: "rating" },
];

function sortProducts(products: Product[], sort: string): Product[] {
  const p = [...products];
  switch (sort) {
    case "price_asc":
      return p.sort((a, b) => a.price.amount - b.price.amount);
    case "price_desc":
      return p.sort((a, b) => b.price.amount - a.price.amount);
    case "rating":
      return p.sort((a, b) => b.rating - a.rating);
    case "newest":
      return p.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    default:
      return p.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }
}

export function CollectionView({ collection }: { collection: Collection }) {
  const collectionProducts =
    collection.slug === "new-arrivals" || collection.slug === "sale"
      ? getProductsByIds(collection.productIds)
      : allProducts.filter((p) => p.categoryId === collection.id);

  const maxPrice = Math.max(...collectionProducts.map((p) => p.price.amount), 50000);

  const availableSizes = Array.from(
    new Set(
      collectionProducts.flatMap((p) =>
        p.variants.filter((v) => v.name === "Size").map((v) => v.value)
      )
    )
  );
  const availableColors = Array.from(
    new Set(
      collectionProducts.flatMap((p) =>
        p.variants.filter((v) => v.name === "Color").map((v) => v.value)
      )
    )
  );
  const availableBrands = Array.from(
    new Set(collectionProducts.map((p) => p.brand).filter(Boolean) as string[])
  );

  const [filters, setFilters] = useState<ActiveFilters>({
    sizes: [],
    colors: [],
    brands: [],
    priceRange: [0, maxPrice],
    inStockOnly: false,
  });
  const [sort, setSort] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [columns, setColumns] = useState<2 | 3 | 4>(4);

  const filtered = useMemo(() => {
    let p = collectionProducts;
    if (filters.inStockOnly) p = p.filter((x) => x.inStock);
    if (filters.sizes.length)
      p = p.filter((x) =>
        x.variants.some((v) => v.name === "Size" && filters.sizes.includes(v.value))
      );
    if (filters.colors.length)
      p = p.filter((x) =>
        x.variants.some((v) => v.name === "Color" && filters.colors.includes(v.value))
      );
    if (filters.brands.length)
      p = p.filter((x) => x.brand && filters.brands.includes(x.brand));
    p = p.filter((x) => x.price.amount <= filters.priceRange[1]);
    return sortProducts(p, sort);
    // collectionProducts is stable per render since it derives from static mock data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, sort]);

  return (
    <div>
      {/* Collection hero */}
      <div className="relative h-48 sm:h-64 bg-neutral-900 overflow-hidden">
        {collection.heroImage && (
          <Image
            src={collection.heroImage}
            alt={collection.title}
            fill
            className="object-cover opacity-60"
            sizes="100vw"
          />
        )}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {collection.title}
          </h1>
          {collection.description && (
            <p className="mt-2 text-white/75 text-sm max-w-md">{collection.description}</p>
          )}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 text-sm border border-neutral-300 px-4 py-2 hover:border-black transition-colors lg:hidden"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <span className="text-sm text-neutral-500">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1">
              <button
                onClick={() => setColumns(4)}
                className={`p-1.5 ${columns === 4 ? "text-black" : "text-neutral-400"}`}
                aria-label="4 columns"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setColumns(3)}
                className={`p-1.5 ${columns === 3 ? "text-black" : "text-neutral-400"}`}
                aria-label="3 columns"
              >
                <Grid3X3 size={18} />
              </button>
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border border-neutral-300 px-3 py-2 focus:outline-none focus:border-black"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop filter */}
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              availableSizes={availableSizes}
              availableColors={availableColors}
              availableBrands={availableBrands}
              maxPrice={maxPrice}
            />
          </div>

          {/* Mobile filter */}
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            availableSizes={availableSizes}
            availableColors={availableColors}
            availableBrands={availableBrands}
            maxPrice={maxPrice}
            mobileOpen={mobileFilterOpen}
            onMobileClose={() => setMobileFilterOpen(false)}
          />

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={filtered} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}
