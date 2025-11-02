'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SpecTable, { GlassSpec } from '@/components/SpecTable'
import CausticsBackground from '@/components/CausticsBackground'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import { useLanguage } from '@/lib/language'

// Real performance data for various glass configurations
const glassSpecs: GlassSpec[] = [
  {
    id: '1',
    name: 'Single Glazing (Clear Float)',
    thickness: '6mm',
    uvValue: 5.7,
    shgc: 0.82,
    lt: 0.89,
    stc: 28,
    rw: 29,
  },
  {
    id: '2',
    name: 'Single Glazing (Low-E Coated)',
    thickness: '6mm',
    uvValue: 3.5,
    shgc: 0.58,
    lt: 0.72,
    stc: 28,
    rw: 29,
  },
  {
    id: '3',
    name: 'Double Glazing (Clear/16mm Air)',
    thickness: '6+16+6mm',
    uvValue: 2.8,
    shgc: 0.75,
    lt: 0.81,
    stc: 32,
    rw: 33,
  },
  {
    id: '4',
    name: 'Double Glazing (Low-E/16mm Argon)',
    thickness: '6+16+6mm',
    uvValue: 1.6,
    shgc: 0.42,
    lt: 0.70,
    stc: 33,
    rw: 34,
  },
  {
    id: '5',
    name: 'Triple Glazing (Low-E/2x 16mm Argon)',
    thickness: '4+16+4+16+4mm',
    uvValue: 0.9,
    shgc: 0.34,
    lt: 0.68,
    stc: 38,
    rw: 39,
  },
  {
    id: '6',
    name: 'Laminated (PVB 6+6mm)',
    thickness: '12mm (6+0.76+6)',
    uvValue: 5.6,
    shgc: 0.80,
    lt: 0.87,
    stc: 35,
    rw: 36,
  },
  {
    id: '7',
    name: 'Laminated (SGP 8+8mm)',
    thickness: '16mm (8+1.52+8)',
    uvValue: 5.5,
    shgc: 0.79,
    lt: 0.86,
    stc: 38,
    rw: 39,
  },
  {
    id: '8',
    name: 'IGU + Laminated (Low-E/16mm Argon/6+6mm Lam)',
    thickness: '18mm (6+16+12)',
    uvValue: 1.8,
    shgc: 0.45,
    lt: 0.68,
    stc: 42,
    rw: 43,
  },
  {
    id: '9',
    name: 'Smart Glass (PDLC Switchable)',
    thickness: '8mm (4+0.4+4)',
    uvValue: 5.2,
    shgc: 0.76,
    lt: 0.75, // Clear state
    stc: 30,
    rw: 31,
  },
  {
    id: '10',
    name: 'Electrochromic (EC)',
    thickness: '8mm (4+0.4+4)',
    uvValue: 1.4, // Clear state
    shgc: 0.35, // Clear state, 0.15 tinted
    lt: 0.60, // Clear state, 0.05 tinted
    stc: 31,
    rw: 32,
  },
  {
    id: '11',
    name: 'Tempered (Heat-Strengthened)',
    thickness: '10mm',
    uvValue: 5.6,
    shgc: 0.81,
    lt: 0.88,
    stc: 29,
    rw: 30,
  },
  {
    id: '12',
    name: 'Solar Control (Reflective Coating)',
    thickness: '6mm',
    uvValue: 3.2,
    shgc: 0.28,
    lt: 0.22,
    stc: 28,
    rw: 29,
  },
]

export default function SpecsPage() {
  const { t, lang } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="relative">
        <CausticsBackground className="absolute inset-0" opacity={0.08} />
        <div className="max-w-7xl mx-auto relative">
          <motion.h1 {...fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('specs.title')}
          </motion.h1>
          <motion.p {...fadeUp} className="text-white/80 max-w-3xl mb-8 text-lg">
            {t('specs.subtitle')}
          </motion.p>
          <motion.p {...fadeUp} className="text-white/70 max-w-3xl mb-8">
            {lang === 'en'
              ? 'Comprehensive performance data for our glass products, optimized for Saudi Arabia\'s climate. Values are based on standard configurations and may vary with custom specifications, frame systems, and installation conditions. All measurements follow SBC (Saudi Building Code), EN/ISO, and ASTM standards — ensuring compliance with Vision 2030 sustainability goals.'
              : 'بيانات الأداء الشاملة لمنتجاتنا الزجاجية، محسّنة لمناخ المملكة العربية السعودية. القيم مبنية على التكوينات القياسية وقد تختلف مع المواصفات المخصصة وأنظمة الإطارات وظروف التركيب. جميع القياسات تتبع الكود السعودي للبناء (SBC) ومعايير EN/ISO وASTM — مما يضمن الامتثال لأهداف الاستدامة في رؤية 2030.'}
          </motion.p>

          <SpecTable specs={glassSpecs} title={lang === 'en' ? 'Glass Performance Data' : 'بيانات أداء الزجاج'} />

          <motion.div {...fadeUp} className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">
                {lang === 'en' ? 'Testing Standards' : 'معايير الاختبار'}
              </h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• U-value: EN 673 / ISO 10292 / NFRC 100</li>
                <li>• SHGC: EN 410 / NFRC 200</li>
                <li>• {lang === 'en' ? 'Light Transmittance' : 'نقل الضوء'}: EN 410 / NFRC 200</li>
                <li>• STC: ASTM E90 / ISO 717-1</li>
                <li>• {lang === 'en' ? 'Safety' : 'الأمان'}: EN 12600 / ANSI Z97.1</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">
                {lang === 'en' ? 'Notes' : 'ملاحظات'}
              </h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• {lang === 'en' ? 'Values measured at center of glass' : 'القيم مقاسة في مركز الزجاج'}</li>
                <li>• {lang === 'en' ? 'Frame and edge effects not included' : 'تأثيرات الإطار والحواف غير مدمجة'}</li>
                <li>• {lang === 'en' ? 'Actual performance depends on installation' : 'الأداء الفعلي يعتمد على التركيب'}</li>
                <li>• {lang === 'en' ? 'Custom configurations available on request' : 'تكوينات مخصصة متوفرة عند الطلب'}</li>
                <li>• {lang === 'en' ? 'All products certified to applicable standards' : 'جميع المنتجات معتمدة وفق المعايير المعمول بها'}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
