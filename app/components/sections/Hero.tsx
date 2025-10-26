"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const sliderImages = [
  {
    src: '/images/sliders/slider-construction.png',
    alt: 'Construction project underway with engineers on site',
    headline: 'Infrastructure Delivered With Precision',
    subline: 'Complex builds executed with disciplined project governance and tier-one safety standards.',
  },
  {
    src: '/images/sliders/slider-real-estate.png',
    alt: 'Modern real estate development with refined architecture',
    headline: 'Real Estate Crafted For Enduring Value',
    subline: 'Residential and commercial spaces curated to elevate lifestyle and investment returns.',
  },
  {
    src: '/images/sliders/slider-gas-refill.png',
    alt: 'Gas refilling plant with technicians at work',
    headline: 'Energy Systems Engineered For Reliability',
    subline: 'Gas distribution networks designed for uninterrupted supply and regulatory compliance.',
  },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const overlayOpacity = useTransform(scrollY, [0, 300], [1, 0.85]);
  const floatingY = useTransform(scrollY, [0, 300], [0, -40]);

  const [stats, setStats] = useState([
    { value: 0, target: 5, label: 'Years', suffix: '+' },
    { value: 0, target: 150, label: 'Projects', suffix: '+' },
    { value: 0, target: 200, label: 'Clients', suffix: '+' },
    { value: 0, target: 99.8, label: 'Safety', suffix: '%' },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Animate stats values when component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      stats.forEach((stat, index) => {
        const increment = stat.target / 100;
        const interval = setInterval(() => {
          setStats((prev) => {
            const newStats = [...prev];
            if (newStats[index].value < stat.target) {
              newStats[index].value = Math.min(
                newStats[index].value + increment,
                stat.target
              );
            }
            return newStats;
          });
        }, 20);
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#141d2c] to-[#1f2e41] text-white"
    >
      <motion.div
        className="absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute -top-28 -right-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-10 w-48 md:w-56"
          >
            <Image
              src="/images/a4-logo.png"
              alt="A4 ON GOD LIMITED logo"
              width={224}
              height={80}
              priority
              className="h-auto w-full"
            />
            <span className="sr-only">A4 ON GOD LIMITED</span>
          </motion.div>

          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Bespoke Construction, Real Estate & Energy Solutions with Quiet Confidence.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              We partner with visionary clients to craft enduring spaces and infrastructure—delivered
              with meticulous planning, refined craftsmanship, and unwavering integrity.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <button
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Signature Projects
            </button>
            <button
              className="px-8 py-4 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Consultation
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ y: floatingY }}
        >
          <div className="relative mx-auto max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl">
            <div className="relative h-[28rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sliderImages[currentSlide].src}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <Image
                    src={sliderImages[currentSlide].src}
                    alt={sliderImages[currentSlide].alt}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/30" />
                </motion.div>
              </AnimatePresence>
              <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Sector Specialization
                </div>
                <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                  {sliderImages[currentSlide].headline}
                </h3>
                <p className="text-sm text-white/70 md:text-base">
                  {sliderImages[currentSlide].subline}
                </p>
              </div>
              <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentSlide ? 'w-6 bg-primary' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 pb-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <motion.div
                  className="text-3xl md:text-4xl font-semibold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {stat.value.toFixed(stat.suffix === '%' ? 1 : 0)}
                  {stat.suffix}
                </motion.div>
                <p className="text-xs md:text-sm uppercase tracking-widest text-white/50 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
