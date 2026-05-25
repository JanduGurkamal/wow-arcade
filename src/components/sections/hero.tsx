"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HeroSection() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    if (reduced || !titleRef.current) return;
    const chars = titleRef.current.querySelectorAll("[data-char]");
    gsap.fromTo(
      chars,
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.04,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, [reduced]);

  const line1 = "Turn moments";
  const line2 = "into heirlooms";

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden pt-28 sm:pt-32"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-[480px] w-[480px] rounded-full bg-gold/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-40 h-[360px] w-[360px] rounded-full bg-beige blur-[80px] dark:bg-brown/20" />

      <Container className="relative z-10 grid min-h-[calc(100dvh-7rem)] gap-10 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-16">
        <motion.div
          style={reduced ? undefined : { y: contentY, opacity }}
          className="flex flex-col justify-center lg:col-span-6 lg:pb-8"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Badge className="mb-6 border-gold/25 bg-beige/30 text-charcoal dark:text-foreground">
              <Sparkles className="mr-1.5 inline h-3 w-3 text-gold" />
              New — Spring Collection
            </Badge>
          </motion.div>

          <h1
            ref={titleRef}
            className="font-serif text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.95] tracking-tight text-charcoal dark:text-foreground"
            style={{ perspective: 800 }}
          >
            <span className="block overflow-hidden">
              {line1.split("").map((c, i) => (
                <span
                  key={`l1-${i}`}
                  data-char
                  className="inline-block"
                  style={{ display: c === " " ? "inline" : "inline-block" }}
                >
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </span>
            <span className="mt-1 block overflow-hidden italic text-brown dark:text-gold-soft">
              {line2.split("").map((c, i) => (
                <span key={`l2-${i}`} data-char className="inline-block">
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            Acrylic photo magnets, framed artwork, and personalized keepsakes—
            crafted for homes that feel curated, cozy, and unmistakably yours.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <Button variant="luxury" size="lg" asChild>
              <Link href="#collections">
                Shop the collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#gifts">Create a gift</Link>
            </Button>
          </motion.div>

          <motion.dl
            className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:mt-16 sm:max-w-lg"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            {[
              { label: "Happy homes", value: "12k+" },
              { label: "Avg. rating", value: "4.9" },
              { label: "Ship time", value: "3–5d" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-serif text-2xl text-charcoal dark:text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          style={reduced ? undefined : { y: imageY }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/5] max-h-[72dvh] w-full max-w-lg overflow-hidden rounded-[2rem] shadow-[var(--shadow)] sm:rounded-[2.5rem] lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85&auto=format&fit=crop"
              alt="Cozy modern interior with curated wall art and decor"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />
          </div>
          <motion.div
            className="absolute -bottom-4 left-4 right-4 mx-auto max-w-[240px] rounded-2xl border border-border/60 bg-warm-white/90 p-4 shadow-[var(--shadow-soft)] backdrop-blur-md dark:bg-card/90 sm:-left-8 sm:bottom-8 sm:max-w-[260px] lg:-left-12"
            initial={reduced ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Featured
            </p>
            <p className="mt-1 font-serif text-lg leading-snug">
              Coastal Morning Magnet Set
            </p>
            <p className="mt-1 text-sm text-gold">From $48</p>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted lg:flex"
        animate={reduced ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}
