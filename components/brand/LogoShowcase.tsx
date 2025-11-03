'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * LogoShowcase Component
 *
 * Brand logo variations with download options
 */
export default function LogoShowcase() {
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null)

  const copyLogoCode = (variant: string) => {
    const logoCode = `GLAZE<span className="text-accent relative">
  //
  <span className="absolute inset-0 blur-sm opacity-50">//</span>
</span>PRO`
    navigator.clipboard.writeText(logoCode)
    setCopiedMessage(variant)
    setTimeout(() => setCopiedMessage(null), 2000)
  }

  return (
    <div className="space-y-12">
      {/* Primary Logo */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Primary Logo
        </h3>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass p-16 rounded-2xl flex flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl font-bold text-white mb-4"
          >
            GLAZE<span className="text-accent relative">
              //
              <span className="absolute inset-0 blur-sm opacity-50">//</span>
            </span>PRO
          </motion.h1>
          <p className="text-accent text-2xl font-medium italic mb-8">
            Precision in Transparency
          </p>
          <button
            onClick={() => copyLogoCode('primary')}
            className="btn-secondary text-sm"
          >
            {copiedMessage === 'primary' ? 'Copied!' : 'Copy HTML Code'}
          </button>
        </motion.div>

        {/* Logo Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="glass p-4 rounded-xl text-sm">
            <p className="text-slate-400 mb-1">Wordmark</p>
            <p className="text-white font-semibold">GLAZE<span className="text-accent">//</span>PRO</p>
          </div>
          <div className="glass p-4 rounded-xl text-sm">
            <p className="text-slate-400 mb-1">Signature Element</p>
            <p className="text-accent font-bold text-2xl">//</p>
          </div>
          <div className="glass p-4 rounded-xl text-sm">
            <p className="text-slate-400 mb-1">Typography</p>
            <p className="text-white font-semibold">Inter Bold</p>
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Logo Variations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* On Dark Background */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-ink border-2 border-slate-200 p-12 rounded-2xl"
          >
            <p className="text-xs text-slate-400 mb-6">On Dark Background (Primary)</p>
            <h2 className="text-5xl font-bold text-white text-center">
              GLAZE<span className="text-accent relative">
                //
                <span className="absolute inset-0 blur-sm opacity-50">//</span>
              </span>PRO
            </h2>
            <p className="text-accent text-center mt-3 italic">Precision in Transparency</p>
          </motion.div>

          {/* On Light Background */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border-2 border-gray-200 p-12 rounded-2xl"
          >
            <p className="text-xs text-gray-400 mb-6">On Light Background (Reversed)</p>
            <h2 className="text-5xl font-bold text-white text-center">
              GLAZE<span className="text-accent relative">
                //
                <span className="absolute inset-0 blur-sm opacity-50">//</span>
              </span>PRO
            </h2>
            <p className="text-accent text-center mt-3 italic">Precision in Transparency</p>
          </motion.div>

          {/* Monochrome White */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-ink to-paper border-2 border-slate-200 p-12 rounded-2xl"
          >
            <p className="text-xs text-slate-400 mb-6">Monochrome (White)</p>
            <h2 className="text-5xl font-bold text-white text-center">
              GLAZE<span className="relative">
                //
                <span className="absolute inset-0 blur-sm opacity-50">//</span>
              </span>PRO
            </h2>
            <p className="text-slate-400 text-center mt-3 italic">Precision in Transparency</p>
          </motion.div>

          {/* Monochrome Black */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-100 border-2 border-gray-200 p-12 rounded-2xl"
          >
            <p className="text-xs text-gray-400 mb-6">Monochrome (Black)</p>
            <h2 className="text-5xl font-bold text-black text-center">
              GLAZE<span className="relative">
                //
                <span className="absolute inset-0 blur-sm opacity-50">//</span>
              </span>PRO
            </h2>
            <p className="text-gray-700 text-center mt-3 italic">Precision in Transparency</p>
          </motion.div>
        </div>
      </section>

      {/* Logo Sizes */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Logo Sizes
        </h3>
        <div className="glass p-12 rounded-2xl space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <p className="text-xs text-slate-400 mb-4">Large (Hero / Homepage)</p>
            <h1 className="text-8xl font-bold text-white">
              GLAZE<span className="text-accent">//</span>PRO
            </h1>
          </div>
          <div className="border-b border-slate-200 pb-6">
            <p className="text-xs text-slate-400 mb-4">Medium (Headers / Footers)</p>
            <h2 className="text-5xl font-bold text-white">
              GLAZE<span className="text-accent">//</span>PRO
            </h2>
          </div>
          <div className="border-b border-slate-200 pb-6">
            <p className="text-xs text-slate-400 mb-4">Small (Navigation)</p>
            <h3 className="text-3xl font-bold text-white">
              GLAZE<span className="text-accent">//</span>PRO
            </h3>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-4">Minimum Size (Favicon / Icon)</p>
            <h4 className="text-xl font-bold text-white">
              GLAZE<span className="text-accent">//</span>PRO
            </h4>
            <p className="text-xs text-slate-400 mt-2">Minimum width: 120px (readable)</p>
          </div>
        </div>
      </section>

      {/* Arabic Logo */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Arabic Variant
        </h3>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass p-16 rounded-2xl flex flex-col items-center justify-center"
          dir="rtl"
        >
          <h1 className="text-7xl font-bold text-white mb-4">
            جليز<span className="text-accent relative">
              //
              <span className="absolute inset-0 blur-sm opacity-50">//</span>
            </span>برو
          </h1>
          <p className="text-accent text-2xl font-medium italic">
            دقة في الشفافية
          </p>
        </motion.div>
      </section>

      {/* Clear Space Guidelines */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Clear Space & Usage
        </h3>
        <div className="glass p-8 rounded-2xl">
          <div className="border-4 border-dashed border-accent/30 p-12 relative">
            {/* Clear space indicators */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-accent/10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-accent/10"></div>
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-accent/10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-accent/10"></div>

            <h2 className="text-6xl font-bold text-white text-center relative z-10">
              GLAZE<span className="text-accent">//</span>PRO
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-4 text-center">
            Maintain minimum clear space of <strong className="text-accent">1× letter height</strong> around logo on all sides
          </p>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Usage Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="glass-green p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-saudi-green mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Do's
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>✓ Use approved color variations</li>
              <li>✓ Maintain aspect ratio when scaling</li>
              <li>✓ Ensure sufficient contrast with background</li>
              <li>✓ Use SVG or high-resolution formats</li>
              <li>✓ Keep clear space requirements</li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="glass p-8 rounded-2xl border-2 border-danger/30">
            <h4 className="text-xl font-bold text-danger mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              Don'ts
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>✗ Alter logo proportions or distort</li>
              <li>✗ Change colors or add effects</li>
              <li>✗ Place on busy backgrounds</li>
              <li>✗ Use low-resolution images</li>
              <li>✗ Rotate or tilt the logo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section>
        <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">//</span>
          Download Logo Assets
        </h3>
        <div className="glass p-8 rounded-2xl">
          <p className="text-slate-400 mb-6">
            Download logo files in various formats for print and digital use:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="btn-secondary">
              SVG (Web)
            </button>
            <button className="btn-secondary">
              PNG (High-Res)
            </button>
            <button className="btn-secondary">
              PDF (Print)
            </button>
            <button className="btn-secondary">
              EPS (Vector)
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            Note: Logo asset downloads are placeholder buttons for demonstration
          </p>
        </div>
      </section>
    </div>
  )
}
