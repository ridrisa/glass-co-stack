'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from './Lightbox'

const services = [
  {
    title: 'Residential Glass',
    description: 'Custom windows, shower enclosures, mirrors, and glass railings for your home.',
    image: 'https://image.pollinations.ai/prompt/beautiful%20residential%20home%20interior%20showcasing%20premium%20custom%20glass%20windows%20with%20natural%20light%20streaming%20through%20elegant%20frameless%20shower%20enclosure%20in%20luxury%20bathroom%20large%20decorative%20mirrors%20modern%20minimalist%20design%20clean%20lines%20professional%20interior%20photography%20ultra%20high%20definition%208K%20quality%20soft%20natural%20lighting%20warm%20welcoming%20atmosphere%20photorealistic%20textures%20sharp%20focus%20on%20glass%20details%20residential%20elegance?width=600&height=600&enhance=true',
  },
  {
    title: 'Commercial Projects',
    description: 'Storefronts, office partitions, and large-scale glass installations.',
    image: 'https://image.pollinations.ai/prompt/impressive%20commercial%20office%20building%20interior%20with%20floor%20to%20ceiling%20glass%20storefront%20modern%20frameless%20glass%20partitions%20dividing%20open%20workspace%20sleek%20corporate%20design%20polished%20aluminum%20frames%20professional%20business%20environment%20contemporary%20architecture%20natural%20daylight%20flooding%20space%20ultra%20sharp%20focus%208K%20resolution%20professional%20architectural%20photography%20clean%20geometric%20lines%20photorealistic%20glass%20reflections%20high%20end%20commercial%20design?width=600&height=600&enhance=true',
  },
  {
    title: 'Custom Fabrication',
    description: 'Precision glass cutting, edging, and custom shapes for any project.',
    image: 'https://image.pollinations.ai/prompt/advanced%20glass%20fabrication%20workshop%20featuring%20state%20of%20the%20art%20CNC%20glass%20cutting%20machine%20precision%20equipment%20custom%20shaped%20glass%20panels%20professional%20craftsmen%20at%20work%20industrial%20setting%20safety%20equipment%20modern%20manufacturing%20facility%20detailed%20close%20up%20shots%20professional%20industrial%20photography%20ultra%20high%20quality%208K%20resolution%20dramatic%20lighting%20showcasing%20precision%20photorealistic%20metal%20and%20glass%20textures%20technical%20expertise%20visible?width=600&height=600&enhance=true',
  },
  {
    title: 'Installation Services',
    description: 'Professional installation by certified technicians with warranty protection.',
    image: 'https://image.pollinations.ai/prompt/professional%20certified%20glass%20installation%20team%20carefully%20installing%20large%20window%20panel%20modern%20construction%20site%20safety%20harnesses%20hard%20hats%20protective%20equipment%20precision%20work%20high%20rise%20building%20installation%20expert%20technicians%20teamwork%20professional%20construction%20photography%20ultra%20sharp%20detail%208K%20resolution%20natural%20daylight%20action%20shot%20photorealistic%20safety%20conscious%20professional%20craftsmanship%20quality%20workmanship?width=600&height=600&enhance=true',
  },
  {
    title: 'Energy Efficient',
    description: 'Low-E glass and insulated units for maximum energy savings.',
    image: 'https://image.pollinations.ai/prompt/advanced%20energy%20efficient%20low-e%20coated%20glass%20windows%20double%20glazed%20insulated%20glass%20units%20thermal%20performance%20demonstration%20sustainable%20green%20building%20technology%20cross%20section%20view%20showing%20layers%20modern%20eco%20friendly%20architecture%20reduced%20heat%20transfer%20illustration%20professional%20technical%20photography%20ultra%20high%20definition%208K%20quality%20perfect%20clarity%20photorealistic%20glass%20coatings%20environmental%20sustainability%20focus%20innovative%20technology?width=600&height=600&enhance=true',
  },
  {
    title: 'Safety Glass',
    description: 'Tempered and laminated glass solutions for enhanced security.',
    image: 'https://image.pollinations.ai/prompt/robust%20tempered%20safety%20glass%20panel%20demonstration%20laminated%20security%20glazing%20shatter%20resistant%20technology%20impact%20test%20scenario%20protective%20barrier%20applications%20modern%20security%20solutions%20detailed%20close%20up%20of%20glass%20edge%20quality%20professional%20technical%20photography%20ultra%20high%20quality%208K%20resolution%20dramatic%20studio%20lighting%20crystal%20clear%20detail%20photorealistic%20glass%20texture%20safety%20certification%20marks%20visible%20premium%20security%20product?width=600&height=600&enhance=true',
  },
]

export default function Services() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % services.length)
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const currentService = services[currentImageIndex]

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive glass solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl hover:animate-glow transition-all h-full overflow-hidden group"
            >
              <div
                className="relative h-48 w-full overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        imageSrc={currentService.image}
        imageAlt={currentService.title}
        title={currentService.title}
        description={currentService.description}
        onNext={goToNext}
        onPrev={goToPrev}
        hasNext={true}
        hasPrev={true}
      />
    </section>
  )
}
