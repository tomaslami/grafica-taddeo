import Image from 'next/image'

const plants = [
  {
    title: 'Planta Pompeya',
    image: '/images2/plants/pompeya.webp'
  },
  {
    title: 'Planta Boedo',
    image: '/images2/plants/boedo.webp'
  }
]

export default function Plants() {
  return (
    <section id='plantas' className="w-full bg-gray-50 py-16 px-4 md:py-24 scroll-m-10" >
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestras <span className="text-blue-400">Plantas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {plants.map((plant) => (
            <div
              key={plant.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3]">
                <Image
                  src={plant.image}
                  alt={plant.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-medium">
                  {plant.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}