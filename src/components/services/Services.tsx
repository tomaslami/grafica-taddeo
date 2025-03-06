"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Comunicación Visual',
    image: '/comunicacion-visual/comuVisual-portada.jpg',
    href: '/comunicacion-visual',
    gridClass: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Impresión Offset',
    image: '/impresion-offset/offset-portada.jpg',
    href: '/impresion-offset',
    gridClass: 'md:col-span-1'
  },
  {
    title: 'Merchandising',
    image: '/merchandising/Merch4.webp',
    href: '/merchandising',
    gridClass: 'md:col-span-1'
  },
  {
    title: 'Envases y Embalajes',
    image: '/envases-embalajes/envases_2.webp',
    href: '/envases-embalajes',
    gridClass: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Vasos Polipapel',
    image: '/vasos-polipapel/vasos_3.webp',
    href: '/vasos-polipapel',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Impresión Digital',
    image: '/impresion-digital/Impresion1.webp',
    href: '/impresion-digital',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
]

export default function Services() {
  return (
    <section id='servicios' className="w-full bg-white py-12 px-4 md:py-20 scroll-m-10 max-w-7xl mx-auto">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium">
            Descubrí nuestros <span className="text-pink-500">servicios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl ${service.gridClass}`}
            >
              <Link href={service.href}>
                <div className="group relative h-full w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg md:text-xl font-medium">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

