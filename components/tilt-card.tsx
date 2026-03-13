"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glareEnabled?: boolean
}

export function TiltCard({ children, className = "", glareEnabled = true }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  
  const requestRef = useRef<number | null>(null)
  const isHovered = useRef(false)
  
  // Track target and current values for spring physics manually
  const target = useRef({ x: 0, y: 0, scale: 1, glareOpacity: 0, glareX: 50, glareY: 50 })
  const current = useRef({ x: 0, y: 0, scale: 1, glareOpacity: 0, glareX: 50, glareY: 50 })

  const update = () => {
    // Lerp factor (higher = faster snap)
    const lerp = 0.15

    current.current.x += (target.current.x - current.current.x) * lerp
    current.current.y += (target.current.y - current.current.y) * lerp
    current.current.scale += (target.current.scale - current.current.scale) * lerp
    current.current.glareOpacity += (target.current.glareOpacity - current.current.glareOpacity) * lerp
    current.current.glareX += (target.current.glareX - current.current.glareX) * lerp
    current.current.glareY += (target.current.glareY - current.current.glareY) * lerp

    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(${current.current.x}deg) rotateY(${current.current.y}deg) scale3d(${current.current.scale}, ${current.current.scale}, ${current.current.scale})`
    }

    if (glareEnabled && glareRef.current) {
      glareRef.current.style.opacity = current.current.glareOpacity.toString()
      glareRef.current.style.background = `radial-gradient(circle at ${current.current.glareX}% ${current.current.glareY}%, rgba(var(--gold-rgb), 0.15) 0%, transparent 60%)`
    }

    // Stop the loop if we're not hovered and have returned to origin
    const diff = Math.abs(current.current.x) + Math.abs(current.current.y) + Math.abs(current.current.scale - 1)
    if (!isHovered.current && diff < 0.01) {
      if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      requestRef.current = null
      return
    }

    requestRef.current = requestAnimationFrame(update)
  }

  const startAnimation = () => {
    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(update)
    }
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    isHovered.current = true

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Target rotation
    target.current.x = ((y - centerY) / centerY) * -15
    target.current.y = ((x - centerX) / centerX) * 15
    target.current.scale = 1.02

    if (glareEnabled) {
      target.current.glareX = (x / rect.width) * 100
      target.current.glareY = (y / rect.height) * 100
      target.current.glareOpacity = 1
    }

    startAnimation()
  }

  const handleMouseEnter = () => {
    isHovered.current = true
    if (cardRef.current) {
      cardRef.current.style.transition = 'none'
    }
    startAnimation()
  }

  const handleMouseLeave = () => {
    isHovered.current = false
    
    // Return to original position
    target.current.x = 0
    target.current.y = 0
    target.current.scale = 1
    target.current.glareOpacity = 0
    
    startAnimation()
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {glareEnabled && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{ opacity: 0 }}
        />
      )}
    </div>
  )
}
