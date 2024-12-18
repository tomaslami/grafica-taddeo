import Image from 'next/image'
import { Button } from '@/components/ui/button'

const images = [
  { src: "/placeholder.svg?height=300&width=300", alt: "Printing process" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Quality control" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Production process" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Printing equipment" },
]

const paragraphs = [
  "SOMOS una compañía especializada en impresión y soluciones gráficas fundada en el año 1992, ofreciendo trabajos de calidad excepcional con equipo profesional.",
  "OFRECEMOS un servicio de atención personalizada y asesoramiento tanto para la selección del tipo de papel como para los sistemas de impresión más adecuados, con el fin de que el mensaje que desea sea distinguido y se comunique directamente al público deseado de forma eficaz.",
  "ESTAMOS en constante actualización en recursos humanos y tecnología lo que nos permite la obtención de productos de máxima calidad, competitivos en tiempo y forma y reducción de los costos finales.",
  "SABEMOS que la calidad de una empresa se mide por la calidad de su impresión a través de sus productos, por eso elaboramos trabajos priorizando la calidad en el resultado final contemplando siempre los tiempos de entrega establecidos."
]

export default function AboutSection() {
  return (
    <section id='historia' className="container mx-auto py-16 px-16 md:py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="grid grid-cols-2 gap-4 ">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-square">
              <Image src={img.src} alt={img.alt} fill className="object-cover rounded-lg  bg-black/40" />
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium">¿Quienes somos?</h2>
            <h3 className="text-3xl font-bold">Desde 1992 ofreciendo trabajos de calidad.</h3>
          </div>
          <div className="space-y-4 text-gray-600">
            {paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          <button
            className="px-8 py-3 bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 transition-colors"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  )
}