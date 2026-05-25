import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Shop: [
    { label: "Magnets", href: "#collections" },
    { label: "Framed art", href: "#collections" },
    { label: "Travel keepsakes", href: "#collections" },
    { label: "Gifts", href: "#gifts" },
  ],
  Company: [
    { label: "Our story", href: "#craft" },
    { label: "Sustainability", href: "#craft" },
    { label: "Shipping", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream/50 dark:bg-background/80">
      <Container className="py-20 sm:py-24">
        <div className="rounded-[2rem] border border-border bg-card px-8 py-12 text-center shadow-[var(--shadow-soft)] sm:px-16 sm:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            Stay inspired
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
            Join the WOW Arcade circle
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Early access to collections, styling tips, and gift guides—no spam,
            only beautiful things.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@email.com"
              className="h-12 flex-1 rounded-full border border-border bg-warm-white px-5 text-sm outline-none transition-colors focus:border-gold/50 dark:bg-background"
            />
            <Button type="submit" variant="luxury">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl tracking-tight">
              WOW Arcade
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Premium home decor and personalized keepsakes—acrylic magnets,
              framed art, and travel-inspired pieces for modern, cozy living.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal/80 transition-colors hover:text-gold dark:text-foreground/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WOW Arcade. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
