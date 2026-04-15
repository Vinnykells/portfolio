"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Passion for Code" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-apple-blue text-sm font-medium tracking-widest uppercase mb-4 text-center">
            About Me
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold text-white text-center mb-16 tracking-tight">
            Crafting digital
            <span className="block text-apple-gray">
              experiences that matter.
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-apple-blue/30 to-purple-500/30 mx-auto mb-4 flex items-center justify-center border border-white/10">
                    <span className="text-5xl">👤</span>
                  </div>
                  <p className="text-apple-gray text-sm">Your Photo Here</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-apple-blue/10 border border-apple-blue/20 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-purple-500/10 border border-purple-500/20 blur-sm" />
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <p className="text-lg text-apple-gray leading-relaxed">
                Hi, I'm <span className="text-white font-medium">John Doe</span>
                , a passionate Frontend Developer based in{" "}
                <span className="text-white font-medium">
                  Your City, Country
                </span>
                . I specialize in building exceptional digital experiences that
                live on the internet.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-lg text-apple-gray leading-relaxed">
                With a strong focus on{" "}
                <span className="text-white font-medium">
                  performance, accessibility, and beautiful design
                </span>
                , I bring ideas to life through clean, maintainable code and
                thoughtful user experiences.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <p className="text-lg text-apple-gray leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or refining my craft to stay at the
                cutting edge of web development.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-apple-blue hover:bg-apple-darkblue text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 mt-4"
              >
                Download Resume
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </motion.a>
            </AnimatedSection>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-semibold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-apple-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
