import Image from "next/image"
import Link from "next/link"

const paragraphs = [
  "<strong>SOMOS</strong> una compañía especializada en impresión y soluciones gráficas que nació en el año 1992, ofreciendo trabajos de calidad elaborados con equipo profesional.",
  "<strong>OFRECEMOS</strong> un servicio de atención personalizada y asesoramiento tanto para la selección del tipo de papel como para los sistemas de impresión más adecuados. Logramos que el mensaje que desea proyectar sea distinguido y se comunique directamente al público deseado de forma eficaz.",
  "<strong>ESTAMOS</strong> en constante actualización en recursos humanos y tecnología lo que nos permite la obtención de productos de máxima calidad, entrega en tiempo y forma y reducción de los costos finales.",
  "<strong>SABEMOS</strong> que la imagen es fundamental para lograr un alcance impresivo a través de sus productos, por eso elaboramos trabajos priorizando la calidad en el resultado final contemplando siempre los tiempos y expectativas de entrega.",
]

export default function AboutSection() {
  return (
    <section id="historia" className="w-full bg-white sm:py-12 md:py-16 max-w-7xl mx-auto">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Columna de imágenes */}
          <div className=" grid-cols-2 gap-3 h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative hidden sm:grid">
            <div className="relative lg:aspect-[5/6] col-span-1 lg:top-6">
              <Image
                src="/images/instalaciones.png"
                alt="Proceso de impresión"
                fill
                className="object-cover rounded-lg bg-gray-400"
              />
            </div>
            <div className="relative lg:aspect-[6/5] col-span-1 lg:top-10">
              <Image
                src="/images/instalaciones2.webp"
                alt="Control de calidad"
                fill
                className="object-cover rounded-lg bg-gray-400"
              />
            </div>
            <div className="relative lg:flex lg:w-full lg:h-max lg:aspect-[6/5] col-span-1 lg:justify-end lg:mt-6">
              <Image
                src="/images/instalaciones3.webp"
                alt="Equipo de trabajo"
                fill
                className="object-cover rounded-lg bg-gray-400"
              />
            </div>
            <div className="relative lg:aspect-[5/6]  col-span-1 lg:bottom-14">
            <Image
                src="/images/instalaciones4.webp"
                alt="Proceso de producción"
                fill
                className="object-cover rounded-lg bg-gray-400"
              />
            </div>
          </div>

          {/* Columna de contenido */}
          <div className="flex flex-col justify-center space-y-4 mt-8 lg:mt-0 gap-5 sm:gap-0">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-black">¿Quiénes somos?</h2>
              <h3 className="text-2xl md:text-xl  font-medium text-black">
                Desde 1992 ofreciendo trabajos de calidad
              </h3>
            </div>

            <div className="space-y-3 text-black text-sm md:text-base">
              {paragraphs.map((p, index) => (
                <p key={index} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <div className="pt-2">
              <Link href="https://wa.me/5491134217410" className=" px-5 py-1.5  bg-[#FAED14] font-medium ">
                Contactanos para asesorarte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

