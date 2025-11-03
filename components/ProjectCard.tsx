'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  id: string
  title: string
  sector: string
  value?: string
  location: string
  image: string
  slug: string
  year?: number
}

type Props = {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block rounded-xl overflow-hidden bg-paper border border-border shadow-card hover:shadow-[0_15px_40px_rgba(0,0,0,.35)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          {project.year && (
            <div className="absolute top-4 right-4 bg-accent/90 text-ink px-3 py-1 rounded-lg text-sm font-semibold">
              {project.year}
            </div>
          )}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-sm text-slate-700">{project.sector}</div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {project.location}
            </div>
            {project.value && (
              <div className="text-accent font-medium">{project.value}</div>
            )}
          </div>
          <div className="mt-4 text-accent font-medium text-sm group-hover:underline">
            View Case Study →
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

