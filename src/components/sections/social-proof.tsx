"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ugcPosts } from "@/lib/data";

export function SocialProofSection() {
  return (
    <section
      className="py-16 sm:py-24"
      aria-labelledby="social-heading"
    >
      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-deep">
            Made for you
          </p>
          <h2
            id="social-heading"
            className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            Real people. Real desks. Real obsession.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-brown-soft">
            Turn your favorite moments into everyday art — then post it (we
            won&apos;t judge).
          </p>
        </Reveal>

        {/* Reels-style horizontal scroll */}
        <div className="mt-10 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5 sm:gap-5">
          {ugcPosts.map((post, i) => (
            <motion.article
              key={post.id}
              className="relative w-[260px] shrink-0 snap-center sm:w-[280px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring" }}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border-4 border-warm-white sticker-shadow">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
                <div className="absolute left-3 top-3 flex items-center gap-2">
                  <span className="glass-panel rounded-full px-2.5 py-1 text-[10px] font-bold text-ink">
                    {post.user}
                  </span>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm-white/30 p-4 backdrop-blur-md">
                  <Play className="h-8 w-8 fill-warm-white text-warm-white" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-medium text-warm-white line-clamp-2">
                    {post.caption}
                  </p>
                  <p className="mt-2 flex items-center gap-1 text-xs font-bold text-pink">
                    <Heart className="h-3.5 w-3.5 fill-pink" />
                    {post.likes}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Photo wall */}
        <Reveal className="mt-14">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-wider text-muted">
            Customer photo wall
          </p>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
            {ugcPosts.map((post) => (
              <div
                key={`wall-${post.id}`}
                className="sticker-peel relative aspect-square overflow-hidden rounded-2xl border-2 border-warm-white shadow-md"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
