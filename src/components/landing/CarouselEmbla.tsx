import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const CarouselEmbla: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarouselEmbla
