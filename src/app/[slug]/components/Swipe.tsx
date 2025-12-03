"use client"
import Image from "next/image"
import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

interface SwipeProps {
  images: string[]
}

const Swipe: React.FC<SwipeProps> = ({ images }) => {
  // Calcular valores base
  const getSlidesPerView = (min: number) => Math.min(min, images.length)
  const getSlidesPerGroup = (min: number) => Math.min(min, images.length)

  return (
    <div className="w-full h-max relative">
      <Swiper
        spaceBetween={20}
        loop={images.length >= 3}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // Móvil: 1 imagen por vista, mover de 1 en 1
          0: {
            slidesPerView: getSlidesPerView(1),
            slidesPerGroup: getSlidesPerGroup(1),
            spaceBetween: 10,
          },
          // Tablet: 2 imágenes por vista, mover de 2 en 2
          640: {
            slidesPerView: getSlidesPerView(2),
            slidesPerGroup: getSlidesPerGroup(2),
            spaceBetween: 15,
          },
          // Desktop: 3 imágenes por vista, mover de 3 en 3
          1024: {
            slidesPerView: getSlidesPerView(3),
            slidesPerGroup: getSlidesPerGroup(3),
            spaceBetween: 20,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="aspect-w-16 aspect-h-9 w-full border-2 rounded-xl">
              <Image
                width={500}
                height={500}
                src={image || "/placeholder.svg"}
                alt={`Imagen ${index + 1}`}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swipe

