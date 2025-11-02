'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from './Lightbox'

const projects = [
  {
    title: 'Modern Office Tower',
    category: 'Commercial',
    description: '15,000 sq ft of floor-to-ceiling glass installations',
    image: 'https://image.pollinations.ai/prompt/stunning%20modern%20office%20building%20exterior%20with%20massive%20floor%20to%20ceiling%20glass%20windows%20covering%20entire%20facade%20sleek%20contemporary%20architecture%20blue%20tinted%20reflective%20glass%20panels%20geometric%20patterns%20dramatic%20cloudless%20sky%20professional%20architectural%20photography%20ultra%20sharp%20focus%208K%20resolution%20wide%20angle%20shot%20golden%20hour%20lighting%20cinematic%20composition%20photorealistic%20high%20detail%20corporate%20headquarters%20impressive%20scale?width=1200&height=800&enhance=true',
  },
  {
    title: 'Luxury Penthouse',
    category: 'Residential',
    description: 'Custom glass railings and panoramic windows',
    image: 'https://image.pollinations.ai/prompt/breathtaking%20luxury%20penthouse%20interior%20design%20with%20elegant%20frameless%20glass%20railings%20floor%20to%20ceiling%20panoramic%20windows%20stunning%20city%20skyline%20view%20sunset%20glow%20modern%20minimalist%20furniture%20marble%20floors%20sophisticated%20lighting%20design%20professional%20interior%20photography%20ultra%20high%20definition%208K%20quality%20sharp%20focus%20on%20glass%20details%20natural%20ambient%20lighting%20cinematic%20depth%20of%20field%20photorealistic%20textures%20high%20end%20residential%20design?width=1200&height=800&enhance=true',
  },
  {
    title: 'Retail Storefront',
    category: 'Commercial',
    description: 'Frameless glass entrance and display windows',
    image: 'https://image.pollinations.ai/prompt/impressive%20modern%20retail%20storefront%20with%20massive%20frameless%20glass%20entrance%20doors%20large%20crystal%20clear%20display%20windows%20contemporary%20commercial%20architecture%20premium%20luxury%20brand%20store%20elegant%20window%20displays%20sophisticated%20LED%20lighting%20polished%20chrome%20fixtures%20evening%20shot%20with%20warm%20interior%20glow%20professional%20architectural%20photography%20ultra%20sharp%20detail%208K%20resolution%20perfect%20symmetry%20photorealistic%20glass%20reflections%20high%20end%20retail%20design?width=1200&height=800&enhance=true',
  },
  {
    title: 'Spa & Wellness Center',
    category: 'Commercial',
    description: 'Frosted glass partitions and custom shower enclosures',
    image: 'https://image.pollinations.ai/prompt/serene%20luxury%20spa%20wellness%20center%20interior%20with%20elegant%20frosted%20glass%20partitions%20premium%20custom%20shower%20enclosures%20tranquil%20atmosphere%20natural%20stone%20accents%20bamboo%20elements%20soft%20ambient%20lighting%20zen%20minimalist%20design%20water%20features%20professional%20interior%20design%20photography%20ultra%20high%20quality%208K%20resolution%20soft%20focus%20bokeh%20background%20warm%20color%20temperature%20peaceful%20mood%20photorealistic%20textures%20high%20end%20spa%20design?width=1200&height=800&enhance=true',
  },
  {
    title: 'Contemporary Home',
    category: 'Residential',
    description: 'Indoor glass staircase and sliding glass walls',
    image: 'https://image.pollinations.ai/prompt/stunning%20contemporary%20modern%20home%20interior%20featuring%20dramatic%20floating%20glass%20staircase%20with%20steel%20cables%20floor%20to%20ceiling%20sliding%20glass%20walls%20opening%20to%20outdoor%20terrace%20minimalist%20scandinavian%20design%20natural%20light%20flooding%20through%20white%20oak%20floors%20clean%20lines%20open%20concept%20living%20professional%20architectural%20photography%20ultra%20sharp%20focus%208K%20resolution%20natural%20daylight%20wide%20angle%20perspective%20photorealistic%20materials%20high%20detail%20luxury%20residential%20design?width=1200&height=800&enhance=true',
  },
  {
    title: 'Restaurant Design',
    category: 'Commercial',
    description: 'Glass wine cellar and decorative dividers',
    image: 'https://image.pollinations.ai/prompt/sophisticated%20upscale%20fine%20dining%20restaurant%20interior%20featuring%20impressive%20floor%20to%20ceiling%20glass%20wine%20cellar%20display%20with%20thousands%20of%20bottles%20elegant%20decorative%20glass%20dividers%20separating%20dining%20areas%20warm%20ambient%20lighting%20modern%20luxurious%20decor%20leather%20seating%20marble%20tables%20professional%20interior%20design%20photography%20ultra%20high%20definition%208K%20quality%20perfect%20composition%20warm%20color%20grading%20shallow%20depth%20of%20field%20photorealistic%20glass%20details%20high%20end%20restaurant%20design?width=1200&height=800&enhance=true',
  },
]

export default function Portfolio() {
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
    setCurrentImageIndex((prev) => (prev + 1) % projects.length)
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentImageIndex]

  return (
    <section id="portfolio" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing excellence in glass craftsmanship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-dark p-6 rounded-xl cursor-pointer group"
            >
              <div
                className="aspect-video rounded-lg mb-4 overflow-hidden relative cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
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
              <span className="text-glass-accent text-sm font-semibold">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        imageSrc={currentProject.image}
        imageAlt={currentProject.title}
        title={currentProject.title}
        description={`${currentProject.category} - ${currentProject.description}`}
        onNext={goToNext}
        onPrev={goToPrev}
        hasNext={true}
        hasPrev={true}
      />
    </section>
  )
}
