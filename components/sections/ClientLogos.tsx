'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import { useLanguage } from '@/lib/language'

const clients = [
  { name: 'NEOM', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/NEOM_logo.svg/1200px-NEOM_logo.svg.png' },
  { name: 'Qiddiya', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KHULNxH_8xQJ5XrF7qE6xQF6vX7Vz5xQrA&s' },
  { name: 'Diriyah Gate', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQKJLJ4nQW5xH_8xQJ5XrF7qE6xQF6vX7Vz5xQrA&s' },
  { name: 'Red Sea Project', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQKJLJ4nQW5xH_8xQJ5XrF7qE6xQF6vX7Vz5xQrA&s' },
  { name: 'ROSHN', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQKJLJ4nQW5xH_8xQJ5XrF7qE6xQF6vX7Vz5xQrA&s' },
  { name: 'Aramco', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Saudi_Aramco.svg/1200px-Saudi_Aramco.svg.png' },
]

export default function ClientLogos() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-paper/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('clients.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative h-12 w-full grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white/50 group-hover:text-white text-sm font-semibold text-center block">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision 2030 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-3 text-saudi-green"
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-saudi-green/10 border border-saudi-green/30">
            <span className="text-2xl font-bold">//</span>
            <span className="text-sm font-semibold">{t('clients.vision2030')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
