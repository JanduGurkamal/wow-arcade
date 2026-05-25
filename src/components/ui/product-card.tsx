"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function ProductCard({
  product,
  className,
  index = 0,
}: {
  product: Product;
  className?: string;
  index?: number;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.article
      className={cn("group relative", className)}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-[1.75rem] bg-card shadow-[var(--shadow-soft)] transition-shadow duration-700 group-hover:shadow-[var(--shadow)]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={reduced ? undefined : { scale: 1.04 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 28vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          {product.tag && (
            <div className="absolute left-4 top-4 z-10">
              <Badge className="border-gold/30 bg-warm-white/90 text-charcoal">
                {product.tag}
              </Badge>
            </div>
          )}
          <motion.div
            className="absolute bottom-4 right-4 z-10 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            initial={false}
          >
            <Button
              size="icon"
              variant="luxury"
              className="h-11 w-11 bg-warm-white/95 text-charcoal backdrop-blur-md"
              aria-label={`Quick view ${product.name}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="gold"
              className="h-11 w-11"
              aria-label={`Add ${product.name} to cart`}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        <div className="space-y-2 p-5 sm:p-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
            {product.category}
          </p>
          <h3 className="font-serif text-xl leading-snug tracking-tight text-charcoal dark:text-foreground sm:text-2xl">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {product.description}
          </p>
          <p className="pt-1 font-serif text-lg text-charcoal dark:text-foreground">
            ${product.price}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
