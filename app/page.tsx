import { HeroBanner } from "@/components/home/hero-banner";
import { PromoTiles } from "@/components/home/promo-tiles";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { CampaignBanner } from "@/components/home/campaign-banner";
import { TrendingNow } from "@/components/home/trending-now";
import { LoyaltyBanner } from "@/components/home/loyalty-banner";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <PromoTiles />
      <CategoryGrid />
      <FeaturedProducts
        title="New Arrivals"
        subtitle="Fresh styles just landed"
        filter="isNew"
        ctaHref="/collections/new-arrivals"
      />
      <CampaignBanner />
      <TrendingNow />
      <LoyaltyBanner />
      <FeaturedProducts
        title="Best Sellers"
        subtitle="Our most-loved styles"
        filter="isBestSeller"
        ctaLabel="Shop Best Sellers"
        ctaHref="/collections/sale"
      />
      <FeaturedProducts
        title="Featured"
        subtitle="Curated picks from our editors"
        filter="isFeatured"
        ctaLabel="See All Featured"
        ctaHref="/collections/new-arrivals"
      />
    </>
  );
}
