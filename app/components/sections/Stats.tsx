"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Building, Users, Shield, MapPin, Award } from 'lucide-react';

interface Stat {
  icon: any;
  target: number;
  label: string;
  suffix?: string;
  color: string;
}

const statsConfig: Stat[] = [
  { icon: Calendar, target: 5, label: 'Years of Excellence', suffix: '+', color: 'text-primary' },
  { icon: Building, target: 150, label: 'Projects Completed', suffix: '+', color: 'text-accent-blue' },
  { icon: Users, target: 200, label: 'Satisfied Clients', suffix: '+', color: 'text-green' },
  { icon: Shield, target: 99.8, label: 'Safety Record', suffix: '%', color: 'text-gold' },
  { icon: MapPin, target: 15, label: 'States Covered', suffix: '+', color: 'text-primary' },
  { icon: Award, target: 500, label: 'Project Value Delivered (₦M)', suffix: '+', color: 'text-gold' },
];

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [values, setValues] = useState(statsConfig.map(() => 0));

  useEffect(() => {
    if (inView) {
      statsConfig.forEach((stat, idx) => {
        const increment = stat.target / 100;
        const interval = setInterval(() => {
          setValues((prev) => {
            const newVals = [...prev];
            if (newVals[idx] < stat.target) {
              newVals[idx] = Math.min(newVals[idx] + increment, stat.target);
            }
            return newVals;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <section id="stats" className="py-24 bg-secondary-dark text-white relative">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {statsConfig.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <Icon className={`w-10 h-10 mb-4 ${stat.color}`} />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  className="text-5xl font-bold mb-2"
                >
                  {values[idx].toFixed(stat.suffix === '%' ? 1 : 0)}{stat.suffix}
                </motion.div>
                <p className="text-gray-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}