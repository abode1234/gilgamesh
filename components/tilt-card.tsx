"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glareEnabled?: boolean
}

export function TiltCard({ children, className = "", glareEnabled = true }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({})

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -15
    const rotateY = ((x - centerX) / centerX) * 15

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)

    if (glareEnabled) {
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      setGlareStyle({
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(var(--gold-rgb), 0.15) 0%, transparent 60%)`,
        opacity: 1,
      })
    }
  }

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
    setGlareStyle({ opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {children}
      {glareEnabled && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-inherit"
          style={glareStyle}
        />
      )}
    </div>
  )
}
