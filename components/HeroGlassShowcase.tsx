'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CausticsBackground from './CausticsBackground'

type KPI = {
  label: string
  value: string
  suffix?: string
}

type Props = {
  title: string
  subtitle: string
  ctaText: string
  ctaHref?: string
  onCta?: () => void
  kpis: KPI[]
  bgImage?: string
}

export default function HeroGlassShowcase({
  title,
  subtitle,
  ctaText,
  ctaHref,
  onCta,
  kpis,
  bgImage,
}: Props) {
  const handleCta = () => {
    if (onCta) {
      onCta()
    } else if (ctaHref) {
      window.location.href = ctaHref
    }
  }

  return (
    <header className="relative min-h-[82vh] text-white overflow-hidden">
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-ink/80" />
          <CausticsBackground className="absolute inset-0" opacity={0.16} />
        </>
      )}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-primary to-ink" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex flex-col justify-center min-h-[82vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display-sm md:text-display-md font-bold mb-6 text-white"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-slate-200 text-body-lg md:text-body-xl mb-8"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {ctaHref ? (
            <Link
              href={ctaHref}
              className="inline-block mt-8 rounded-xl bg-accent px-6 py-3 font-medium text-white shadow-card hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
              aria-label={ctaText}
            >
              {ctaText}
            </Link>
          ) : (
            <button
              onClick={handleCta}
              className="mt-8 rounded-xl bg-accent px-6 py-3 font-medium text-white shadow-card hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
              aria-label={ctaText}
            >
              {ctaText}
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {kpis.map((kpi, idx) => (
            <div
              key={kpi.label}
              className="glass-3 rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-glass-md"
            >
              <div className="text-h2 font-bold text-accent">
                {kpi.value}
                {kpi.suffix && <span className="text-h3 text-accent/90">{kpi.suffix}</span>}
              </div>
              <div className="text-body-sm text-slate-300 mt-2">{kpi.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  )
}
