"use client"

import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavbarProps {
  currentIndex: number;
  backgroundColors: string[];
}

export default function Navbar({ currentIndex, backgroundColors }: NavbarProps) {
  return (
    <nav className="w-full py-4 px-6 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="relative w-40 h-12">
          <Image
            src="/logo.png"
            alt="Gráfica Taddeo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#servicios" className="text-gray-700 hover:text-gray-900 transition-colors">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/#plantas" className="text-gray-700 hover:text-gray-900 transition-colors">
              Plantas
            </Link>
          </li>
          <li>
            <Link href="/#historia" className="text-gray-700 hover:text-gray-900 transition-colors">
              Historia
            </Link>
          </li>
        </ul>

        <motion.button
          animate={{ backgroundColor: backgroundColors[currentIndex] }}
          transition={{ duration: 1 }}
          className="px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
        >
          Contáctanos
        </motion.button>
      </div>
    </nav>
  )
}

