'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
    ],
  },
  {
    category: 'Styling',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'CSS / SCSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Styled Components', level: 75 },
    ],
  },
  {
    category: 'Tools & Other',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Figma', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Node.js', level: 70 },
    ],
  },
]

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-white font-medium">{name}</span>
        <span className="text-xs text-apple-gray">{level}%</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full bg-gradient-to-r from-apple-blue to-blue-400 rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4 text-center">Skills</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold text-white text-center mb-4 tracking-tight">
            Tools of the trade.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-apple-gray text-center max-w-2xl mx-auto mb-20">
            Technologies and tools I use to bring ideas to life with precision and craft.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 0.15}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-6">
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-16">
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'JavaScript', 'Framer Motion', 'Git', 'Figma', 'REST APIs', 'Node.js', 'SCSS', 'HTML5'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, borderColor: 'rgba(0, 113, 227, 0.5)' }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-apple-gray hover:text-white cursor-default transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
