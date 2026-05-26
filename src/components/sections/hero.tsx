"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Sparkles, Upload } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { floatingHeroProducts } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    if (reduced || !headlineRef.current) return;
    const words = headlineRef.current.querySelectorAll("[data-word]");
    gsap.fromTo(
      words,
      { y: 50, opacity: 0, rotateZ: -3 },
      {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "back.out(1.4)",
        delay: 0.15,
      }
    );
  }, [reduced]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden pt-24 pb-16 sm:pt-28"
      aria-label="Hero"
    >
      {/* Floating product cards */}
      {floatingHeroProducts.map((p) => (
        <motion.div
          key={p.label}
          className={cn(
            "absolute z-10 hidden overflow-hidden rounded-3xl border-4 border-warm-white sticker-shadow sm:block",
            p.className
          )}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: p.delay + 0.5, type: "spring", stiffness: 120 }}
          style={{ animationDelay: `${p.delay}s` }}
        >
          <div className="animate-float relative aspect-square h-full w-full">
            <Image
              src={p.image}
              alt={p.label}
              fill
              sizes="150px"
              className="object-cover"
            />
            <span className="absolute bottom-1 left-1 rounded-full bg-warm-white/90 px-2 py-0.5 text-[9px] font-bold text-ink">
              {p.label}
            </span>
          </div>
        </motion.div>
      ))}

      <Container className="relative z-20">
        <motion.div style={reduced ? undefined : { y }} className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Badge className="border-pink/50 bg-pink/30 text-ink">
              <Sparkles className="mr-1 inline h-3 w-3" />
              Upload → Customize → Obsess
            </Badge>
          </motion.div>

          <h1
            ref={headlineRef}
            className="mt-6 font-display text-[clamp(2.5rem,9vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-ink"
          >
            <span data-word className="inline-block">
              Turn your
            </span>{" "}
            <span data-word className="inline-block text-pink-deep">
              memories
            </span>
            <br />
            <span data-word className="inline-block">
              into
            </span>{" "}
            <span
              data-word
              className="inline-block bg-gradient-to-r from-pink-deep via-peach to-lavender bg-clip-text text-transparent"
            >
              everyday art
            </span>
          </h1>

          <motion.p
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-brown-soft sm:text-lg"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Custom stickers, magnets, keychains, frames &amp; more — made from
            <span className="font-semibold text-ink"> your photos</span>.
            Tiny memories that stay forever.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <MagneticButton variant="pink" size="lg" asChild>
              <Link href="#customize">
                <Upload className="h-5 w-5" />
                Upload your photos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
            <Button variant="outline" size="lg" asChild>
              <Link href="#shop">Shop trending</Link>
            </Button>
          </motion.div>

          {/* Mobile hero product stack */}
          <div className="relative mx-auto mt-12 max-w-sm sm:max-w-md lg:hidden">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-warm-white sticker-shadow"
              whileHover={reduced ? undefined : { scale: 1.02, rotate: 1 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1611532736597-de2d426f9b7b?w=800&q=80&auto=format&fit=crop"
                alt="Custom stickers and magnets preview"
                fill
                priority
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 glass-panel rounded-2xl p-3 text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pink-deep">
                  Live preview
                </p>
                <p className="text-sm font-semibold text-ink">
                  Your photo → custom sticker pack
                </p>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-2 top-8 rounded-2xl border-4 border-warm-white bg-pink/40 px-3 py-2 text-sm font-bold shadow-lg rotate-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              ✨ so cute
            </motion.div>
          </div>

          {/* Desktop center mockup */}
          <motion.div
            className="relative mx-auto mt-14 hidden max-w-lg lg:block"
            initial={reduced ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, type: "spring" }}
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] border-[6px] border-warm-white sticker-shadow">
              <Image
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1000&q=80&auto=format&fit=crop"
                alt="Aesthetic desk with custom stickers and magnets"
                fill
                priority
                sizes="512px"
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -left-8 top-1/4 rounded-3xl border-4 border-warm-white bg-lavender/80 p-3 sticker-shadow -rotate-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-2xl">🧲</span>
              <p className="text-xs font-bold text-ink">Magnet</p>
            </motion.div>
            <motion.div
              className="absolute -right-6 bottom-1/4 rounded-3xl border-4 border-warm-white bg-peach/80 p-3 sticker-shadow rotate-6"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
            >
              <span className="text-2xl">🔑</span>
              <p className="text-xs font-bold text-ink">Keychain</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
