'use client'

import { useId } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { use3DTilt } from '@/hooks/use3DTilt'

type Props = {
  image: string
  title: string
  subtitle?: string
  className?: string
  width?: number
  height?: number
  enable3DTilt?: boolean
  maxTilt?: number
}

export default function RefractionCard({
  image,
  title,
  subtitle,
  className = '',
  width = 800,
  height = 600,
  enable3DTilt = true,
  maxTilt = 15,
}: Props) {
  const id = useId() // unique ids per instance
  const filtId = `refract-${id.replace(/:/g, '-')}`
  const { rotateX, rotateY, scale, handleMouseMove, handleMouseEnter, handleMouseLeave } = use3DTilt({
    maxTilt,
    scaleOnHover: 1.05,
    springConfig: { stiffness: 300, damping: 25 },
  })

  return (
    <motion.figure
      onMouseMove={enable3DTilt ? handleMouseMove : undefined}
      onMouseEnter={enable3DTilt ? handleMouseEnter : undefined}
      onMouseLeave={enable3DTilt ? handleMouseLeave : undefined}
      style={{
        rotateX: enable3DTilt ? rotateX : 0,
        rotateY: enable3DTilt ? rotateY : 0,
        scale: enable3DTilt ? scale : 1,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm ${className}`}
    >
      <svg width="0" height="0" className="absolute">
        <filter id={filtId}>
          {/* Gentle turbulence to distort normal map */}
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="7" />
          <feColorMatrix type="saturate" values="0" />
          {/* Displacement simulates refraction */}
          <feDisplacementMap
            in="SourceGraphic"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="relative h-60 w-full" style={{ transform: 'translateZ(30px)' }}>
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          className="w-full h-full object-cover will-change-transform"
          style={{
            filter: `url(#${filtId}) saturate(0.9) brightness(1.05)`,
          }}
        />
      </div>
      <figcaption 
        className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/50 to-transparent"
        style={{ transform: 'translateZ(40px)' }}
      >
        <div className="text-white font-semibold text-lg">{title}</div>
        {subtitle && <div className="text-white/80 text-sm mt-1">{subtitle}</div>}
      </figcaption>
      
      {/* 3D Glare Effect */}
      {enable3DTilt && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96,165,250,0.15), transparent 70%)',
            transform: 'translateZ(50px)',
          }}
        />
      )}
    </motion.figure>
  )
}
