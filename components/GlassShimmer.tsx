'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { use3DTilt } from '@/hooks/use3DTilt'

type Props = {
  children: React.ReactNode
  className?: string
  intensity?: number // 0.0 - 1.0, default 0.35
  enable3DTilt?: boolean
  maxTilt?: number
}

export default function GlassShimmer({ 
  children, 
  className = '', 
  intensity = 0.35,
  enable3DTilt = true,
  maxTilt = 12,
}: Props) {
  const { ref, rotateX, rotateY, scale, handleMouseMove, handleMouseEnter, handleMouseLeave } = use3DTilt({
    maxTilt,
    scaleOnHover: 1.03,
    springConfig: { stiffness: 300, damping: 25 },
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Respect reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    el.style.setProperty('--shine-opacity', String(Math.min(Math.max(intensity, 0), 1)))
  }, [intensity])

  const baseClassName = `relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl ${className}`

  if (!enable3DTilt) {
    return (
      <div
        ref={ref}
        className={baseClassName}
        style={{
          WebkitMaskImage:
            'radial-gradient(120% 120% at 50% 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-1 glass-shimmer-anim"
          style={{
            background:
              'linear-gradient(115deg, transparent 30%, rgba(255,255,255,var(--shine-opacity,0.35)) 50%, transparent 70%)',
            transform: 'translateX(-60%) rotate(0.001deg)',
            animation: 'glass-shine 5.5s ease-in-out infinite',
          }}
        />
        {children}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes glass-shine {
            0% {
              transform: translateX(-60%);
            }
            50% {
              transform: translateX(60%);
            }
            100% {
              transform: translateX(160%);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .glass-shimmer-anim {
              animation: none !important;
            }
          }
        `}} />
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        WebkitMaskImage:
          'radial-gradient(120% 120% at 50% 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
      }}
      className={baseClassName}
    >
      {/* moving specular streak */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-1 glass-shimmer-anim"
        style={{
          background:
            'linear-gradient(115deg, transparent 30%, rgba(255,255,255,var(--shine-opacity,0.35)) 50%, transparent 70%)',
          transform: 'translateX(-60%) rotate(0.001deg)',
          animation: 'glass-shine 5.5s ease-in-out infinite',
        }}
      />
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes glass-shine {
          0% {
            transform: translateX(-60%);
          }
          50% {
            transform: translateX(60%);
          }
          100% {
            transform: translateX(160%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .glass-shimmer-anim {
            animation: none !important;
          }
        }
      `}} />
    </motion.div>
  )
}
