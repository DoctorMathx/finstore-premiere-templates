import Image from "next/image";
import Link from "next/link";

const editorials = [
  {
    id: "ed-1",
    label: "Find Your Flow",
    href: "/collections/activewear",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  },
  {
    id: "ed-2",
    label: "The Dress Shop",
    href: "/collections/women-dresses",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
  },
  {
    id: "ed-3",
    label: "The Easy Series",
    href: "/collections/tops-blouses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
  },
];

export function TrendingNow() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight uppercase">Trending Now</h2>
        <p className="text-sm text-neutral-500 mt-1">
          Discover our curated selection of trending styles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {editorials.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative aspect-[3/4] overflow-hidden bg-neutral-100"
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white text-sm font-semibold">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/collections/new-arrivals"
          className="inline-block border border-black text-black text-xs font-bold uppercase tracking-widest px-10 py-3 hover:bg-black hover:text-white transition-colors"
        >
          Shop the Latest
        </Link>
      </div>
    </section>
  );
}
