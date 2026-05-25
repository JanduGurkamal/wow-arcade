"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "@/components/ui/product-card";
import { collections, products } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export function FeaturedCollectionsSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="collections"
      className="relative scroll-mt-24 py-24 sm:py-32 lg:py-40"
      aria-labelledby="collections-heading"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
            Curated for you
          </p>
          <h2
            id="collections-heading"
            className="mt-4 font-serif text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05] tracking-tight text-charcoal dark:text-foreground"
          >
            Featured collections
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Three worlds of decor—each designed to feel personal, tactile, and
            impossibly refined.
          </p>
        </Reveal>

        <div className="mt-16 space-y-6 sm:mt-20 lg:space-y-8">
          {collections.map((col, index) => (
            <Reveal key={col.id} delay={index * 0.1}>
              <Link
                href={col.href}
                className="group relative block overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-soft)] transition-shadow duration-700 hover:shadow-[var(--shadow)]"
              >
                <div
                  className={cn(
                    "grid min-h-[280px] sm:min-h-[360px]",
                    index % 2 === 0
                      ? "lg:grid-cols-[1.1fr_0.9fr]"
                      : "lg:grid-cols-[0.9fr_1.1fr]"
                  )}
                >
                  <div
                    className={cn(
                      "relative min-h-[220px] overflow-hidden sm:min-h-[280px]",
                      index % 2 === 1 && "lg:order-2"
                    )}
                  >
                    <motion.div
                      className="absolute inset-0"
                      whileHover={reduced ? undefined : { scale: 1.03 }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={col.image}
                        alt={col.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div
                    className={cn(
                      "flex flex-col justify-center p-8 sm:p-12 lg:p-16",
                      index % 2 === 1 && "lg:order-1"
                    )}
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
                      {col.subtitle}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                      {col.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                      {col.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors group-hover:text-gold dark:text-foreground">
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 sm:mt-32">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
                Shop now
              </p>
              <h3 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                Bestsellers
              </h3>
            </div>
            <p className="max-w-xs text-sm text-muted">
              Hover to preview. Tap + to add—demo experience.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
