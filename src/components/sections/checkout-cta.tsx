import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function CheckoutCtaSection() {
  return (
    <section
      id="checkout"
      className="scroll-mt-24 pb-28 pt-8 lg:pb-16"
      aria-label="Begin order"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-cream via-ivory to-blush/40 px-8 py-14 text-center sm:px-16">
            <p className="font-hand text-3xl text-coffee">
              ready when you are
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium text-mocha sm:text-4xl">
              Begin your keepsake
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
              Upload a photograph, choose your piece, and we&apos;ll craft it
              by hand — shipped in protective packaging, like a gift to
              yourself.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="sage" size="lg" asChild>
                <Link href="#customize">Upload your memory</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#shop">Browse collection</Link>
              </Button>
            </div>
            <p className="mt-8 text-xs text-taupe">
              Free shipping over $35 · Secure checkout · Made to order
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
