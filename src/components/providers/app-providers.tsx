"use client";

import { SmoothScroll } from "./smooth-scroll";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
