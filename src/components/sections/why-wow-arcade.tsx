"use client";

import { motion } from "framer-motion";
import { Gem, Leaf, Package, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { trustPoints } from "@/lib/data";

const icons = [Sparkles, Gem, Package, Leaf] as const;

export function WhyWowArcadeSection() {
  return (
    <section
      id="craft"
      className="scroll-mt-24 border-y border-border bg-warm-white py-24 dark:bg-card sm:py-32 lg:py-40"
      aria-labelledby="craft-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
              Why WOW Arcade
            </p>
            <h2
              id="craft-heading"
              className="mt-4 font-serif text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] tracking-tight"
            >
              Craft you can{" "}
              <span className="italic text-brown dark:text-gold-soft">
                feel
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              We&apos;re not a factory churning out decor. Every piece is
              considered, finished by hand, and shipped like it matters—because
              your memories do.
            </p>
            <blockquote className="mt-10 border-l-2 border-gold pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-charcoal dark:text-foreground sm:text-2xl">
                &ldquo;Luxury isn&apos;t loud. It&apos;s the weight of the
                frame, the clarity of the acrylic, the silence when you open the
                box.&rdquo;
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
                — Studio ethos
              </footer>
            </blockquote>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {trustPoints.map((point, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={point.title} delay={i * 0.08}>
                  <motion.div
                    className="group h-full rounded-[1.5rem] border border-border bg-cream/50 p-6 transition-colors duration-500 hover:border-gold/30 hover:bg-beige/30 dark:bg-background/50 sm:p-8"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-5 inline-flex rounded-full border border-border bg-warm-white p-3 dark:bg-card">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                    </div>
                    <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {point.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
