"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TiltCard } from "@/components/tilt-card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    category: "AI Projects",
    title: "Sentient Core V2",
    description:
      "An advanced natural language processing engine designed for real-time sentiment analysis in financial markets.",
    tags: ["Python", "TensorFlow"],
    image: "/images/portfolio-1.jpg",
    tall: true,
  },
  {
    category: "3D Printing",
    title: "Bionic Limb Proto",
    description:
      "Custom-fitted prosthetic components printed with aerospace-grade carbon fiber filament.",
    tags: ["Fusion 360", "SLA"],
    image: "/images/portfolio-2.jpg",
    tall: false,
  },
  {
    category: "Web Development",
    title: "Apex Analytics",
    description:
      "A comprehensive SaaS dashboard for enterprise resource planning with real-time data visualization.",
    tags: ["React", "Tailwind"],
    image: "/images/portfolio-3.jpg",
    tall: false,
  },
  {
    category: "Bug Fixing & Security",
    title: "Fortress Audit",
    description:
      "Identified and patched critical vulnerabilities in a major fintech payment gateway infrastructure.",
    tags: ["Cybersec", "Audit"],
    image: "/images/portfolio-4.jpg",
    tall: true,
  },
  {
    category: "AI & Robotics",
    title: "Auto-Assembler X",
    description:
      "Computer vision integration for industrial robotic arms to automate precision assembly tasks.",
    tags: ["OpenCV", "ROS"],
    image: "/images/portfolio-5.jpg",
    tall: false,
  },
  {
    category: "3D Printing",
    title: "Urban Future Model",
    description:
      "Scale architectural city models printed with recycled polymer composites for sustainable urban planning.",
    tags: ["Architecture", "FDM"],
    image: "/images/portfolio-6.jpg",
    tall: false,
  },
]

export function PortfolioSection() {
  const heading = useScrollAnimation()
  const grid = useScrollAnimation(0.05)

  return (
    <section id="portfolio" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 animate-morph blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 animate-morph blur-3xl" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={heading.ref}
          className={`text-center max-w-3xl mx-auto mb-16 animate-fade-up ${heading.isVisible ? "in-view" : ""}`}
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3 block">
            Our Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 uppercase tracking-tight">
            Architects of{" "}
            <span className="gold-gradient-text neon-text">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From complex neural networks to precision 3D fabrication, we build
            the digital and physical infrastructure of tomorrow.
          </p>
        </div>

        {/* Masonry grid with 3D cards */}
        <div ref={grid.ref} className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {projects.map((project, i) => (
            <TiltCard
              key={project.title}
              className={`break-inside-avoid mb-6 animate-scale-in stagger-${i + 1} ${grid.isVisible ? "in-view" : ""}`}
            >
              <div
                className="relative group overflow-hidden cursor-pointer hover-lift"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image with 3D effect */}
                <div style={{ transform: "translateZ(0)" }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={project.tall ? 500 : 350}
                    className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <span className="text-primary font-display tracking-[0.2em] text-sm uppercase mb-1 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-foreground uppercase translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300" />
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-150">
                    {project.description}
                  </p>
                  <div className="mt-4 flex gap-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-200">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-xs text-foreground font-display uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/60 transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_30px_rgba(var(--gold-rgb),0.3)]" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
