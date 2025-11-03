'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassShimmer from '../GlassShimmer'

type CalculatorType = 'u-value' | 'weight' | 'area'

export default function SpecsCalculator() {
  const [calcType, setCalcType] = useState<CalculatorType>('u-value')
  const [inputs, setInputs] = useState({
    glassThickness: 10,
    airGap: 16,
    hasLowE: false,
    width: 1000,
    height: 2000,
    density: 2.5,
  })

  const calculateUValue = () => {
    // Simplified U-value calculation for IGU
    const baseU = 2.8
    const airGapFactor = inputs.airGap >= 16 ? 0.7 : 0.85
    const lowEFactor = inputs.hasLowE ? 0.5 : 1.0
    return (baseU * airGapFactor * lowEFactor).toFixed(2)
  }

  const calculateWeight = () => {
    const area = (inputs.width * inputs.height) / 1000000 // m²
    const weightPerM2 = inputs.glassThickness * inputs.density
    return {
      weightPerM2: weightPerM2.toFixed(1),
      totalWeight: (weightPerM2 * area).toFixed(1),
      area: area.toFixed(2),
    }
  }

  const calculateArea = () => {
    const area = (inputs.width * inputs.height) / 1000000 // m²
    const perimeter = 2 * (inputs.width + inputs.height) / 1000 // m
    return {
      area: area.toFixed(2),
      perimeter: perimeter.toFixed(2),
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Quick Specs Calculator</h3>
        <p className="text-slate-500">Get instant technical calculations for your project</p>
      </div>

      {/* Calculator Type Selector */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setCalcType('u-value')}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
            calcType === 'u-value'
              ? 'bg-accent text-white'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          U-Value
        </button>
        <button
          onClick={() => setCalcType('weight')}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
            calcType === 'weight'
              ? 'bg-accent text-white'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Weight
        </button>
        <button
          onClick={() => setCalcType('area')}
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
            calcType === 'area'
              ? 'bg-accent text-white'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Area
        </button>
      </div>

      <GlassShimmer className="p-8">
        {/* U-Value Calculator */}
        {calcType === 'u-value' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-white font-medium mb-2">
                Glass Thickness (mm)
              </label>
              <input
                type="number"
                value={inputs.glassThickness}
                onChange={(e) =>
                  setInputs({ ...inputs, glassThickness: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Air Gap (mm)</label>
              <input
                type="number"
                value={inputs.airGap}
                onChange={(e) =>
                  setInputs({ ...inputs, airGap: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="lowE"
                checked={inputs.hasLowE}
                onChange={(e) => setInputs({ ...inputs, hasLowE: e.target.checked })}
                className="w-5 h-5 rounded accent-accent"
              />
              <label htmlFor="lowE" className="text-white font-medium">
                Low-E Coating
              </label>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-accent/10 border-2 border-accent">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-2">Indicative U-Value</div>
                <div className="text-4xl font-bold text-accent mb-1">
                  {calculateUValue()}
                </div>
                <div className="text-sm text-slate-500">W/m²·K</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Weight Calculator */}
        {calcType === 'weight' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">Width (mm)</label>
                <input
                  type="number"
                  value={inputs.width}
                  onChange={(e) =>
                    setInputs({ ...inputs, width: parseInt(e.target.value) || 0 })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Height (mm)</label>
                <input
                  type="number"
                  value={inputs.height}
                  onChange={(e) =>
                    setInputs({ ...inputs, height: parseInt(e.target.value) || 0 })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Glass Thickness (mm)
              </label>
              <input
                type="number"
                value={inputs.glassThickness}
                onChange={(e) =>
                  setInputs({ ...inputs, glassThickness: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
              />
            </div>

            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Area</span>
                  <span className="text-white font-semibold">
                    {calculateWeight().area} m²
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Weight per m²</span>
                  <span className="text-white font-semibold">
                    {calculateWeight().weightPerM2} kg/m²
                  </span>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-accent/10 border-2 border-accent">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Total Weight</span>
                  <span className="text-2xl font-bold text-accent">
                    {calculateWeight().totalWeight} kg
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Area Calculator */}
        {calcType === 'area' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">Width (mm)</label>
                <input
                  type="number"
                  value={inputs.width}
                  onChange={(e) =>
                    setInputs({ ...inputs, width: parseInt(e.target.value) || 0 })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Height (mm)</label>
                <input
                  type="number"
                  value={inputs.height}
                  onChange={(e) =>
                    setInputs({ ...inputs, height: parseInt(e.target.value) || 0 })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-white focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-accent/10 border-2 border-accent">
                <div className="text-center">
                  <div className="text-sm text-slate-400 mb-2">Area</div>
                  <div className="text-3xl font-bold text-accent mb-1">
                    {calculateArea().area}
                  </div>
                  <div className="text-sm text-slate-500">m²</div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-accent/10 border-2 border-accent">
                <div className="text-center">
                  <div className="text-sm text-slate-400 mb-2">Perimeter</div>
                  <div className="text-3xl font-bold text-accent mb-1">
                    {calculateArea().perimeter}
                  </div>
                  <div className="text-sm text-slate-500">m</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-6 p-4 rounded-xl bg-slate-50">
          <p className="text-xs text-slate-400">
            * Calculations are indicative and simplified. Consult with our engineering team for
            project-specific calculations and specifications.
          </p>
        </div>
      </GlassShimmer>
    </div>
  )
}
