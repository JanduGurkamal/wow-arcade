"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-deep/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-warm-white shadow-[var(--shadow-soft)] hover:bg-brown hover:-translate-y-0.5 active:translate-y-0",
        pink: "bg-gradient-to-r from-pink-deep to-pink text-ink shadow-[var(--shadow-float)] hover:-translate-y-1 hover:shadow-lg active:translate-y-0",
        outline:
          "border-2 border-border bg-warm-white/80 text-ink hover:border-pink-deep/40 hover:bg-pink/20",
        ghost: "text-ink hover:bg-pink/25",
        glass:
          "glass-panel text-ink shadow-[var(--shadow-soft)] hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-6 text-sm rounded-2xl",
        sm: "h-10 px-4 text-xs rounded-xl",
        lg: "h-14 px-8 text-base rounded-2xl",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "pink",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
