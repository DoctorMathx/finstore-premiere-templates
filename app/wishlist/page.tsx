import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Wishlist — Finstore",
};

export default function WishlistPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 text-center">
      <Heart size={56} className="mx-auto text-neutral-200 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Your Wishlist is Empty</h1>
      <p className="text-neutral-500 text-sm mb-8 max-w-xs mx-auto">
        Save your favourite items by tapping the heart icon on any product.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link href="/collections/new-arrivals">
          <Button size="lg">Discover New Arrivals</Button>
        </Link>
        <Link href="/collections/sale">
          <Button variant="outline" size="lg">
            Browse Sale
          </Button>
        </Link>
      </div>
    </div>
  );
}
