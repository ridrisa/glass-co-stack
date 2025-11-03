'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteWizard from '@/components/QuoteWizard'
import CausticsBackground from '@/components/CausticsBackground'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import { useLanguage } from '@/lib/language'

export default function ContactPage() {
  const { t, lang } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-ink via-primary to-ink">
      <Navbar />
      <section className="relative">
        <CausticsBackground className="absolute inset-0" opacity={0.1} />
        <div className="max-w-7xl mx-auto relative">
          <motion.h1 {...fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </motion.h1>
          <motion.p {...fadeUp} className="text-slate-300 mt-2 max-w-3xl text-lg mb-8">
            {t('contact.subtitle')}
          </motion.p>
          <motion.p {...fadeUp} className="text-slate-400 max-w-3xl mb-8">
            {lang === 'en'
              ? 'Share your drawings and scope to receive a detailed quotation with lead times and performance data.'
              : 'شارك رسوماتك ونطاق المشروع لتلقي عرض أسعار مفصل مع أوقات التسليم وبيانات الأداء.'}
          </motion.p>
          <div className="mt-8">
            <QuoteWizard />
          </div>

          <motion.section {...fadeUp} className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {lang === 'en' ? 'Riyadh Headquarters' : 'المقر الرئيسي - الرياض'}
              </h3>
              <p className="text-slate-300 text-sm mb-2">
                {lang === 'en' ? 'King Fahd Road, Al Olaya' : 'طريق الملك فهد، العليا'}
              </p>
              <p className="text-slate-400 text-xs mb-3">
                {lang === 'en' ? 'Tel: +966 11 XXX XXXX' : 'هاتف: 966 11 XXX XXXX+'}
              </p>
              <p className="text-slate-300 text-sm whitespace-pre-line">
                {lang === 'en' 
                  ? 'Sun–Thu: 8:00–17:00\nSat: 9:00–14:00\nFri: Closed'
                  : 'الأحد–الخميس: 8:00–17:00\nالسبت: 9:00–14:00\nالجمعة: مغلق'}
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {lang === 'en' ? 'Jeddah Branch' : 'فرع جدة'}
              </h3>
              <p className="text-slate-300 text-sm mb-2">
                {lang === 'en' ? 'Prince Sultan Street, Al Shati' : 'شارع الأمير سلطان، الشاطئ'}
              </p>
              <p className="text-slate-400 text-xs mb-3">
                {lang === 'en' ? 'Tel: +966 12 XXX XXXX' : 'هاتف: 966 12 XXX XXXX+'}
              </p>
              <p className="text-slate-300 text-sm whitespace-pre-line">
                {lang === 'en'
                  ? 'Sun–Thu: 8:00–17:00\nSat: 9:00–14:00\nFri: Closed'
                  : 'الأحد–الخميس: 8:00–17:00\nالسبت: 9:00–14:00\nالجمعة: مغلق'}
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {lang === 'en' ? 'Dammam Branch' : 'فرع الدمام'}
              </h3>
              <p className="text-slate-300 text-sm mb-2">
                {lang === 'en' ? 'King Faisal Street, Al Faisaliyah' : 'شارع الملك فيصل، الفيصلية'}
              </p>
              <p className="text-slate-400 text-xs mb-3">
                {lang === 'en' ? 'Tel: +966 13 XXX XXXX' : 'هاتف: 966 13 XXX XXXX+'}
              </p>
              <p className="text-slate-300 text-sm whitespace-pre-line">
                {lang === 'en'
                  ? 'Sun–Thu: 8:00–17:00\nSat: 9:00–14:00\nFri: Closed'
                  : 'الأحد–الخميس: 8:00–17:00\nالسبت: 9:00–14:00\nالجمعة: مغلق'}
              </p>
            </div>
          </motion.section>

          <motion.div {...fadeUp} className="mt-12">
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {lang === 'en' ? 'Map Location' : 'موقع الخريطة'}
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.47058649846!2d46.67529531500088!3d24.713484984120936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={lang === 'en' ? 'Office Location' : 'موقع المكتب'}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

