import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { FloatingStickers } from "@/components/effects/floating-stickers";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WOW Arcade — Custom Stickers, Magnets & Keepsakes",
  description:
    "Upload your memories. Turn them into custom stickers, acrylic magnets, keychains, frames & more. Gen-Z friendly, made uniquely for you.",
  openGraph: {
    title: "WOW Arcade — Turn Your Memories Into Art",
    description: "Custom stickers, magnets, keychains & aesthetic keepsakes.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff9f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${fraunces.variable} mesh-bg min-h-screen font-sans text-ink antialiased`}
      >
        <AppProviders>
          <FloatingStickers />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
