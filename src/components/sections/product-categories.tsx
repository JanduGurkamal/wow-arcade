"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { categories } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const vibeStyles: Record<string, string> = {
  playful: "rounded-[2.5rem] rotate-[-1deg] hover:rotate-1",
  aesthetic: "rounded-[2rem] hover:rounded-[2.5rem]",
  trendy: "rounded-3xl skew-y-0 hover:-skew-y-1",
  emotional: "rounded-[2rem] rounded-br-[3rem]",
  premium: "rounded-[2rem] ring-2 ring-peach/50",
};

export function ProductCategoriesSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="shop"
      className="scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="shop-heading"
    >
      <Container>
        <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">
              Pick your vibe
            </p>
            <h2
              id="shop-heading"
              className="font-display text-3xl font-semibold text-ink sm:text-4xl"
            >
              What are we making today?
            </h2>
          </div>
          <p className="max-w-xs text-sm text-brown-soft">
            Each category hits different. Swipe on mobile →
          </p>
        </Reveal>

        {/* Mobile: horizontal swipe */}
        <div className="mt-8 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-5 px-5 md:hidden">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} reduced={reduced} mobile />
          ))}
        </div>

        {/* Desktop: bento grid */}
        <div className="mt-10 hidden gap-4 md:grid md:grid-cols-6 md:auto-rows-[200px]">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.id}
              delay={i * 0.06}
              className={cn(
                i === 0 && "md:col-span-3 md:row-span-2",
                i === 1 && "md:col-span-3",
                i === 2 && "md:col-span-2",
                i === 3 && "md:col-span-2",
                i === 4 && "md:col-span-2"
              )}
            >
              <CategoryCard cat={cat} index={i} reduced={reduced} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({
  cat,
  index,
  reduced,
  mobile,
}: {
  cat: (typeof categories)[number];
  index: number;
  reduced: boolean;
  mobile?: boolean;
}) {
  return (
    <Link
      href={cat.href}
      className={cn(
        "group relative block overflow-hidden bg-gradient-to-br sticker-shadow transition-all duration-500 hover:-translate-y-2",
        !mobile && "h-full",
        vibeStyles[cat.vibe],
        cat.gradient,
        mobile ? "w-[78vw] shrink-0 snap-center min-h-[320px]" : "h-full min-h-[200px]"
      )}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={reduced ? undefined : { scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Image
          src={cat.image}
          alt={cat.title}
          fill
          sizes={mobile ? "80vw" : "400px"}
          className="object-cover opacity-90 mix-blend-overlay"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="text-3xl">{cat.emoji}</span>
        <h3 className="mt-2 font-display text-2xl font-semibold text-warm-white sm:text-3xl">
          {cat.title}
        </h3>
        <p className="text-sm font-medium text-warm-white/85">{cat.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-warm-white opacity-0 transition-opacity group-hover:opacity-100">
          Customize <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
      {index === 0 && (
        <span className="absolute right-4 top-4 rounded-full bg-pink px-3 py-1 text-[10px] font-bold text-ink">
          Most popular
        </span>
      )}
    </Link>
  );
}
