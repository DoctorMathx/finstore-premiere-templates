"use client";

import { useCart } from "@/lib/cart-context";
import { products } from "@/mock/products";
import { formatMoney } from "@/lib/utils";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } =
    useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
            className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-2xl transform transition-transform duration-300 border-l border-neutral-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
          <h2 className="font-semibold text-base">
            Your Bag{" "}
            {totalItems > 0 && (
              <span className="text-neutral-500 font-normal">({totalItems})</span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="text-neutral-500 hover:text-black transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <ShoppingBag size={48} className="text-neutral-300" />
              <p className="text-neutral-500 text-sm">Your bag is empty.</p>
              <Button variant="outline" size="sm" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              const variant = product?.variants.find((v) => v.id === item.variantId);
              if (!product) return null;
              return (
                <div key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                  <div className="relative w-20 h-24 shrink-0 bg-neutral-100 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-sm font-medium leading-tight hover:underline line-clamp-2"
                      onClick={closeCart}
                    >
                      {product.title}
                    </Link>
                    {variant && (
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {variant.name}: {variant.value}
                      </p>
                    )}
                    <p className="text-sm font-semibold mt-1">
                      {formatMoney({
                        amount: product.price.amount * item.quantity,
                        currency: product.price.currency,
                      })}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variantId, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.variantId, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.productId, item.variantId)}
                        className="ml-auto text-neutral-400 hover:text-black transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-200 px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Subtotal</span>
              <span className="font-semibold">
                {formatMoney({ amount: subtotal, currency: "NGN" })}
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Shipping and taxes calculated at checkout.
            </p>
            <Link href="/cart" onClick={closeCart}>
              <Button className="w-full mb-2" variant="outline">
                View Cart
              </Button>
            </Link>
            <Link href="/checkout" onClick={closeCart}>
              <Button className="w-full">Checkout</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
