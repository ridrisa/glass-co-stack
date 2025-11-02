'use client'

import { useRef, useState, useEffect, MouseEvent } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion'

interface Use3DTiltOptions {
  maxTilt?: number
  perspective?: number
  scaleOnHover?: number
  springConfig?: {
    stiffness?: number
    damping?: number
  }
}

interface Use3DTiltReturn {
  ref: React.RefObject<HTMLDivElement>
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  scale: MotionValue<number>
  isHovering: boolean
  handleMouseMove: (e: MouseEvent<HTMLDivElement>) => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

export function use3DTilt({
  maxTilt = 15,
  perspective = 1000,
  scaleOnHover = 1.02,
  springConfig = { stiffness: 300, damping: 20 },
}: Use3DTiltOptions = {}): Use3DTiltReturn {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const scale = useMotionValue(1)

  const smoothRotateX = useSpring(rotateX, springConfig)
  const smoothRotateY = useSpring(rotateY, springConfig)
  const smoothScale = useSpring(scale, springConfig)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion || !isHovering) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -maxTilt
    const rotateYValue = ((x - centerX) / centerX) * maxTilt

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (!prefersReducedMotion) {
      scale.set(scaleOnHover)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
  }

  return {
    ref,
    rotateX: smoothRotateX,
    rotateY: smoothRotateY,
    scale: smoothScale,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  }
}

