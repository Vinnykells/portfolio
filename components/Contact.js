'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import AnimatedSection from './AnimatedSection'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kellydwaynez@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const contactItems = [
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      label: 'Email', value: 'kellydwaynez@gmail.com', href: 'mailto:kellydwaynez@gmail.com',
    },
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
      label: 'GitHub', value: 'github.com/Vinnykells', href: 'https://github.com/Vinnykells?tab=repositories',
    },
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
      label: 'LinkedIn', value: 'linkedin.com/in/vinnykells', href: 'https://www.linkedin.com/in/vinnykells/',
    },
  ]

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-apple-blue/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4 text-center">Contact</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold text-white text-center mb-4 tracking-tight">Let's work together.</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-apple-gray text-center max-w-xl mx-auto mb-16">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12">
          <AnimatedSection delay={0.3} className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-medium mb-6 text-lg">Get in touch</h3>
              <div className="space-y-5">
                {contactItems.map((item) => (
                  <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{ x: 4 }} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-apple-gray group-hover:text-apple-blue group-hover:border-apple-blue/30 transition-all duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-apple-gray">{item.label}</p>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="md:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jimmy Crickets' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'tom@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm text-apple-gray mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-apple-blue/50 transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm text-apple-gray mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-apple-blue/50 transition-all duration-200 resize-none"
                />
              </div>

              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: sending || sent ? 1 : 1.02 }}
                whileTap={{ scale: sending || sent ? 1 : 0.98 }}
                className={`w-full py-4 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  sent ? 'bg-green-500 text-white'
                  : error ? 'bg-red-500/20 border border-red-500/30 text-red-400'
                  : 'bg-apple-blue hover:bg-apple-darkblue text-white'
                }`}
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : sent ? "✓ Message Sent! I'll be in touch soon." : 'Send Message'}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
