import Image from 'next/image'
import Link from 'next/link'

const plants = [
  {
    title: 'Planta Pompeya',
    image: '/plants/pompeya.webp',
    map: 'https://www.google.com.ar/maps/place/Comuna+4,+Charr%C3%BAa+3480,+C1437+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6579811,-58.4284372,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccb9b0262cfc3:0x899a96357286255a!8m2!3d-34.6579855!4d-58.4258623!16s%2Fg%2F11csmks9rq?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    title: 'Planta Boedo',
    image: '/plants/boedo.webp',
    map: 'https://www.google.com.ar/maps/place/Av.+Juan+de+Garay+3950,+C1257+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6319313,-58.4224614,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccbaa4c023991:0x9c8bfd29a22c9659!8m2!3d-34.6319357!4d-58.4198865!16s%2Fg%2F11f3thd5zs?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D'
  }
]

export default function Plants() {
  return (
    <section id='plantas' className="w-full bg-gray-50 py-16 px-4 md:py-24 max-w-7xl mx-auto" >
      <div className="w-full sm:max-w-6xl max-w-7xl mx-auto sm:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestras <span className="text-blue-400">Plantas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {plants.map((plant) => (
            <div
              key={plant.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Link
              target='_blank'
              href={plant.map}
              >
              <div
               className="aspect-[4/3]">
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
                </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}