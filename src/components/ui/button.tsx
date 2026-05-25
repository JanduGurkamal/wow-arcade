"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal text-warm-white hover:bg-brown dark:bg-warm-white dark:text-charcoal dark:hover:bg-beige",
        luxury:
          "bg-charcoal text-warm-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow)] hover:-translate-y-0.5 dark:bg-gold dark:text-charcoal dark:hover:bg-gold-soft",
        outline:
          "border border-border bg-transparent text-charcoal hover:border-charcoal/30 hover:bg-beige/40 dark:text-foreground dark:hover:bg-beige/20",
        ghost:
          "text-charcoal hover:bg-beige/50 dark:text-foreground dark:hover:bg-beige/30",
        gold:
          "bg-gold/90 text-charcoal hover:bg-gold shadow-[var(--shadow-soft)] hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-7 text-sm tracking-wide",
        sm: "h-10 px-5 text-xs tracking-wider uppercase",
        lg: "h-14 px-10 text-sm tracking-wide",
        icon: "h-11 w-11",
      },
      rounded: {
        default: "rounded-full",
        soft: "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
