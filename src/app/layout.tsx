import type { Metadata, Viewport } from "next";
import { Caveat, Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WOW Arcade — Handcrafted Personalized Keepsakes",
  description:
    "Preserve your memories as custom stickers, magnets, keychains, and frames. A warm, artisan boutique for sentimental gifting.",
  openGraph: {
    title: "WOW Arcade — Handcrafted Memories",
    description: "Turn special moments into keepsakes made to stay.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDF8F1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.variable} ${cormorant.variable} ${caveat.variable} paper-grain min-h-screen bg-ivory font-sans text-mocha antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
