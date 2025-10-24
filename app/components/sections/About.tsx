"use client";

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ShieldCheck, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const values = [
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'Delivering projects with uncompromising quality and precision.',
    },
    {
      icon: ShieldCheck,
      title: 'Integrity',
      description: 'Operating transparently and ethically in every aspect.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern methods and technologies.',
    },
    {
      icon: TrendingUp,
      title: 'Safety',
      description: 'Prioritizing the wellbeing of our people and communities.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-[#f5f7fb] via-white to-[#eef2f6] overflow-hidden"
    >
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="uppercase text-primary tracking-[0.25em] text-sm font-semibold">
              About A4 ON GOD LIMITED
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 mt-6 mb-6 leading-tight">
              Crafting timeless spaces and infrastructure with quiet confidence.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Based in Warri, Delta State, we deliver bespoke construction, real estate, and gas
              infrastructure projects across Nigeria. Our mastery spans concept development to
              commissioning—with each engagement guided by finesse, discipline, and clarity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We partner with clients who value excellence, offering end-to-end expertise that keeps
              timelines tight, safety uncompromised, and results extraordinary.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.1 }}
                  className="group rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <value.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-105 transition" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-16 right-0 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative rounded-[2.25rem] border border-white/60 bg-white shadow-2xl overflow-hidden">
              <div className="relative h-[28rem]">
                <Image
                  src="/images/about-us/about-1200-x-1600.png"
                  alt="A4 ON GOD project collaboration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-6 right-6 rounded-full bg-white/30 backdrop-blur-sm px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white">
                Since 2025
              </div>
            </div>

            <div className="relative -mt-16 ml-auto max-w-sm rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl font-semibold">
                  A4
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400">Impact Snapshot</p>
                  <p className="text-xl font-semibold text-gray-900">Nationwide delivery</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div>
                  <p className="text-gray-900 text-2xl font-semibold">150+</p>
                  <p>Projects delivered & ongoing</p>
                </div>
                <div>
                  <p className="text-gray-900 text-2xl font-semibold">98%</p>
                  <p>Client satisfaction rating</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gray-100 p-4">
                <Image
                  src="/images/about-us/about-800-x-800.png"
                  alt="Attention to detail"
                  width={64}
                  height={64}
                  className="rounded-2xl object-cover"
                />
                <p className="text-sm text-gray-600">
                  Precision, transparency, and service are at the centre of every engagement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
