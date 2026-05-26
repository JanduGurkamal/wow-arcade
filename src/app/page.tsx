import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { HeroSection } from "@/components/sections/hero";
import { CustomizerPreviewSection } from "@/components/sections/customizer-preview";
import { ProductCategoriesSection } from "@/components/sections/product-categories";
import { TrendingProductsSection } from "@/components/sections/trending-products";
import { SocialProofSection } from "@/components/sections/social-proof";
import { WhyCustomSection } from "@/components/sections/why-custom";
import { ViralGallerySection } from "@/components/sections/viral-gallery";
import { CheckoutCtaSection } from "@/components/sections/checkout-cta";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-2xl focus:bg-ink focus:px-4 focus:py-2 focus:text-warm-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <CustomizerPreviewSection />
        <ProductCategoriesSection />
        <TrendingProductsSection />
        <SocialProofSection />
        <WhyCustomSection />
        <ViralGallerySection />
        <CheckoutCtaSection />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
