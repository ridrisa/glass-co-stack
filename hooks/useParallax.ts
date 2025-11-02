'use client'

import { useEffect, useRef, useState } from 'react'

export function useParallax(max = 18) {
  const ref = useRef<HTMLElement | null>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    let rAf: number | null = null
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = ((e.clientX - cx) / rect.width) * max
      const dy = ((e.clientY - cy) / rect.height) * max
      if (rAf) cancelAnimationFrame(rAf)
      rAf = requestAnimationFrame(() => {
        setStyle({ transform: `translate3d(${dx}px, ${dy}px, 0)` })
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rAf) cancelAnimationFrame(rAf)
    }
  }, [max])

  return { ref, style }
}
