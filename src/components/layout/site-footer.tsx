import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const links = {
  Shop: ["Stickers", "Magnets", "Keychains", "Frames", "Canvas"],
  Help: ["Shipping", "Returns", "FAQ", "Contact"],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-warm-white/80 pb-32 pt-12 lg:pb-12">
      <Container>
        <div className="rounded-[2rem] bg-gradient-to-r from-pink/40 via-cream to-lavender/50 p-8 text-center sm:p-10">
          <p className="text-2xl">💌</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
            Get cute drops in your inbox
          </h2>
          <p className="mt-2 text-sm text-brown-soft">
            New templates, viral packs &amp; gift ideas — no spam, just vibes.
          </p>
          <form className="mx-auto mt-6 flex max-w-sm flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="you@email.com"
              aria-label="Email"
              className="h-12 flex-1 rounded-2xl border-2 border-border bg-warm-white px-4 text-sm outline-none focus:border-pink-deep"
            />
            <Button type="submit" variant="pink">
              Join
            </Button>
          </form>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              WOW Arcade ✨
            </p>
            <p className="mt-2 text-sm text-brown-soft">
              Your memories, turned into aesthetic physical keepsakes.
            </p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-xs font-bold uppercase tracking-wider text-muted">
                {title}
              </p>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#shop"
                      className="text-sm text-brown-soft hover:text-pink-deep"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          © {new Date().getFullYear()} WOW Arcade · Made with love for your
          camera roll
        </p>
      </Container>
    </footer>
  );
}
