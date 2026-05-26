"use client";

import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/safe-image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { trendingProducts } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function TrendingProductsSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="border-y border-border bg-cream/30 py-16 sm:py-24" aria-label="Studio favorites">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl font-medium text-mocha sm:text-3xl">
            Studio favorites
          </h2>
          <p className="mt-2 text-sm text-taupe">
            Beloved pieces our customers return to, again and again.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {trendingProducts.map((product, i) => (
            <motion.article
              key={product.id}
              className="paper-card group overflow-hidden rounded-2xl"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={reduced ? undefined : { y: -4 }}
            >
              <div className="relative aspect-square overflow-hidden bg-beige">
                <SafeImage
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <div className="absolute left-3 top-3">
                    <Badge>{product.tag}</Badge>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-wider text-coffee">
                  {product.category}
                </p>
                <h3 className="mt-1 font-display text-lg text-mocha">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-coffee">
                  ${product.price}
                </p>
                <Button variant="soft" size="sm" className="mt-3 w-full">
                  View details
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
