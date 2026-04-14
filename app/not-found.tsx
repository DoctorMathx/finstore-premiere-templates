import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
        404
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Page not found
      </h1>
      <p className="text-neutral-500 text-sm max-w-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link href="/">
          <Button size="lg">Back to Home</Button>
        </Link>
        <Link href="/collections/new-arrivals">
          <Button variant="outline" size="lg">
            Shop New Arrivals
          </Button>
        </Link>
      </div>
    </div>
  );
}
