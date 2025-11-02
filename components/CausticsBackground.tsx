'use client'

import { useEffect, useRef } from 'react'

type Props = {
  className?: string
  opacity?: number // 0..1
}

export default function CausticsBackground({ className = '', opacity = 0.18 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let w = (canvas.width = canvas.offsetWidth * (typeof window !== 'undefined' ? window.devicePixelRatio : 1))
    let h = (canvas.height = canvas.offsetHeight * (typeof window !== 'undefined' ? window.devicePixelRatio : 1))
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1
    ctx.scale(dpr, dpr)

    const isLowPower =
      typeof window !== 'undefined' &&
      window.navigator.hardwareConcurrency !== undefined &&
      window.navigator.hardwareConcurrency <= 4

    const circles = Array.from({ length: isLowPower ? 10 : 20 }).map((_, i) => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: 80 + Math.random() * 160,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      a: 0.2 + Math.random() * 0.4,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      for (const c of circles) {
        const grd = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r)
        grd.addColorStop(0, `rgba(255,255,255,${c.a * opacity})`)
        grd.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2)
        ctx.fill()

        c.x += c.dx
        c.y += c.dy
        if (c.x < -c.r) c.x = canvas.offsetWidth + c.r
        if (c.x > canvas.offsetWidth + c.r) c.x = -c.r
        if (c.y < -c.r) c.y = canvas.offsetHeight + c.r
        if (c.y > canvas.offsetHeight + c.r) c.y = -c.r
      }
      raf.current = requestAnimationFrame(draw)
    }

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * dpr
      h = canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', onResize)

    draw()
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', onResize)
    }
  }, [opacity])

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* A soft tint so white caustics feel glassy */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/2 to-transparent pointer-events-none"
        aria-hidden
      />
    </div>
  )
}
