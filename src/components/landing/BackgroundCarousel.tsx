"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

interface BackgroundCarouselProps {
  currentIndex: number;
  images: string[];
}

export default function BackgroundCarousel({ currentIndex, images }: BackgroundCarouselProps) {
  return (
    <div className=" inset-0 w-full h-full -z-10">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      ))}
    </div>
  )
}
