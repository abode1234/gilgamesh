"use client"

import { CheckCircle, Code, Brain, Bug, Printer, Sparkles } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation"
import { TiltCard } from "@/components/tilt-card"

const capabilities = [
  { icon: Code, title: "Web Dev", sub: "Scalable Solutions" },
  { icon: Brain, title: "AI & ML", sub: "Future Ready" },
  { icon: Bug, title: "Bug Fixing", sub: "Code Optimization" },
  { icon: Printer, title: "3D Printing", sub: "Rapid Prototyping" },
]

const stats = [
  { value: 100, suffix: "+", label: "Systems Deployed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Success Rate" },
]

export function AboutSection() {
  const imageAnim = useScrollAnimation()
  const contentAnim = useScrollAnimation()
  const capsAnim = useScrollAnimation(0.1)
  const stat1 = useCountUp(100, 2000, imageAnim.isVisible)
  const stat2 = useCountUp(50, 2000, imageAnim.isVisible)
  const stat3 = useCountUp(99, 2000, imageAnim.isVisible)
  const statValues = [stat1, stat2, stat3]

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-20 w-96 h-96 border border-primary/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-primary/5 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-primary/5 animate-morph blur-3xl" />
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/3 rounded-full blur-2xl animate-floating" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side with 3D effect */}
          <div
            ref={imageAnim.ref}
            className={`relative animate-fade-left ${imageAnim.isVisible ? "in-view" : ""}`}
          >
            <TiltCard className="relative" glareEnabled>
              <div className="absolute -inset-4 bg-primary/10 blur-xl rounded-full opacity-50 animate-pulse" />
              <div className="relative preserve-3d">
                <Image
                  src="/images/about-image.jpg"
                  alt="Gilgamesh Production workspace"
                  width={600}
                  height={450}
                  className="relative z-10 w-full border border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Floating decoration */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rotate-45 animate-floating hidden lg:block" style={{ animationDelay: "-2s" }} />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 backdrop-blur-sm animate-floating hidden lg:block" />
              </div>
            </TiltCard>

            {/* Stats row */}
            <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20 transition-all duration-700 delay-500 ${
              imageAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {stats.map((stat, i) => (
                <div 
                  key={stat.label} 
                  className="bg-primary/95 backdrop-blur-sm p-4 text-center hover-lift hidden sm:block"
                  style={{ transitionDelay: `${i * 100 + 500}ms` }}
                >
                  <p className="text-primary-foreground font-display font-bold text-2xl md:text-3xl">
                    {statValues[i]}{stat.suffix}
                  </p>
                  <p className="text-primary-foreground/80 text-[10px] uppercase tracking-[0.15em] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Content side */}
          <div
            ref={contentAnim.ref}
            className={`flex flex-col gap-8 animate-fade-right ${contentAnim.isVisible ? "in-view" : ""}`}
          >
            <div className="border-l-4 border-primary pl-4">
              <span className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-2 block flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold uppercase tracking-wider text-foreground">
                Who We <span className="text-primary neon-text">Are</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed font-light text-muted-foreground">
                At{" "}
                <span className="font-bold text-primary">
                  Gilgamesh Production
                </span>
                , we are the architects of the digital age, drawing inspiration
                from the timeless resilience of ancient legends. Just as the
                epic of Gilgamesh sought immortality through legacy, we strive
                to build enduring technological solutions.
              </p>
              <p className="text-lg leading-relaxed font-light text-muted-foreground">
                We bridge the gap between ancient wisdom and modern innovation.
                Whether it is crafting robust web frameworks, resolving complex
                bugs, pioneering AI projects, or materializing ideas through 3D
                printing, our mission is to empower your vision with precision
                and strength.
              </p>
            </div>

            <div ref={capsAnim.ref} className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon
                return (
                  <TiltCard
                    key={cap.title}
                    className={`animate-fade-up stagger-${i + 1} ${capsAnim.isVisible ? "in-view" : ""}`}
                  >
                    <div
                      className="group flex items-center gap-3 p-4 bg-background border border-border hover:border-primary transition-all duration-300 hover-lift cursor-pointer"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase text-foreground">
                          {cap.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{cap.sub}</p>
                      </div>
                    </div>
                  </TiltCard>
                )
              })}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h5 className="text-foreground font-bold group-hover:text-primary transition-colors">
                    Enterprise Grade Solutions
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Robust systems built for scale and security.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h5 className="text-foreground font-bold group-hover:text-primary transition-colors">
                    {"Cutting Edge R&D"}
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Continuous integration of latest AI models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
