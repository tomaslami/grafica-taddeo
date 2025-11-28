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
  // Calcular cuántas imágenes mostrar por vista (siempre 3, o menos si hay menos de 3)
  const slidesPerView = images.length >= 3 ? 3 : images.length
  // Mover de 3 en 3, o del total si hay menos de 3
  const slidesPerGroup = images.length >= 3 ? 3 : images.length

  return (
    <div className="w-full h-max relative">
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: images.length >= 3 ? 3 : images.length,
            slidesPerGroup: images.length >= 3 ? 3 : images.length,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: images.length >= 3 ? 3 : images.length,
            slidesPerGroup: images.length >= 3 ? 3 : images.length,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: images.length >= 3 ? 3 : images.length,
            slidesPerGroup: images.length >= 3 ? 3 : images.length,
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
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swipe

