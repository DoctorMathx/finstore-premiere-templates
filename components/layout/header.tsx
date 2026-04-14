"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, User, Menu, X, ChevronDown, Heart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { navigation } from "@/mock/navigation";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/lib/types";

export function Header() {
  const { totalItems, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <header className="sticky top-0 z-50 bg-black border-b border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          {/* 3-zone layout: [logo | nav | actions] — logo never overlaps nav */}
          <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[200px_1fr_200px] items-center h-16 gap-4">

            {/* Zone 1 — Logo (left) */}
            <div className="flex items-center gap-2">
              <button
                className="lg:hidden p-2 -ml-2 text-neutral-300 hover:text-white"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
              <Link href="/" className="flex items-center" aria-label="Finstore home">
                <Image
                  src="/images/LOGO 2.png"
                  alt="Finstore"
                  width={110}
                  height={38}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Zone 2 — Desktop nav (center) */}
            <nav
              className="hidden lg:flex items-center justify-center gap-6"
              onMouseLeave={() => setActiveMega(null)}
            >
              {navigation.map((item) => (
                <div key={item.id} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider py-5 border-b-2 transition-colors whitespace-nowrap",
                      activeMega === item.id
                        ? "border-white text-white"
                        : "border-transparent text-neutral-300 hover:text-white",
                      item.id === "nav-sale" && "!text-red-400 hover:!text-red-300"
                    )}
                    onMouseEnter={() =>
                      item.children ? setActiveMega(item.id) : setActiveMega(null)
                    }
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Zone 3 — Actions (right) */}
            <div className="flex items-center justify-end gap-1">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="p-2 text-neutral-300 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                href="/account"
                className="p-2 text-neutral-300 hover:text-white transition-colors hidden sm:block"
                aria-label="Account"
              >
                <User size={20} />
              </Link>
              <Link
                href="/wishlist"
                className="p-2 text-neutral-300 hover:text-white transition-colors hidden sm:block"
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </Link>
              <button
                onClick={openCart}
                className="p-2 text-neutral-300 hover:text-white transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="border-t border-neutral-800 py-3">
              <form
                action="/search"
                method="get"
                className="flex items-center gap-3 max-w-xl mx-auto"
              >
                <Search size={18} className="text-neutral-400 shrink-0" />
                <input
                  type="text"
                  name="q"
                  placeholder="Search products, brands, collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="flex-1 text-sm outline-none bg-transparent text-white placeholder:text-neutral-500"
                />
                <button type="button" onClick={() => setSearchOpen(false)}>
                  <X size={18} className="text-neutral-400 hover:text-white" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mega menu */}
        {activeMega && (
          <MegaMenu
            items={navigation.find((n) => n.id === activeMega)?.children ?? []}
            onMouseLeave={() => setActiveMega(null)}
          />
        )}
      </header>

      {/* Mobile drawer */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navigation}
      />

      <CartDrawer />
    </>
  );
}

function MegaMenu({
  items,
  onMouseLeave,
}: {
  items: MenuItem[];
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="absolute left-0 right-0 bg-white border-t border-b border-neutral-200 shadow-lg z-40"
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-wide text-neutral-700 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 lg:hidden flex flex-col",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
          <Image src="/images/LOGO 1.png" alt="Finstore" width={110} height={38} className="object-contain" />
          <button onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {items.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-between px-5 py-3">
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium",
                    item.id === "nav-sale" ? "text-red-600" : "text-black"
                  )}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setExpanded((v) => (v === item.id ? null : item.id))
                    }
                    className="text-neutral-400"
                  >
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform",
                        expanded === item.id ? "rotate-180" : ""
                      )}
                    />
                  </button>
                )}
              </div>
              {item.children && expanded === item.id && (
                <div className="bg-neutral-50 px-8 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      className="block py-2 text-sm text-neutral-600 hover:text-black"
                      onClick={onClose}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
