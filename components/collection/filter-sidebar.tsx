"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ActiveFilters = {
  sizes: string[];
  colors: string[];
  brands: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
};

interface FilterSidebarProps {
  filters: ActiveFilters;
  onChange: (filters: ActiveFilters) => void;
  availableSizes: string[];
  availableColors: string[];
  availableBrands: string[];
  maxPrice: number;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function FilterSidebar({
  filters,
  onChange,
  availableSizes,
  availableColors,
  availableBrands,
  maxPrice,
  mobileOpen,
  onMobileClose,
}: FilterSidebarProps) {
  const toggle = (key: "sizes" | "colors" | "brands", value: string) => {
    const arr = filters[key];
    onChange({
      ...filters,
      [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
    });
  };

  const activeCount =
    filters.sizes.length +
    filters.colors.length +
    filters.brands.length +
    (filters.inStockOnly ? 1 : 0);

  const content = (
    <div className="space-y-6 text-sm">
      {/* Active count + clear */}
      {activeCount > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-neutral-500">
            {activeCount} filter{activeCount > 1 ? "s" : ""} active
          </span>
          <button
            onClick={() =>
              onChange({
                sizes: [],
                colors: [],
                brands: [],
                priceRange: [0, maxPrice],
                inStockOnly: false,
              })
            }
            className="text-xs text-black underline"
          >
            Clear all
          </button>
        </div>
      )}

      <FilterGroup title="Availability">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onChange({ ...filters, inStockOnly: e.target.checked })}
            className="accent-black"
          />
          In Stock Only
        </label>
      </FilterGroup>

      {availableSizes.length > 0 && (
        <FilterGroup title="Size">
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => (
              <button
                key={size}
                onClick={() => toggle("sizes", size)}
                className={cn(
                  "border text-xs px-2.5 py-1 transition-colors",
                  filters.sizes.includes(size)
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 hover:border-black"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </FilterGroup>
      )}

      {availableColors.length > 0 && (
        <FilterGroup title="Color">
          <div className="space-y-2">
            {availableColors.map((color) => (
              <label key={color} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={() => toggle("colors", color)}
                  className="accent-black"
                />
                {color}
              </label>
            ))}
          </div>
        </FilterGroup>
      )}

      {availableBrands.length > 0 && (
        <FilterGroup title="Brand">
          <div className="space-y-2">
            {availableBrands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggle("brands", brand)}
                  className="accent-black"
                />
                {brand}
              </label>
            ))}
          </div>
        </FilterGroup>
      )}

      <FilterGroup title="Price">
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={maxPrice}
            value={filters.priceRange[1]}
            onChange={(e) =>
              onChange({ ...filters, priceRange: [0, Number(e.target.value)] })
            }
            className="w-full accent-black"
          />
          <div className="flex justify-between text-xs text-neutral-500">
            <span>₦0</span>
            <span>₦{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </FilterGroup>
    </div>
  );

  // Desktop
  if (mobileOpen === undefined) {
    return <aside className="w-56 shrink-0">{content}</aside>;
  }

  // Mobile overlay
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 lg:hidden" onClick={onMobileClose} />
      )}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-white z-50 flex flex-col shadow-2xl transform transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
          <span className="font-semibold text-sm">Filters</span>
          <button onClick={onMobileClose}>
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{content}</div>
      </div>
    </>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-neutral-200 pb-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full font-semibold text-sm mb-3"
      >
        {title}
        <ChevronDown
          size={16}
          className={cn("transition-transform text-neutral-400", open ? "rotate-180" : "")}
        />
      </button>
      {open && children}
    </div>
  );
}
