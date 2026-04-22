'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const projects = [
  {
    id: 1,
    image: '/Starbase.png',
    title: 'Starbase',
    tagline: 'Explore the universe.',
    description:
      'A space exploration dashboard powered by NASA Open APIs. Browse the Astronomy Picture of the Day gallery, view real photos from Mars rovers, and track near Earth asteroids in real time with threat level assessments. Features an animated star field, cosmic UI and live data.',
    tech: ['Next.js', 'NASA API', 'Tailwind CSS', 'Framer Motion', 'Axios'],
    liveUrl: 'https://starbase-vinnykells.vercel.app',
    githubUrl: 'https://github.com/Vinnykells/starbase',
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/20',
    hoverBorder: 'rgba(79, 70, 229, 0.4)',
    hoverGlow: 'rgba(79, 70, 229, 0.1)',
    number: '01',
    emoji: '🚀',
    accentColor: 'text-blue-400',
    badgeColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    type: 'Space Dashboard',
    taglineColor: 'text-blue-400',
  },
  {
    id: 2,
    image: '/Cineflicker.png',
    title: 'Cineflicker',
    tagline: 'Discover movies and TV shows.',
    description:
      'A full movie discovery app powered by the TMDB API. Search any movie or TV show, browse trending content, view cast details, watch trailers and explore similar titles. Features real time search, loading skeletons, smooth animations and a cinematic dark red UI.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TMDB API', 'Framer Motion'],
    liveUrl: 'https://cineflicker-vinnykells.vercel.app',
    githubUrl: 'https://github.com/Vinnykells/cineflicker',
    color: 'from-red-500/20 to-rose-500/20',
    borderColor: 'border-red-500/20',
    hoverBorder: 'rgba(239, 68, 68, 0.4)',
    hoverGlow: 'rgba(239, 68, 68, 0.1)',
    number: '02',
    emoji: '🎬',
    accentColor: 'text-red-400',
    badgeColor: 'bg-red-500/10 border-red-500/20 text-red-400',
    type: 'React Movie App',
    taglineColor: 'text-red-400',
  },
  {
    id: 3,
    image: '/Aegis.png',
    title: 'Aegis',
    tagline: 'The shield your money deserves.',
    description:
      'A premium fintech landing page for a global payments platform. Built with a rich dark gold aesthetic inspired by high end financial products. Features smooth scroll animations, glassmorphism cards, live currency ticker, shield micro interactions and a fully responsive layout.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://aegis-vinnykells.vercel.app',
    githubUrl: 'https://github.com/Vinnykells/aegis',
    color: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/20',
    hoverBorder: 'rgba(234, 179, 8, 0.4)',
    hoverGlow: 'rgba(234, 179, 8, 0.1)',
    number: '03',
    emoji: '🛡️',
    accentColor: 'text-yellow-400',
    badgeColor: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    type: 'Fintech Landing Page',
    taglineColor: 'text-yellow-400',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div
        className={`relative rounded-3xl overflow-hidden aspect-video bg-gradient-to-br ${project.color} border ${project.borderColor} group cursor-pointer transition-all duration-500`}
        style={{
          boxShadow: hovered ? `0 0 60px ${project.hoverGlow}, 0 0 120px ${project.hoverGlow}` : 'none',
          borderColor: hovered ? project.hoverBorder : undefined,
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-6 right-6">
          <span className={`text-xs px-3 py-1.5 rounded-full border font-medium ${project.badgeColor}`}>
            {project.type}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          <p className={`text-sm font-medium ${project.taglineColor}`}>{project.tagline}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            Live Demo
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2"
          >
            GitHub
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-apple-gray text-sm font-medium tracking-widest uppercase">Project {project.number}</span>
          <span className="text-apple-gray/40">·</span>
          <span className={`text-sm font-medium ${project.accentColor}`}>{project.type}</span>
        </div>

        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">{project.title}</h3>

        <p className="text-apple-gray leading-relaxed text-lg">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-apple-gray font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-2">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className={`flex items-center gap-2 text-sm font-medium ${project.accentColor} hover:opacity-80 transition-all duration-200`}
          >
            View Live Site
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-sm text-apple-gray hover:text-white transition-colors duration-200"
          >
            View Code
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4 text-center">Projects</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold text-white text-center mb-4 tracking-tight">
            Work I am proud of.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-apple-gray text-center max-w-2xl mx-auto mb-24">
            A selection of projects that showcase my skills across data-driven applications, consumer products and fintech.
            Each one built with real APIs and production-ready code.
          </p>
        </AnimatedSection>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
