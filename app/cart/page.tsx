"use client";

import { useCart } from "@/lib/cart-context";
import { products } from "@/mock/products";
import { formatMoney } from "@/lib/utils";
import { X, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  const shipping = subtotal >= 30000 ? 0 : 2500;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-neutral-200 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your bag is empty</h1>
        <p className="text-neutral-500 text-sm mb-8">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link href="/">
          <Button size="lg">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>
        <h1 className="text-2xl font-bold">Your Bag</h1>
        <span className="text-neutral-400 text-sm">({items.length} item{items.length !== 1 ? "s" : ""})</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            const variant = product?.variants.find((v) => v.id === item.variantId);
            if (!product) return null;
            return (
              <div
                key={`${item.productId}-${item.variantId}`}
                className="flex gap-5 py-5 border-b border-neutral-200"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="relative w-24 h-32 shrink-0 bg-neutral-100 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {product.brand && (
                        <p className="text-[11px] uppercase tracking-wider text-neutral-400 mb-0.5">
                          {product.brand}
                        </p>
                      )}
                      <Link href={`/products/${product.slug}`}>
                        <h3 className="text-sm font-medium hover:underline">
                          {product.title}
                        </h3>
                      </Link>
                      {variant && (
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {variant.name}: {variant.value}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.variantId)}
                      className="text-neutral-400 hover:text-black transition-colors shrink-0"
                      aria-label="Remove"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-neutral-300">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variantId, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variantId, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-sm font-semibold">
                      {formatMoney({
                        amount: product.price.amount * item.quantity,
                        currency: product.price.currency,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="pt-2">
            <button
              onClick={clearCart}
              className="text-xs text-neutral-400 underline hover:text-black transition-colors"
            >
              Clear bag
            </button>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-neutral-50 p-6 sticky top-24">
            <h2 className="font-bold text-base mb-5">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span>{formatMoney({ amount: subtotal, currency: "NGN" })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">Free</span>
                  ) : (
                    formatMoney({ amount: shipping, currency: "NGN" })
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-neutral-400">
                  Free shipping on orders over ₦30,000
                </p>
              )}
              <div className="border-t border-neutral-200 pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>{formatMoney({ amount: total, currency: "NGN" })}</span>
              </div>
            </div>

            {/* Promo code */}
            <div className="mt-5">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 text-sm border border-neutral-300 px-3 py-2 focus:outline-none focus:border-black transition-colors"
                />
                <Button variant="outline" size="sm">
                  Apply
                </Button>
              </div>
            </div>

            <Link href="/checkout" className="block mt-5">
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </Link>
            <p className="text-xs text-neutral-400 text-center mt-3">
              Secure checkout. Taxes calculated at next step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
