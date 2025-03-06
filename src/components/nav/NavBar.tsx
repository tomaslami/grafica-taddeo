"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import BarsIcon from "./BarsIcon"
import ContactButton from "../ContactButton"

interface NavbarProps {
  currentColor?: string
  currentIndex?: number
}

export default function Navbar({ currentColor, currentIndex }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isMainRoute = pathname === "/"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const textColor = isScrolled ? "text-black" : "text-white"
  const navBackground = isScrolled ? "bg-white/80" : "bg-white/10"

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#plantas", label: "Plantas" },
    { href: "/#historia", label: "Historia" },
  ]

  const handleNavItemClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(href)
    }
  }

  return (
    <>
      <motion.nav
        className={` w-full py-4 fixed top-0 left-0 right-0 backdrop-blur-md z-50 transition-colors duration-300 ${navBackground}`}
        animate={{
          borderBottom: isScrolled ? "1px solid #e5e7eb" : "1px solid transparent",
        }}
      >
        <div className="w-[90%] max-w-6xl mx-auto flex items-center justify-between px-4">
          <Link href="/" className="relative w-40 h-12">
            <Image src="/logo.png" alt="Gráfica Taddeo" fill className="object-contain" priority />
          </Link>
          <ul className="w-[70%] hidden md:flex items-center justify-end gap-16">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${textColor} transition-colors cursor-pointer`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavItemClick(item.href)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <ContactButton
              isMainRoute={isMainRoute}
              isScrolled={isScrolled}
              currentColor={currentColor}
              currentIndex={currentIndex}
              className="w-max px-7 py-2 text-center"
            />
          </ul>

          <div className="flex items-center gap-4 md:hidden z-50">
            <BarsIcon
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              color={isOpen ? "#000000" : isScrolled ? "black" : "white"}
            />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-[80%] max-w-[300px] bg-white z-40 md:hidden overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="pt-20 px-6 h-full flex flex-col">
                <ul className="space-y-6 flex-grow">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <a
                        href={item.href}
                        className="text-gray-900 hover:text-gray-600 text-lg font-medium block py-2"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavItemClick(item.href)
                        }}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <ContactButton
                    isMainRoute={isMainRoute}
                    isScrolled={isScrolled}
                    currentColor={currentColor}
                    currentIndex={currentIndex}
                    className="w-full px-7 py-2 text-center block"
                    onClick={() => setIsOpen(false)}
                  />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

