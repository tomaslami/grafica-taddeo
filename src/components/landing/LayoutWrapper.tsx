"use client"

import React, { useState, useCallback, useMemo } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Navbar from '../NavBar'
import Hero from './Hero'

export default function SynchronizedLayout() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const specialties = useMemo(() => [
    'Comunicacion Visual',
    'Impresión Digital',
    'Envases y embalajes',
    'Impresión Offset',
    'Merchandising',
  ], [])

  const backgroundColors = useMemo(() => [
    '#60A5FA', // Light blue for Packaging
    '#FCD34D', // Yellow for Offset
    '#EC4899', // Pink for Merchandising
    '#60A5FA', // Light blue for Packaging
    '#FCD34D', // Yellow for Offset
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
  }, [features.length])

  const typeAnimationSequence = useMemo(() =>
    specialties.flatMap((specialty, index) => [
      () => scrollTo(index),
      specialty,
      2000,
    ]).concat([() => scrollTo(0)])
    , [specialties, scrollTo])

  return (
    <>
      <Navbar currentIndex={currentIndex} backgroundColors={backgroundColors} />
      <Hero
        currentIndex={currentIndex}
        specialties={specialties}
        backgroundColors={backgroundColors}
        features={features}
        typeAnimationSequence={typeAnimationSequence}
      />
    </>
  )
}

