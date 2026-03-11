"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Terminal } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Of Digital & Physical Realities"

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    let i = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [loaded])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 3D CSS Background */}
      <AnimatedBackground />

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div
          className={`inline-block mb-8 px-5 py-1.5 border border-primary/30 bg-background/50 backdrop-blur-md transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase font-display flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            System Online v.4.0
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter mb-6 leading-tight text-foreground transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          ENGINEERING <br className="hidden md:block" />
          <span className="gold-gradient-text">THE FUTURE</span>
        </h1>

        <p
          className={`mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground font-light tracking-wide h-[1.5em] transition-opacity duration-500 delay-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {typedText}
          <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#services"
            className="group relative px-8 py-4 bg-background/50 backdrop-blur-sm overflow-hidden border border-primary text-primary font-bold uppercase tracking-[0.2em] hover:text-primary-foreground transition-all duration-300 animate-pulse-glow"
          >
            <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            <span className="relative flex items-center gap-2">
              Explore Systems <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-[0.2em] font-bold flex items-center gap-2 group"
          >
            Initiate Protocol <Terminal className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce cursor-pointer transition-all duration-700 delay-1000 ${
        loaded ? "opacity-70" : "opacity-0"
      } hover:opacity-100`}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
