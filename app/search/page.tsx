"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Search } from "lucide-react";
import { searchProducts } from "@/mock/products";
import { ProductGrid } from "@/components/product/product-grid";

function SearchResults() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const results = query.trim() ? searchProducts(query) : [];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">
          {query ? `Results for "${query}"` : "Search"}
        </h1>
        {query && (
          <p className="text-sm text-neutral-500">
            {results.length} product{results.length !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      {/* Search bar */}
      <form className="flex items-center gap-3 border border-neutral-300 px-4 py-3 max-w-xl mb-10 focus-within:border-black transition-colors">
        <Search size={18} className="text-neutral-400 shrink-0" />
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Search products, brands, collections..."
          className="flex-1 text-sm outline-none"
          autoFocus
        />
        <button
          type="submit"
          className="text-xs font-semibold uppercase tracking-wider hover:text-neutral-500 transition-colors"
        >
          Search
        </button>
      </form>

      {query && results.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-neutral-500 text-sm">
            No results found for &quot;{query}&quot;. Try a different search term.
          </p>
        </div>
      )}

      {results.length > 0 && <ProductGrid products={results} columns={4} />}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-neutral-400">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
