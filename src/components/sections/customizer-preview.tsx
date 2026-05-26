"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ImagePlus, Sparkles, Wand2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { customizerProducts } from "@/lib/data";
import { cn } from "@/lib/utils";

const mockupImages: Record<string, string> = {
  sticker:
    "https://images.unsplash.com/photo-1611532736597-de2d426f9b7b?w=800&q=80&auto=format&fit=crop",
  magnet:
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80&auto=format&fit=crop",
  keychain:
    "https://images.unsplash.com/photo-1606107557195-0a7c8dc4bf1e?w=800&q=80&auto=format&fit=crop",
  frame:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80&auto=format&fit=crop",
  canvas:
    "https://images.unsplash.com/photo-1618221197210-5fe3f9c2b0c0?w=800&q=80&auto=format&fit=crop",
};

export function CustomizerPreviewSection() {
  const [active, setActive] =
    useState<(typeof customizerProducts)[number]["id"]>("sticker");
  const [dragging, setDragging] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    setUploaded(true);
  }, []);

  return (
    <section
      id="customize"
      className="scroll-mt-20 py-16 sm:py-24"
      aria-labelledby="customize-heading"
    >
      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">
            Your photos → real products
          </p>
          <h2
            id="customize-heading"
            className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            Upload. Preview. Obsess.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-brown-soft sm:text-base">
            Your photos deserve more than your camera roll. Drag a pic and see
            it on stickers, magnets, keychains &amp; more.
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={0.1}>
          <div className="overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
            <div className="flex w-max gap-2 sm:mx-auto sm:w-fit sm:flex-wrap sm:justify-center">
              {customizerProducts.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                    active === p.id
                      ? "bg-ink text-warm-white shadow-[var(--shadow-float)] scale-105"
                      : "glass-panel text-ink hover:bg-pink/30"
                  )}
                >
                  <span>{p.emoji}</span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Upload zone */}
          <Reveal delay={0.15}>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              className={cn(
                "relative flex min-h-[280px] flex-col items-center justify-center rounded-[2rem] border-2 border-dashed p-8 transition-all duration-300 sm:min-h-[360px]",
                dragging
                  ? "border-pink-deep bg-pink/25 scale-[1.02]"
                  : "border-pink/50 bg-gradient-to-br from-pink/20 via-cream to-lavender/30"
              )}
            >
              <motion.div
                animate={dragging ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                className="rounded-full bg-warm-white p-5 shadow-lg"
              >
                <ImagePlus className="h-10 w-10 text-pink-deep" strokeWidth={1.5} />
              </motion.div>
              <p className="mt-4 text-center font-semibold text-ink">
                Drop your memory here
              </p>
              <p className="mt-1 text-center text-sm text-muted">
                or tap to upload — JPG, PNG, HEIC
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setUploaded(true)}
              >
                Choose photo
              </Button>
              {uploaded && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-1 text-sm font-semibold text-pink-deep"
                >
                  <Sparkles className="h-4 w-4" />
                  Photo loaded — check preview →
                </motion.p>
              )}
            </div>
          </Reveal>

          {/* Live mockup */}
          <Reveal delay={0.2}>
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sticker-shadow sm:p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted">
                  Live mockup
                </span>
                <span className="flex items-center gap-1 rounded-full bg-pink/30 px-2 py-1 text-[10px] font-bold text-ink">
                  <Wand2 className="h-3 w-3" />
                  AI crop ready
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-beige/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.02, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={mockupImages[active]}
                      alt={`${active} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {uploaded && (
                      <div className="absolute inset-4 rounded-2xl border-4 border-warm-white shadow-lg overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80&auto=format&fit=crop"
                          alt="Your uploaded photo"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
                {/* Product frame overlays */}
                {active === "sticker" && (
                  <div className="absolute inset-0 pointer-events-none flex flex-wrap gap-2 p-6 content-start">
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="h-16 w-16 rounded-2xl border-4 border-warm-white bg-pink/40 shadow-md"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                      />
                    ))}
                  </div>
                )}
                {active === "keychain" && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 h-8 w-3 rounded-full bg-sand shadow-inner" />
                )}
                {active === "frame" && (
                  <div className="absolute inset-6 rounded-lg border-[12px] border-warm-white shadow-inner pointer-events-none" />
                )}
              </div>
              <p className="mt-4 text-center text-sm text-brown-soft">
                Made uniquely for you · Ships in 3–5 days
              </p>
              <MagneticButton variant="pink" className="mt-4 w-full" size="lg">
                Customize this product
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
