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

    // Client Logos
    'clients.title': 'Trusted by Leading Projects',
    'clients.subtitle': 'Delivering precision-engineered glass solutions to Saudi Arabia\'s most iconic developments',
    'clients.vision2030': 'Proud Partner of Vision 2030',

    // Company Stats
    'stats.title': 'Engineering Excellence by the Numbers',
    'stats.subtitle': 'Over a decade of precision glass engineering, delivering architectural solutions that define Saudi Arabia\'s modern skyline',
    'stats.projects': 'Projects Delivered',
    'stats.projectsSub': 'Across KSA since 2010',
    'stats.area': 'Square Meters',
    'stats.areaSub': 'Glass installed annually',
    'stats.leadTime': 'Days Lead Time',
    'stats.leadTimeSub': 'Average delivery window',
    'stats.quality': 'Quality Rating',
    'stats.qualitySub': 'Client satisfaction score',
    'stats.support': 'Technical Support',
    'stats.supportSub': 'Post-installation service',
    'stats.certified': 'Certified Quality',
    'stats.certifiedSub': 'International standards',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted partnerships built on precision, quality, and reliability',

    // Quality Commitment
    'quality.title': 'Quality Standards & Commitment',
    'quality.subtitle': 'Our commitment to excellence is reflected in adherence to international standards and rigorous quality control processes',
    'quality.astm': 'ASTM Standards',
    'quality.astmDesc': 'We follow ASTM international standards for glass manufacturing and testing',
    'quality.en': 'EN Standards',
    'quality.enDesc': 'European standards compliance for structural and safety glass applications',
    'quality.sbc': 'SBC Requirements',
    'quality.sbcDesc': 'Saudi Building Code adherence for all local construction projects',
    'quality.leed': 'LEED Ready',
    'quality.leedDesc': 'Products designed to contribute to green building certifications',
    'quality.qa': 'Quality Assurance',
    'quality.tech': 'Technical Excellence',
    'quality.safety': 'Safety First',
    'quality.disclaimer': 'We reference industry standards as benchmarks for quality and safety. Specific certifications and test reports are available for individual projects upon request. Performance values are indicative unless verified through project-specific lab testing.',

    // Configurator
    'configurator.title': 'Interactive Design Tools',
    'configurator.subtitle': 'Configure your glass specifications and calculate technical parameters instantly. Perfect for preliminary planning and feasibility studies.',
    'configurator.glassTab': 'Glass Configurator',
    'configurator.calcTab': 'Specs Calculator',

    // Case Studies
    'caseStudies.title': 'Case Studies',
    'caseStudies.subtitle': 'Real-world projects showcasing our engineering expertise, innovative solutions, and commitment to excellence across Saudi Arabia\'s most demanding applications.',
    'caseStudies.area': 'Area',
    'caseStudies.system': 'System',
    'caseStudies.challenge': 'Challenge',
    'caseStudies.solution': 'Solution',
    'caseStudies.readMore': 'Read Full Case Study',
    'caseStudies.cta': 'Start Your Project',
    'caseStudies.ctaDesc': 'Every project is unique. Let\'s discuss how our glazing solutions can bring your vision to life.',
    'caseStudies.ctaButton': 'Request Consultation',
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

    // Client Logos
    'clients.title': 'موثوق به من قبل المشاريع الرائدة',
    'clients.subtitle': 'تقديم حلول زجاجية دقيقة الهندسة لأكثر المشاريع السعودية شهرة',
    'clients.vision2030': 'شريك فخور في رؤية 2030',

    // Company Stats
    'stats.title': 'التميز الهندسي بالأرقام',
    'stats.subtitle': 'أكثر من عقد من الهندسة الزجاجية الدقيقة، تقديم حلول معمارية تحدد أفق المملكة الحديث',
    'stats.projects': 'المشاريع المنفذة',
    'stats.projectsSub': 'عبر المملكة منذ 2010',
    'stats.area': 'متر مربع',
    'stats.areaSub': 'زجاج مركب سنوياً',
    'stats.leadTime': 'أيام التسليم',
    'stats.leadTimeSub': 'متوسط فترة التسليم',
    'stats.quality': 'تقييم الجودة',
    'stats.qualitySub': 'درجة رضا العملاء',
    'stats.support': 'الدعم الفني',
    'stats.supportSub': 'خدمة ما بعد التركيب',
    'stats.certified': 'جودة معتمدة',
    'stats.certifiedSub': 'معايير دولية',

    // Testimonials
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'شراكات موثوقة مبنية على الدقة والجودة والموثوقية',

    // Quality Commitment
    'quality.title': 'معايير الجودة والالتزام',
    'quality.subtitle': 'يتجلى التزامنا بالتميز في الالتزام بالمعايير الدولية وعمليات مراقبة الجودة الصارمة',
    'quality.astm': 'معايير ASTM',
    'quality.astmDesc': 'نتبع معايير ASTM الدولية لتصنيع الزجاج واختباره',
    'quality.en': 'معايير EN',
    'quality.enDesc': 'الامتثال للمعايير الأوروبية للزجاج الإنشائي والزجاج الآمن',
    'quality.sbc': 'متطلبات كود البناء السعودي',
    'quality.sbcDesc': 'الالتزام بكود البناء السعودي لجميع المشاريع المحلية',
    'quality.leed': 'جاهز لـ LEED',
    'quality.leedDesc': 'منتجات مصممة للمساهمة في شهادات المباني الخضراء',
    'quality.qa': 'ضمان الجودة',
    'quality.tech': 'التميز التقني',
    'quality.safety': 'الأمان أولاً',
    'quality.disclaimer': 'نشير إلى معايير الصناعة كمعايير للجودة والسلامة. تتوفر شهادات محددة وتقارير اختبار للمشاريع الفردية عند الطلب. قيم الأداء إرشادية ما لم يتم التحقق منها من خلال اختبار معملي خاص بالمشروع.',

    // Configurator
    'configurator.title': 'أدوات التصميم التفاعلية',
    'configurator.subtitle': 'قم بتكوين مواصفات الزجاج الخاصة بك وحساب المعايير التقنية على الفور. مثالي للتخطيط الأولي ودراسات الجدوى.',
    'configurator.glassTab': 'مكون الزجاج',
    'configurator.calcTab': 'حاسبة المواصفات',

    // Case Studies
    'caseStudies.title': 'دراسات الحالة',
    'caseStudies.subtitle': 'مشاريع واقعية تعرض خبرتنا الهندسية وحلولنا المبتكرة والتزامنا بالتميز عبر التطبيقات الأكثر تطلباً في المملكة.',
    'caseStudies.area': 'المساحة',
    'caseStudies.system': 'النظام',
    'caseStudies.challenge': 'التحدي',
    'caseStudies.solution': 'الحل',
    'caseStudies.readMore': 'قراءة دراسة الحالة كاملة',
    'caseStudies.cta': 'ابدأ مشروعك',
    'caseStudies.ctaDesc': 'كل مشروع فريد من نوعه. دعنا نناقش كيف يمكن لحلول الزجاج لدينا تحقيق رؤيتك.',
    'caseStudies.ctaButton': 'طلب استشارة',
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

