'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language'

export default function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-ink/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              GLAZE<span className="text-accent relative">
                //
                <span className="absolute inset-0 blur-sm opacity-50">//</span>
              </span>PRO
            </h3>
            <p className="text-accent/80 text-sm font-medium mb-4 italic">
              {lang === 'en'
                ? 'Precision in Transparency.'
                : 'دقة في الشفافية.'}
            </p>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              {lang === 'en'
                ? 'Saudi Arabia\'s specialized architectural glazing systems company — transforming façades with precision-engineered glass solutions.'
                : 'شركة أنظمة الزجاج المعماري المتخصصة في المملكة العربية السعودية — تحويل الواجهات بحلول زجاجية دقيقة الهندسة.'}
            </p>
            <div className="text-white/60 text-xs space-y-1">
              <p>{lang === 'en' ? 'Riyadh, Saudi Arabia' : 'الرياض، المملكة العربية السعودية'}</p>
              <p>{lang === 'en' ? 'CR: 1234567890' : 'السجل التجاري: 1234567890'}</p>
              <p className="text-saudi-green mt-2">
                {lang === 'en' ? '// Supporting Vision 2030' : '// دعماً لرؤية 2030'}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t('nav.products')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-white/70 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Tempered Glass' : 'زجاج مقسى'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Low-E IGU' : 'وحدات Low-E'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Smart Glass' : 'زجاج ذكي'}
                </Link>
              </li>
              <li>
                <Link href="/specs" className="text-white/70 hover:text-accent transition-colors">
                  {t('nav.specs')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t('nav.systems')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/systems" className="text-white/70 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Curtain Walls' : 'جدران الستائر'}
                </Link>
              </li>
              <li>
                <Link href="/systems" className="text-white/70 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Frameless Systems' : 'أنظمة بدون إطار'}
                </Link>
              </li>
              <li>
                <Link href="/systems" className="text-white/70 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Skylights' : 'منورات'}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-accent transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{lang === 'en' ? 'Contact' : 'اتصل بنا'}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:info@glazepro.sa" className="hover:text-accent transition-colors">
                  info@glazepro.sa
                </a>
              </li>
              <li>
                <a href="tel:+966112345678" className="hover:text-accent transition-colors">
                  +966 11 234 5678
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-accent hover:text-accent/80 font-medium">
                  {t('nav.rfq')} →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            {lang === 'en'
              ? '© 2024 GLAZE//PRO. All rights reserved. | Supporting Vision 2030'
              : '© 2024 GLAZE//PRO. جميع الحقوق محفوظة. | دعماً لرؤية 2030'}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="text-white/60 hover:text-accent transition-colors">
              {t('nav.about')}
            </Link>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              {lang === 'en' ? 'Privacy' : 'الخصوصية'}
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              {lang === 'en' ? 'Terms' : 'الشروط'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
