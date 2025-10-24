"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: 'Luxury Residential Estate Delivery',
    category: 'Real Estate',
    description:
      'Design-build delivery of upscale residential communities with premium amenities and contemporary finishes.',
    highlights: ['Gated community planning', 'Smart home integration', 'Landscape architecture'],
  },
  {
    title: 'Federal Infrastructure Upgrade',
    category: 'Infrastructure',
    description:
      'Full-scale rehabilitation and expansion of strategic federal transport corridors for safer mobility.',
    highlights: ['Road reconstruction', 'Drainage & erosion control', 'Bridge strengthening'],
  },
  {
    title: 'Commercial Mixed-Use Complex',
    category: 'Construction',
    description:
      'Turnkey construction of multi-level commercial hubs combining retail, office, and hospitality spaces.',
    highlights: ['Structural engineering', 'MEP installations', 'Interior fit-out'],
  },
  {
    title: 'LPG Storage & Distribution Facility',
    category: 'Gas',
    description:
      'Development of modern gas infrastructure to support safe storage, bottling, and distribution operations.',
    highlights: ['Bulk storage systems', 'Safety & compliance', 'Automation & monitoring'],
  },
  {
    title: 'Affordable Housing Schemes',
    category: 'Real Estate',
    description:
      'Delivery of scalable housing solutions tailored for emerging urban communities and public-private partnerships.',
    highlights: ['Cost-efficient designs', 'Community utilities', 'Sustainable materials'],
  },
  {
    title: 'Corporate Headquarters Build',
    category: 'Construction',
    description:
      'Custom-built headquarters that reflect brand identity while meeting advanced workplace requirements.',
    highlights: ['Facade engineering', 'Workspace optimization', 'Energy-efficient systems'],
  },
  {
    title: 'Bridge & Flyover Rehabilitation',
    category: 'Infrastructure',
    description:
      'Strengthening and modernization of aging bridges and flyovers to extend lifespan and improve safety.',
    highlights: ['Structural retrofitting', 'Traffic management', 'Quality assurance testing'],
  },
  {
    title: 'Compressed Natural Gas Network',
    category: 'Gas',
    description:
      'Expansion of CNG networks supporting industrial and commercial clients across multiple regions.',
    highlights: ['Pipeline extension', 'Pressure regulation systems', 'Client commissioning support'],
  },
];

const categories = ['All', 'Construction', 'Real Estate', 'Infrastructure', 'Gas'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="uppercase text-primary font-semibold tracking-wide">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
            Excellence in Every Project
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering world-class results across Nigeria.
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden group border border-gray-100"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary/90 via-secondary-dark/90 to-black flex items-center justify-center text-white px-6 text-center">
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg font-semibold leading-snug"
                  >
                    {project.title}
                  </motion.span>
                </div>
                <div className="p-6 space-y-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary text-white mb-2">
                    {project.category}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
