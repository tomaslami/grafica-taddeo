'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

interface ContactButtonProps {
  isMainRoute?: boolean;
  isScrolled?: boolean;
  currentColor?: string;
  currentIndex?: number;
  className?: string;
}

const ContactButton: FC<ContactButtonProps> = ({
  isMainRoute,
  isScrolled,
  currentColor,
  className
}) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`https://wa.me/5491134217410`)
  }

  const buttonStyle = isMainRoute
    ? isScrolled
      ? { backgroundColor: '#000000', color: 'white' }
      : { backgroundColor: currentColor, color: 'white' }
    : { backgroundColor: '#000000', color: 'white' }

  return (
    <motion.button
      animate={buttonStyle}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
      className={className}
    >
      Contacto
    </motion.button>
  )
}

export default ContactButton

