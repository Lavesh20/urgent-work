'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/getintouch', label: 'Get In Touch' }
    ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-700 to-blue-800 py-4 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              {/* <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="12" r="4" fill="#7DD3FC" />
                <circle cx="18" cy="12" r="4" fill="#38BDF8" />
                <circle cx="12" cy="6" r="4" fill="#0EA5E9" />
              </svg> */}
              <span className="text-white text-2xl font-bold">TaxTalent India</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-white hover:text-blue-200 transition-colors">
                  {item.label}
                </Link>
              ))}
              <Link
                href="/calendar"
                className="bg-sky-300 text-blue-900 hover:bg-sky-200 rounded "
              >
                Schedule a Call
              </Link>
            </div>
            <button 
              className="md:hidden text-white focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4"
              >
                {menuItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="block py-2 text-white hover:text-blue-200 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}
               
                <Link
                  href="/calendar"
                  className="block w-full mt-4 py-2 text-center text-white bg-sky-300 hover:bg-sky-200"
                  
                >
                  Schedule a Call
                </Link>
      
     
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <div className="h-16"></div> {/* Spacer to prevent content from being hidden under the fixed navbar */}
    </>
  )
}