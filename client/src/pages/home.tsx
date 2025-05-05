import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { IndustriesSection } from "@/components/industries-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { FounderSection } from "@/components/founder-section";
import { ContactSection } from "@/components/contact-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <IndustriesSection />
        <ServicesSection />
        <PortfolioSection />
        <FounderSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  );
}
