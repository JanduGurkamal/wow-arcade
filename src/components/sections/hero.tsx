"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BotanicalAccent } from "@/components/decor/botanical-accent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SafeImage } from "@/components/ui/safe-image";
import { brand } from "@/lib/brand";
import { floatingHeroProducts } from "@/lib/data";
import { images } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HeroSection() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
      aria-label="Hero"
    >
      <BotanicalAccent className="pointer-events-none absolute left-0 top-32 w-28 text-sage opacity-60 md:w-36" />
      <BotanicalAccent className="pointer-events-none absolute right-4 top-48 w-24 rotate-12 scale-x-[-1] text-sage opacity-50 md:right-12" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div style={reduced ? undefined : { opacity, y }}>
            <Badge>Handcrafted in small batches</Badge>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1.12] tracking-tight text-mocha">
              {brand.copy.heroLines[0]}
              <span className="mt-1 block italic text-coffee">
                {brand.copy.heroLines[1]}
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-taupe">
              {brand.copy.heroSub}
            </p>
            <p className="mt-3 font-hand text-xl text-coffee/90">
              Tiny moments, preserved beautifully.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="sage" size="lg" asChild>
                <Link href="#customize">
                  Upload your memory
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#shop">Explore the collection</Link>
              </Button>
            </div>
          </motion.div>

          {/* Memory board — polaroid stack */}
          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cream via-beige/50 to-blush/30" />
            {floatingHeroProducts.map((p, i) => (
              <motion.div
                key={p.label}
                className="polaroid absolute w-[42%] sm:w-[38%]"
                style={{
                  top: i % 2 === 0 ? "8%" : "38%",
                  left: i < 2 ? (i === 0 ? "4%" : "52%") : i === 2 ? "8%" : "48%",
                  rotate: i === 0 ? -6 : i === 1 ? 5 : i === 2 ? 3 : -4,
                  zIndex: i + 1,
                }}
                animate={
                  reduced
                    ? undefined
                    : { y: [0, i % 2 === 0 ? -5 : 5, 0] }
                }
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                  <SafeImage
                    src={p.image}
                    alt={p.label}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-center font-hand text-lg text-coffee">
                  {p.label}
                </p>
              </motion.div>
            ))}
            <div className="polaroid absolute bottom-6 left-1/2 w-[55%] -translate-x-1/2 rotate-1 z-10">
              <div className="relative aspect-[5/4] overflow-hidden bg-beige">
                <SafeImage
                  src={images.heroDesktop}
                  alt="Handcrafted keepsakes on a memory board"
                  fill
                  sizes="280px"
                  priority
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-center text-xs text-taupe">
                Made to stay · just for you
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
