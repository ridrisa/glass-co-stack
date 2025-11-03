'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type Metric = {
  label: string
  value: string
}

type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

type CaseStudy = {
  title: string
  sector: string
  location: string
  year: number
  value?: string
  duration?: string
  client?: string
  heroImage: string
  problem: string
  solution: string
  outcome: string
  metrics?: Metric[]
  gallery?: GalleryImage[]
  hseStats?: {
    trir?: number
    ltif?: number
    hours?: number
  }
  subcontractors?: number
}

type Props = {
  caseStudy: CaseStudy
}

export default function CaseStudy({ caseStudy }: Props) {
  return (
    <article className="max-w-7xl mx-auto px-6 py-16">
      {/* Masthead */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-8">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="text-sm text-slate-700 mb-2">{caseStudy.sector}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-slate-800">
              <div>{caseStudy.location}</div>
              {caseStudy.year && <div>Completed {caseStudy.year}</div>}
              {caseStudy.client && <div>Client: {caseStudy.client}</div>}
              {caseStudy.value && (
                <div className="text-accent font-semibold">{caseStudy.value}</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Strip */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {caseStudy.metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Problem */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">The Challenge</h2>
        <div className="glass rounded-xl p-8">
          <p className="text-slate-800 text-lg leading-relaxed">{caseStudy.problem}</p>
        </div>
      </motion.section>

      {/* Solution */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">Our Solution</h2>
        <div className="glass rounded-xl p-8">
          <p className="text-slate-800 text-lg leading-relaxed">{caseStudy.solution}</p>
        </div>
      </motion.section>

      {/* Outcome */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">Results</h2>
        <div className="glass rounded-xl p-8 bg-accent/10 border-accent/20">
          <p className="text-slate-800 text-lg leading-relaxed">{caseStudy.outcome}</p>
        </div>
      </motion.section>

      {/* HSE Stats */}
      {caseStudy.hseStats && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Safety & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudy.hseStats.trir !== undefined && (
              <div className="glass rounded-xl p-6">
                <div className="text-2xl font-bold text-accent mb-1">
                  {caseStudy.hseStats.trir}
                </div>
                <div className="text-sm text-slate-600">TRIR</div>
              </div>
            )}
            {caseStudy.hseStats.ltif !== undefined && (
              <div className="glass rounded-xl p-6">
                <div className="text-2xl font-bold text-accent mb-1">
                  {caseStudy.hseStats.ltif}
                </div>
                <div className="text-sm text-slate-600">LTIF</div>
              </div>
            )}
            {caseStudy.hseStats.hours && (
              <div className="glass rounded-xl p-6">
                <div className="text-2xl font-bold text-accent mb-1">
                  {caseStudy.hseStats.hours.toLocaleString()}h
                </div>
                <div className="text-sm text-slate-600">Total Hours</div>
              </div>
            )}
          </div>
        </motion.section>
      )}

      {/* Gallery */}
      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.gallery.map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/90 to-transparent text-white text-sm">
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </article>
  )
}

