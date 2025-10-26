"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building, Home, Flame, ArrowUpRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    title: 'Construction & Contracting',
    description:
      'From groundbreaking to completion, we handle all aspects of construction projects including buildings, roads, bridges and infrastructure.',
    icon: Building,
    features: [
      'General Contracting',
      'Building Construction (Residential & Commercial)',
      'Infrastructure Development (Roads, Bridges, Highways)',
      'Renovation & Maintenance',
      'Civil, Mechanical, Electrical Works',
      'Interior Works (HVAC, Plumbing, Painting)',
    ],
    image: '/images/services/contruction.png',
  },
  {
    title: 'Real Estate Development',
    description:
      'Strategic property development and management services that maximize value and deliver exceptional returns.',
    icon: Home,
    features: [
      'Property Development',
      'Land Acquisition & Sales',
      'Property Management',
      'Real Estate Consultancy',
      'Investment Advisory',
      'Leasing & Rental Services',
    ],
    image: '/images/services/real-estate.png',
  },
  {
    title: 'Gas Refilling & Distribution',
    description:
      'Safe, reliable LPG, CNG and LNG refilling plants with state-of-the-art storage and distribution infrastructure.',
    icon: Flame,
    features: [
      'LPG Refilling Plants',
      'CNG/LNG Distribution',
      'Storage Facilities',
      'Safety Systems',
      'Domestic & Commercial Supply',
      'Industrial Solutions',
    ],
    image: '/images/services/gas-refill.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-[#0b1220] via-[#131d2c] to-[#1c2b3f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.35em] text-sm text-primary font-semibold">
            Service Lines
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mt-6 mb-4">
            Precision delivery across construction, real estate and energy.
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Every engagement is managed end-to-end by domain specialists, blending contemporary design,
            technical rigor, and meticulous project governance.
          </p>
        </div>
        {/* Cards grid */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group"
            >
              {/* Background image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
              </div>
              {/* Content */}
              <div className="relative flex h-full flex-col p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-2xl bg-white/10 p-4 text-primary shadow-inner">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/80 transition group-hover:border-primary/40 group-hover:bg-primary/10"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between text-sm text-white/60">
                  <span>Talk to our {service.title.split(' ')[0].toLowerCase()} team</span>
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4 text-center text-white/70"
        >
          <p className="text-sm uppercase tracking-[0.4em]">Signature Delivery</p>
          <h3 className="text-2xl font-semibold text-white">
            Dedicated project leads, transparent reporting, and on-time handover—every time.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
