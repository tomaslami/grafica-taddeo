import { getCategory } from "@/lib/get-category"
import { notFound } from "next/navigation"
import Image from "next/image"
import Swipe from "./components/Swipe"
import VideoCarousel from "./components/VideoCarousel"
import Link from "next/link"

// Correct type definition for Next.js dynamic route parameters
type Params = Promise<{ slug: string }>

export default async function Category({ params }: { params: Params }) {
  const { slug } = await params
  const category = getCategory(slug)

  if (!category) {
    notFound()
  }

  // Extraer todos los videos disponibles
  // category.video es un array, así que lo expandimos junto con los videos adicionales
  const videos = [
    ...(category.video || []),
    category["video-1"],
    category["video-2"],
    category["video-3"],
    category["video-4"],
    category["video-5"],
    category["video-6"],
    category["video-7"],
    category["video-8"],
    category["video-9"],
    category["video-10"],
  ].filter((video): video is string => Boolean(video) && typeof video === 'string' && video.trim() !== "")

  // Extraer todas las imágenes del carrusel
  const carouselImages = [
    category["carousel-1"],
    category["carousel-2"],
    category["carousel-3"],
    category["carousel-4"],
    category["carousel-5"],
    category["carousel-6"],
    category["carousel-7"],
    category["carousel-8"],
    category["carousel-9"],
    category["carousel-10"],
    category["carousel-11"],
    category["carousel-12"],
    category["carousel-13"],
    category["carousel-14"],
    category["carousel-15"],
    category["carousel-16"],
    category["carousel-17"],
    category["carousel-18"],
  ].filter((image): image is string => Boolean(image))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
        <Image
          src={category.bgImage || "/placeholder.svg"}
          alt={category.value}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">{category.value}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="max-w-[1200px] mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-4 px-4 sm:px-8 md:px-16 lg:px-32">
            <h2 className="text-xl sm:text-2xl font-bold text-black">{category.subtitle}</h2>
            <div className="space-y-1 text-gray-600">
              <p className="max-w-full sm:max-w-[400px]">{category.text}</p>
            </div>
          </div>

          {videos.length > 0 && (
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 mx-auto rounded-xl">
              <VideoCarousel videos={videos} />
            </div>
          )}

          <article className="w-full">
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
              <Swipe images={carouselImages} />
            </div>
          </article>

          {/* CTA Section */}
          <div className="px-4 sm:px-8 md:px-16 lg:px-32 flex justify-center mt-8">
            <Link
              href="https://wa.me/5491134217410?text=Hola,%20me%20gustaría%20recibir%20asesoramiento"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#25D366]/80 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Hacé tu idea realidad
            </Link>
          </div>
        </div>

        {category.additionalSections && category.additionalSections.length > 0 && (
          <div className="max-w-[1200px] mx-auto space-y-6 sm:space-y-8 mt-12">
            {category.additionalSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-6 sm:space-y-8">
                <div className="space-y-4 px-4 sm:px-8 md:px-16 lg:px-32">
                  <h2 className="text-xl sm:text-2xl font-bold text-black">{section.title}</h2>
                  {section.subtitle && (
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{section.subtitle}</h3>
                  )}
                  {section.text && (
                    <div className="space-y-1 text-gray-600">
                      <p className="max-w-full sm:max-w-[400px]">{section.text}</p>
                    </div>
                  )}
                </div>

                {section.videos && section.videos.length > 0 && (
                  <div className="px-4 sm:px-8 md:px-16 lg:px-32 mx-auto">
                    <VideoCarousel videos={section.videos} />
                  </div>
                )}

                {section.images && section.images.length > 0 && (
                  <article className="w-full">
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
                      <Swipe images={section.images} />
                    </div>
                  </article>
                )}

                {/* CTA Section */}
                <div className="px-4 sm:px-8 md:px-16 lg:px-32 flex justify-center mt-8">
                  <a
                    href="https://wa.me/5491134217410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Hacé tu idea realidad
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

