'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ColorPalette, {
  CoreIdentityColors,
  SaudiPaletteColors,
  GlassSignatureColors
} from '@/components/brand/ColorPalette'
import TypographyShowcase from '@/components/brand/TypographyShowcase'
import LogoShowcase from '@/components/brand/LogoShowcase'
import AnimationPreview from '@/components/brand/AnimationPreview'

/**
 * Brand Guidelines Page
 *
 * Interactive showcase of GLAZE//PRO brand architecture
 * Provides design system documentation for developers and designers
 */
export default function BrandGuidelinesPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Overview', icon: '🎯' },
    { id: 'logo', label: 'Logo', icon: '✨' },
    { id: 'colors', label: 'Colors', icon: '🎨' },
    { id: 'typography', label: 'Typography', icon: '✍️' },
    { id: 'animations', label: 'Animations', icon: '⚡' },
    { id: 'components', label: 'Components', icon: '🧩' }
  ]

  return (
    <div className="min-h-screen bg-ink">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-saudi-green rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6">
              GLAZE<span className="text-accent relative">
                //
                <span className="absolute inset-0 blur-sm opacity-50">//</span>
              </span>PRO
            </h1>
            <p className="text-3xl text-accent font-medium italic mb-8">
              Brand Architecture & Design System
            </p>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guidelines for maintaining brand consistency across all touchpoints.
              Combining Madarek-level engineering precision with Pure Glass aesthetic excellence.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-white/70">Core Colors</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-saudi-green mb-2">3</div>
              <div className="text-sm text-white/70">Font Families</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-desert-gold mb-2">12</div>
              <div className="text-sm text-white/70">Type Scales</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-accent mb-2">4</div>
              <div className="text-sm text-white/70">Motion Presets</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <div className="sticky top-0 z-40 glass-dark border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-2 overflow-x-auto py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id)
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-accent text-ink font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Overview */}
        <section id="overview" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-accent">//</span>
              Brand Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Brand Essence</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  GLAZE//PRO is Saudi Arabia's premier architectural glazing systems company —
                  combining Madarek-level engineering precision with Pure Glass aesthetic excellence.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="text-white/50">Tagline:</span>
                    <span className="text-accent ml-2 italic">Precision in Transparency</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-white/50">Arabic:</span>
                    <span className="text-accent ml-2" dir="rtl">دقة في الشفافية</span>
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Brand Pillars</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">//</span>
                    <span><strong className="text-white">Precision Engineering:</strong> Technical excellence backed by data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-saudi-green mt-1">//</span>
                    <span><strong className="text-white">Architectural Beauty:</strong> Glass as an art form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-desert-gold mt-1">//</span>
                    <span><strong className="text-white">Saudi Standards:</strong> Local compliance & expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">//</span>
                    <span><strong className="text-white">Sustainability:</strong> Low-E, LEED-compliant systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* UVP */}
            <div className="glass-blue p-10 rounded-2xl border-2 border-accent/30">
              <h3 className="text-2xl font-bold text-white mb-4">Unique Value Proposition</h3>
              <p className="text-xl text-white/90 leading-relaxed italic">
                "The only Saudi glazing company that combines Madarek-level engineering precision
                with Pure Glass aesthetic excellence — delivering Vision 2030-ready architectural
                glass systems from design to installation."
              </p>
            </div>
          </motion.div>
        </section>

        {/* Logo Section */}
        <section id="logo" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <LogoShowcase />
          </motion.div>
        </section>

        {/* Colors Section */}
        <section id="colors" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-accent">//</span>
              Color System
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Saudi-optimized color palette combining technical precision with cultural relevance.
            </p>

            <CoreIdentityColors />
            <SaudiPaletteColors />
            <GlassSignatureColors />
          </motion.div>
        </section>

        {/* Typography Section */}
        <section id="typography" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-accent">//</span>
              Typography System
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Bilingual type system optimized for both Latin (English) and Arabic scripts.
            </p>

            <TypographyShowcase />
          </motion.div>
        </section>

        {/* Animations Section */}
        <section id="animations" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-accent">//</span>
              Animation System
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Subtle, purposeful motion that enhances user experience without distraction.
            </p>

            <AnimationPreview />
          </motion.div>
        </section>

        {/* Components Section */}
        <section id="components" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-accent">//</span>
              Component Library
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Reusable UI components built with brand architecture principles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Button Examples */}
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Buttons</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/50 mb-2">Primary Button</p>
                    <button className="btn-primary">
                      Request Quote
                    </button>
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-2">Secondary Button</p>
                    <button className="btn-secondary">
                      View Specifications
                    </button>
                  </div>
                </div>
                <pre className="text-xs text-white/50 font-mono mt-6 p-4 bg-ink/50 rounded overflow-x-auto">
{`<button className="btn-primary">
  Request Quote
</button>

<button className="btn-secondary">
  View Specifications
</button>`}
                </pre>
              </div>

              {/* Card Examples */}
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Glass Cards</h3>
                <div className="space-y-4">
                  <div className="glass p-4 rounded-xl">
                    <p className="text-sm text-white/70">Standard Glass Card</p>
                  </div>
                  <div className="glass-light p-4 rounded-xl">
                    <p className="text-sm text-white/70">Light Glass Card</p>
                  </div>
                  <div className="glass-blue p-4 rounded-xl">
                    <p className="text-sm text-white/70">Blue Tint Glass Card</p>
                  </div>
                </div>
                <pre className="text-xs text-white/50 font-mono mt-6 p-4 bg-ink/50 rounded overflow-x-auto">
{`<div className="glass">
  Standard Glass Card
</div>

<div className="glass-light">
  Light Glass Card
</div>

<div className="glass-blue">
  Blue Tint Glass Card
</div>`}
                </pre>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Resources */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-accent">//</span>
              Resources & Downloads
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">📄</div>
                <h3 className="text-xl font-bold text-white mb-2">Brand Architecture</h3>
                <p className="text-sm text-white/70 mb-6">
                  Complete brand guidelines PDF
                </p>
                <button className="btn-secondary w-full">
                  Download PDF
                </button>
              </div>

              <div className="glass p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-2">Design Assets</h3>
                <p className="text-sm text-white/70 mb-6">
                  Logo files, color palettes, fonts
                </p>
                <button className="btn-secondary w-full">
                  Download Assets
                </button>
              </div>

              <div className="glass p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-white mb-2">Component Code</h3>
                <p className="text-sm text-white/70 mb-6">
                  React/Tailwind component library
                </p>
                <button className="btn-secondary w-full">
                  View on GitHub
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer CTA */}
      <section className="border-t border-white/10 bg-gradient-to-br from-ink via-paper to-ink">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Questions About Our Brand?
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Contact our marketing team for brand usage approvals and support.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:marketing@glazepro.sa" className="btn-primary">
              Email Marketing Team
            </a>
            <a href="/contact" className="btn-secondary">
              General Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
