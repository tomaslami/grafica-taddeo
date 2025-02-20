"use client"

import React, { useState, useCallback, useMemo } from 'react'
import Hero from './Hero'
import Navbar from '../nav/NavBar'
import { backgroundImages, backgroundColors } from '@/lib/carouselData'

export default function SynchronizedLayout() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentColor, setCurrentColor] = useState(backgroundColors[0])

  const specialties = useMemo(() => [
    'Comunicacion Visual',
    'Impresión Offset',
    'Envases y embalajes',
    'Impresión Digital',
    'Merchandising',
    'Vasos Polipapel',
  ], [])

  const features = useMemo(() => [
    { image: "/images/feature-1.jpg" },
    { image: "/images/feature-2.jpg" },
    { image: "/images/feature-3.jpg" },
    { image: "/images/feature-4.png" },
    { image: "/images/feature-5.jpg" },
  ], [])

  const scrollTo = useCallback((index: number) => {
    setCurrentIndex(index % features.length)
    setCurrentColor(backgroundColors[index % backgroundColors.length])
  }, [features.length, backgroundColors])

  const typeAnimationSequence = useMemo(() =>
    specialties.flatMap((specialty, index) => [
      () => scrollTo(index),
      specialty,
      2000,
    ]).concat([() => scrollTo(0)])
    , [specialties, scrollTo])

  return (
    <>
      <Navbar currentColor={currentColor} currentIndex={currentIndex} />
      <Hero
        currentIndex={currentIndex}
        backgroundColors={backgroundColors}
        features={features}
        typeAnimationSequence={typeAnimationSequence}
        backgroundImages={backgroundImages}
      />
    </>
  )
}

