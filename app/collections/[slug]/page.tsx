import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCollectionBySlug } from "@/mock/collections";
import { CollectionView } from "./collection-view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return {
    title: `${collection.title} — Finstore`,
    description: collection.description ?? `Shop ${collection.title} at Finstore.`,
    openGraph: {
      title: collection.title,
      description: collection.description,
      images: collection.heroImage ? [{ url: collection.heroImage }] : [],
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();
  return <CollectionView collection={collection} />;
}
