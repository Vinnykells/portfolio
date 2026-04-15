'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('light', !isDark)
  }, [isDark])

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <motion.span
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-base"
      >
        {isDark ? '☀️' : '🌙'}
      </motion.span>
    </motion.button>
  )
}
