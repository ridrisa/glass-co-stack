'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/language'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)
  const [systemsMenuOpen, setSystemsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { lang, setLang, t, dir } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const productItems = [
    { name: 'Tempered Glass', href: '/products#tempered', desc: 'Safety & impact resistance' },
    { name: 'Laminated Glass', href: '/products#laminated', desc: 'Security & sound control' },
    { name: 'IGU/DGU', href: '/products#igu', desc: 'Thermal insulation' },
    { name: 'Low-E Glass', href: '/products#low-e', desc: 'Energy efficiency' },
  ]

  const systemItems = [
    { name: 'Curtain Walls', href: '/systems#curtain-wall', desc: 'Modern façade systems' },
    { name: 'Spider Systems', href: '/systems#spider', desc: 'Point-fixed glazing' },
    { name: 'Frameless Partitions', href: '/systems#frameless', desc: 'Interior glass walls' },
    { name: 'Skylights', href: '/systems#skylight', desc: 'Natural daylighting' },
  ]

  const navItems = [
    {
      label: t('nav.products'),
      href: '/products',
      hasMenu: true,
      menuType: 'products' as const,
    },
    {
      label: t('nav.systems'),
      href: '/systems',
      hasMenu: true,
      menuType: 'systems' as const,
    },
    {
      label: 'Tools',
      href: '/configurator',
      hasMenu: false,
    },
    {
      label: t('nav.specs'),
      href: '/specs',
      hasMenu: false,
    },
    {
      label: t('nav.projects'),
      href: '/projects',
      hasMenu: false,
    },
    {
      label: t('nav.about'),
      href: '/about',
      hasMenu: false,
    },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-nav border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className={`flex ${dir === 'rtl' ? 'flex-row-reverse' : ''} justify-between items-center h-20`}>
          <Link 
            href="/" 
            className="flex-shrink-0 group relative"
          >
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
            >
              GLAZE<span className="text-accent relative">
                //
                <span className="absolute inset-0 blur-sm opacity-50">//</span>
              </span>PRO
            </motion.h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasMenu && item.menuType === 'products') setProductsMenuOpen(true)
                  if (item.hasMenu && item.menuType === 'systems') setSystemsMenuOpen(true)
                }}
                onMouseLeave={() => {
                  if (item.hasMenu && item.menuType === 'products') setProductsMenuOpen(false)
                  if (item.hasMenu && item.menuType === 'systems') setSystemsMenuOpen(false)
                }}
              >
                <Link
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-xl transition-all duration-300 group flex items-center gap-1 ${
                    isActive(item.href)
                      ? 'text-accent bg-slate-100 shadow-lg shadow-accent/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  {item.hasMenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-xl"
                      initial={false}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {!isActive(item.href) && (
                    <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-slate-50 transition-colors duration-300" />
                  )}
                </Link>

                {/* Dropdown Menus */}
                <AnimatePresence>
                  {item.hasMenu && item.menuType === 'products' && productsMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 glass-dark rounded-xl border border-slate-200 shadow-xl overflow-hidden"
                    >
                      <div className="p-3">
                        {productItems.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            className="block px-4 py-3 rounded-lg hover:bg-slate-100 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-accent transition-colors">
                              {product.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">{product.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {item.hasMenu && item.menuType === 'systems' && systemsMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 glass-dark rounded-xl border border-slate-200 shadow-xl overflow-hidden"
                    >
                      <div className="p-3">
                        {systemItems.map((system) => (
                          <Link
                            key={system.name}
                            href={system.href}
                            className="block px-4 py-3 rounded-lg hover:bg-slate-100 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-accent transition-colors">
                              {system.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">{system.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="ml-2 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent font-medium"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="ml-2 bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
              >
                {t('nav.rfq')}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-white p-3 hover:bg-slate-800/30 focus:outline-none focus:ring-2 focus:ring-accent rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark border-t border-slate-200 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-3">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-5 py-3 rounded-xl transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-accent bg-slate-100 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4 border-t border-slate-200 space-y-3"
              >
                <button
                  onClick={() => {
                    setLang(lang === 'en' ? 'ar' : 'en')
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full px-5 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/30 text-center font-medium transition-all duration-200"
                >
                  {lang === 'en' ? 'العربية' : 'English'}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-lg shadow-accent/30 transition-all duration-200"
                >
                  {t('nav.rfq')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
