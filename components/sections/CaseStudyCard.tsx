'use client'

import { motion } from 'framer-motion'
import GlassShimmer from '../GlassShimmer'
import Link from 'next/link'

interface CaseStudyCardProps {
  title: string
  location: string
  year: number
  area: string
  system: string
  challenge: string
  solution: string
  image: string
  slug: string
  delay?: number
}

export default function CaseStudyCard({
  title,
  location,
  year,
  area,
  system,
  challenge,
  solution,
  image,
  slug,
  delay = 0,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Link href={`/case-studies/${slug}`}>
        <GlassShimmer className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
          {/* Image */}
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-ink text-sm font-semibold">
              {year}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-200">
              <div>
                <div className="text-xs text-slate-400 mb-1">Area</div>
                <div className="text-white font-semibold">{area}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">System</div>
                <div className="text-white font-semibold">{system}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs text-accent font-semibold mb-1">Challenge</div>
                <p className="text-sm text-slate-600 line-clamp-2">{challenge}</p>
              </div>
              <div>
                <div className="text-xs text-accent font-semibold mb-1">Solution</div>
                <p className="text-sm text-slate-600 line-clamp-2">{solution}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200">
              <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Full Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </GlassShimmer>
      </Link>
    </motion.div>
  )
}
