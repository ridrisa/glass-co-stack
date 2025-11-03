'use client'

import Navbar from '@/components/Navbar'
import HeroGlassShowcase from '@/components/HeroGlassShowcase'
import Footer from '@/components/Footer'
import GlassShimmer from '@/components/GlassShimmer'
import RefractionCard from '@/components/RefractionCard'
import ParallaxGlass from '@/components/ParallaxGlass'
import CausticsBackground from '@/components/CausticsBackground'
import ClientLogos from '@/components/sections/ClientLogos'
import Testimonials from '@/components/sections/Testimonials'
import CompanyStats from '@/components/sections/CompanyStats'
import QualityCommitment from '@/components/sections/QualityCommitment'
import { glassFloat, fadeUp } from '@/lib/motionPresets'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useLanguage } from '@/lib/language'
import Link from 'next/link'


export default function Home() {
  const { t, lang } = useLanguage()

  const kpis = useMemo(
    () => [
      { label: lang === 'en' ? 'Projects Delivered' : 'المشاريع المنفذة', value: '480+', suffix: '' },
      { label: lang === 'en' ? 'Avg. Lead Time' : 'متوسط وقت التسليم', value: '14–28', suffix: lang === 'en' ? ' days' : ' يوم' },
      { label: lang === 'en' ? 'Glass Types' : 'أنواع الزجاج', value: 'Tempered · IGU · Low-E · Lam.', suffix: '' },
    ],
    [lang]
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-0">
        <HeroGlassShowcase
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          ctaText={t('hero.cta')}
          ctaHref="/contact"
          kpis={kpis}
          bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
        />
      </section>
      
      {/* Highlights Section */}
      <section className="relative">
        <CausticsBackground className="absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12"
          >
            {t('home.highlights')}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div {...glassFloat} transition={{ delay: 0.1 }}>
              <GlassShimmer className="p-6 h-full" enable3DTilt maxTilt={10}>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Low-E IGU (DGU)</h3>
                <p className="text-slate-700 mb-4">
                  {lang === 'en' 
                    ? 'U-value 1.3 W/m²K · LT 68% · SHGC 0.34'
                    : 'قيمة U 1.3 واط/م²·كلفن · انتقال الضوء 68% · SHGC 0.34'}
                </p>
                <Link 
                  href="/products"
                  className="text-accent hover:text-accent/80 text-sm font-medium"
                >
                  {t('common.learnMore')} →
                </Link>
              </GlassShimmer>
            </motion.div>
            <motion.div {...glassFloat} transition={{ delay: 0.2 }}>
              <GlassShimmer className="p-6 h-full" enable3DTilt maxTilt={10}>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {lang === 'en' ? 'Tempered & Laminated' : 'مقسى ومصفح'}
                </h3>
                <p className="text-slate-700 mb-4">
                  {lang === 'en'
                    ? 'EN/ASTM compliant safety glass for façades and barriers.'
                    : 'زجاج أمان متوافق مع EN/ASTM للواجهات والحواجز.'}
                </p>
                <Link 
                  href="/products"
                  className="text-accent hover:text-accent/80 text-sm font-medium"
                >
                  {t('common.learnMore')} →
                </Link>
              </GlassShimmer>
            </motion.div>
            <motion.div {...glassFloat} transition={{ delay: 0.3 }}>
              <GlassShimmer className="p-6 h-full" enable3DTilt maxTilt={10}>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {lang === 'en' ? 'Point-Fixed / Spider Systems' : 'أنظمة النقطة الثابتة / العنكبوتية'}
                </h3>
                <p className="text-slate-700 mb-4">
                  {lang === 'en' 
                    ? 'Minimal hardware, maximum transparency.'
                    : 'حد أدنى من المعدات، أقصى شفافية.'}
                </p>
                <Link 
                  href="/systems"
                  className="text-accent hover:text-accent/80 text-sm font-medium"
                >
                  {t('common.learnMore')} →
                </Link>
              </GlassShimmer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Systems with Refraction */}
      <section>
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            {t('home.featured')}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            <RefractionCard
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
              title={lang === 'en' ? 'Curtain Wall (Unitized)' : 'جدار الستائر (موحد)'}
              subtitle={lang === 'en' ? 'Rapid install · superior tolerance' : 'تركيب سريع · تفاوت فائق'}
              enable3DTilt
              maxTilt={12}
            />
            <RefractionCard
              image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
              title={lang === 'en' ? 'Frameless Partitions' : 'أقسام بدون إطار'}
              subtitle={lang === 'en' ? 'Office, retail, hospitality' : 'مكتبية، تجارية، ضيافة'}
              enable3DTilt
              maxTilt={12}
            />
            <RefractionCard
              image="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop"
              title={lang === 'en' ? 'Skylights & Canopies' : 'منورات ومظلات'}
              subtitle={lang === 'en' ? 'Daylight + weatherproofing' : 'ضوء النهار + مقاومة الطقس'}
              enable3DTilt
              maxTilt={12}
            />
          </div>
          <motion.div {...glassFloat} className="text-center mt-12">
            <Link
              href="/systems"
              className="inline-block px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
            >
              {t('common.viewAll')} →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Company Stats */}
      <CompanyStats />

      {/* Material Character */}
      <section className="relative">
        <CausticsBackground className="absolute inset-0 opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            {t('home.material')}
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <ParallaxGlass
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt={lang === 'en' ? 'Glassy reflective panel' : 'لوح زجاجي عاكس'}
                width={600}
                height={400}
              />
            </div>
            <motion.div {...fadeUp} className="flex-1 text-slate-700 max-w-2xl">
              <p className="text-lg mb-4">
                {lang === 'en' 
                  ? 'Our glazing blends optical clarity with thermal performance. Subtle reflection, controlled refraction, and precise edges deliver a premium architectural finish.'
                  : 'يجمع زجاجنا بين الوضوح البصري والأداء الحراري. الانعكاس الدقيق، الانكسار المتحكم به، والحواف الدقيقة توفر تشطيبات معمارية مميزة.'}
              </p>
              <p className="text-base text-slate-600">
                {lang === 'en'
                  ? 'Every panel is engineered for Saudi Arabia\'s desert climate, balancing daylight transmission with energy efficiency. Optimized for high solar gain control and thermal performance across Riyadh, Jeddah, Dammam, and beyond.'
                  : 'كل لوح مصمم هندسياً لمناخ المملكة الصحراوي، موازناً بين نقل ضوء النهار وكفاءة الطاقة. محسّن للتحكم العالي في اكتساب الطاقة الشمسية والأداء الحراري عبر الرياض وجدة والدمام وأبعد من ذلك.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Quality Commitment */}
      <QualityCommitment />

      {/* CTA Section */}
      <section className="relative">
        <CausticsBackground className="absolute inset-0 opacity-15" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('home.cta.title')}
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-xl text-slate-700 mb-8">
            {lang === 'en'
              ? 'Transform your vision into architectural reality with premium glazing systems. Contributing to Vision 2030\'s transformation of Saudi Arabia into a world-class destination.'
              : 'حول رؤيتك إلى واقع معماري مع أنظمة الزجاج المميزة. تساهم في تحويل رؤية 2030 للمملكة إلى وجهة عالمية المستوى.'}
          </motion.p>
          <motion.div {...glassFloat} transition={{ delay: 0.2 }}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-xl bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink shadow-card"
            >
              {t('home.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
