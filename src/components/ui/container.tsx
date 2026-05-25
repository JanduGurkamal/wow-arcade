import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Comp = "div",
}: {
  className?: string;
  children: ReactNode;
  as?: "div" | "section";
}) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16",
        className
      )}
    >
      {children}
    </Comp>
  );
}
