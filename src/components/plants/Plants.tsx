import Image from 'next/image'
import Link from 'next/link'

const plants = [
  {
    title: 'Planta Pompeya',
    image: '/placeholder.svg?height=600&width=800',
    href: '/plantas/pompeya'
  },
  {
    title: 'Planta Boedo',
    image: '/placeholder.svg?height=600&width=800',
    href: '/plantas/boedo'
  }
]

export default function Plants() {
  return (
    <section id='plantas' className="w-full bg-gray-50 py-16 px-4 md:py-24">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestras <span className="text-blue-400">Plantas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {plants.map((plant) => (
            <Link
              key={plant.title}
              href={plant.href}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3]">
                <Image
                  src={plant.image}
                  alt={plant.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-medium">
                  {plant.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="px-8 py-3 bg-blue-400 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  )
}