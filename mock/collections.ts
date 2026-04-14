import type { Collection } from "@/lib/types";

export const collections: Collection[] = [
  {
    id: "col-1",
    slug: "women-dresses",
    title: "Dresses",
    description: "Elegant dresses for every occasion — from casual day wear to evening glamour.",
    heroImage: "/images/pexels-godisable-jacob-226636-961134.jpg",
    productIds: ["p1", "p2", "p3", "p4", "p5", "p31"],
  },
  {
    id: "col-2",
    slug: "tops-blouses",
    title: "Tops & Blouses",
    description: "Versatile tops and blouses that work from morning meetings to evening outings.",
    heroImage: "/images/08741037746-a1.jpg",
    productIds: ["p6", "p7", "p8", "p9", "p10", "p35", "p36"],
  },
  {
    id: "col-3",
    slug: "bottoms-pants",
    title: "Bottoms & Pants",
    description: "From wide-leg trousers to tailored shorts — find your perfect fit.",
    heroImage: "/images/06113901637-e1.jpg",
    productIds: ["p11", "p12", "p13", "p14", "p15", "p37"],
  },
  {
    id: "col-4",
    slug: "activewear",
    title: "Activewear",
    description: "Performance-ready activewear designed to move with you.",
    heroImage: "/images/wr-hd3-downpour-ii-2l-rw-jkt-as-615f5e32-d5cd-42f5-bc04-16029c5e44dd-jpgrendition.jpg",
    productIds: ["p16", "p17", "p18", "p19", "p20", "p32", "p33", "p34"],
  },
  {
    id: "col-5",
    slug: "lingerie",
    title: "Lingerie & Sleepwear",
    description: "Comfort and beauty — for the everyday and the special moments.",
    heroImage: "/images/img1.jpg",
    productIds: ["p21", "p22", "p23", "p24", "p25"],
  },
  {
    id: "col-6",
    slug: "footwear",
    title: "Footwear",
    description: "From sneakers to heels — step out in style.",
    heroImage: "/images/pexels-godisable-jacob-226636-914668.jpg",
    productIds: ["p26", "p27", "p28", "p29", "p30", "p38"],
  },
  {
    id: "col-7",
    slug: "new-arrivals",
    title: "New Arrivals",
    description: "Fresh styles just landed — be the first to wear the latest.",
    heroImage: "/images/T9698913856-a2.jpg",
    productIds: ["p31", "p32", "p33", "p34", "p35", "p36", "p37", "p38", "p1", "p6", "p11", "p16"],
  },
  {
    id: "col-8",
    slug: "sale",
    title: "Sale",
    description: "Amazing styles at incredible prices. Limited time only.",
    heroImage: "/images/pexels-godisable-jacob-226636-961133.jpg",
    productIds: ["p3", "p8", "p13", "p20", "p24", "p29", "p31", "p35"],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
