import Link from "next/link";

export function LoyaltyBanner() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-200 py-12 px-4 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
        V.I. Rewards
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase mb-3">
        Become a Member and Get Exclusive Perks.
      </h2>
      <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6">
        Join our free loyalty program today and start earning rewards, early access
        to new arrivals, and exclusive offers.
      </p>
      <Link
        href="/account"
        className="inline-block border border-black text-black text-xs font-bold uppercase tracking-widest px-10 py-3 hover:bg-black hover:text-white transition-colors"
      >
        Sign Me Up
      </Link>
    </section>
  );
}
