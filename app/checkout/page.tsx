"use client";

import { useCart } from "@/lib/cart-context";
import { products as allProducts } from "@/mock/products";
import { formatMoney } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock } from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const shipping = subtotal >= 30000 ? 0 : 2500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 py-4 px-6 flex items-center justify-between">
        <span className="text-lg font-bold tracking-widest uppercase">Finstore</span>
        <div className="flex items-center gap-1.5 text-xs text-neutral-400">
          <Lock size={13} />
          Secure Checkout
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="space-y-8">
          <section>
            <h2 className="text-base font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-black" />
                Keep me updated on new arrivals and offers
              </label>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-4">Delivery Address</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Street address"
                className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-4">Delivery Method</h2>
            <div className="space-y-2">
              {[
                { label: "Standard Delivery (3–5 days)", price: "₦2,500" },
                { label: "Express Delivery (1–2 days)", price: "₦5,000" },
                { label: "Same-Day Delivery (Lagos only)", price: "₦7,500" },
              ].map((method, i) => (
                <label
                  key={i}
                  className="flex items-center justify-between border border-neutral-300 px-4 py-3 cursor-pointer hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-neutral-50"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      defaultChecked={i === 0}
                      className="accent-black"
                    />
                    <span className="text-sm">{method.label}</span>
                  </div>
                  <span className="text-sm font-medium">{method.price}</span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-4">Payment</h2>
            <div className="space-y-3">
              {[
                "Credit / Debit Card",
                "Bank Transfer",
                "Pay on Delivery",
              ].map((method, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 border border-neutral-300 px-4 py-3 cursor-pointer hover:border-black transition-colors has-[:checked]:border-black"
                >
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked={i === 0}
                    className="accent-black"
                  />
                  <span className="text-sm">{method}</span>
                </label>
              ))}
            </div>
          </section>

          <Button size="lg" className="w-full">
            Place Order — {formatMoney({ amount: total, currency: "NGN" })}
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-neutral-400">
            <ShieldCheck size={14} />
            All transactions are secure and encrypted.
          </div>
        </div>

        {/* Order summary */}
        <div>
          <div className="bg-white border border-neutral-200 p-6 sticky top-10">
            <h2 className="font-semibold text-sm mb-5">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => {
                const product = allProducts.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <div key={`${item.productId}-${item.variantId}`} className="flex gap-3">
                    <div className="relative w-14 h-20 shrink-0 bg-neutral-100 overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                      <span className="absolute -top-1 -right-1 bg-neutral-700 text-white text-[10px] w-4 h-4 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium leading-snug line-clamp-2">
                        {product.title}
                      </p>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {formatMoney({
                          amount: product.price.amount * item.quantity,
                          currency: product.price.currency,
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2 text-sm border-t border-neutral-200 pt-4">
              <div className="flex justify-between">
                <span className="text-neutral-500">Subtotal</span>
                <span>{formatMoney({ amount: subtotal, currency: "NGN" })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">Free</span>
                  ) : (
                    formatMoney({ amount: shipping, currency: "NGN" })
                  )}
                </span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-neutral-200">
                <span>Total</span>
                <span>{formatMoney({ amount: total, currency: "NGN" })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
