'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type Badge = {
  name: string
  description?: string
  image?: string
  icon?: React.ReactNode
}

type Props = {
  badges: Badge[]
  title?: string
  className?: string
}

export default function QualityBadges({ badges, title, className = '' }: Props) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            {title}
          </motion.h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              {badge.image && (
                <div className="relative h-16 w-16 mx-auto mb-4">
                  <Image
                    src={badge.image}
                    alt={badge.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {badge.icon && <div className="mb-4">{badge.icon}</div>}
              <h3 className="text-white font-semibold mb-1">{badge.name}</h3>
              {badge.description && (
                <p className="text-white/70 text-sm">{badge.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

