"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { emotionalReasons } from "@/lib/data";

export function WhyCustomSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="why-heading">
      <Container>
        <div className="botanical-divider mb-14" />
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="why-heading"
            className="font-display text-3xl font-medium text-mocha sm:text-4xl"
          >
            Why handcrafted matters
          </h2>
          <p className="mt-4 text-taupe">
            In a world of endless scrolling, we make room for what lasts.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {emotionalReasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="paper-card rounded-3xl p-8 transition-shadow hover:shadow-[var(--polaroid-shadow)]">
                <span className="font-display text-4xl font-light text-sage/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-mocha">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
