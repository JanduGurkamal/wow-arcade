"use client";

import { SafeImage } from "@/components/ui/safe-image";
import { motion } from "framer-motion";
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

export function ViralGallerySection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="gallery"
      className="scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">
                @wowarcade
              </p>
              <h2
                id="gallery-heading"
                className="mt-2 font-display text-3xl font-semibold text-ink"
              >
                Aesthetic inspo ✨
              </h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-2xl bg-gradient-to-r from-pink-deep to-peach px-4 py-2 text-xs font-bold text-ink shadow-md hover:-translate-y-0.5 transition-transform"
            >
              Follow us
            </a>
          </div>
        </Reveal>

        <div className="mt-8 hidden auto-rows-[100px] grid-cols-4 gap-3 lg:grid lg:auto-rows-[120px] lg:gap-4">
          {galleryImages.map((src, i) => (
            <Reveal
              key={i}
              delay={i * 0.04}
              className={cn(
                "group relative overflow-hidden rounded-3xl border-4 border-warm-white sticker-shadow",
                spans[i % spans.length]
              )}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={reduced ? undefined : { scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <SafeImage
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30">
                <span className="scale-0 rounded-full bg-warm-white px-4 py-2 text-xs font-bold text-ink transition-transform group-hover:scale-100">
                  Shop this vibe
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile masonry-ish */}
        <div className="mt-6 columns-2 gap-3 lg:hidden">
          {galleryImages.slice(0, 6).map((src, i) => (
            <motion.div
              key={i}
              className="mb-3 break-inside-avoid overflow-hidden rounded-2xl border-4 border-warm-white sticker-shadow"
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              <div
                className={cn(
                  "relative w-full",
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                )}
              >
                <SafeImage
                  src={src}
                  alt=""
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
