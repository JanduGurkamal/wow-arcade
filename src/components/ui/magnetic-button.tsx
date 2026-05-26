"use client";

import { useRef, type ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  ...props
}: ButtonProps & { children?: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  return (
    <div
      ref={wrapRef}
      className={cn("inline-block transition-transform duration-200", className)}
      onMouseMove={(e) => {
        if (reduced || !wrapRef.current) return;
        const rect = wrapRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
        wrapRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={() => {
        if (wrapRef.current) wrapRef.current.style.transform = "";
      }}
    >
      <Button className="w-full sm:w-auto" {...props}>
        {children}
      </Button>
    </div>
  );
}
