"use client";

import { motion } from 'framer-motion';

interface Member {
  name: string;
  position: string;
  bio: string;
  shares: string;
  expertise: string[];
}

const team: Member[] = [
  {
    name: 'Omoko Armstrong Tejiri',
    position: 'Co-Founder & Director',
    bio:
      'With extensive experience in construction management and real estate development, Armstrong leads A4 ON GOD’s strategic vision and project execution. His commitment to excellence has been instrumental in the company’s growth.',
    shares: '50% Co-Owner',
    expertise: ['Construction Management', 'Strategic Planning', 'Client Relations'],
  },
  {
    name: 'Omoko-Tejiri Irene Oghenefejiro',
    position: 'Co-Founder & Director',
    bio:
      'Irene brings a wealth of knowledge in real estate development and business operations. Her innovative approach and attention to detail ensure every project meets the highest standards.',
    shares: '50% Co-Owner',
    expertise: ['Real Estate Development', 'Operations Management', 'Financial Planning'],
  },
];

const gradientPalette = [
  'from-primary via-primary-dark to-secondary',
  'from-secondary via-primary to-primary-dark',
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="uppercase text-primary font-semibold tracking-wide">
              Team
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Experienced professionals driving excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
              >
                <div className="relative h-48">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientPalette[idx % gradientPalette.length]}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_55%)]" />
                  <div className="relative flex h-full flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-white/10 text-2xl font-bold">
                        {initials(member.name)}
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-widest text-white/70">
                          Leadership
                        </p>
                        <p className="text-2xl font-semibold">{member.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-1 text-primary">
                    {member.position}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.shares}
                  </p>
                  <p className="text-gray-600 flex-1 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {member.expertise.map((exp) => (
                      <span key={exp} className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
}
