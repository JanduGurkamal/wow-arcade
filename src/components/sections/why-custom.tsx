"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { emotionalReasons } from "@/lib/data";

export function WhyCustomSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      aria-labelledby="why-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-lavender/40 via-cream to-pink/20" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="why-heading"
            className="font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            Why custom hits different
          </h2>
          <p className="mt-4 text-brown-soft">
            It&apos;s not merch. It&apos;s your story — on your fridge, keys,
            desk, and walls.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {emotionalReasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.div
                className="glass-panel rounded-[1.75rem] p-6 sticker-peel sm:p-8"
                whileHover={{ y: -6, rotate: i % 2 === 0 ? 1 : -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-4xl">{item.emoji}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brown-soft">
                  {item.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
