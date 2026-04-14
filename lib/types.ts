export type Money = {
  amount: number;
  currency: "NGN" | "USD" | "GBP";
};

export type ProductVariant = {
  id: string;
  name: string; // e.g. "Size" | "Color"
  value: string; // e.g. "XL" | "Red"
  stock: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand?: string;
  description: string;
  images: string[];
  price: Money;
  compareAtPrice?: Money;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
  categoryId: string;
  variants: ProductVariant[];
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  heroImage?: string;
  productIds: string[];
};

export type MenuItem = {
  id: string;
  label: string;
  href: string;
  children?: MenuItem[];
};

export type Banner = {
  id: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
  badge?: string;
};

export type PromoTile = {
  id: string;
  label: string;
  href: string;
};

export type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
};
