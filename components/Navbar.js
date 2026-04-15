'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-semibold text-lg tracking-tight"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            VK.
          </motion.button>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-apple-gray hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-sm bg-apple-blue hover:bg-apple-darkblue text-white px-4 py-2 rounded-full transition-all duration-200"
            >
              Hire Me
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="flex flex-col gap-1.5 z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white transition-all" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-white transition-all" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white transition-all" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-light text-white hover:text-apple-blue transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => handleNavClick('#contact')}
              className="text-sm bg-apple-blue hover:bg-apple-darkblue text-white px-8 py-3 rounded-full transition-all duration-200 mt-4"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
