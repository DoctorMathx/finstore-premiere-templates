import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Account — Finstore",
};

export default function AccountPage() {
  return (
    <div className="max-w-screen-sm mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight mb-8">My Account</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {/* Sign In */}
        <div className="border border-neutral-200 p-6">
          <h2 className="font-semibold text-sm mb-1">Returning Customer</h2>
          <p className="text-xs text-neutral-500 mb-5">
            Sign in to view your orders, wishlist, and account details.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-neutral-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-neutral-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
            />
            <Button className="w-full">Sign In</Button>
            <button className="text-xs underline text-neutral-500 hover:text-black transition-colors">
              Forgot password?
            </button>
          </div>
        </div>

        {/* Register */}
        <div className="border border-neutral-200 p-6 bg-neutral-50">
          <h2 className="font-semibold text-sm mb-1">New Customer</h2>
          <p className="text-xs text-neutral-500 mb-5">
            Create an account for faster checkout, order tracking, and exclusive offers.
          </p>
          <Link href="#">
            <Button variant="outline" className="w-full">
              Create Account
            </Button>
          </Link>
        </div>
      </div>

      {/* Benefits */}
      <div className="border-t border-neutral-200 pt-8">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
          Account Benefits
        </h3>
        <ul className="space-y-2 text-sm text-neutral-600">
          {[
            "Track your orders in real time",
            "Save your wishlist across devices",
            "Faster checkout with saved addresses",
            "Exclusive member offers and early access",
          ].map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <span className="mt-0.5 w-1 h-1 bg-black shrink-0 mt-2" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
