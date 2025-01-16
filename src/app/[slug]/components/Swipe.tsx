"use client"
import { CarouselElements } from '@/types/category';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwipeProps {
  images: string[];
}

const Swipe: React.FC<SwipeProps> = ({ images }) => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-full h-max'>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='flex items-center justify-center'>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <Image
                width={500}
                height={500}
                src={image || "/placeholder.svg"}
                alt={`Imagen ${index + 1}`}
                className='w-full h-[300px] object-cover rounded-xl'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swipe
