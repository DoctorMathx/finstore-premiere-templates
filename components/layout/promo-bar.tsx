"use client";

import { useState } from "react";
import { X } from "lucide-react";

const deals = [
  "Tops from ₦3,900*",
  "₦8,000 Bottoms & Denim*",
  "40% Off Footwear*",
];

export function PromoBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-neutral-100 border-b border-neutral-200 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-300">
          {deals.map((deal, i) => (
            <p
              key={i}
              className="text-[11px] font-semibold text-center py-2.5 uppercase tracking-wider text-neutral-700"
            >
              {deal}
            </p>
          ))}
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}
