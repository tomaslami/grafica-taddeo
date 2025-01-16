"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundCarousel from './BackgroundCarousel'

interface HeroProps {
  currentIndex: number;
  backgroundColors: string[];
  features: { image: string }[];
  typeAnimationSequence: (string | number | (() => void))[];
  backgroundImages: string[];
}

export default function Hero({
  currentIndex,
  backgroundColors,
  typeAnimationSequence,
  backgroundImages
}: HeroProps) {
  return (
    <div className='relative w-full min-h-screen'>
      <BackgroundCarousel
        currentIndex={currentIndex}
        images={backgroundImages}
      />
      <div className='relative z-10 w-[90%] max-w-7xl mx-auto min-h-screen flex items-center'>
        <div className='w-full flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-16 py-12 lg:py-0'>
          <div className='flex flex-col justify-center w-full lg:w-1/2'>
            <motion.h1
              animate={{ WebkitTextFillColor: backgroundColors[currentIndex] }}
              transition={{ duration: 1 }}
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center lg:text-left mb-4 lg:mb-0 text-white'>
              Nos especializamos en{' '}
              <motion.span
                animate={{ backgroundColor: backgroundColors[currentIndex], WebkitTextFillColor: 'black' }}
                transition={{ duration: 1 }}
                className="px-2 py-1 rounded-md inline-block font-medium"
              >
                <TypeAnimation
                  sequence={typeAnimationSequence}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
                  deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 40 }}
                  className="whitespace-pre-line block lg:py-2 text-white"
                />
              </motion.span>
            </motion.h1>
          </div>
          <div className="w-full sm:w-2/3 lg:w-1/3 aspect-square flex justify-center items-center overflow-hidden relative">

          </div>
        </div>
      </div>
    </div>
  )
}

