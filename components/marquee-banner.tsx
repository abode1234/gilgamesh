"use client"

import { Cpu, Shield, Zap, Infinity, Code, Brain, Rocket, Database } from "lucide-react"

const items = [
  { icon: Cpu, label: "QUANTUM READY" },
  { icon: Shield, label: "SECURE ARCHITECTURE" },
  { icon: Zap, label: "LATENCY OPTIMIZED" },
  { icon: Infinity, label: "SCALABLE SOLUTIONS" },
  { icon: Code, label: "CLEAN CODE" },
  { icon: Brain, label: "AI POWERED" },
  { icon: Rocket, label: "RAPID DEPLOY" },
  { icon: Database, label: "DATA DRIVEN" },
]

export function MarqueeBanner() {
  return (
    <section className="py-8 bg-primary relative overflow-hidden group">
      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-gold-light/20 to-primary animate-shimmer pointer-events-none" />
      
      {/* Animated border lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={`${item.label}-${i}`}
              className="flex items-center gap-3 text-primary-foreground font-display font-bold text-lg mx-12 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-primary-foreground/30 bg-primary-foreground/10 transition-all duration-300 hover:bg-primary-foreground hover:text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <span className="tracking-[0.15em]">{item.label}</span>
              <span className="text-primary-foreground/20 ml-6 text-2xl">{"///"}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
