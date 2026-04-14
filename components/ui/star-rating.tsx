import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  className?: string;
}

export function StarRating({ rating, reviewCount, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            className={
              star <= Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-neutral-200 text-neutral-200"
            }
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-neutral-500">({reviewCount})</span>
      )}
    </div>
  );
}
