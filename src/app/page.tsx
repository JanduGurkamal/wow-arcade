import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturedCollectionsSection } from "@/components/sections/featured-collections";
import { LifestyleShowcaseSection } from "@/components/sections/lifestyle-showcase";
import { WhyWowArcadeSection } from "@/components/sections/why-wow-arcade";
import { PersonalizedGiftsSection } from "@/components/sections/personalized-gifts";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { InstagramGallerySection } from "@/components/sections/instagram-gallery";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-4 focus:py-2 focus:text-warm-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <FeaturedCollectionsSection />
        <LifestyleShowcaseSection />
        <WhyWowArcadeSection />
        <PersonalizedGiftsSection />
        <TestimonialsSection />
        <InstagramGallerySection />
      </main>
      <SiteFooter />
    </>
  );
}
