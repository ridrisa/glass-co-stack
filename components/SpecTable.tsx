'use client'

import { useState } from 'react'
import GlassShimmer from './GlassShimmer'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'

export type GlassSpec = {
  id: string
  name: string
  thickness: string
  uvValue: number // W/m²K
  shgc: number // Solar Heat Gain Coefficient (0-1)
  lt: number // Light Transmittance (0-1, displayed as %)
  stc?: number // Sound Transmission Class
  rw?: number // Weighted Sound Reduction Index (dB)
}

type Props = {
  specs: GlassSpec[]
  title?: string
}

export default function SpecTable({ specs, title = 'Performance Specifications' }: Props) {
  const [sortBy, setSortBy] = useState<keyof GlassSpec>('uvValue')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const sortedSpecs = [...specs].sort((a, b) => {
    const aVal = a[sortBy]
    const bVal = b[sortBy]
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
    }
    return 0
  })

  const getAriaSort = (field: keyof GlassSpec): 'ascending' | 'descending' | 'none' => {
    if (sortBy !== field) return 'none'
    return sortOrder === 'asc' ? 'ascending' : 'descending'
  }

  const handleSort = (field: keyof GlassSpec) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  return (
    <GlassShimmer className="p-6 overflow-x-auto">
      <motion.h2 {...fadeUp} className="text-2xl font-semibold text-white mb-6">
        {title}
      </motion.h2>
      <div className="overflow-x-auto">
        <table
          className="w-full border-collapse text-left"
          aria-label="Glass performance specifications table"
        >
          <thead>
            <tr className="border-b border-slate-300">
              <th
                className="px-4 py-3 text-white font-semibold cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => handleSort('name')}
                scope="col"
                aria-sort={getAriaSort('name')}
              >
                Glass Type / Configuration
                {sortBy === 'name' && (
                  <span className="ml-2">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th
                className="px-4 py-3 text-white font-semibold cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => handleSort('thickness')}
                scope="col"
                aria-sort={getAriaSort('thickness')}
              >
                Thickness
                {sortBy === 'thickness' && (
                  <span className="ml-2">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th
                className="px-4 py-3 text-white font-semibold cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => handleSort('uvValue')}
                scope="col"
                aria-sort={getAriaSort('uvValue')}
              >
                U-Value (W/m²K)
                {sortBy === 'uvValue' && (
                  <span className="ml-2">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th
                className="px-4 py-3 text-white font-semibold cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => handleSort('shgc')}
                scope="col"
                aria-sort={getAriaSort('shgc')}
              >
                SHGC
                {sortBy === 'shgc' && (
                  <span className="ml-2">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th
                className="px-4 py-3 text-white font-semibold cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => handleSort('lt')}
                scope="col"
                aria-sort={getAriaSort('lt')}
              >
                Light Transmittance (%)
                {sortBy === 'lt' && (
                  <span className="ml-2">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th
                className="px-4 py-3 text-white font-semibold cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => handleSort('stc')}
                scope="col"
                aria-sort={getAriaSort('stc')}
              >
                STC / Rw
                {sortBy === 'stc' && (
                  <span className="ml-2">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedSpecs.map((spec, idx) => (
              <motion.tr
                key={spec.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03 }}
                className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-3 text-white font-medium">{spec.name}</td>
                <td className="px-4 py-3 text-slate-300">{spec.thickness}</td>
                <td className="px-4 py-3 text-accent font-semibold">{spec.uvValue.toFixed(2)}</td>
                <td className="px-4 py-3 text-slate-300">{spec.shgc.toFixed(2)}</td>
                <td className="px-4 py-3 text-slate-300">{(spec.lt * 100).toFixed(1)}%</td>
                <td className="px-4 py-3 text-slate-300">
                  {spec.stc && spec.rw ? `${spec.stc} / ${spec.rw} dB` : '-'}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-sm text-slate-500">
        <p>
          <strong>U-Value:</strong> Lower is better. Measures thermal transmittance (heat loss).
        </p>
        <p className="mt-1">
          <strong>SHGC:</strong> Solar Heat Gain Coefficient (0-1). Lower reduces cooling load.
        </p>
        <p className="mt-1">
          <strong>LT:</strong> Visible Light Transmittance. Higher = more daylight.
        </p>
        <p className="mt-1">
          <strong>STC/Rw:</strong> Sound Transmission Class / Weighted Sound Reduction Index. Higher
          = better acoustic performance.
        </p>
      </div>
    </GlassShimmer>
  )
}
