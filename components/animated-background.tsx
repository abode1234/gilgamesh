"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

interface Shape {
  id: number
  type: "cube" | "pyramid" | "ring" | "diamond"
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [shapes, setShapes] = useState<Shape[]>([])
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    // Generate particles
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * -20,
    }))
    setParticles(newParticles)

    // Generate 3D shapes
    const shapeTypes: Shape["type"][] = ["cube", "pyramid", "ring", "diamond"]
    const newShapes: Shape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      type: shapeTypes[i % 4],
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 40 + 30,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * -10,
    }))
    setShapes(newShapes)

    // Track mouse for parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const parallaxX = (mousePos.x - 0.5) * 30
  const parallaxY = (mousePos.y - 0.5) * 30

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--gold-rgb), 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--gold-rgb), 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/60"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-particle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px rgba(var(--gold-rgb), 0.5)`,
            transform: `translate(${parallaxX * (p.size / 5)}px, ${parallaxY * (p.size / 5)}px)`,
          }}
        />
      ))}

      {/* 3D Shapes */}
      <div 
        className="absolute inset-0 preserve-3d"
        style={{
          perspective: "1000px",
          transform: `rotateX(${parallaxY * 0.1}deg) rotateY(${parallaxX * 0.1}deg)`,
        }}
      >
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute preserve-3d"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              animation: `float-rotate-${shape.type} ${shape.duration}s ease-in-out infinite`,
              animationDelay: `${shape.delay}s`,
            }}
          >
            {shape.type === "cube" && <Cube size={shape.size} />}
            {shape.type === "pyramid" && <Pyramid size={shape.size} />}
            {shape.type === "ring" && <Ring size={shape.size} />}
            {shape.type === "diamond" && <Diamond size={shape.size} />}
          </div>
        ))}
      </div>

      {/* Radial glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at ${50 + parallaxX}% ${40 + parallaxY}%, rgba(var(--gold-rgb), 0.08) 0%, transparent 60%)`,
        }}
      />

      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }} />
    </div>
  )
}

function Cube({ size }: { size: number }) {
  const half = size / 2
  const faces = [
    { transform: `translateZ(${half}px)`, bg: "rgba(var(--gold-rgb), 0.1)" },
    { transform: `translateZ(-${half}px) rotateY(180deg)`, bg: "rgba(var(--gold-rgb), 0.05)" },
    { transform: `translateX(${half}px) rotateY(90deg)`, bg: "rgba(var(--gold-rgb), 0.08)" },
    { transform: `translateX(-${half}px) rotateY(-90deg)`, bg: "rgba(var(--gold-rgb), 0.08)" },
    { transform: `translateY(-${half}px) rotateX(90deg)`, bg: "rgba(var(--gold-rgb), 0.12)" },
    { transform: `translateY(${half}px) rotateX(-90deg)`, bg: "rgba(var(--gold-rgb), 0.04)" },
  ]

  return (
    <div className="relative w-full h-full preserve-3d">
      {faces.map((face, i) => (
        <div
          key={i}
          className="absolute inset-0 border border-primary/20 backdrop-blur-sm"
          style={{ transform: face.transform, background: face.bg }}
        />
      ))}
    </div>
  )
}

function Pyramid({ size }: { size: number }) {
  return (
    <div className="relative w-full h-full preserve-3d">
      <div
        className="absolute w-0 h-0 border-solid"
        style={{
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          borderWidth: `0 ${size / 2}px ${size}px ${size / 2}px`,
          borderColor: `transparent transparent rgba(var(--gold-rgb), 0.15) transparent`,
        }}
      />
      <div
        className="absolute w-0 h-0 border-solid"
        style={{
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%) rotateY(90deg)",
          borderWidth: `0 ${size / 2}px ${size}px ${size / 2}px`,
          borderColor: `transparent transparent rgba(var(--gold-rgb), 0.1) transparent`,
        }}
      />
    </div>
  )
}

function Ring({ size }: { size: number }) {
  return (
    <div
      className="w-full h-full rounded-full border-2 border-primary/20"
      style={{
        boxShadow: `0 0 ${size / 4}px rgba(var(--gold-rgb), 0.3), inset 0 0 ${size / 4}px rgba(var(--gold-rgb), 0.1)`,
      }}
    />
  )
}

function Diamond({ size }: { size: number }) {
  return (
    <div
      className="w-full h-full rotate-45 border border-primary/20"
      style={{
        background: "linear-gradient(135deg, rgba(var(--gold-rgb), 0.1) 0%, transparent 50%, rgba(var(--gold-rgb), 0.05) 100%)",
        boxShadow: `0 0 ${size / 3}px rgba(var(--gold-rgb), 0.2)`,
      }}
    />
  )
}
