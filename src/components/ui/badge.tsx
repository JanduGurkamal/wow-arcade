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
        "inline-flex items-center rounded-full bg-warm-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brown shadow-sm ring-1 ring-border",
        className
      )}
    >
      {children}
    </span>
  );
}
