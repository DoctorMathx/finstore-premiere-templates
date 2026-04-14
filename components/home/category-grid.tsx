import Link from "next/link";
import Image from "next/image";
import { collections } from "@/mock/collections";

export function CategoryGrid() {
  const featured = collections.slice(0, 6);

  return (
    <section className="w-full py-10 sm:py-12">

      {/* Full-width section header bar — matches Penningtons "SHOP BY CATEGORY | SHOP ALL" */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 mb-6 sm:mb-8">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900">
          Shop by Category
        </h2>
        <Link
          href="/collections/new-arrivals"
          className="text-[11px] font-bold uppercase tracking-[0.15em] border border-neutral-300 px-5 py-2 text-neutral-700 hover:border-black hover:text-black transition-colors"
        >
          Shop All
        </Link>
      </div>

      {/* Category tiles — consistent across all screen sizes */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 px-4 sm:px-6 lg:px-10">
        {featured.map((col) => (
          <Link
            key={col.id}
            href={`/collections/${col.slug}`}
            className="group flex flex-col gap-2"
          >
            <div className="relative w-full aspect-[2/3] overflow-hidden bg-neutral-100">
              <Image
                src={col.heroImage ?? ""}
                alt={col.title}
                fill
                className="object-cover object-[50%_15%] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
              />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-700 group-hover:text-black transition-colors leading-tight text-center">
              {col.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
