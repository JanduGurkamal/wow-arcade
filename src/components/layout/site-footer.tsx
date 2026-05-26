import Link from "next/link";
import { BrandLogo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream/50 pb-28 pt-14 lg:pb-14">
      <Container>
        <div className="botanical-divider mb-12" />
        <div className="paper-card rounded-3xl p-8 text-center sm:p-10">
          <p className="font-hand text-2xl text-coffee">stay in the loop</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-mocha sm:text-3xl">
            Letters from our studio
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-taupe">
            New designs, gifting ideas, and quiet inspiration — like a note from
            a friend.
          </p>
          <form className="mx-auto mt-6 flex max-w-sm flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email"
              className="h-11 flex-1 rounded-full border border-border bg-ivory px-4 text-sm outline-none focus:border-sage/50"
            />
            <Button type="submit" variant="sage">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <div>
            <BrandLogo size="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-taupe">
              Tiny moments, preserved beautifully. Handcrafted personalized
              gifts for the people and places you hold close.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-coffee">
              Shop
            </p>
            <ul className="mt-3 space-y-2 text-sm text-taupe">
              {["Stickers", "Magnets", "Keychains", "Frames", "Canvas"].map(
                (l) => (
                  <li key={l}>
                    <Link href="#shop" className="hover:text-mocha">
                      {l}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-coffee">
              Studio
            </p>
            <ul className="mt-3 space-y-2 text-sm text-taupe">
              {["Our story", "Shipping", "Care guide", "Contact"].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-mocha">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-taupe">
          © {new Date().getFullYear()} WOW Arcade · Made with care for your
          memories
        </p>
      </Container>
    </footer>
  );
}
