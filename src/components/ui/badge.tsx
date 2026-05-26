import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-coffee",
        className
      )}
    >
      {children}
    </span>
  );
}
