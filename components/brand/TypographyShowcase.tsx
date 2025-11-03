'use client'

import { motion } from 'framer-motion'

/**
 * TypographyShowcase Component
 *
 * Interactive typography system demonstration for brand guidelines
 */
export default function TypographyShowcase() {
  return (
    <div className="space-y-12">
      {/* Font Families */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Font Families
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Inter */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="text-6xl font-display font-bold mb-4">Aa</div>
            <h4 className="text-xl font-bold text-accent mb-2">Inter</h4>
            <p className="text-sm text-slate-600 mb-3">
              Display & Body (Latin)
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-normal">Regular 400</p>
              <p className="font-medium">Medium 500</p>
              <p className="font-semibold">Semibold 600</p>
              <p className="font-bold">Bold 700</p>
            </div>
          </motion.div>

          {/* Tajawal */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="text-6xl font-display font-bold mb-4" dir="rtl">أب</div>
            <h4 className="text-xl font-bold text-saudi-green mb-2">Tajawal</h4>
            <p className="text-sm text-slate-600 mb-3">
              Display & Body (Arabic)
            </p>
            <div className="space-y-2 text-sm" dir="rtl">
              <p className="font-normal">عادي 400</p>
              <p className="font-medium">متوسط 500</p>
              <p className="font-bold">عريض 700</p>
            </div>
          </motion.div>

          {/* IBM Plex Mono */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="text-6xl font-mono font-bold mb-4">1.6</div>
            <h4 className="text-xl font-bold text-desert-gold mb-2">IBM Plex Mono</h4>
            <p className="text-sm text-slate-600 mb-3">
              Technical Specifications
            </p>
            <div className="space-y-2 text-sm font-mono">
              <p className="font-normal">Regular 400</p>
              <p className="font-medium">Medium 500</p>
              <p className="font-semibold">Semibold 600</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Type Scale */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Type Scale
        </h3>
        <div className="glass p-8 rounded-2xl space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-7xl (72px)</p>
            <h1 className="text-7xl font-bold text-white">
              Transforming Façades
            </h1>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-6xl (60px)</p>
            <h1 className="text-6xl font-bold text-white">
              GLAZE<span className="text-accent">//</span>PRO
            </h1>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-5xl (48px)</p>
            <h2 className="text-5xl font-bold text-white">
              Precision Engineering
            </h2>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-4xl (36px)</p>
            <h2 className="text-4xl font-bold text-white">
              Architectural Glass Systems
            </h2>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-3xl (30px)</p>
            <h3 className="text-3xl font-semibold text-white">
              Low-E IGU Performance
            </h3>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-2xl (24px)</p>
            <h3 className="text-2xl font-semibold text-white">
              Technical Specifications
            </h3>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-xl (20px)</p>
            <h4 className="text-xl font-medium text-white">
              Product Features & Benefits
            </h4>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-lg (18px)</p>
            <p className="text-lg text-slate-800">
              Large body text for introductory paragraphs and important content
            </p>
          </div>
          <div className="border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-400 font-mono mb-2">text-base (16px)</p>
            <p className="text-base text-slate-600">
              Standard body text with optimal readability for long-form content. This is the default size for paragraphs, descriptions, and general content throughout the website.
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-mono mb-2">text-sm (14px)</p>
            <p className="text-sm text-slate-600">
              Small text for captions, labels, and secondary information
            </p>
          </div>
        </div>
      </section>

      {/* Typography Styles */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Typography Styles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand Heading */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass p-8 rounded-2xl"
          >
            <p className="text-xs text-slate-400 font-mono mb-4">Class: .text-brand-heading</p>
            <h3 className="text-brand-heading text-3xl mb-2">
              Engineering Excellence
            </h3>
            <p className="text-sm text-slate-500 font-mono">
              font-display, font-bold, tracking-tight
            </p>
          </motion.div>

          {/* Brand Body */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass p-8 rounded-2xl"
          >
            <p className="text-xs text-slate-400 font-mono mb-4">Class: .text-brand-body</p>
            <p className="text-brand-body">
              Professional body text with optimal readability and refined appearance for all content sections.
            </p>
            <p className="text-sm text-slate-500 font-mono mt-2">
              font-reading, leading-relaxed, text-slate-600
            </p>
          </motion.div>

          {/* Technical Spec */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-blue p-8 rounded-2xl"
          >
            <p className="text-xs text-slate-400 font-mono mb-4">Class: .text-spec</p>
            <p className="text-spec text-2xl">
              U-value: 1.6 W/m²K | SHGC: 0.42
            </p>
            <p className="text-sm text-slate-500 font-mono mt-2">
              font-mono, text-accent, tracking-wide
            </p>
          </motion.div>

          {/* Accent Text */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass p-8 rounded-2xl"
          >
            <p className="text-xs text-slate-400 font-mono mb-4">Accent / Tagline</p>
            <p className="text-accent text-2xl font-medium italic">
              Precision in Transparency
            </p>
            <p className="text-sm text-slate-500 font-mono mt-2">
              text-accent, italic, font-medium
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bilingual Example */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Bilingual Typography (EN / AR)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* English */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass p-8 rounded-2xl"
          >
            <h4 className="text-2xl font-bold text-white mb-4">
              GLAZE<span className="text-accent">//</span>PRO
            </h4>
            <p className="text-accent font-medium italic mb-4">
              Precision in Transparency
            </p>
            <p className="text-slate-600 leading-relaxed">
              Saudi Arabia's specialized architectural glazing systems company — transforming façades with precision-engineered glass solutions that combine beauty, safety, and sustainability.
            </p>
          </motion.div>

          {/* Arabic */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass p-8 rounded-2xl"
            dir="rtl"
          >
            <h4 className="text-2xl font-bold text-white mb-4">
              جليز<span className="text-accent">//</span>برو
            </h4>
            <p className="text-accent font-medium italic mb-4">
              دقة في الشفافية
            </p>
            <p className="text-slate-600 leading-relaxed">
              شركة أنظمة الزجاج المعماري المتخصصة في المملكة العربية السعودية — تحويل الواجهات بحلول زجاجية دقيقة الهندسة تجمع بين الجمال والأمان والاستدامة.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
