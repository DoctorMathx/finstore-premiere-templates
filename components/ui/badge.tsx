import { cn } from "@/lib/utils";

type Variant = "default" | "sale" | "new" | "bestseller" | "soldout";

interface BadgeProps {
  label: string;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-black text-white",
  sale: "bg-red-600 text-white",
  new: "bg-purple-700 text-white",
  bestseller: "bg-amber-500 text-white",
  soldout: "bg-neutral-400 text-white",
};

export function Badge({ label, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
        variantClasses[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
