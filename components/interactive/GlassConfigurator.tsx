'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassShimmer from '../GlassShimmer'
import { fadeUp } from '@/lib/motionPresets'

type GlassType = 'tempered' | 'laminated' | 'igu' | 'low-e'
type Thickness = '6mm' | '8mm' | '10mm' | '12mm' | '19mm'
type Coating = 'none' | 'low-e' | 'solar-control' | 'reflective'

interface GlassConfig {
  type: GlassType
  thickness: Thickness
  coating: Coating
  width: number
  height: number
}

const glassTypes = [
  { id: 'tempered' as GlassType, name: 'Tempered', desc: 'Safety glass, impact resistant' },
  { id: 'laminated' as GlassType, name: 'Laminated', desc: 'Security glass, sound reduction' },
  { id: 'igu' as GlassType, name: 'IGU/DGU', desc: 'Insulated glass, thermal performance' },
  { id: 'low-e' as GlassType, name: 'Low-E', desc: 'Energy efficient, solar control' },
]

const thicknesses: Thickness[] = ['6mm', '8mm', '10mm', '12mm', '19mm']

const coatings = [
  { id: 'none' as Coating, name: 'Clear', desc: 'No coating' },
  { id: 'low-e' as Coating, name: 'Low-E', desc: 'Energy efficient' },
  { id: 'solar-control' as Coating, name: 'Solar Control', desc: 'Reduces heat gain' },
  { id: 'reflective' as Coating, name: 'Reflective', desc: 'Privacy & aesthetics' },
]

export default function GlassConfigurator() {
  const [config, setConfig] = useState<GlassConfig>({
    type: 'tempered',
    thickness: '10mm',
    coating: 'none',
    width: 1200,
    height: 2000,
  })

  const [showResults, setShowResults] = useState(false)

  // Calculate indicative specifications
  const specs = useMemo(() => {
    let uValue = 5.8 // Default single glazing
    let shgc = 0.82
    let lt = 90
    let weight = 0

    // Base calculations on glass type
    if (config.type === 'igu' || config.type === 'low-e') {
      uValue = 1.4
      shgc = 0.35
      lt = 70
    }

    // Adjust for coating
    if (config.coating === 'low-e') {
      uValue *= 0.7
      shgc *= 0.8
      lt *= 0.95
    } else if (config.coating === 'solar-control') {
      shgc *= 0.5
      lt *= 0.7
    }

    // Calculate weight (kg/m²)
    const thicknessNum = parseInt(config.thickness)
    weight = thicknessNum * 2.5 // Approximate 2.5 kg/m² per mm

    const area = (config.width * config.height) / 1000000 // m²
    const totalWeight = weight * area

    return {
      uValue: uValue.toFixed(2),
      shgc: shgc.toFixed(2),
      lt: Math.round(lt),
      weight: weight.toFixed(1),
      totalWeight: totalWeight.toFixed(1),
      area: area.toFixed(2),
    }
  }, [config])

  const handleGenerate = () => {
    setShowResults(true)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Glass Configurator
        </h2>
        <p className="text-slate-600 text-lg">
          Configure your glass specifications and get indicative performance values
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          {/* Glass Type */}
          <div>
            <label className="block text-white font-semibold mb-3">Glass Type</label>
            <div className="grid grid-cols-2 gap-3">
              {glassTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setConfig({ ...config, type: type.id })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    config.type === type.id
                      ? 'border-accent bg-accent/10 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="font-semibold">{type.name}</div>
                  <div className="text-xs mt-1">{type.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Thickness */}
          <div>
            <label className="block text-white font-semibold mb-3">Thickness</label>
            <div className="flex gap-2">
              {thicknesses.map((thickness) => (
                <button
                  key={thickness}
                  onClick={() => setConfig({ ...config, thickness })}
                  className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                    config.thickness === thickness
                      ? 'border-accent bg-accent/10 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {thickness}
                </button>
              ))}
            </div>
          </div>

          {/* Coating */}
          <div>
            <label className="block text-white font-semibold mb-3">Coating</label>
            <div className="grid grid-cols-2 gap-3">
              {coatings.map((coating) => (
                <button
                  key={coating.id}
                  onClick={() => setConfig({ ...config, coating: coating.id })}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    config.coating === coating.id
                      ? 'border-accent bg-accent/10 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="font-semibold text-sm">{coating.name}</div>
                  <div className="text-xs mt-1">{coating.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Dimensions */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-semibold mb-2">Width (mm)</label>
              <input
                type="number"
                value={config.width}
                onChange={(e) => setConfig({ ...config, width: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
                min="300"
                max="3000"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Height (mm)</label>
              <input
                type="number"
                value={config.height}
                onChange={(e) => setConfig({ ...config, height: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
                min="300"
                max="3000"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-4 rounded-xl bg-accent text-ink font-semibold hover:bg-accent/90 transition-colors"
          >
            Generate Specifications
          </button>
        </div>

        {/* Results Panel */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <GlassShimmer className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Indicative Specifications
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Configuration</span>
                    <span className="text-white font-semibold">
                      {glassTypes.find((t) => t.id === config.type)?.name} • {config.thickness}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Dimensions</span>
                    <span className="text-white font-semibold">
                      {config.width} × {config.height} mm
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Area</span>
                    <span className="text-white font-semibold">{specs.area} m²</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <span className="text-slate-600">U-Value</span>
                    <span className="text-accent font-semibold">{specs.uValue} W/m²·K</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <span className="text-slate-600">SHGC</span>
                    <span className="text-accent font-semibold">{specs.shgc}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Light Transmission</span>
                    <span className="text-accent font-semibold">{specs.lt}%</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                    <span className="text-slate-600">Weight</span>
                    <span className="text-white font-semibold">
                      {specs.weight} kg/m² ({specs.totalWeight} kg total)
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/30">
                  <p className="text-xs text-slate-500">
                    * Values are indicative and for preliminary planning only.
                    Actual performance requires lab testing and project-specific engineering calculations.
                  </p>
                </div>

                <button className="w-full mt-4 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-ink transition-colors">
                  Request Detailed Quote
                </button>
              </GlassShimmer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
