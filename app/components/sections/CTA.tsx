"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/cta.png"
            alt="Project planning discussion"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase font-semibold tracking-wide mb-2 block">
            Let's Build Together
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg mb-6 max-w-xl">
            Whether you’re planning a construction project, developing real estate, or need gas infrastructure solutions, we're here to help bring your vision to life.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green rounded-full" /> Free consultation
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green rounded-full" /> Detailed project proposal
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green rounded-full" /> Competitive pricing
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green rounded-full" /> Timely delivery guarantee
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
            </button>
            <a
              href="/brochure.pdf"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10"
              download
            >
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
