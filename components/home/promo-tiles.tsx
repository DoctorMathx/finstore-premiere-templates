import Image from "next/image";
import Link from "next/link";
import { promoBanners } from "@/mock/banners";

export function PromoTiles() {
  return (
    /*
     * Full-bleed: no max-width, no horizontal padding.
     * Tiles go edge-to-edge exactly like Penningtons.
     */
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {promoBanners.map((banner) => (
          <Link
            key={banner.id}
            href={banner.ctaHref ?? "#"}
            className="group relative block overflow-hidden bg-neutral-200"
            style={{ height: "clamp(360px, 42vw, 560px)" }}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />

            {/* Soft bottom scrim — Penningtons keeps the image readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            {/* Centered bottom content — matches Penningtons layout exactly */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-8 sm:pb-10 px-4 text-center">
              <h3 className="text-white font-bold text-2xl sm:text-3xl uppercase tracking-tight leading-tight drop-shadow-sm">
                {banner.title}
              </h3>
              {/* Solid white button — Penningtons style */}
              <span className="mt-5 inline-block bg-white text-black text-[11px] font-bold uppercase tracking-[0.18em] px-9 py-2.5 group-hover:bg-neutral-100 transition-colors duration-200">
                {banner.ctaLabel}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
