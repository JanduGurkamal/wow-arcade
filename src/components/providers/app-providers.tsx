"use client";

import { ThemeProvider } from "./theme-provider";
import { SmoothScroll } from "./smooth-scroll";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
