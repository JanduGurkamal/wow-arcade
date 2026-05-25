"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#lifestyle", label: "Lifestyle" },
  { href: "#craft", label: "Craft" },
  { href: "#gifts", label: "Gifts" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-b border-border/80 bg-warm-white/75 py-3 backdrop-blur-xl dark:bg-card/75"
            : "bg-transparent py-5 sm:py-6"
        )}
      >
        <Container className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex flex-col leading-none"
            aria-label="WOW Arcade home"
          >
            <span className="font-serif text-xl tracking-tight text-charcoal dark:text-foreground sm:text-2xl">
              WOW Arcade
            </span>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.35em] text-muted transition-colors group-hover:text-gold">
              Home & Keepsakes
            </span>
          </Link>

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-charcoal dark:hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                rounded="soft"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="hidden sm:inline-flex"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              rounded="soft"
              className="relative"
              aria-label="Cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-charcoal">
                0
              </span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
              asChild
            >
              <Link href="#collections">Shop</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              rounded="soft"
              className="lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute inset-y-0 right-0 flex w-[min(100%,320px)] flex-col bg-warm-white px-6 py-8 shadow-2xl dark:bg-card"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              aria-label="Mobile navigation"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-serif text-xl">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-3xl tracking-tight text-charcoal dark:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-4 pt-12">
                {mounted && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? "Light mode" : "Dark mode"}
                  </Button>
                )}
                <Button variant="luxury" className="w-full" asChild>
                  <Link href="#collections" onClick={() => setMenuOpen(false)}>
                    Explore collection
                  </Link>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
