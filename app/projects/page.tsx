'use client'

import { useMemo, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlassShimmer from '@/components/GlassShimmer'
import CausticsBackground from '@/components/CausticsBackground'
import { motion } from 'framer-motion'
import { fadeUp, glassFloat } from '@/lib/motionPresets'
import { useLanguage } from '@/lib/language'

type Project = {
  id: string
  name: string
  sector: 'Commercial' | 'Hospitality' | 'Residential' | 'Public' | 'Industrial'
  system: 'Curtain Wall' | 'Frameless' | 'Spider' | 'Skylight' | 'Balustrade'
  areaSqm: number
  city: string
  year: number
}

const allProjects: Project[] = [
  {
    id: 'p1',
    name: 'King Fahd Cultural Center',
    sector: 'Commercial',
    system: 'Curtain Wall',
    areaSqm: 12500,
    city: 'Riyadh',
    year: 2024,
  },
  {
    id: 'p2',
    name: 'Red Sea Mall Expansion',
    sector: 'Public',
    system: 'Frameless',
    areaSqm: 4800,
    city: 'Jeddah',
    year: 2023,
  },
  {
    id: 'p3',
    name: 'The Line — NEOM',
    sector: 'Hospitality',
    system: 'Spider',
    areaSqm: 9600,
    city: 'NEOM',
    year: 2025,
  },
  {
    id: 'p4',
    name: 'Qiddiya Entertainment Complex',
    sector: 'Residential',
    system: 'Balustrade',
    areaSqm: 3200,
    city: 'Riyadh',
    year: 2024,
  },
  {
    id: 'p5',
    name: 'King Abdullah Financial District',
    sector: 'Public',
    system: 'Skylight',
    areaSqm: 8500,
    city: 'Riyadh',
    year: 2025,
  },
  {
    id: 'p6',
    name: 'Diriyah Gate Atrium',
    sector: 'Commercial',
    system: 'Curtain Wall',
    areaSqm: 6400,
    city: 'Riyadh',
    year: 2024,
  },
  {
    id: 'p7',
    name: 'Jeddah Tower Facade',
    sector: 'Commercial',
    system: 'Curtain Wall',
    areaSqm: 18000,
    city: 'Jeddah',
    year: 2025,
  },
  {
    id: 'p8',
    name: 'AlUla Cultural Center',
    sector: 'Public',
    system: 'Frameless',
    areaSqm: 2800,
    city: 'AlUla',
    year: 2024,
  },
]

export default function ProjectsPage() {
  const { t, lang } = useLanguage()
  const [filter, setFilter] = useState<{
    sector?: Project['sector']
    system?: Project['system']
    year?: number
    city?: string
  }>({})

  const list = useMemo(
    () =>
      allProjects.filter(
        (p) =>
          (!filter.sector || p.sector === filter.sector) &&
          (!filter.system || p.system === filter.system) &&
          (!filter.year || p.year === filter.year) &&
          (!filter.city || p.city === filter.city)
      ),
    [filter]
  )

  const uniqueYears = useMemo(() => Array.from(new Set(allProjects.map(p => p.year))).sort((a, b) => b - a), [])
  const uniqueCities = useMemo(() => Array.from(new Set(allProjects.map(p => p.city))).sort(), [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="relative">
        <CausticsBackground className="absolute inset-0" opacity={0.1} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 {...fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </motion.h1>
          <motion.p {...fadeUp} className="text-white/80 max-w-3xl text-lg mb-8">
            {t('projects.subtitle')}
          </motion.p>
          <div className="mt-4 flex flex-wrap gap-3">
            <select
              className="rounded-lg bg-white/10 px-3 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
              value={filter.sector ?? ''}
              onChange={(e) =>
                setFilter((f) => ({
                  ...f,
                  sector: (e.target.value || undefined) as Project['sector'],
                }))
              }
              aria-label={lang === 'en' ? 'Filter by sector' : 'تصفية حسب القطاع'}
            >
              <option value="">{lang === 'en' ? 'All Sectors' : 'جميع القطاعات'}</option>
              <option value="Commercial">{lang === 'en' ? 'Commercial' : 'تجاري'}</option>
              <option value="Hospitality">{lang === 'en' ? 'Hospitality' : 'ضيافة'}</option>
              <option value="Residential">{lang === 'en' ? 'Residential' : 'سكني'}</option>
              <option value="Public">{lang === 'en' ? 'Public' : 'عام'}</option>
              <option value="Industrial">{lang === 'en' ? 'Industrial' : 'صناعي'}</option>
            </select>
            <select
              className="rounded-lg bg-white/10 px-3 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
              value={filter.system ?? ''}
              onChange={(e) =>
                setFilter((f) => ({
                  ...f,
                  system: (e.target.value || undefined) as Project['system'],
                }))
              }
              aria-label={lang === 'en' ? 'Filter by system' : 'تصفية حسب النظام'}
            >
              <option value="">{lang === 'en' ? 'All Systems' : 'جميع الأنظمة'}</option>
              <option value="Curtain Wall">{lang === 'en' ? 'Curtain Wall' : 'جدار الستائر'}</option>
              <option value="Frameless">{lang === 'en' ? 'Frameless' : 'بدون إطار'}</option>
              <option value="Spider">{lang === 'en' ? 'Spider' : 'عنكبوتي'}</option>
              <option value="Skylight">{lang === 'en' ? 'Skylight' : 'منور'}</option>
              <option value="Balustrade">{lang === 'en' ? 'Balustrade' : 'درابزين'}</option>
            </select>
            <select
              className="rounded-lg bg-white/10 px-3 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
              value={filter.year?.toString() ?? ''}
              onChange={(e) =>
                setFilter((f) => ({
                  ...f,
                  year: e.target.value ? parseInt(e.target.value) : undefined,
                }))
              }
              aria-label={lang === 'en' ? 'Filter by year' : 'تصفية حسب السنة'}
            >
              <option value="">{lang === 'en' ? 'All Years' : 'جميع السنوات'}</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year.toString()}>{year}</option>
              ))}
            </select>
            <select
              className="rounded-lg bg-white/10 px-3 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
              value={filter.city ?? ''}
              onChange={(e) =>
                setFilter((f) => ({
                  ...f,
                  city: e.target.value || undefined,
                }))
              }
              aria-label={lang === 'en' ? 'Filter by city' : 'تصفية حسب المدينة'}
            >
              <option value="">{lang === 'en' ? 'All Cities' : 'جميع المدن'}</option>
              {uniqueCities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, idx) => (
              <motion.div
                key={p.id}
                {...glassFloat}
                transition={{ delay: idx * 0.05 }}
              >
                <GlassShimmer className="p-6 h-full" enable3DTilt maxTilt={10}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white">{p.name}</div>
                      <div className="text-white/70 text-sm mt-1">
                        {p.city} · {p.year}
                      </div>
                    </div>
                    <span className="rounded-lg bg-white/10 px-3 py-1 text-sm text-white whitespace-nowrap">
                      {p.system}
                    </span>
                  </div>
                  <div className="mt-3 text-white/80 text-sm">
                    <div className="mb-1">
                      <span className="text-white/70">{lang === 'en' ? 'Sector' : 'القطاع'}: </span>
                      <span>{lang === 'en' ? p.sector : {
                        'Commercial': 'تجاري',
                        'Hospitality': 'ضيافة',
                        'Residential': 'سكني',
                        'Public': 'عام',
                        'Industrial': 'صناعي'
                      }[p.sector]}</span>
                    </div>
                    <div>
                      <span className="text-white/70">{lang === 'en' ? 'Area' : 'المساحة'}: </span>
                      <span>{p.areaSqm.toLocaleString()} m²</span>
                    </div>
                  </div>
                </GlassShimmer>
              </motion.div>
            ))}
          </div>
          {list.length === 0 && (
            <div className="text-center py-12 text-white/60">
              {lang === 'en' ? 'No projects match your filters.' : 'لا توجد مشاريع تطابق المرشحات.'}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}

