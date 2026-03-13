import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MarqueeBanner />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
