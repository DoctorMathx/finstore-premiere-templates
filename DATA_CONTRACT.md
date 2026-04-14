# Data Contract — Template 01

All types are defined in `lib/types.ts`. This document describes required vs optional fields and sample payloads.

---

## Money
```ts
{
  amount: number;       // REQUIRED — integer in smallest unit (e.g. 18500 = ₦18,500)
  currency: "NGN" | "USD" | "GBP"; // REQUIRED
}
```

---

## Product
```ts
{
  id: string;              // REQUIRED — unique product ID
  slug: string;            // REQUIRED — URL-friendly identifier
  title: string;           // REQUIRED
  brand?: string;          // optional
  description: string;     // REQUIRED
  images: string[];        // REQUIRED — at least 1 URL; second image used for hover effect
  price: Money;            // REQUIRED
  compareAtPrice?: Money;  // optional — original price for showing discounts
  inStock: boolean;        // REQUIRED
  rating: number;          // REQUIRED — 0.0–5.0
  reviewCount: number;     // REQUIRED
  tags: string[];          // REQUIRED — used for search and filtering
  categoryId: string;      // REQUIRED — must match a Collection id
  variants: ProductVariant[]; // REQUIRED — at least 1 variant

  // Display flags (all optional — default false)
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}
```

---

## ProductVariant
```ts
{
  id: string;      // REQUIRED — unique variant ID
  name: string;    // REQUIRED — "Size" | "Color" | "Material" etc.
  value: string;   // REQUIRED — "M" | "Red" | "Cotton" etc.
  stock: number;   // REQUIRED — 0 means sold out for this variant
}
```

---

## Collection
```ts
{
  id: string;            // REQUIRED — must match Product.categoryId
  slug: string;          // REQUIRED — used in URL: /collections/:slug
  title: string;         // REQUIRED
  description?: string;  // optional — shown in collection hero
  heroImage?: string;    // optional — URL for collection banner image
  productIds: string[];  // REQUIRED — for curated/manual collections
}
```

---

## Banner
```ts
{
  id: string;
  title: string;         // REQUIRED
  subtitle?: string;     // optional
  ctaLabel?: string;     // optional — button text
  ctaHref?: string;      // optional — button link
  image: string;         // REQUIRED — URL
  badge?: string;        // optional — small label overlay (e.g. "New Drop")
}
```

---

## MenuItem (Navigation)
```ts
{
  id: string;
  label: string;         // REQUIRED — display text
  href: string;          // REQUIRED — internal path
  children?: MenuItem[]; // optional — enables mega menu dropdown
}
```

---

## Sample Product Payload
```json
{
  "id": "p1",
  "slug": "floral-wrap-midi-dress",
  "title": "Floral Wrap Midi Dress",
  "brand": "Atelier Élégance",
  "description": "A graceful wrap silhouette...",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "price": { "amount": 18500, "currency": "NGN" },
  "compareAtPrice": { "amount": 24000, "currency": "NGN" },
  "inStock": true,
  "rating": 4.7,
  "reviewCount": 82,
  "tags": ["dress", "floral", "midi"],
  "categoryId": "col-1",
  "isNew": true,
  "variants": [
    { "id": "v1a", "name": "Size", "value": "S", "stock": 4 },
    { "id": "v1b", "name": "Size", "value": "M", "stock": 6 }
  ]
}
```

---

## Fallback Behaviour

| Missing Field | Behaviour |
|---|---|
| `compareAtPrice` absent | No discount badge/strikethrough shown |
| `brand` absent | Brand label hidden |
| `images[1]` absent | No hover image swap |
| `rating` = 0 | Stars render as empty |
| All variants have `stock: 0` | Product marked Sold Out |
| `isNew/isFeatured/isBestSeller` absent | No badge displayed |
| `heroImage` absent on collection | Hero renders a dark gradient background |
