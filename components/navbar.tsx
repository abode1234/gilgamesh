"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled
          ? "bg-background/90 border-border shadow-lg"
          : "bg-background/60 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Gilgamesh Production Logo"
              width={180}
              height={48}
              className="object-contain dark:brightness-100 brightness-90"
              style={{ height: "48px", width: "auto" }}
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors uppercase tracking-[0.2em]"
              >
                {link.label}
              </a>
            ))}

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            <a
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-gold-dark px-6 py-2 text-sm font-bold transition-all uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(var(--gold-rgb),0.3)]"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary py-2 text-sm font-medium uppercase tracking-[0.2em] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-gold-dark px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-center transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
