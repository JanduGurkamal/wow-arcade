"use client";

import { SafeImage } from "@/components/ui/safe-image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ugcPosts } from "@/lib/data";

export function SocialProofSection() {
  return (
    <section
      id="stories"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="stories-heading"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-hand text-2xl text-coffee">from our community</p>
          <h2
            id="stories-heading"
            className="mt-2 font-display text-3xl font-medium text-mocha"
          >
            Memories, kept close
          </h2>
          <p className="mt-4 text-taupe">
            Real homes, real desks, real fridges — where your keepsakes find
            their place.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ugcPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08}>
              <figure className="paper-card overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5] bg-beige">
                  <SafeImage
                    src={post.image}
                    alt=""
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <p className="font-hand text-xl text-coffee">{post.user}</p>
                  <blockquote className="mt-2 text-sm leading-relaxed text-taupe">
                    &ldquo;{post.caption}&rdquo;
                  </blockquote>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
