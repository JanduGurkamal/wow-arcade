"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <Reveal className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
            Loved by thousands
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] tracking-tight"
          >
            Stories from real homes
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="relative rounded-[2rem] border border-border bg-card px-8 py-14 shadow-[var(--shadow-soft)] sm:px-16 sm:py-20">
            <div className="absolute left-8 top-8 font-serif text-7xl leading-none text-gold/30 sm:left-12 sm:text-8xl">
              &ldquo;
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 text-center"
              >
                <div className="mb-6 flex justify-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <blockquote className="font-serif text-2xl leading-relaxed tracking-tight text-charcoal dark:text-foreground sm:text-3xl lg:text-4xl">
                  {current.quote}
                </blockquote>
                <footer className="mt-10">
                  <cite className="not-italic">
                    <span className="block text-sm font-medium tracking-wide text-charcoal dark:text-foreground">
                      {current.author}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-muted">
                      {current.location}
                    </span>
                  </cite>
                </footer>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === index
                        ? "w-8 bg-gold"
                        : "w-1.5 bg-border hover:bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
