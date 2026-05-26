"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SafeImage } from "@/components/ui/safe-image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { categories } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
export function ProductCategoriesSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="shop"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="shop-heading"
    >
      <Container>
        <Reveal className="max-w-xl">
          <p className="font-hand text-2xl text-coffee">the collection</p>
          <h2
            id="shop-heading"
            className="mt-2 font-display text-3xl font-medium text-mocha sm:text-4xl"
          >
            Keepsakes for every kind of memory
          </h2>
          <p className="mt-4 text-taupe">
            Each piece is made to order in our studio — slow, intentional, and
            yours alone.
          </p>
        </Reveal>

        <div className="mt-12 flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-5 px-5 md:grid md:grid-cols-2 md:overflow-visible md:mx-0 md:px-0 lg:grid-cols-3 lg:gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.06}>
              <Link
                href={cat.href}
                className="group paper-card block w-[78vw] shrink-0 snap-center overflow-hidden rounded-3xl md:w-auto"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-beige">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduced ? undefined : { scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <SafeImage
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width:768px) 78vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-mocha/50 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-coffee">
                    {cat.vibe}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-mocha group-hover:text-coffee">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-taupe">{cat.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-sage">
                    Customize
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
