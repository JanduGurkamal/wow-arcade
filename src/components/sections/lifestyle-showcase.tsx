"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const scenes = [
  {
    title: "Morning light, quiet walls",
    copy: "Framed prints that soften a room without shouting—like art you discovered on a slow Sunday abroad.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1400&q=80&auto=format&fit=crop",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Kitchen as gallery",
    copy: "Acrylic magnets that catch the light—tiny portraits of people and places you never want to forget.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80&auto=format&fit=crop",
    span: "lg:col-span-5",
  },
  {
    title: "Shelves that tell stories",
    copy: "Travel keepsakes and location pieces arranged with intention—Pinterest-worthy, lived-in real.",
    image:
      "https://images.unsplash.com/photo-1616046229474-9901c5536a45?w=900&q=80&auto=format&fit=crop",
    span: "lg:col-span-5",
  },
];

export function LifestyleShowcaseSection() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="lifestyle"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32 lg:py-40"
      aria-labelledby="lifestyle-heading"
    >
      <motion.div
        style={reduced ? undefined : { x: bgX }}
        className="pointer-events-none absolute inset-y-0 -left-[10%] w-[120%] opacity-40"
        aria-hidden
      >
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--beige)_0%,_transparent_70%)]" />
      </motion.div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
              In real homes
            </p>
            <h2
              id="lifestyle-heading"
              className="mt-4 font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] tracking-tight"
            >
              Lifestyle, not stock photos
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              We design for the spaces you actually live in—warm neutrals, soft
              shadows, and products that belong on your wall, not in a catalog.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:gap-6 lg:col-span-8 lg:grid-cols-12 lg:auto-rows-[minmax(180px,auto)]">
            {scenes.map((scene, i) => (
              <Reveal
                key={scene.title}
                delay={i * 0.12}
                className={`group relative overflow-hidden rounded-[1.75rem] ${scene.span}`}
              >
                <div className="relative aspect-[4/5] min-h-[280px] w-full sm:aspect-auto sm:min-h-[320px] lg:min-h-full lg:h-full">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduced ? undefined : { scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={scene.image}
                      alt={scene.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <h3 className="font-serif text-2xl text-warm-white sm:text-3xl">
                      {scene.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-warm-white/80 opacity-0 transition-all duration-700 group-hover:opacity-100 sm:text-base">
                      {scene.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
