'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CausticsBackground from '@/components/CausticsBackground'
import GlassShimmer from '@/components/GlassShimmer'
import { motion } from 'framer-motion'
import { fadeUp, glassFloat } from '@/lib/motionPresets'
import { useLanguage } from '@/lib/language'

export default function AboutPage() {
  const { t, lang } = useLanguage()
  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="relative pt-0">
        <CausticsBackground className="absolute inset-0" opacity={0.08} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <motion.div {...glassFloat} className="glass rounded-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">
              {lang === 'en' ? 'Our Story' : 'قصتنا'}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              {lang === 'en'
                ? 'GLAZE//PRO emerged from a vision to elevate Saudi Arabia\'s architectural glass industry. Founded with expertise from Madarek-grade engineering partnerships, we specialize in precision glazing systems that combine optical clarity with thermal performance.'
                : 'ظهرت GLAZE//PRO من رؤية لرفع صناعة الزجاج المعماري في المملكة العربية السعودية. تأسست بخبرة من شراكات هندسية على مستوى Madarek، نختص في أنظمة الزجاج الدقيقة التي تجمع بين الوضوح البصري والأداء الحراري.'}
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              {lang === 'en'
                ? 'Today, with 480+ projects delivered across Riyadh, Jeddah, and Dammam, we continue to push boundaries in curtain walls, frameless systems, smart glass, and energy-efficient façades.'
                : 'اليوم، مع أكثر من 480 مشروع تم تسليمه عبر الرياض وجدة والدمام، نواصل دفع الحدود في جدران الستائر والأنظمة بدون إطار والزجاج الذكي والواجهات الموفرة للطاقة.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div {...glassFloat} transition={{ delay: 0.1 }}>
              <GlassShimmer className="p-8 text-center h-full" enable3DTilt maxTilt={8}>
                <div className="text-4xl font-bold text-accent mb-2">480+</div>
                <div className="text-white/80">{lang === 'en' ? 'Projects Across KSA' : 'مشروع عبر المملكة'}</div>
                <div className="text-white/60 text-xs mt-2">{lang === 'en' ? 'Riyadh · Jeddah · NEOM · Qiddiya' : 'الرياض · جدة · نيوم · قدية'}</div>
              </GlassShimmer>
            </motion.div>
            <motion.div {...glassFloat} transition={{ delay: 0.2 }}>
              <GlassShimmer className="p-8 text-center h-full" enable3DTilt maxTilt={8}>
                <div className="text-4xl font-bold text-accent mb-2">14-28</div>
                <div className="text-white/80">{lang === 'en' ? 'Days Lead Time' : 'يوم وقت التسليم'}</div>
                <div className="text-white/60 text-xs mt-2">{lang === 'en' ? 'Local manufacturing' : 'تصنيع محلي'}</div>
              </GlassShimmer>
            </motion.div>
            <motion.div {...glassFloat} transition={{ delay: 0.3 }}>
              <GlassShimmer className="p-8 text-center h-full" enable3DTilt maxTilt={8}>
                <div className="text-4xl font-bold text-accent mb-2">SBC</div>
                <div className="text-white/80">{lang === 'en' ? 'Saudi Building Code' : 'الكود السعودي للبناء'}</div>
                <div className="text-white/60 text-xs mt-2">{lang === 'en' ? 'ASTM · EN Compliant' : 'متوافق مع ASTM · EN'}</div>
              </GlassShimmer>
            </motion.div>
          </div>

          <motion.div {...glassFloat} className="glass rounded-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">
              {lang === 'en' ? 'Engineering Partners' : 'الشركاء الهندسيون'}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              {lang === 'en'
                ? 'We collaborate with Madarek Engineering Consultants and leading façade engineering firms to ensure every project meets the highest standards of precision, safety, and performance. All systems comply with SBC (Saudi Building Code), ASTM, and EN standards, ensuring seamless integration with Saudi Arabia\'s ambitious megaprojects.'
                : 'نتعاون مع استشاريو Madarek الهندسيين وشركات هندسة الواجهات الرائدة لضمان استيفاء كل مشروع لأعلى معايير الدقة والأمان والأداء. جميع الأنظمة متوافقة مع الكود السعودي للبناء (SBC) ومعايير ASTM وEN، مما يضمن التكامل السلس مع المشاريع الضخمة الطموحة في المملكة.'}
            </p>
          </motion.div>

          <motion.div {...glassFloat} className="glass rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-semibold text-white mb-6">
              {lang === 'en' ? 'Our Values' : 'قيمنا'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {lang === 'en' ? 'Precision' : 'الدقة'}
                </h3>
                <p className="text-white/80">
                  {lang === 'en'
                    ? 'Every panel engineered to exact specifications with superior tolerance control.'
                    : 'كل لوح مصمم هندسياً وفق مواصفات دقيقة مع تحكم متفوق في التفاوت.'}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {lang === 'en' ? 'Clarity' : 'الوضوح'}
                </h3>
                <p className="text-white/80">
                  {lang === 'en'
                    ? 'Optical excellence delivering maximum daylight transmission and visual quality.'
                    : 'تميز بصري يوفر أقصى نقل لضوء النهار وجودة بصرية.'}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {lang === 'en' ? 'Performance' : 'الأداء'}
                </h3>
                <p className="text-white/80">
                  {lang === 'en'
                    ? 'Thermal efficiency and energy savings through Low-E coatings and IGU systems.'
                    : 'كفاءة حرارية وتوفير للطاقة من خلال طلاءات Low-E وأنظمة IGU.'}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {lang === 'en' ? 'Sustainability' : 'الاستدامة'}
                </h3>
                <p className="text-white/80">
                  {lang === 'en'
                    ? 'LEED-compliant solutions contributing to energy-efficient, daylight-optimized buildings.'
                    : 'حلول متوافقة مع LEED تساهم في المباني الموفرة للطاقة والمحسنة لضوء النهار.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

