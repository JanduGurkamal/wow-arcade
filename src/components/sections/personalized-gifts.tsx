"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, MapPin, Upload } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  { id: "upload", label: "Upload", icon: Upload },
  { id: "style", label: "Style", icon: Heart },
  { id: "place", label: "Place", icon: MapPin },
  { id: "gift", label: "Gift", icon: Gift },
] as const;

const previews = [
  {
    id: "magnet",
    label: "Photo magnet",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "map",
    label: "City map",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef936a0e8?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "frame",
    label: "Framed print",
    image:
      "https://images.unsplash.com/photo-1618221197210-5fe3f9c2b0c0?w=800&q=80&auto=format&fit=crop",
  },
];

export function PersonalizedGiftsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [activePreview, setActivePreview] = useState(0);

  return (
    <section
      id="gifts"
      className="relative scroll-mt-24 py-24 sm:py-32 lg:py-40"
      aria-labelledby="gifts-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
              Personalized gifts
            </p>
            <h2
              id="gifts-heading"
              className="mt-4 font-serif text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05] tracking-tight"
            >
              Design a gift in minutes
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Upload a photo, choose a finish, add a place name or date—we
              handle the craft. It feels bespoke because it is.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const active = activeStep === i;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={cn(
                      "flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-500",
                      active
                        ? "border-charcoal bg-charcoal text-warm-white dark:border-gold dark:bg-gold dark:text-charcoal"
                        : "border-border bg-transparent text-muted hover:border-gold/40"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {step.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-6 text-sm leading-relaxed text-muted"
              >
                {activeStep === 0 &&
                  "Drag & drop your favorite photo—we auto-crop for perfect magnet proportions."}
                {activeStep === 1 &&
                  "Pick matte, glossy, or soft-touch acrylic. Add a handwritten-style caption."}
                {activeStep === 2 &&
                  "Mark the city, coordinates, or a meaningful date on travel keepsakes."}
                {activeStep === 3 &&
                  "Optional gift wrap & note—arrives ready to give, no awkward re-packaging."}
              </motion.p>
            </AnimatePresence>

            <Button variant="luxury" size="lg" className="mt-10">
              Start customizing
            </Button>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="mb-6 flex gap-2">
                {previews.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePreview(i)}
                    className={cn(
                      "flex-1 rounded-xl border py-2 text-[10px] uppercase tracking-[0.15em] transition-all duration-500",
                      activePreview === i
                        ? "border-gold bg-gold/10 text-charcoal dark:text-foreground"
                        : "border-border text-muted"
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-beige/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePreview}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={previews[activePreview].image}
                      alt={previews[activePreview].label}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-charcoal/20 backdrop-blur-[2px]"
                  animate={{ opacity: activeStep >= 1 ? 0 : 1 }}
                >
                  <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-warm-white/50 bg-warm-white/10 px-8 py-10 text-center backdrop-blur-md">
                    <Upload className="h-8 w-8 text-warm-white" strokeWidth={1} />
                    <span className="text-sm text-warm-white">
                      Drop your photo here
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-muted">
                <span>Preview — demo</span>
                <span className="text-gold">Ships in 3–5 days</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
