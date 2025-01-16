'use client'

import Image from 'next/image'
import Link from 'next/link'
import ContactButton from './ContactButton'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { isMainThread } from 'worker_threads'

interface NavbarProps {
  currentColor?: string;
  currentIndex?: number;
}

export default function Navbar({ currentColor, currentIndex }: NavbarProps) {
  const pathname = usePathname()
  const isMainRoute = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColor = isScrolled ? 'text-black' : 'text-white'

  const navBackground = isScrolled
    ? 'bg-white/80'
    : 'bg-white/10'

  return (
    <motion.nav
      className={`w-full py-4 px-6 fixed top-0 left-0 right-0 backdrop-blur-md z-50 transition-colors duration-
        100 ${navBackground} `}
      animate={{
        borderBottom: isScrolled ? '1px solid #e5e7eb' : '1px solid transparent'
      }}
    >
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
            <Link href="/" className={`${textColor} transition-colors`}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#servicios" className={`${textColor} transition-colors`}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/#plantas" className={`${textColor} transition-colors`}>
              Plantas
            </Link>
          </li>
          <li>
            <Link href="/#historia" className={`${textColor} transition-colors`}>
              Historia
            </Link>
          </li>
        </ul>

        <ContactButton
          isMainRoute={isMainRoute}
          isScrolled={isScrolled}
          currentColor={currentColor}
          currentIndex={currentIndex}
          className='px-5 py-1 rounded-lg'
        />

      </div>
    </motion.nav>
  )
}