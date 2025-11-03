'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ColorSwatch {
  name: string
  value: string
  usage: string
  cssVar?: string
}

interface ColorPaletteProps {
  title?: string
  colors: ColorSwatch[]
}

/**
 * ColorPalette Component
 *
 * Interactive color palette showcase for brand guidelines
 * Click to copy hex values
 */
export default function ColorPalette({ title = 'Color Palette', colors }: ColorPaletteProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (value: string, name: string) => {
    navigator.clipboard.writeText(value)
    setCopiedColor(name)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-accent">//</span>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colors.map((color) => (
          <motion.button
            key={color.name}
            onClick={() => copyToClipboard(color.value, color.name)}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-2xl overflow-hidden cursor-pointer group text-left relative"
          >
            {/* Color Display */}
            <div
              className="w-full h-32 relative"
              style={{ backgroundColor: color.value.replace('rgba', 'rgb').split(',').slice(0, 3).join(',') + ')' }}
            >
              {copiedColor === color.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                >
                  <span className="text-white font-semibold">Copied!</span>
                </motion.div>
              )}
            </div>

            {/* Color Info */}
            <div className="p-4">
              <h4 className="text-lg font-bold text-white mb-1">{color.name}</h4>
              <p className="text-spec mb-2">{color.value}</p>
              {color.cssVar && (
                <p className="text-xs text-slate-400 font-mono mb-2">{color.cssVar}</p>
              )}
              <p className="text-sm text-slate-600">{color.usage}</p>
            </div>

            {/* Hover Indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

/**
 * Pre-configured Color Palettes for Brand Guidelines
 */

export function CoreIdentityColors() {
  const colors: ColorSwatch[] = [
    {
      name: 'Ink',
      value: '#0A0F1A',
      usage: 'Primary background, deep space',
      cssVar: '--color-ink'
    },
    {
      name: 'Paper',
      value: '#0B1324',
      usage: 'Secondary background, cards',
      cssVar: '--color-paper'
    },
    {
      name: 'Accent (Saudi Blue)',
      value: '#3B82F6',
      usage: 'CTAs, links, primary actions',
      cssVar: '--color-accent'
    }
  ]

  return <ColorPalette title="Core Identity" colors={colors} />
}

export function SaudiPaletteColors() {
  const colors: ColorSwatch[] = [
    {
      name: 'Saudi Green',
      value: '#10B981',
      usage: 'Palm oasis, sustainability, success',
      cssVar: '--color-saudi-green'
    },
    {
      name: 'Desert Gold',
      value: '#F59E0B',
      usage: 'Traditional gold, luxury, warnings',
      cssVar: '--color-desert-gold'
    },
    {
      name: 'Riyadh Blue',
      value: '#3B82F6',
      usage: 'Desert sky, innovation, info',
      cssVar: '--color-riyadh-blue'
    }
  ]

  return <ColorPalette title="Saudi-Optimized Palette" colors={colors} />
}

export function GlassSignatureColors() {
  const colors: ColorSwatch[] = [
    {
      name: 'Glass Base',
      value: 'rgba(255,255,255,0.06)',
      usage: 'Glassmorphism foundation',
      cssVar: '--glass-default'
    },
    {
      name: 'Glass Border',
      value: 'rgba(255,255,255,0.1)',
      usage: 'Subtle glass borders',
      cssVar: '--glass-border'
    },
    {
      name: 'Glass Shimmer',
      value: 'rgba(255,255,255,0.15)',
      usage: 'Hover states, shine effect',
      cssVar: '--glass-shimmer'
    },
    {
      name: 'Glass Blue Tint',
      value: 'rgba(59,130,246,0.08)',
      usage: 'Low-E glass product tint',
      cssVar: '--glass-blue'
    },
    {
      name: 'Glass Green Tint',
      value: 'rgba(16,185,129,0.08)',
      usage: 'Smart glass product tint',
      cssVar: '--glass-green'
    },
    {
      name: 'Glass Bronze Tint',
      value: 'rgba(245,158,11,0.08)',
      usage: 'Solar control glass tint',
      cssVar: '--glass-bronze'
    }
  ]

  return <ColorPalette title="Glass Signature Colors" colors={colors} />
}
