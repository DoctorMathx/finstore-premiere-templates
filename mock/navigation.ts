import type { MenuItem, PromoTile } from "@/lib/types";

export const promoMessages = [
  "FREE DELIVERY ON ORDERS OVER ₦30,000",
  "NEW ARRIVALS JUST DROPPED — SHOP NOW",
  "USE CODE PREMIERE10 FOR 10% OFF YOUR FIRST ORDER",
];

export const navigation: MenuItem[] = [
  {
    id: "nav-new",
    label: "New Arrivals",
    href: "/collections/new-arrivals",
    children: [
      { id: "nav-new-clothing", label: "New Clothing", href: "/collections/new-arrivals" },
      { id: "nav-new-footwear", label: "New Footwear", href: "/collections/footwear" },
      { id: "nav-new-lingerie", label: "New Lingerie", href: "/collections/lingerie" },
    ],
  },
  {
    id: "nav-clothing",
    label: "Clothing",
    href: "/collections/women-dresses",
    children: [
      { id: "nav-cl-dresses", label: "Dresses", href: "/collections/women-dresses" },
      { id: "nav-cl-tops", label: "Tops & Blouses", href: "/collections/tops-blouses" },
      { id: "nav-cl-bottoms", label: "Bottoms & Pants", href: "/collections/bottoms-pants" },
      { id: "nav-cl-activewear", label: "Activewear", href: "/collections/activewear" },
    ],
  },
  {
    id: "nav-dresses",
    label: "Dresses",
    href: "/collections/women-dresses",
  },
  {
    id: "nav-activewear",
    label: "Activewear",
    href: "/collections/activewear",
    children: [
      { id: "nav-act-tops", label: "Tops", href: "/collections/activewear" },
      { id: "nav-act-bottoms", label: "Bottoms", href: "/collections/activewear" },
      { id: "nav-act-sports-bra", label: "Sports Bras", href: "/collections/activewear" },
    ],
  },
  {
    id: "nav-lingerie",
    label: "Lingerie",
    href: "/collections/lingerie",
    children: [
      { id: "nav-lin-bras", label: "Bras", href: "/collections/lingerie" },
      { id: "nav-lin-sleepwear", label: "Sleepwear", href: "/collections/lingerie" },
      { id: "nav-lin-sets", label: "Sets", href: "/collections/lingerie" },
    ],
  },
  {
    id: "nav-footwear",
    label: "Footwear",
    href: "/collections/footwear",
    children: [
      { id: "nav-fw-flats", label: "Flats", href: "/collections/footwear" },
      { id: "nav-fw-sneakers", label: "Sneakers", href: "/collections/footwear" },
      { id: "nav-fw-heels", label: "Heels & Wedges", href: "/collections/footwear" },
      { id: "nav-fw-boots", label: "Boots", href: "/collections/footwear" },
    ],
  },
  {
    id: "nav-sale",
    label: "Sale",
    href: "/collections/sale",
  },
];

export const shopByCategory: PromoTile[] = [
  { id: "cat-1", label: "Dresses", href: "/collections/women-dresses" },
  { id: "cat-2", label: "Tops", href: "/collections/tops-blouses" },
  { id: "cat-3", label: "Bottoms", href: "/collections/bottoms-pants" },
  { id: "cat-4", label: "Activewear", href: "/collections/activewear" },
  { id: "cat-5", label: "Lingerie", href: "/collections/lingerie" },
  { id: "cat-6", label: "Footwear", href: "/collections/footwear" },
  { id: "cat-7", label: "New Arrivals", href: "/collections/new-arrivals" },
  { id: "cat-8", label: "Sale", href: "/collections/sale" },
];
