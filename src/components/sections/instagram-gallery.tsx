"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { galleryImages } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const spans = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
];

export function InstagramGallerySection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      className="border-t border-border py-24 sm:py-32 lg:py-40"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <Reveal className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
              @wowarcade
            </p>
            <h2
              id="gallery-heading"
              className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] tracking-tight"
            >
              From the community
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold"
          >
            <Camera className="h-4 w-4" />
            Follow on Instagram
          </a>
        </Reveal>

        {/* Mobile: horizontal immersive strip */}
        <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:hidden">
          {galleryImages.slice(0, 6).map((src, i) => (
            <motion.div
              key={`m-${i}`}
              className="relative h-[280px] w-[200px] shrink-0 overflow-hidden rounded-2xl"
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              <Image
                src={src}
                alt={`Community photo ${i + 1}`}
                fill
                sizes="200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 active:bg-charcoal/20" />
            </motion.div>
          ))}
        </div>

        {/* Desktop: masonry */}
        <div className="hidden auto-rows-[120px] grid-cols-4 gap-3 lg:grid lg:auto-rows-[140px] lg:gap-4">
          {galleryImages.map((src, i) => (
            <Reveal
              key={`d-${i}`}
              delay={i * 0.05}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                spans[i % spans.length]
              )}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={reduced ? undefined : { scale: 1.06 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={src}
                  alt={`Community photo ${i + 1}`}
                  fill
                  sizes="(max-width: 1440px) 25vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Camera className="h-6 w-6 text-warm-white" strokeWidth={1.25} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
