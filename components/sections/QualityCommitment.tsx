'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import GlassShimmer from '../GlassShimmer'
import { useLanguage } from '@/lib/language'

export default function QualityCommitment() {
  const { t } = useLanguage()

  const standards = [
    {
      title: t('quality.astm'),
      description: t('quality.astmDesc'),
      icon: '📋',
    },
    {
      title: t('quality.en'),
      description: t('quality.enDesc'),
      icon: '🇪🇺',
    },
    {
      title: t('quality.sbc'),
      description: t('quality.sbcDesc'),
      icon: '🏛️',
    },
    {
      title: t('quality.leed'),
      description: t('quality.leedDesc'),
      icon: '🌱',
    },
  ]

  const commitments = [
    {
      title: t('quality.qa'),
      points: [
        'Factory edge deletion inspection',
        'Pre-installation quality checks',
        'Post-installation verification',
        'Comprehensive project documentation',
      ],
    },
    {
      title: t('quality.tech'),
      points: [
        'In-house engineering capabilities',
        'Advanced fabrication techniques',
        'Precision installation methods',
        'Continuous technical training',
      ],
    },
    {
      title: t('quality.safety'),
      points: [
        'Site safety protocols',
        'Certified installation teams',
        'Safety glass specifications',
        'Regular safety audits',
      ],
    },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-paper/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('quality.title')}
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {t('quality.subtitle')}
          </p>
        </motion.div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {standards.map((standard, idx) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassShimmer className="p-6 h-full text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {standard.title}
                </h3>
                <p className="text-sm text-white/60">
                  {standard.description}
                </p>
              </GlassShimmer>
            </motion.div>
          ))}
        </div>

        {/* Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((commitment, idx) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  {commitment.title}
                </h3>
                <ul className="space-y-2">
                  {commitment.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-white/70">
                      <span className="text-accent mt-1">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about standards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-white/50 max-w-3xl mx-auto">
            * {t('quality.disclaimer')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
