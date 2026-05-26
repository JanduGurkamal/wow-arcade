"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { trendingProducts } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export function TrendingProductsSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="py-12 sm:py-20" aria-label="Trending products">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Trending right now 🔥
          </h2>
          <p className="mt-1 text-sm text-brown-soft">
            Carry your moments everywhere.
          </p>
        </Reveal>

        <div className="mt-8 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-5 px-5 sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0 lg:grid-cols-4 lg:gap-6">
          {trendingProducts.map((product, i) => (
            <motion.article
              key={product.id}
              className="w-[72vw] shrink-0 snap-center sm:w-auto"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring" }}
              whileHover={reduced ? undefined : { y: -8 }}
            >
              <div
                className={cn(
                  "group overflow-hidden rounded-[1.75rem] border-2 border-warm-white sticker-shadow",
                  product.color
                )}
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduced ? undefined : { scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  </motion.div>
                  {product.tag && (
                    <div className="absolute left-3 top-3">
                      <Badge className="bg-warm-white/95">{product.tag}</Badge>
                    </div>
                  )}
                  <button
                    type="button"
                    className="absolute right-3 top-3 rounded-full bg-warm-white/90 p-2 shadow-md transition-transform hover:scale-110"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="h-4 w-4 text-pink-deep" />
                  </button>
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-warm-white opacity-0 shadow-lg transition-all group-hover:opacity-100 hover:scale-105"
                    aria-label={`Add ${product.name}`}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-warm-white/90 p-4 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-semibold text-ink">{product.name}</h3>
                  <p className="mt-1 font-bold text-pink-deep">${product.price}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
