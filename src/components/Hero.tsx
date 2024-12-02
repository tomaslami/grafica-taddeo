"use client"
import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const contents = useMemo(() => [
    'Gráfica Taddeo',
    'Impresión Digital',
    'Impresión Offset',
    'Diseño Gráfico',
    'Encuadernación',
    'Ploteo',
  ], [])

  const features = useMemo(() => [
    { image: "/images/feature-1.jpg" },
    { image: "/images/feature-2.jpg" },
    { image: "/images/feature-3.jpg" },
    { image: "/images/feature-4.jpg" },
    { image: "/images/feature-5.jpg" },
  ], [])

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  }, [Autoplay({ delay: 2000, stopOnInteraction: false })])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const typeAnimationSequence = useMemo(() =>
    contents.flatMap(content => [content, 2000]).slice(0, -1)
    , [contents])

  return (
    <div className='w-full h-screen flex justify-center items-center gap-10'>
      <div className='w-[80%] flex flex-row justify-center items-center'>
        <div className='w-1/2 h-max'>
          <TypeAnimation
            sequence={typeAnimationSequence}
            wrapper="span"
            speed={30}
            deletionSpeed={40}
            repeat={Infinity}
          />
        </div>
        <div className='w-1/2 h-max'>
          <div className="overflow-hidden" ref={emblaRef}>
            <Carousel
              className='w-full h-max flex items-center justify-center'
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
              opts={{
                align: "center",
                loop: true,
              }}
              onSelect={onSelect}
            >
              <CarouselContent className="flex items-center justify-center">
                {features.map((feature, idx) => (
                  <CarouselItem key={idx} className="flex items-center justify-center transition-opacity duration-500 ease-in-out">
                    <Image
                      width={400}
                      height={400}
                      src={feature.image}
                      alt={`Feature ${idx + 1}`}
                      loading="lazy"
                      className={`transition-opacity duration-500 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'} object-cover`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
