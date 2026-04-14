import Image from "next/image";
import Link from "next/link";
import { campaignBanners } from "@/mock/banners";

export function CampaignBanner() {
  return (
    <section className="w-full pb-16 sm:pb-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {campaignBanners.map((banner) => (
            <Link
              key={banner.id}
              href={banner.ctaHref ?? "#"}
              className="group relative aspect-[16/10] overflow-hidden bg-neutral-200 block"
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover object-[35%_center] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Bottom-up gradient — image breathes at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content — bottom-left, consistent with promo cards */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight tracking-tight">
                  {banner.title}
                </h3>
                {banner.subtitle && (
                  <p className="text-white/60 text-xs mt-2 leading-relaxed max-w-xs">
                    {banner.subtitle}
                  </p>
                )}
                <span className="inline-flex items-center gap-2 mt-5 text-white text-[10px] font-semibold uppercase tracking-[0.2em] border-b border-white/40 pb-px group-hover:border-white transition-colors duration-300">
                  {banner.ctaLabel}
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M7 1L11 5M11 5L7 9M11 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
