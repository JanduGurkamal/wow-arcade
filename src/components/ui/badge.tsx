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
        "inline-flex items-center rounded-full border border-border bg-warm-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted backdrop-blur-sm dark:bg-card/80",
        className
      )}
    >
      {children}
    </span>
  );
}
