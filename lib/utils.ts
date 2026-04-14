import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Money } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(money: Money): string {
  const symbols: Record<string, string> = {
    NGN: "₦",
    USD: "$",
    GBP: "£",
  };
  const symbol = symbols[money.currency] ?? money.currency;
  return `${symbol}${money.amount.toLocaleString()}`;
}

export function discountPercent(price: Money, compareAtPrice: Money): number {
  return Math.round(((compareAtPrice.amount - price.amount) / compareAtPrice.amount) * 100);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
