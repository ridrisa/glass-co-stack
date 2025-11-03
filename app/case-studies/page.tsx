'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/sections/CaseStudyCard'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import { useLanguage } from '@/lib/language'

const caseStudies = [
  {
    title: 'Luxury Residential Tower - Riyadh',
    location: 'Riyadh, Saudi Arabia',
    year: 2024,
    area: '12,500 m²',
    system: 'Low-E IGU Curtain Wall',
    challenge: 'Achieve LEED Gold certification while maintaining aesthetic appeal in extreme desert climate with temperatures exceeding 45°C.',
    solution: 'Implemented triple-silver Low-E coating with 16mm argon-filled cavity, achieving U-value of 1.2 W/m²K and SHGC of 0.28, reducing cooling loads by 35%.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    slug: 'luxury-residential-riyadh',
  },
  {
    title: 'Corporate Headquarters - Jeddah',
    location: 'Jeddah, Saudi Arabia',
    year: 2023,
    area: '8,200 m²',
    system: 'Point-Fixed Spider System',
    challenge: 'Create a modern, transparent façade with minimal structural elements while meeting high wind load requirements in coastal location.',
    solution: 'Engineered custom spider fittings with 19mm laminated tempered glass panels. Achieved seamless glass-to-glass joints with maximum transparency.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    slug: 'corporate-hq-jeddah',
  },
  {
    title: 'Mixed-Use Development - NEOM',
    location: 'NEOM, Saudi Arabia',
    year: 2024,
    area: '25,000 m²',
    system: 'Unitized Curtain Wall + Frameless Partitions',
    challenge: 'Fast-track installation schedule with zero tolerance for delays. Required integration of smart glass technology.',
    solution: 'Prefabricated unitized panels off-site with integrated electrochromic smart glass. Achieved 14-day installation vs. 45-day traditional method.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
    slug: 'mixed-use-neom',
  },
  {
    title: 'Shopping Mall Atrium - Dammam',
    location: 'Dammam, Saudi Arabia',
    year: 2023,
    area: '5,800 m²',
    system: 'Structural Glass Skylight',
    challenge: 'Maximize natural daylighting while controlling solar heat gain and UV penetration for retail comfort.',
    solution: 'Custom-engineered laminated Low-E glass with 72% visible light transmission and 65% solar heat rejection. Reduced artificial lighting by 60%.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
    slug: 'mall-atrium-dammam',
  },
  {
    title: 'Hospital Façade - Riyadh Medical City',
    location: 'Riyadh, Saudi Arabia',
    year: 2023,
    area: '15,600 m²',
    system: 'High-Performance IGU + Acoustic Glass',
    challenge: 'Meet stringent acoustic requirements (STC 45) for patient comfort while providing natural light and views.',
    solution: 'Asymmetric IGU configuration (10mm + 16mm cavity + 6.76mm laminated) with acoustic PVB interlayer. Achieved STC 48 rating.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
    slug: 'hospital-riyadh',
  },
  {
    title: 'Hotel Glass Balustrades - Red Sea Project',
    location: 'Red Sea, Saudi Arabia',
    year: 2024,
    area: '3,400 m²',
    system: 'Frameless Glass Balustrades',
    challenge: 'Combine safety requirements with unobstructed ocean views. High salt-air corrosion resistance needed.',
    solution: 'Marine-grade stainless steel spigots with 17.52mm laminated glass. Custom anti-corrosion coating lasting 25+ years in coastal environment.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop',
    slug: 'hotel-balustrades-red-sea',
  },
]

export default function CaseStudiesPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('caseStudies.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('caseStudies.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <CaseStudyCard
                key={study.slug}
                {...study}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('caseStudies.cta')}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {t('caseStudies.ctaDesc')}
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-xl bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/30"
            >
              {t('caseStudies.ctaButton')}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
