"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Sparkles, Truck, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

const perks = [
  { icon: Zap, text: "Checkout in under 60 sec" },
  { icon: Truck, text: "Free shipping over $35" },
  { icon: Lock, text: "Secure payment" },
  { icon: Sparkles, text: "Made to order" },
];

export function CheckoutCtaSection() {
  return (
    <section
      id="checkout"
      className="scroll-mt-20 pb-28 pt-8 sm:pb-24 lg:pb-16"
      aria-label="Start order"
    >
      <Container>
        <Reveal>
          <motion.div
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink via-peach/80 to-lavender p-8 text-center sticker-shadow sm:p-14"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-warm-white/30 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-pink-deep/20 blur-2xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-ink/70">
              Ready when you are
            </p>
            <h2 className="relative mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Start your custom order
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm text-brown sm:text-base">
              Upload → pick product → checkout. Effortless, premium, and
              weirdly addictive.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              {perks.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-ink"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {text}
                </span>
              ))}
            </div>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton variant="default" size="lg" asChild>
                <Link href="#customize">Create yours now</Link>
              </MagneticButton>
              <MagneticButton variant="glass" size="lg" asChild>
                <Link href="#shop">Browse products</Link>
              </MagneticButton>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
