"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeartHandshake, Ruler, FileCheck2, Hammer, ShieldCheck, Key } from 'lucide-react';
import Image from 'next/image';

interface Step {
  number: string;
  icon: any;
  title: string;
  description: string;
  duration: string;
  image: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: HeartHandshake,
    title: 'Initial Consultation',
    description:
      'We meet with you to understand your vision, requirements, budget and timeline. Our experts provide professional guidance and feasibility analysis.',
    duration: '1–2 weeks',
    image: '/images/process/initial-consultation.png',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Design & Planning',
    description:
      'Our team creates detailed architectural plans, 3D renderings, and comprehensive proposals with accurate cost estimates.',
    duration: '2–4 weeks',
    image: '/images/process/design-planning.png',
  },
  {
    number: '03',
    icon: FileCheck2,
    title: 'Permits & Approvals',
    description:
      'We handle all necessary permits, regulatory approvals and compliance documentation to ensure smooth project execution.',
    duration: '2–6 weeks',
    image: '/images/process/permits-approval.png',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Project Execution',
    description:
      'Our skilled team brings the plans to life with precision construction, regular updates and strict adherence to safety standards.',
    duration: 'Varies',
    image: '/images/process/project-execution.png',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Rigorous inspections at every stage ensure the highest standards. We don’t compromise on quality or safety protocols.',
    duration: 'Ongoing',
    image: '/images/process/quality-assurance.png',
  },
  {
    number: '06',
    icon: Key,
    title: 'Handover & Support',
    description:
      'Final walkthrough, documentation handover and continued support to ensure your complete satisfaction.',
    duration: '1 week',
    image: '/images/process/handover-support.png',
  },
];

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="uppercase text-primary font-semibold tracking-wide">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
            Our Proven Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Six steps to project excellence.
          </p>
        </div>
        <div
          ref={ref}
          className="flex overflow-x-auto space-x-6 snap-x snap-mandatory pb-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[280px] sm:min-w-[350px] md:min-w-[380px] bg-white rounded-3xl shadow-xl snap-center overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative h-44">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/0" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <span className="text-4xl font-bold tracking-tight">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {step.description}
                </p>
                <p className="text-xs text-gray-500 mt-auto">
                  Duration: {step.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
