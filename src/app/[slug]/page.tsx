import { getCategory } from "@/lib/get-category"
import { notFound } from "next/navigation"
import Image from "next/image"
import Swipe from "./components/Swipe"

// Correct type definition for Next.js dynamic route parameters
type Params = Promise<{ slug: string }>

export default async function Category({ params }: { params: Params }) {
  const { slug } = await params
  const category = getCategory(slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={category.bgImage || "/placeholder.svg"}
          alt={category.value}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start ">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white text-center">{category.value}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-[1200px] mx-auto space-y-8">
          {/* Title and Description */}
          <div className="space-y-4 px-32">
            <h2 className="text-2xl font-bold text-black">{category.subtitle}</h2>
            <div className="space-y-1 text-gray-600">
              <p className="max-w-[400px]">{category.text}</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="px-32 mx-auto">
            <div className="w-full rounded-lg shadow-lg">
              <video className="w-full h-[400px] object-cover" autoPlay muted loop playsInline>
                <source src={category.video || ""} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>

          {/* Carousel Section */}
          <article className="w-full">
            <div className="w-full px-32">
              <Swipe
                images={[
                  category["carousel-1"],
                  category["carousel-2"],
                  category["carousel-3"],
                  category["carousel-4"],
                  category["carousel-5"],
                  category["carousel-6"],
                ].filter((image): image is string => Boolean(image))}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

