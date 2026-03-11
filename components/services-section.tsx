"use client"

import { Code, Bug, Brain, Layers, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TiltCard } from "@/components/tilt-card"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Scalable, responsive, and high-performance web applications built on modern frameworks. We construct digital monoliths that stand the test of time.",
    features: ["Full Stack Engineering", "eCommerce Solutions", "Progressive Web Apps"],
    cta: "Explore Web Dev",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Optimization",
    description:
      "Precision code auditing and performance tuning. We eliminate vulnerabilities and streamline your digital assets for maximum efficiency.",
    features: ["Code Refactoring", "Speed Optimization", "Security Patching"],
    cta: "Fix Your Code",
  },
  {
    icon: Brain,
    title: "AI Projects",
    description:
      "Harnessing machine learning and neural networks to automate complex tasks. We integrate intelligent systems into your workflow.",
    features: ["NLP Solutions", "Predictive Analytics", "Custom AI Models"],
    cta: "Discover AI",
  },
  {
    icon: Layers,
    title: "3D Printing",
    description:
      "Rapid prototyping and custom manufacturing. From digital models to physical reality, we bring your concepts to life layer by layer.",
    features: ["Rapid Prototyping", "Industrial Parts", "Artistic Modeling"],
    cta: "Start Printing",
  },
]

export function ServicesSection() {
  const heading = useScrollAnimation()
  const cards = useScrollAnimation(0.1)

  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={heading.ref}
          className={`text-center mb-16 animate-fade-up ${heading.isVisible ? "in-view" : ""}`}
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase tracking-wider text-foreground">
            Core Modules
          </h2>
          <div className={`h-1 bg-primary mx-auto animate-draw-line ${heading.isVisible ? "in-view" : ""}`} />
        </div>

        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <TiltCard
                key={service.title}
                className={`animate-fade-up stagger-${i + 1} ${cards.isVisible ? "in-view" : ""}`}
              >
                <div
                  className="group relative bg-background p-8 border border-border hover:border-primary/50 transition-all duration-500 gold-glow overflow-hidden h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated corner borders on hover */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-primary transition-all duration-500 group-hover:w-8 group-hover:h-8" />
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-primary transition-all duration-500 group-hover:w-8 group-hover:h-8" />

                  {/* 3D floating background icon */}
                  <div 
                    className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-all duration-500"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <Icon className="w-32 h-32 text-primary" />
                  </div>

                  <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div className="w-14 h-14 mb-6 flex items-center justify-center border border-primary bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="flex flex-col gap-2 mb-6">
                      {service.features.map((feature, fi) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground font-display uppercase tracking-wider transition-all duration-300 group-hover:translate-x-2"
                          style={{ transitionDelay: `${fi * 100}ms` }}
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="inline-flex items-center text-primary font-bold hover:text-gold-light uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform"
                    >
                      {service.cta} <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
