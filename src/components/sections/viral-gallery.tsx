"use client";

import { SafeImage } from "@/components/ui/safe-image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { galleryImages } from "@/lib/data";

export function ViralGallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-cream/40 py-20 sm:py-28"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-hand text-2xl text-coffee">inspiration board</p>
            <h2
              id="gallery-heading"
              className="mt-1 font-display text-3xl font-medium text-mocha"
            >
              A quiet gallery of keepsakes
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-coffee underline-offset-4 hover:underline"
          >
            Follow @wowarcade
          </a>
        </Reveal>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 lg:gap-5">
          {galleryImages.map((src, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--paper-shadow)]"
              >
                <div
                  className={`relative w-full ${
                    i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <SafeImage
                    src={src}
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
