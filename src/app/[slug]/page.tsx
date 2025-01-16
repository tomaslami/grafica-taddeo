import { getCategory } from '@/lib/get-category'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Swipe from './components/Swipe'

export default function Category({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-[400px] w-full">
        {category.bgImage ? (
          <Image
            src={category.bgImage || "/placeholder.svg"}
            alt={category.value}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-400" />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {category.value}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="w-[95%] mx-auto space-y-8 flex justify-center items-center flex-col">
          {/* Subtitle */}
          <h2 className="w-[50%] text-2xl font-semibold text-center">
            {category.subtitle}
          </h2>

          {/* Main Text */}
          <p className="w-[50%] text-gray-600 text-center leading-relaxed">
            {category.text}
          </p>

          {/* Principal Image */}
          {category.principalImage && (
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <Image
                src={category.principalImage || "/placeholder.svg"}
                alt={category.value}
                fill
                className="object-cover"
              />
            </div>
          )}

          <article className='w-full h-max py-8 flex flex-col justify-center items-center'>
            <div className='flex justify-center  items-center w-full h-full'>
              <Swipe images={[
                category['carousel-1'],
                category['carousel-2'],
                category['carousel-3'],
                category['carousel-4'],
                category['carousel-5'],
                category['carousel-6'],
              ].filter((image): image is string => Boolean(image))} />
            </div>
          </article>

          {/* Contact Button */}
          <div className="text-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

