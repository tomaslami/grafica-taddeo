"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroProps {
  currentIndex: number;
  specialties: string[];
  backgroundColors: string[];
  features: { image: string }[];
  typeAnimationSequence: (string | number | (() => void))[];
}

export default function Hero({
  currentIndex,
  specialties,
  backgroundColors,
  features,
  typeAnimationSequence
}: HeroProps) {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='w-[90%] max-w-7xl mx-auto min-h-screen flex items-center'>
        <div className='w-full flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-16 py-12 lg:py-0'>
          <div className='flex flex-col justify-center w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center lg:text-left mb-4 lg:mb-0'>
              Nos especializamos en{' '}
              <motion.span
                animate={{ backgroundColor: backgroundColors[currentIndex] }}
                transition={{ duration: 1 }}
                className="px-2 py-1 rounded-md inline-block"
              >
                <TypeAnimation
                  sequence={typeAnimationSequence}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
                  deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 40 }}
                  className="whitespace-pre-line block mt-2 lg:inline lg:mt-0 text-white"
                />
              </motion.span>
            </h1>
          </div>
          <div className="w-full sm:w-2/3 lg:w-1/3 aspect-square flex justify-center items-center overflow-hidden relative">
            <motion.div
              animate={{ backgroundColor: backgroundColors[currentIndex] }}
              transition={{ duration: 1 }}
              className="absolute inset-0 rounded-full p-14 flex justify-center items-center "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="relative w-[90%] h-[90%]  overflow-hidden"
                >
                  <Image
                    src={features[currentIndex].image}
                    alt={`Feature ${specialties[currentIndex]}`}
                    layout="fill"
                    objectFit="contain"
                    sizes="(max-width: 540px) 80vw, (max-width: 924px) 56vw, 23vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

