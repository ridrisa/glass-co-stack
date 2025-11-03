'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language'

export default function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer className="border-t border-slate-200 bg-ink/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
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
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              {lang === 'en'
                ? 'Saudi Arabia\'s specialized architectural glazing systems company — transforming façades with precision-engineered glass solutions.'
                : 'شركة أنظمة الزجاج المعماري المتخصصة في المملكة العربية السعودية — تحويل الواجهات بحلول زجاجية دقيقة الهندسة.'}
            </p>
            <div className="text-slate-500 text-xs space-y-1">
              <p>{lang === 'en' ? 'Riyadh, Saudi Arabia' : 'الرياض، المملكة العربية السعودية'}</p>
              <p>{lang === 'en' ? 'CR: 1234567890' : 'السجل التجاري: 1234567890'}</p>
              <p className="text-saudi-green mt-2">
                {lang === 'en' ? '// Supporting Vision 2030' : '// دعماً لرؤية 2030'}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('nav.products')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Tempered Glass' : 'زجاج مقسى'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Low-E IGU' : 'وحدات Low-E'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Smart Glass' : 'زجاج ذكي'}
                </Link>
              </li>
              <li>
                <Link href="/specs" className="text-slate-600 hover:text-accent transition-colors">
                  {t('nav.specs')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('nav.systems')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/systems" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Curtain Walls' : 'جدران الستائر'}
                </Link>
              </li>
              <li>
                <Link href="/systems" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Frameless Systems' : 'أنظمة بدون إطار'}
                </Link>
              </li>
              <li>
                <Link href="/systems" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Skylights' : 'منورات'}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 hover:text-accent transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{lang === 'en' ? 'Resources' : 'الموارد'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/configurator" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Glass Configurator' : 'مكون الزجاج'}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Case Studies' : 'دراسات الحالة'}
                </Link>
              </li>
              <li>
                <Link href="/specs" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Technical Specs' : 'المواصفات الفنية'}
                </Link>
              </li>
              <li>
                <Link href="/brand-guidelines" className="text-slate-600 hover:text-accent transition-colors">
                  {lang === 'en' ? 'Brand Guidelines' : 'إرشادات العلامة التجارية'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{lang === 'en' ? 'Contact' : 'اتصل بنا'}</h4>
            <ul className="space-y-2 text-sm text-slate-600">
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
              <li className="pt-4">
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-accent/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-accent/20 flex items-center justify-center transition-colors" aria-label="Twitter">
                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            {lang === 'en'
              ? '© 2024 GLAZE//PRO. All rights reserved. | Supporting Vision 2030'
              : '© 2024 GLAZE//PRO. جميع الحقوق محفوظة. | دعماً لرؤية 2030'}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="text-slate-500 hover:text-accent transition-colors">
              {t('nav.about')}
            </Link>
            <span className="text-slate-900/30">|</span>
            <a href="#" className="text-slate-500 hover:text-accent transition-colors">
              {lang === 'en' ? 'Privacy' : 'الخصوصية'}
            </a>
            <span className="text-slate-900/30">|</span>
            <a href="#" className="text-slate-500 hover:text-accent transition-colors">
              {lang === 'en' ? 'Terms' : 'الشروط'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
