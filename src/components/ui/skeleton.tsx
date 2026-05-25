import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "skeleton-shimmer rounded-2xl bg-beige/60",
        className
      )}
      aria-hidden
    />
  );
}
