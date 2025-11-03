'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RefractionCard from '@/components/RefractionCard'
import CausticsBackground from '@/components/CausticsBackground'
import { motion } from 'framer-motion'
import { fadeUp, glassFloat } from '@/lib/motionPresets'
import { useLanguage } from '@/lib/language'

const SYSTEMS = [
  {
    titleEn: 'Curtain Wall (Stick/Unitized)',
    titleAr: 'جدار الستائر (عصا/موحد)',
    subtitleEn: 'Façade envelopes with thermal breaks · Superior weather resistance',
    subtitleAr: 'غلافات الواجهة مع فواصل حرارية · مقاومة عالية للطقس',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    titleEn: 'Spider / Point-Fixed',
    titleAr: 'عنكبوتي / نقطة ثابتة',
    subtitleEn: 'Minimal hardware · Laminated SGP recommended · Maximum transparency',
    subtitleAr: 'حد أدنى من المعدات · مصفح SGP موصى به · أقصى شفافية',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
  },
  {
    titleEn: 'Frameless Doors & Partitions',
    titleAr: 'أبواب وأقسام بدون إطار',
    subtitleEn: 'Patch fittings · Soft close options · Seamless design',
    subtitleAr: 'تركيبات بقعية · خيارات إغلاق ناعمة · تصميم سلس',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
  },
  {
    titleEn: 'Shopfronts',
    titleAr: 'واجهات المحلات',
    subtitleEn: 'High-clarity, impact-rated storefronts · Custom configurations',
    subtitleAr: 'واجهات عالية الوضوح، مقاومة للصدمات · تكوينات مخصصة',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  },
  {
    titleEn: 'Skylights & Canopies',
    titleAr: 'منورات ومظلات',
    subtitleEn: 'Drainage & sealing for weatherproof daylighting · Energy efficient',
    subtitleAr: 'تصريف وختم لمقاومة الطقس · موفر للطاقة',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
  },
  {
    titleEn: 'Balustrades & Handrails',
    titleAr: 'درابزين ومراجيح',
    subtitleEn: 'Laminated safety glass · Tested assemblies · Code compliant',
    subtitleAr: 'زجاج أمان مصفح · تجميعات مختبرة · متوافق مع الكود',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
  },
  {
    titleEn: 'Shower Enclosures',
    titleAr: 'أقسام الدش',
    subtitleEn: 'Tempered glass with hydrophobic coatings · Easy maintenance',
    subtitleAr: 'زجاج مقسى مع طلاءات كارهة للماء · صيانة سهلة',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=800&h=600&fit=crop',
  },
]

export default function SystemsPage() {
  const { t, lang } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="relative">
        <CausticsBackground className="absolute inset-0" opacity={0.15} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 {...fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('systems.title')}
          </motion.h1>
          <motion.p {...fadeUp} className="text-slate-700 mt-2 max-w-3xl text-lg mb-8">
            {t('systems.subtitle')}
          </motion.p>
          <motion.p {...fadeUp} className="text-slate-600 max-w-3xl mb-8">
            {lang === 'en'
              ? 'Each system is engineered for clarity, safety, and long-term performance in Saudi Arabia\'s demanding climate. All systems comply with SBC (Saudi Building Code), ASTM, and EN standards — trusted by leading Vision 2030 megaprojects including NEOM, Qiddiya, and The Red Sea.'
              : 'كل نظام مصمم هندسياً للوضوح والأمان والأداء طويل الأمد في مناخ المملكة المتطلب. جميع الأنظمة متوافقة مع الكود السعودي للبناء (SBC) ومعايير ASTM وEN — موثوق بها من قبل مشاريع رؤية 2030 الرائدة بما في ذلك نيوم وقدية والبحر الأحمر.'}
          </motion.p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SYSTEMS.map((system, idx) => (
              <motion.div
                key={system.titleEn}
                {...glassFloat}
                transition={{ delay: idx * 0.1 }}
              >
                <RefractionCard
                  image={system.image}
                  title={lang === 'en' ? system.titleEn : system.titleAr}
                  subtitle={lang === 'en' ? system.subtitleEn : system.subtitleAr}
                  enable3DTilt
                  maxTilt={12}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
