# Template 01 — Penningtons Premiere Handoff

This document is for the backend/integration team to replace mock data with real API calls.

---

## Route Map

| Route | File | Mock Data Source |
|---|---|---|
| `/` | `app/page.tsx` | `mock/banners.ts`, `mock/products.ts` |
| `/collections/[slug]` | `app/collections/[slug]/page.tsx` | `mock/collections.ts`, `mock/products.ts` |
| `/products/[slug]` | `app/products/[slug]/page.tsx` | `mock/products.ts` |
| `/cart` | `app/cart/page.tsx` | Cart context (in-memory) |
| `/checkout` | `app/checkout/page.tsx` | Cart context (UI only) |
| `/search` | `app/search/page.tsx` | `mock/products.ts` |

---

## Component Map

| Component | Location | Receives |
|---|---|---|
| `Header` | `components/layout/header.tsx` | navigation from `mock/navigation.ts` |
| `Footer` | `components/layout/footer.tsx` | Static links |
| `PromoBar` | `components/layout/promo-bar.tsx` | `promoMessages[]` from navigation mock |
| `CartDrawer` | `components/cart/cart-drawer.tsx` | CartContext |
| `HeroBanner` | `components/home/hero-banner.tsx` | `heroBanners[]` from banners mock |
| `PromoTiles` | `components/home/promo-tiles.tsx` | `promoBanners[]` |
| `CategoryGrid` | `components/home/category-grid.tsx` | `collections[]` |
| `FeaturedProducts` | `components/home/featured-products.tsx` | Filtered `products[]` |
| `CampaignBanner` | `components/home/campaign-banner.tsx` | `campaignBanners[]` |
| `ProductCard` | `components/product/product-card.tsx` | `Product` object |
| `ProductGrid` | `components/product/product-grid.tsx` | `Product[]` |
| `FilterSidebar` | `components/collection/filter-sidebar.tsx` | Derived arrays from products |

---

## Integration Notes

### Collections page
```
GET /api/collections/:slug
→ Replace getCollectionBySlug() + getProductsByIds()
→ Returns: Collection + Product[]
```

### Products page
```
GET /api/products/:slug
→ Replace getProductBySlug()
→ Returns: Product (see DATA_CONTRACT.md)
```

### Search
```
GET /api/search?q=<query>
→ Replace searchProducts()
→ Returns: Product[]
```

### Navigation
```
GET /api/navigation
→ Replace mock/navigation.ts
→ Returns: { menuItems: MenuItem[], promoMessages: string[], shopByCategory: PromoTile[] }
```

### Banners
```
GET /api/content/home
→ Replace mock/banners.ts
→ Returns: { heroBanners: Banner[], promoBanners: Banner[], campaignBanners: Banner[] }
```

### Cart
The cart context (`lib/cart-context.tsx`) is currently in-memory (React state).
For persistence, replace state with:
- localStorage (simple)
- API-backed cart (`POST /api/cart/add`, `PATCH /api/cart/update`, `DELETE /api/cart/remove`)

### Checkout
The checkout form is UI-only. Integration points:
- `POST /api/orders/create` — submit order payload
- `POST /api/promo/validate` — promo code validation

---

## Event Map

| UI Action | Handler Location | Future API |
|---|---|---|
| Add to Cart | `cart-context.tsx → addItem()` | `POST /api/cart/add` |
| Remove from Cart | `cart-context.tsx → removeItem()` | `DELETE /api/cart/item` |
| Update Quantity | `cart-context.tsx → updateQuantity()` | `PATCH /api/cart/item` |
| Apply Promo Code | `app/cart/page.tsx` — input field | `POST /api/promo/validate` |
| Search Submit | `app/search/page.tsx` — form | `GET /api/search?q=` |
| Newsletter Subscribe | `components/layout/footer.tsx` — form | `POST /api/newsletter/subscribe` |
| Place Order | `app/checkout/page.tsx` — button | `POST /api/orders/create` |
