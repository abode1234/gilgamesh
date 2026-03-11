"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function SiteFooter() {
  const footerAnim = useScrollAnimation(0.05)

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div
        ref={footerAnim.ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up ${footerAnim.isVisible ? "in-view" : ""}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and social */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Gilgamesh Production"
              width={180}
              height={45}
              className="object-contain mb-6 opacity-90 dark:brightness-100 brightness-90 hover:opacity-100 transition-opacity"
              style={{ height: "45px", width: "auto" }}
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Engineering digital and physical realities for the visionary. Where ancient wisdom meets future technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:border-primary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 hover:scale-110 hover-lift"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-display font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary" />
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((label, i) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="group text-muted-foreground hover:text-primary transition-all duration-300 text-sm uppercase tracking-wider flex items-center gap-2"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3" />
                  {label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground font-display font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary" />
              Newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for system updates and tech insights.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all duration-300 w-full placeholder:text-muted-foreground focus:pl-6"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-focus-within:w-full" />
              </div>
              <button
                type="button"
                className="group relative overflow-hidden bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] px-4 py-3 text-sm transition-all duration-500 w-full hover:shadow-[0_0_20px_rgba(var(--gold-rgb),0.4)] ripple"
              >
                <span className="absolute inset-0 w-0 bg-gold-dark transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {"© 2026 Gilgamesh Production. All systems operational."}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm group flex items-center gap-1"
            >
              Privacy Policy
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm group flex items-center gap-1"
            >
              Terms of Service
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
