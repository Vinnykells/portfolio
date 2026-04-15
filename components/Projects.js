'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A full-featured web application built with React and Next.js. Includes authentication, real-time data, and a beautiful responsive UI that works seamlessly across all devices.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/20',
    number: '01',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce platform with a sleek design, smooth animations, and a complete shopping experience. Built for performance and scalability with modern web technologies.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/20',
    number: '02',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A creative portfolio and dashboard application featuring data visualization, custom charts, and an intuitive interface designed for both desktop and mobile users.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'SCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    color: 'from-orange-500/20 to-pink-500/20',
    borderColor: 'border-orange-500/20',
    number: '03',
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
      className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div className={`relative rounded-3xl overflow-hidden aspect-video bg-gradient-to-br ${project.color} border ${project.borderColor} group cursor-pointer`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="text-8xl font-bold text-white/5 select-none">{project.number}</div>
          <div className="text-center mt-4">
            <p className="text-white/40 text-sm">Project Screenshot</p>
            <p className="text-white/20 text-xs mt-1">Replace with actual image</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
        >
          <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium">
            Live Demo
          </motion.a>
          <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium">
            GitHub
          </motion.a>
        </motion.div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-apple-gray text-sm font-medium tracking-widest uppercase mb-3">Project {project.number}</p>
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">{project.title}</h3>
          <p className="text-apple-gray leading-relaxed text-lg">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-apple-gray font-medium">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 text-sm text-white hover:text-apple-blue transition-colors duration-200">
            Live Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </motion.a>
          <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 text-sm text-apple-gray hover:text-white transition-colors duration-200">
            View Code
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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
          <h2 className="text-4xl md:text-6xl font-semibold text-white text-center mb-4 tracking-tight">Work I'm proud of.</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-apple-gray text-center max-w-2xl mx-auto mb-24">
            A selection of projects that showcase my skills and passion for building exceptional web experiences.
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
