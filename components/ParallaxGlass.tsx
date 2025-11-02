'use client'

import { useParallax } from '@/hooks/useParallax'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function ParallaxGlass({ src, alt, width = 800, height = 600, className = '' }: Props) {
  const { ref, style } = useParallax(10)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`relative inline-block ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl shadow-card"
        style={style}
      />
    </div>
  )
}
