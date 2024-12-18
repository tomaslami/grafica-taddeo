import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Impresión Offset',
    image: '/placeholder.svg?height=400&width=600',
    href: '/servicios/impresion-offset'
  },
  {
    title: 'Comunicación Visual',
    image: '/placeholder.svg?height=400&width=600',
    href: '/servicios/comunicacion-visual'
  },
  {
    title: 'Impresión Digital',
    image: '/placeholder.svg?height=400&width=600',
    href: '/servicios/impresion-digital'
  },
  {
    title: 'Envases y Embalajes',
    image: '/placeholder.svg?height=400&width=800',
    href: '/servicios/envases-y-embalajes'
  },
  {
    title: 'Merchandising',
    image: '/placeholder.svg?height=400&width=800',
    href: '/servicios/merchandising'
  }
]

export default function Services() {
  return (
    <section id='servicios' className="w-full bg-gray-50 py-16 px-4 md:py-24">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¡Descubrí Nuestros <span className="text-pink-500">Servicios</span>!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
          {/* First row - 3 equal cards */}
          {services.slice(0, 3).map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="md:col-span-2 group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-medium">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}

          {/* Second row - 2 wider cards */}
          {services.slice(3).map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="md:col-span-3 group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[2/1]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-medium">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="px-8 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  )
}
