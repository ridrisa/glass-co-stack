'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.systems': 'Systems',
    'nav.specs': 'Specs',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.rfq': 'RFQ',
    
    // Hero
    'hero.title': 'Engineering Light. Designing Vision.',
    'hero.subtitle': 'Saudi Architectural Glass Systems — Precision, Clarity, Performance. Supporting Vision 2030.',
    'hero.cta': 'Start Your RFQ',
    
    // Home sections
    'home.highlights': 'Highlights',
    'home.featured': 'Featured Systems',
    'home.material': 'Material Character',
    'home.cta.title': 'Ready to Transform Your Space?',
    'home.cta.button': 'Get Started',
    
    // Products
    'products.title': 'Glass Products',
    'products.subtitle': 'Premium glass types engineered for architectural excellence',
    
    // Systems
    'systems.title': 'Glazing Systems',
    'systems.subtitle': 'Complete system solutions for modern architecture',
    
    // Specs
    'specs.title': 'Technical Specifications',
    'specs.subtitle': 'Interactive specification explorer',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Showcasing excellence in glazing across Saudi Arabia',
    
    // About
    'about.title': 'About GLAZE//PRO',
    'about.subtitle': 'Engineering partners in architectural glass innovation',
    
    // Contact
    'contact.title': 'Request a Quote',
    'contact.subtitle': 'Tell us about your project requirements',
    
    // Common
    'common.download': 'Download',
    'common.viewAll': 'View All',
    'common.learnMore': 'Learn More',
    'common.close': 'Close',
    'common.submit': 'Submit',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.back': 'Back',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.systems': 'الأنظمة',
    'nav.specs': 'المواصفات',
    'nav.projects': 'المشاريع',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.rfq': 'طلب عرض سعر',
    
    // Hero
    'hero.title': 'هندسة الضوء. تصميم الرؤية.',
    'hero.subtitle': 'أنظمة الزجاج المعماري السعودي — الدقة، الوضوح، الأداء. دعماً لرؤية 2030.',
    'hero.cta': 'ابدأ طلبك',
    
    // Home sections
    'home.highlights': 'الأبرز',
    'home.featured': 'الأنظمة المميزة',
    'home.material': 'خصائص المواد',
    'home.cta.title': 'هل أنت مستعد لتحويل مساحتك؟',
    'home.cta.button': 'ابدأ الآن',
    
    // Products
    'products.title': 'منتجات الزجاج',
    'products.subtitle': 'أنواع زجاج مميزة مصممة للتميز المعماري',
    
    // Systems
    'systems.title': 'أنظمة الزجاج',
    'systems.subtitle': 'حلول نظامية كاملة للعمارة الحديثة',
    
    // Specs
    'specs.title': 'المواصفات التقنية',
    'specs.subtitle': 'مستكشف المواصفات التفاعلي',
    
    // Projects
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'إبراز التميز في الزجاج عبر المملكة العربية السعودية',
    
    // About
    'about.title': 'عن GLAZE//PRO',
    'about.subtitle': 'شركاء هندسيون في ابتكار الزجاج المعماري',
    
    // Contact
    'contact.title': 'طلب عرض سعر',
    'contact.subtitle': 'أخبرنا عن متطلبات مشروعك',
    
    // Common
    'common.download': 'تحميل',
    'common.viewAll': 'عرض الكل',
    'common.learnMore': 'المزيد',
    'common.close': 'إغلاق',
    'common.submit': 'إرسال',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.back': 'رجوع',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to Arabic for Saudi market
  const [lang, setLangState] = useState<Language>('ar')

  useEffect(() => {
    // Load from localStorage or detect browser language
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLangState(saved)
    } else {
      // Auto-detect: prefer Arabic for Saudi market
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'ar') {
        setLangState('ar')
      }
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('language', newLang)
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const t = (key: string): string => {
    return translations[lang]?.[key] || key
  }

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

