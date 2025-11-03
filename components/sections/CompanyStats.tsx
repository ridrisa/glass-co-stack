'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import GlassShimmer from '../GlassShimmer'
import { useLanguage } from '@/lib/language'

export default function CompanyStats() {
  const { t } = useLanguage()

  const stats = [
    {
      value: '480+',
      label: t('stats.projects'),
      subtext: t('stats.projectsSub'),
      icon: '🏗️',
    },
    {
      value: '2.5M+',
      label: t('stats.area'),
      subtext: t('stats.areaSub'),
      icon: '📐',
    },
    {
      value: '14-28',
      label: t('stats.leadTime'),
      subtext: t('stats.leadTimeSub'),
      icon: '⚡',
    },
    {
      value: '99.2%',
      label: t('stats.quality'),
      subtext: t('stats.qualitySub'),
      icon: '⭐',
    },
    {
      value: '24/7',
      label: t('stats.support'),
      subtext: t('stats.supportSub'),
      icon: '🛠️',
    },
    {
      value: 'ISO 9001',
      label: t('stats.certified'),
      subtext: t('stats.certifiedSub'),
      icon: '🏆',
    },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassShimmer className="p-8 h-full hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/60">
                    {stat.subtext}
                  </div>
                </div>
              </GlassShimmer>
            </motion.div>
          ))}
        </div>

        {/* Additional credibility markers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-saudi-green rounded-full"></span>
              <span>Vision 2030 Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>ASTM Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-saudi-green rounded-full"></span>
              <span>EN Standards Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>LEED Registered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
