'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlassShimmer from '@/components/GlassShimmer'
import CausticsBackground from '@/components/CausticsBackground'
import { motion } from 'framer-motion'
import { fadeUp, glassFloat } from '@/lib/motionPresets'
import { useLanguage } from '@/lib/language'
import Link from 'next/link'

const PRODUCTS = [
  { 
    nameEn: 'Tempered (Toughened)', 
    nameAr: 'مقسى (مقوى)',
    factsEn: 'High strength · Safety break pattern · 4-5x stronger than float',
    factsAr: 'قوة عالية · نمط كسر آمن · أقوى بـ 4-5 مرات من الزجاج العادي',
    uValue: '5.6 W/m²K',
    shgc: '0.81',
    lt: '0.88',
  },
  { 
    nameEn: 'Laminated', 
    nameAr: 'مصفح',
    factsEn: 'PVB/SGP interlayers · Impact & acoustic control · Safety glass',
    factsAr: 'طبقات PVB/SGP · مقاومة الصدمات والتحكم الصوتي · زجاج أمان',
    uValue: '5.5 W/m²K',
    shgc: '0.79',
    lt: '0.86',
  },
  { 
    nameEn: 'IGU / DGU (Low-E)', 
    nameAr: 'وحدات زجاجية مزدوجة (Low-E)',
    factsEn: 'Low-E coatings · Thermal / solar performance · Energy efficient',
    factsAr: 'طلاءات Low-E · أداء حراري/شمسي · موفر للطاقة',
    uValue: '1.6 W/m²K',
    shgc: '0.42',
    lt: '0.70',
  },
  { 
    nameEn: 'Low-E Coated', 
    nameAr: 'مطلي بـ Low-E',
    factsEn: 'Energy efficient · Comfort glazing · Reduced solar heat gain',
    factsAr: 'موفر للطاقة · زجاج مريح · تقليل اكتساب الحرارة الشمسية',
    uValue: '3.5 W/m²K',
    shgc: '0.58',
    lt: '0.72',
  },
  { 
    nameEn: 'Smart Glass (PDLC/EC)', 
    nameAr: 'زجاج ذكي (PDLC/EC)',
    factsEn: 'Privacy on demand · Dynamic tint · Switchable transparency',
    factsAr: 'خصوصية عند الطلب · تلوين ديناميكي · شفافية قابلة للتبديل',
    uValue: '1.4-5.2 W/m²K',
    shgc: '0.35-0.76',
    lt: '0.60-0.75',
  },
  { 
    nameEn: 'Mirror / Back-painted', 
    nameAr: 'مرآة / مطلية من الخلف',
    factsEn: 'Decorative & interior fit-out · Custom colors · High reflectivity',
    factsAr: 'ديكور وتشطيب داخلي · ألوان مخصصة · انعكاسية عالية',
    uValue: 'N/A',
    shgc: 'N/A',
    lt: '0.05-0.10',
  },
]

export default function ProductsPage() {
  const { t, lang } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="relative">
        <CausticsBackground className="absolute inset-0" opacity={0.12} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 {...fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('products.title')}
          </motion.h1>
          <motion.p {...fadeUp} className="text-white/80 mt-2 max-w-3xl text-lg mb-6">
            {t('products.subtitle')}
          </motion.p>
          <motion.p {...fadeUp} className="text-white/70 max-w-3xl mb-6">
            {lang === 'en'
              ? 'Performance data optimized for Saudi Arabia\'s climate and solar conditions. All values are indicative unless a project-specific specification is issued. Products certified to SBC standards for seamless integration with Vision 2030 projects.'
              : 'بيانات الأداء محسّنة لمناخ المملكة وظروفها الشمسية. جميع القيم مؤشرية ما لم يتم إصدار مواصفات خاصة بالمشروع. المنتجات معتمدة وفق معايير الكود السعودي للبناء للتكامل السلس مع مشاريع رؤية 2030.'}
          </motion.p>
          <motion.div {...fadeUp} className="mb-8">
            <Link
              href="/specs"
              className="inline-block px-6 py-3 rounded-xl bg-accent/20 border border-accent/40 text-accent hover:bg-accent/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {t('common.download')} {lang === 'en' ? 'Detailed Performance Specs' : 'المواصفات التفصيلية للأداء'} →
            </Link>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, idx) => (
              <motion.div
                key={p.nameEn}
                {...glassFloat}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassShimmer className="p-6 h-full flex flex-col" enable3DTilt maxTilt={10}>
                  <div className="text-xl font-semibold text-white mb-3">
                    {lang === 'en' ? p.nameEn : p.nameAr}
                  </div>
                  <div className="text-white/80 mb-4 flex-1">
                    {lang === 'en' ? p.factsEn : p.factsAr}
                  </div>
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">{lang === 'en' ? 'U-value:' : 'قيمة U:'}</span>
                      <span className="text-accent font-medium">{p.uValue}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">{lang === 'en' ? 'SHGC:' : 'SHGC:'}</span>
                      <span className="text-accent font-medium">{p.shgc}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">{lang === 'en' ? 'LT:' : 'نقل الضوء:'}</span>
                      <span className="text-accent font-medium">{p.lt}</span>
                    </div>
                  </div>
                  <Link
                    href={`/specs?product=${encodeURIComponent(p.nameEn)}`}
                    className="mt-4 text-accent hover:text-accent/80 text-sm font-medium inline-block"
                  >
                    {t('common.learnMore')} →
                  </Link>
                </GlassShimmer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
