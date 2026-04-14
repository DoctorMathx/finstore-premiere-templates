import type { Product } from "@/lib/types";

export const products: Product[] = [
  // ── Dresses ──
  {
    id: "p1",
    slug: "linen-crochet-blouse",
    title: "Linen Crochet-Trim Blouse",
    brand: "Atelier Élégance",
    description:
      "A relaxed linen blouse with delicate crochet trim along the raglan seams and placket. Oversized silhouette with wide sleeves. Effortlessly elegant for any occasion.",
    images: [
      "/images/08741037746-a1.jpg",
      "/images/08741037746-e1.jpg",
    ],
    price: { amount: 18500, currency: "NGN" },
    compareAtPrice: { amount: 24000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 82,
    tags: ["dress", "floral", "midi", "wrap"],
    categoryId: "col-1",
    isNew: true,
    isFeatured: true,
    variants: [
      { id: "v1a", name: "Size", value: "S", stock: 4 },
      { id: "v1b", name: "Size", value: "M", stock: 6 },
      { id: "v1c", name: "Size", value: "L", stock: 3 },
      { id: "v1d", name: "Size", value: "XL", stock: 1 },
    ],
  },
  {
    id: "p2",
    slug: "belted-safari-jacket",
    title: "Belted Safari Jacket",
    brand: "Luxe by Finstore",
    description:
      "An oversized double-breasted safari jacket crafted in a sand-toned woven fabric. Features patch pockets, balloon sleeves, and a matching tie belt for a polished silhouette.",
    images: [
      "/images/T9698913856-a2.jpg",
      "/images/T9698913856-a1.jpg",
    ],
    price: { amount: 45000, currency: "NGN" },
    inStock: true,
    rating: 4.9,
    reviewCount: 47,
    tags: ["dress", "evening", "gown", "formal"],
    categoryId: "col-1",
    isBestSeller: true,
    variants: [
      { id: "v2a", name: "Size", value: "XS", stock: 2 },
      { id: "v2b", name: "Size", value: "S", stock: 5 },
      { id: "v2c", name: "Size", value: "M", stock: 4 },
      { id: "v2d", name: "Size", value: "L", stock: 2 },
    ],
  },
  {
    id: "p3",
    slug: "editorial-off-shoulder-set",
    title: "Off-Shoulder Striped Set",
    brand: "Casual Chic",
    description:
      "A bold editorial two-piece featuring an off-shoulder top and wide-leg striped trousers. Vibrant and confident for resort, events, or statement-making everyday wear.",
    images: [
      "/images/pexels-godisable-jacob-226636-961133.jpg",
      "/images/pexels-godisable-jacob-226636-961134.jpg",
    ],
    price: { amount: 12000, currency: "NGN" },
    compareAtPrice: { amount: 16500, currency: "NGN" },
    inStock: true,
    rating: 4.4,
    reviewCount: 113,
    tags: ["dress", "casual", "linen", "shirt-dress"],
    categoryId: "col-1",
    variants: [
      { id: "v3a", name: "Size", value: "S", stock: 8 },
      { id: "v3b", name: "Size", value: "M", stock: 10 },
      { id: "v3c", name: "Size", value: "L", stock: 7 },
      { id: "v3d", name: "Color", value: "Beige", stock: 12 },
      { id: "v3e", name: "Color", value: "White", stock: 9 },
    ],
  },
  {
    id: "p4",
    slug: "monochrome-suit-coat",
    title: "Monochrome Longline Coat",
    brand: "Luxe by Finstore",
    description:
      "A sharp, structured longline coat in a neutral grey tone. Tailored to perfection with clean lapels and a single-button closure. Wear it as a power statement, day or night.",
    images: [
      "/images/pexels-godisable-jacob-226636-914668.jpg",
      "/images/img1.jpg",
    ],
    price: { amount: 22000, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 64,
    tags: ["dress", "bodycon", "night-out"],
    categoryId: "col-1",
    isNew: true,
    variants: [
      { id: "v4a", name: "Size", value: "XS", stock: 3 },
      { id: "v4b", name: "Size", value: "S", stock: 5 },
      { id: "v4c", name: "Size", value: "M", stock: 4 },
      { id: "v4d", name: "Color", value: "Black", stock: 8 },
      { id: "v4e", name: "Color", value: "Wine", stock: 4 },
    ],
  },
  {
    id: "p5",
    slug: "all-black-editorial-set",
    title: "All-Black Editorial Set",
    brand: "Casual Chic",
    description:
      "A monochromatic all-black ensemble styled for the modern woman. Bold, minimal, and undeniably chic. Wear as separates or as a coordinated look.",
    images: [
      "/images/img2.jpg",
      "/images/pexels-marvellous-adu-2148798496-36506383.jpg",
    ],
    price: { amount: 15500, currency: "NGN" },
    inStock: false,
    rating: 4.5,
    reviewCount: 29,
    tags: ["dress", "maxi", "sundress", "summer"],
    categoryId: "col-1",
    variants: [
      { id: "v5a", name: "Size", value: "S", stock: 0 },
      { id: "v5b", name: "Size", value: "M", stock: 0 },
      { id: "v5c", name: "Color", value: "Lilac", stock: 0 },
    ],
  },

  // ── Tops & Blouses ──
  {
    id: "p6",
    slug: "linen-crochet-blouse-product",
    title: "Linen Crochet Blouse",
    brand: "Atelier Élégance",
    description:
      "A breathable linen blouse with crochet detailing along the raglan seams. Relaxed fit with a collared neckline and keyhole tie. Perfect for warm-weather dressing.",
    images: [
      "/images/08741037746-e1.jpg",
      "/images/08741037746-a1.jpg",
    ],
    price: { amount: 9800, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 95,
    tags: ["top", "blouse", "satin", "wrap"],
    categoryId: "col-2",
    isNew: true,
    isFeatured: true,
    variants: [
      { id: "v6a", name: "Size", value: "S", stock: 6 },
      { id: "v6b", name: "Size", value: "M", stock: 8 },
      { id: "v6c", name: "Size", value: "L", stock: 5 },
      { id: "v6d", name: "Color", value: "Champagne", stock: 10 },
      { id: "v6e", name: "Color", value: "Dusty Rose", stock: 9 },
    ],
  },
  {
    id: "p7",
    slug: "v-neck-knit-vest",
    title: "V-Neck Knit Vest",
    brand: "Casual Chic",
    description:
      "A vibrant red knit vest with a deep V-neckline and a relaxed body. Soft, lightweight fabric with a clean finish. Layer over a shirt or wear solo for effortless style.",
    images: [
      "/images/00506900600-e1.jpg",
      "/images/02893903626-e1.jpg",
    ],
    price: { amount: 7500, currency: "NGN" },
    compareAtPrice: { amount: 10000, currency: "NGN" },
    inStock: true,
    rating: 4.3,
    reviewCount: 58,
    tags: ["top", "crop", "puff-sleeve"],
    categoryId: "col-2",
    variants: [
      { id: "v7a", name: "Size", value: "XS", stock: 4 },
      { id: "v7b", name: "Size", value: "S", stock: 6 },
      { id: "v7c", name: "Size", value: "M", stock: 3 },
      { id: "v7d", name: "Color", value: "White", stock: 7 },
      { id: "v7e", name: "Color", value: "Black", stock: 6 },
    ],
  },
  {
    id: "p8",
    slug: "ribbed-sleeveless-tank",
    title: "Ribbed Sleeveless Tank",
    brand: "Luxe by Finstore",
    description:
      "A form-fitting ribbed tank with dual shoulder straps and a plunging V-neckline. Available in a bold plum purple. Versatile enough for layering or wearing on its own.",
    images: [
      "/images/03003900630-e1.jpg",
      "/images/13f133cafa73af581987a801da086e60bdde5b4a_493970_306_F.jpg",
    ],
    price: { amount: 6500, currency: "NGN" },
    compareAtPrice: { amount: 9000, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 77,
    tags: ["top", "cami", "lace"],
    categoryId: "col-2",
    variants: [
      { id: "v8a", name: "Size", value: "S", stock: 10 },
      { id: "v8b", name: "Size", value: "M", stock: 8 },
      { id: "v8c", name: "Color", value: "Ivory", stock: 12 },
      { id: "v8d", name: "Color", value: "Black", stock: 6 },
    ],
  },
  {
    id: "p9",
    slug: "v-neck-knit-sweater",
    title: "V-Neck Ribbed Knit Sweater",
    brand: "Street&Style",
    description:
      "A soft ribbed-knit sweater in blush pink with a flattering V-neckline and long sleeves. Lightweight and semi-sheer for layering over camisoles or bralettes.",
    images: [
      "/images/02893903626-e1.jpg",
      "/images/00506900600-e1.jpg",
    ],
    price: { amount: 5500, currency: "NGN" },
    inStock: true,
    rating: 4.2,
    reviewCount: 142,
    tags: ["top", "tee", "casual", "graphic"],
    categoryId: "col-2",
    isBestSeller: true,
    variants: [
      { id: "v9a", name: "Size", value: "S", stock: 15 },
      { id: "v9b", name: "Size", value: "M", stock: 18 },
      { id: "v9c", name: "Size", value: "L", stock: 12 },
      { id: "v9d", name: "Size", value: "XL", stock: 8 },
    ],
  },
  {
    id: "p10",
    slug: "belted-sand-jacket",
    title: "Belted Sand Jacket",
    brand: "Casual Chic",
    description:
      "A relaxed yet polished belted jacket in a warm sand tone. Wide lapels, patch chest pockets, and an adjustable waist tie. Styled with red wide-leg trousers for a complete look.",
    images: [
      "/images/T9698913856-a1.jpg",
      "/images/T9698913856-a3.jpg",
    ],
    price: { amount: 8500, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
    tags: ["top", "shirt", "linen", "workwear"],
    categoryId: "col-2",
    variants: [
      { id: "v10a", name: "Size", value: "S", stock: 5 },
      { id: "v10b", name: "Size", value: "M", stock: 7 },
      { id: "v10c", name: "Size", value: "L", stock: 6 },
      { id: "v10d", name: "Color", value: "Sand", stock: 9 },
      { id: "v10e", name: "Color", value: "Sage", stock: 9 },
    ],
  },

  // ── Bottoms & Pants ──
  {
    id: "p11",
    slug: "pink-pleated-trousers",
    title: "Pleated Wide-Leg Trousers",
    brand: "Atelier Élégance",
    description:
      "High-rise pleated trousers in a soft blush pink. Wide-leg silhouette with a relaxed drape. Tailored yet comfortable — the perfect everyday trouser.",
    images: [
      "/images/06113901637-e1.jpg",
      "/images/08105228429-f1.jpg",
    ],
    price: { amount: 16500, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 68,
    tags: ["bottoms", "trousers", "wide-leg", "workwear"],
    categoryId: "col-3",
    isNew: true,
    isFeatured: true,
    variants: [
      { id: "v11a", name: "Size", value: "S", stock: 5 },
      { id: "v11b", name: "Size", value: "M", stock: 7 },
      { id: "v11c", name: "Size", value: "L", stock: 4 },
      { id: "v11d", name: "Color", value: "Camel", stock: 8 },
      { id: "v11e", name: "Color", value: "Black", stock: 8 },
    ],
  },
  {
    id: "p12",
    slug: "blue-wide-leg-pants",
    title: "Blue Wide-Leg Linen Pants",
    brand: "Denim District",
    description:
      "A statement pair of wide-leg trousers in a rich cobalt blue. High-waisted with a double-button closure and a relaxed, voluminous leg. Ideal for bold summer styling.",
    images: [
      "/images/08105228429-f1.jpg",
      "/images/06113901637-e1.jpg",
    ],
    price: { amount: 19000, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 203,
    tags: ["bottoms", "jeans", "denim", "skinny"],
    categoryId: "col-3",
    isBestSeller: true,
    variants: [
      { id: "v12a", name: "Size", value: "26", stock: 6 },
      { id: "v12b", name: "Size", value: "28", stock: 9 },
      { id: "v12c", name: "Size", value: "30", stock: 7 },
      { id: "v12d", name: "Size", value: "32", stock: 4 },
    ],
  },
  {
    id: "p13",
    slug: "utility-cargo-shorts",
    title: "Utility Cargo Shorts",
    brand: "Atelier Élégance",
    description:
      "Relaxed mid-length cargo shorts in a warm mushroom grey. Features utility pocket flaps, a clean hem, and a single button closure. Smart-casual for warmer days.",
    images: [
      "/images/06113902055-e1.jpg",
      "/images/06113901637-e1.jpg",
    ],
    price: { amount: 11000, currency: "NGN" },
    compareAtPrice: { amount: 15000, currency: "NGN" },
    inStock: true,
    rating: 4.4,
    reviewCount: 51,
    tags: ["bottoms", "skirt", "midi", "pleated"],
    categoryId: "col-3",
    variants: [
      { id: "v13a", name: "Size", value: "S", stock: 6 },
      { id: "v13b", name: "Size", value: "M", stock: 8 },
      { id: "v13c", name: "Color", value: "Blush", stock: 7 },
      { id: "v13d", name: "Color", value: "Olive", stock: 7 },
    ],
  },
  {
    id: "p14",
    slug: "tailored-wide-shorts",
    title: "Tailored Wide-Leg Shorts",
    brand: "Casual Chic",
    description:
      "Chic wide-leg shorts combining the ease of a short with the sophistication of a trouser. Pleated front, side pockets, and a clean canvas-like finish. Pairs well with any top.",
    images: [
      "/images/06113902055-e1.jpg",
      "/images/08105228429-f1.jpg",
    ],
    price: { amount: 8500, currency: "NGN" },
    inStock: true,
    rating: 4.1,
    reviewCount: 44,
    tags: ["bottoms", "shorts", "summer", "casual"],
    categoryId: "col-3",
    variants: [
      { id: "v14a", name: "Size", value: "S", stock: 5 },
      { id: "v14b", name: "Size", value: "M", stock: 6 },
      { id: "v14c", name: "Size", value: "L", stock: 3 },
    ],
  },
  {
    id: "p15",
    slug: "rust-wide-leg-cargo-pants",
    title: "Rust Wide-Leg Cargo Pants",
    brand: "Denim District",
    description:
      "A bold rust-red pair of wide-leg cargo pants. Relaxed fit with functional pockets and a clean silhouette. A statement bottom that commands any room.",
    images: [
      "/images/T9698913856-a1.jpg",
      "/images/06113901637-e1.jpg",
    ],
    price: { amount: 21000, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 37,
    tags: ["bottoms", "jeans", "flare", "denim"],
    categoryId: "col-3",
    isNew: true,
    variants: [
      { id: "v15a", name: "Size", value: "26", stock: 3 },
      { id: "v15b", name: "Size", value: "28", stock: 5 },
      { id: "v15c", name: "Size", value: "30", stock: 4 },
    ],
  },

  // ── Activewear ──
  {
    id: "p16",
    slug: "high-waist-leggings",
    title: "High-Waist Performance Leggings",
    brand: "ActiveZone",
    description:
      "Sculpting high-waist leggings with 4-way stretch and moisture-wicking fabric. Full squat-proof.",
    images: [
      "/images/WW52116_BDS_main.webp",
      "/images/WW52116_BDS_alternate1.webp",
    ],
    price: { amount: 13500, currency: "NGN" },
    inStock: true,
    rating: 4.9,
    reviewCount: 261,
    tags: ["activewear", "leggings", "gym", "performance"],
    categoryId: "col-4",
    isBestSeller: true,
    variants: [
      { id: "v16a", name: "Size", value: "XS", stock: 8 },
      { id: "v16b", name: "Size", value: "S", stock: 12 },
      { id: "v16c", name: "Size", value: "M", stock: 15 },
      { id: "v16d", name: "Size", value: "L", stock: 10 },
      { id: "v16e", name: "Color", value: "Black", stock: 20 },
      { id: "v16f", name: "Color", value: "Forest Green", stock: 15 },
    ],
  },
  {
    id: "p17",
    slug: "seamless-sports-bra",
    title: "Seamless Sports Bra",
    brand: "ActiveZone",
    description:
      "Medium-impact seamless sports bra with removable pads. Soft, stretchy, and supportive.",
    images: [
      "/images/WW52116_BDS_alternate2.webp",
      "/images/WW52116_BDS_alternate5.webp",
    ],
    price: { amount: 8500, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 188,
    tags: ["activewear", "sports-bra", "gym"],
    categoryId: "col-4",
    variants: [
      { id: "v17a", name: "Size", value: "XS", stock: 10 },
      { id: "v17b", name: "Size", value: "S", stock: 14 },
      { id: "v17c", name: "Size", value: "M", stock: 12 },
      { id: "v17d", name: "Color", value: "Black", stock: 18 },
      { id: "v17e", name: "Color", value: "Coral", stock: 8 },
    ],
  },
  {
    id: "p18",
    slug: "waterproof-rain-jacket",
    title: "Waterproof Rain Jacket",
    brand: "ActiveZone",
    description:
      "A two-tone olive waterproof shell jacket engineered for rain and wind protection. Fully seam-sealed with an adjustable hood, zip pockets, and a relaxed technical fit.",
    images: [
      "/images/wr-hd3-downpour-ii-2l-rw-jkt-as-615f5e32-d5cd-42f5-bc04-16029c5e44dd-jpgrendition.jpg",
      "/images/MN00081_BDS_main.webp",
    ],
    price: { amount: 19500, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 73,
    tags: ["activewear", "jacket", "track"],
    categoryId: "col-4",
    variants: [
      { id: "v18a", name: "Size", value: "S", stock: 5 },
      { id: "v18b", name: "Size", value: "M", stock: 6 },
      { id: "v18c", name: "Size", value: "L", stock: 4 },
    ],
  },
  {
    id: "p19",
    slug: "performance-shorts",
    title: "Performance Training Shorts",
    brand: "ActiveZone",
    description:
      "High-performance training shorts built for movement and endurance. Quick-dry fabric, secure waistband, and an athletic fit suitable for all gym disciplines.",
    images: [
      "/images/MN00081_BDS_main.webp",
      "/images/MN00081_BDS_alternate2.webp",
    ],
    price: { amount: 7500, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 155,
    tags: ["activewear", "shorts", "biker"],
    categoryId: "col-4",
    variants: [
      { id: "v19a", name: "Size", value: "XS", stock: 9 },
      { id: "v19b", name: "Size", value: "S", stock: 12 },
      { id: "v19c", name: "Size", value: "M", stock: 11 },
    ],
  },
  {
    id: "p20",
    slug: "active-training-tank",
    title: "Active Training Tank",
    brand: "ActiveZone",
    description:
      "A seamless training tank built for intense sessions. Moisture-wicking fabric with a supportive fit and athletic cut. Available in multiple colorways.",
    images: [
      "/images/MN00081_BDS_alternate8.webp",
      "/images/MN00081_BDS_alternate11.webp",
    ],
    price: { amount: 6000, currency: "NGN" },
    compareAtPrice: { amount: 8500, currency: "NGN" },
    inStock: true,
    rating: 4.4,
    reviewCount: 99,
    tags: ["activewear", "tank", "racerback"],
    categoryId: "col-4",
    variants: [
      { id: "v20a", name: "Size", value: "S", stock: 15 },
      { id: "v20b", name: "Size", value: "M", stock: 18 },
      { id: "v20c", name: "Color", value: "Black", stock: 16 },
      { id: "v20d", name: "Color", value: "White", stock: 17 },
    ],
  },

  // ── Lingerie & Sleepwear ──
  {
    id: "p21",
    slug: "satin-pyjama-set",
    title: "Satin Pyjama Set",
    brand: "DreamWear",
    description:
      "Luxuriously smooth satin pyjama set. Notch collar shirt and wide-leg trouser. Loungewear elevated.",
    images: [
      "/images/img1.jpg",
      "/images/img2.jpg",
    ],
    price: { amount: 17500, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 112,
    tags: ["sleepwear", "pyjama", "satin"],
    categoryId: "col-5",
    isFeatured: true,
    variants: [
      { id: "v21a", name: "Size", value: "S", stock: 6 },
      { id: "v21b", name: "Size", value: "M", stock: 8 },
      { id: "v21c", name: "Color", value: "Blush", stock: 7 },
      { id: "v21d", name: "Color", value: "Ivory", stock: 7 },
    ],
  },
  {
    id: "p22",
    slug: "lace-bralette-set",
    title: "Lace Bralette & Brief Set",
    brand: "Luxe by Finstore",
    description:
      "Delicate lace bralette and matching brief. Elegant and effortlessly comfortable.",
    images: [
      "/images/pexels-godisable-jacob-226636-914668.jpg",
      "/images/03003900630-e1.jpg",
    ],
    price: { amount: 9500, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 74,
    tags: ["lingerie", "bralette", "lace", "set"],
    categoryId: "col-5",
    variants: [
      { id: "v22a", name: "Size", value: "S", stock: 5 },
      { id: "v22b", name: "Size", value: "M", stock: 7 },
      { id: "v22c", name: "Color", value: "Black", stock: 6 },
      { id: "v22d", name: "Color", value: "Nude", stock: 6 },
    ],
  },
  {
    id: "p23",
    slug: "plush-robe",
    title: "Plush Lounge Robe",
    brand: "DreamWear",
    description:
      "Wrap yourself in total comfort with this ultra-soft plush robe. Deep pockets and a waist tie.",
    images: [
      "/images/pexels-marvellous-adu-2148798496-36506383.jpg",
      "/images/img1.jpg",
    ],
    price: { amount: 22000, currency: "NGN" },
    inStock: true,
    rating: 4.9,
    reviewCount: 56,
    tags: ["sleepwear", "robe", "lounge"],
    categoryId: "col-5",
    isBestSeller: true,
    variants: [
      { id: "v23a", name: "Size", value: "S/M", stock: 8 },
      { id: "v23b", name: "Size", value: "L/XL", stock: 6 },
      { id: "v23c", name: "Color", value: "Ivory", stock: 7 },
      { id: "v23d", name: "Color", value: "Dusty Rose", stock: 7 },
    ],
  },
  {
    id: "p24",
    slug: "seamless-wireless-bra",
    title: "Seamless Wireless Bra",
    brand: "Luxe by Finstore",
    description:
      "All-day comfort in a seamless wireless bra. No underwire, no compromise. Available in full-size range.",
    images: [
      "/images/02893903626-e1.jpg",
      "/images/00506900600-e1.jpg",
    ],
    price: { amount: 7500, currency: "NGN" },
    compareAtPrice: { amount: 10000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 189,
    tags: ["lingerie", "bra", "wireless", "seamless"],
    categoryId: "col-5",
    variants: [
      { id: "v24a", name: "Size", value: "32B", stock: 8 },
      { id: "v24b", name: "Size", value: "34C", stock: 10 },
      { id: "v24c", name: "Size", value: "36D", stock: 7 },
    ],
  },
  {
    id: "p25",
    slug: "slip-nightgown",
    title: "Satin Slip Nightgown",
    brand: "DreamWear",
    description:
      "Mid-length satin slip nightgown with adjustable straps and lace trim. Sleek and simple.",
    images: [
      "/images/08741037746-a2.jpg",
      "/images/08741037746-e1.jpg",
    ],
    price: { amount: 12500, currency: "NGN" },
    inStock: false,
    rating: 4.5,
    reviewCount: 42,
    tags: ["sleepwear", "nightgown", "satin", "slip"],
    categoryId: "col-5",
    variants: [
      { id: "v25a", name: "Size", value: "S", stock: 0 },
      { id: "v25b", name: "Size", value: "M", stock: 0 },
    ],
  },

  // ── Footwear ──
  {
    id: "p26",
    slug: "block-heel-mule",
    title: "Block Heel Mule",
    brand: "StepUp",
    description:
      "Chic block heel mule in smooth faux leather. Backless design for easy slip-on wear.",
    images: [
      "/images/pexels-godisable-jacob-226636-914668.jpg",
      "/images/08741037746-a3.jpg",
    ],
    price: { amount: 25000, currency: "NGN" },
    inStock: true,
    rating: 4.6,
    reviewCount: 58,
    tags: ["footwear", "heels", "mule"],
    categoryId: "col-6",
    isNew: true,
    isFeatured: true,
    variants: [
      { id: "v26a", name: "Size", value: "37", stock: 3 },
      { id: "v26b", name: "Size", value: "38", stock: 5 },
      { id: "v26c", name: "Size", value: "39", stock: 4 },
      { id: "v26d", name: "Size", value: "40", stock: 2 },
      { id: "v26e", name: "Color", value: "Nude", stock: 7 },
      { id: "v26f", name: "Color", value: "Black", stock: 7 },
    ],
  },
  {
    id: "p27",
    slug: "white-platform-sneakers",
    title: "White Platform Sneakers",
    brand: "StepUp",
    description:
      "Clean white platform sneakers with a chunky sole. Pairs with literally everything.",
    images: [
      "/images/pexels-godisable-jacob-226636-961133.jpg",
      "/images/pexels-godisable-jacob-226636-961134.jpg",
    ],
    price: { amount: 28500, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 204,
    tags: ["footwear", "sneakers", "casual"],
    categoryId: "col-6",
    isBestSeller: true,
    variants: [
      { id: "v27a", name: "Size", value: "37", stock: 6 },
      { id: "v27b", name: "Size", value: "38", stock: 9 },
      { id: "v27c", name: "Size", value: "39", stock: 8 },
      { id: "v27d", name: "Size", value: "40", stock: 5 },
    ],
  },
  {
    id: "p28",
    slug: "strappy-heeled-sandal",
    title: "Strappy Heeled Sandal",
    brand: "Atelier Élégance",
    description:
      "Elegant strappy sandal with a kitten heel. Adjustable ankle strap for a secure fit.",
    images: [
      "/images/08741037746-a3.jpg",
      "/images/pexels-godisable-jacob-226636-961133.jpg",
    ],
    price: { amount: 32000, currency: "NGN" },
    inStock: true,
    rating: 4.7,
    reviewCount: 67,
    tags: ["footwear", "heels", "sandal", "formal"],
    categoryId: "col-6",
    isNew: true,
    variants: [
      { id: "v28a", name: "Size", value: "37", stock: 4 },
      { id: "v28b", name: "Size", value: "38", stock: 5 },
      { id: "v28c", name: "Size", value: "39", stock: 3 },
    ],
  },
  {
    id: "p29",
    slug: "ankle-boots",
    title: "Ankle Boots",
    brand: "StepUp",
    description:
      "Classic ankle boots in smooth faux leather. Side zip closure with a stacked heel.",
    images: [
      "/images/pexels-marvellous-adu-2148798496-36506383.jpg",
      "/images/img2.jpg",
    ],
    price: { amount: 38000, currency: "NGN" },
    compareAtPrice: { amount: 48000, currency: "NGN" },
    inStock: true,
    rating: 4.8,
    reviewCount: 91,
    tags: ["footwear", "boots", "ankle"],
    categoryId: "col-6",
    variants: [
      { id: "v29a", name: "Size", value: "37", stock: 3 },
      { id: "v29b", name: "Size", value: "38", stock: 4 },
      { id: "v29c", name: "Size", value: "39", stock: 3 },
      { id: "v29d", name: "Color", value: "Black", stock: 5 },
      { id: "v29e", name: "Color", value: "Tan", stock: 5 },
    ],
  },
  {
    id: "p30",
    slug: "pointed-toe-flats",
    title: "Pointed-Toe Ballet Flats",
    brand: "Atelier Élégance",
    description:
      "Timeless pointed-toe flats that go with everything. Padded insole for all-day comfort.",
    images: [
      "/images/T9698913856-a3.jpg",
      "/images/T9698913856-a1.jpg",
    ],
    price: { amount: 16500, currency: "NGN" },
    inStock: true,
    rating: 4.5,
    reviewCount: 148,
    tags: ["footwear", "flats", "ballet", "casual"],
    categoryId: "col-6",
    variants: [
      { id: "v30a", name: "Size", value: "37", stock: 6 },
      { id: "v30b", name: "Size", value: "38", stock: 8 },
      { id: "v30c", name: "Size", value: "39", stock: 7 },
      { id: "v30d", name: "Color", value: "Black", stock: 10 },
      { id: "v30e", name: "Color", value: "Nude", stock: 11 },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProductsByIds(ids: string[]): Product[] {
  return products.filter((p) => ids.includes(p.id));
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      (p.brand && p.brand.toLowerCase().includes(q))
  );
}
