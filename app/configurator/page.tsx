'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlassConfigurator from '@/components/interactive/GlassConfigurator'
import SpecsCalculator from '@/components/interactive/SpecsCalculator'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import { useState } from 'react'
import { useLanguage } from '@/lib/language'

export default function ConfiguratorPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'configurator' | 'calculator'>('configurator')

  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-paper to-ink">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('configurator.title')}
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              {t('configurator.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto flex gap-4 justify-center">
          <button
            onClick={() => setActiveTab('configurator')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
              activeTab === 'configurator'
                ? 'bg-accent text-white shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {t('configurator.glassTab')}
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
              activeTab === 'calculator'
                ? 'bg-accent text-white shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {t('configurator.calcTab')}
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        {activeTab === 'configurator' && <GlassConfigurator />}
        {activeTab === 'calculator' && <SpecsCalculator />}
      </section>

      {/* Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
              <p className="text-sm text-slate-500">
                Get immediate feedback on your glass configuration with real-time calculations
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Technical Data</h3>
              <p className="text-sm text-slate-500">
                Access indicative U-values, SHGC, light transmission, and weight calculations
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Project Planning</h3>
              <p className="text-sm text-slate-500">
                Perfect for early-stage planning and budget estimation for your project
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-saudi-green/10 border border-saudi-green/30">
            <h4 className="font-semibold text-white mb-2">Need Precise Specifications?</h4>
            <p className="text-sm text-slate-400 mb-4">
              These tools provide indicative values for planning purposes. For project-specific
              engineering calculations, detailed specifications, and certified test reports,
              contact our technical team.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Request Engineering Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
