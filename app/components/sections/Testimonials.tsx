"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  client: string;
  position: string;
  project: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'A4 ON GOD LIMITED transformed our vision into reality. Their professionalism, attention to detail, and commitment to timely delivery exceeded our expectations. The commercial complex they built for us is now a landmark in Warri.',
    client: 'Mr. Chukwuma Okonkwo',
    position: 'CEO, Okonkwo Enterprises',
    project: 'Commercial Plaza, Warri',
    rating: 5,
  },
  {
    quote:
      'Working with A4 ON GOD on our residential estate was seamless. From planning to execution, they demonstrated exceptional expertise. The quality of construction is outstanding, and our residents are extremely satisfied.',
    client: 'Mrs. Blessing Adeyemi',
    position: 'Director, Delta Properties Ltd',
    project: 'Residential Estate Development',
    rating: 5,
  },
  {
    quote:
      'The LPG refilling plant they installed for us meets international safety standards. Their technical expertise and project management capabilities are world-class. We’re already planning our next project with them.',
    client: 'Engr. Ibrahim Mohammed',
    position: 'Operations Manager, GasTech Nigeria',
    project: 'LPG Refilling Plant',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-[#f5f7fb] via-white to-[#eef2f6] text-gray-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.05),transparent_55%)] pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm text-primary font-semibold">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mt-6 mb-4 text-gray-900">
            Trusted partners speak to our impact.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Insightful feedback from industry leaders who have experienced our precision delivery first-hand.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 9000, disableOnInteraction: true }}
          className="py-6"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-5xl"
              >
                <div className="relative rounded-[3rem] bg-gradient-to-br from-white to-white/80 p-[1px] shadow-[0_24px_68px_rgba(15,23,42,0.18)]">
                  <div className="relative rounded-[3rem] bg-white/90 p-10 md:p-14">
                    {/* <div className="absolute -top-10 right-12 hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                      <span className="text-4xl font-semibold">A4</span>
                    </div> */}
                    <div className="flex flex-col gap-10 lg:flex-row">
                      <div className="lg:w-1/3 space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                          <span className="flex items-center gap-1">
                            {[...Array(t.rating)].map((_, starIdx) => (
                              <Star key={starIdx} className="h-4 w-4" fill="currentColor" />
                            ))}
                          </span>
                          Rated 5.0
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                            Project Delivered
                          </p>
                          <p className="mt-2 text-lg font-semibold text-gray-900">
                            {t.project}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5 text-sm text-gray-500">
                          “We align with clients whose ambitions match our commitment to precision.
                          Every brief is treated as a flagship engagement.”
                        </div>
                      </div>
                      <div className="relative flex-1">
                        <div className="absolute -top-8 left-0 text-7xl text-primary/15">“</div>
                        <p className="relative text-xl md:text-2xl leading-relaxed text-gray-700">
                          {t.quote}
                        </p>
                        <div className="mt-10 border-t border-gray-200 pt-6">
                          <p className="text-lg font-semibold text-gray-900">{t.client}</p>
                          <p className="text-sm text-gray-400">{t.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            Beyond Testimonials
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto">
            We maintain long-term partnerships anchored in transparency, quality assurance, and
            consistent delivery across every project scope.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
