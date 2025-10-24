"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone is required'),
  interest: z.string().nonempty('Please select a service'),
  budget: z.string().optional(),
  location: z.string().nonempty('Location is required'),
  timeline: z.string().optional(),
  message: z.string().min(20, 'Message should be at least 20 characters'),
  agree: z.boolean().refine((val) => val, 'You must agree to the terms'),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // For demo, we just log; integrate your API here
    console.log('Submitted', data);
    // Clear form on success
    reset();
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/70 ${
      hasError ? 'border-red-400' : 'border-white/15'
    }`;

  const selectClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/70 ${
      hasError ? 'border-red-400' : 'border-white/15'
    }`;

  const contactHighlights = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      content: (
        <p className="text-sm text-white/70 whitespace-pre-line">
          1 New Layout, Okotoko
          {'\n'}Warri, Delta State
          {'\n'}Nigeria
        </p>
      ),
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: (
        <div className="text-sm text-white/70 space-y-1">
          <p>0816 488 3771 (Main Office)</p>
          <p>0808 600 1370 (Projects)</p>
        </div>
      ),
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: (
        <div className="text-sm text-white/70 space-y-1">
          <p>info@a4ongodltd.com</p>
          <p>projects@a4ongodltd.com</p>
          <a
            href="https://a4ongodltd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            www.a4ongodltd.com
          </a>
        </div>
      ),
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: (
        <p className="text-sm text-white/70 whitespace-pre-line">
          Monday - Friday: 8:00 AM - 5:00 PM
          {'\n'}Saturday: 9:00 AM - 2:00 PM
          {'\n'}Sunday: Closed
        </p>
      ),
    },
  ] as const;

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-[#0b1220] via-[#131d2c] to-[#1c2b3f] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <span className="uppercase text-sm tracking-[0.35em] text-primary font-semibold">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mt-6 mb-4">
            Let’s discuss your next move.
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Share a brief. We’ll respond within 24 hours with a tailored plan and next steps.
          </p>
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Full Name *</label>
                <input
                  type="text"
                  placeholder="Omoko Armstrong"
                  className={inputClass(!!errors.name)}
                  {...register('name')}
                />
                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Email Address *</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className={inputClass(!!errors.email)}
                  {...register('email')}
                />
                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Phone Number *</label>
                <input
                  type="text"
                  placeholder="0816 488 3771"
                  className={inputClass(!!errors.phone)}
                  {...register('phone')}
                />
                {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Service Interest *</label>
                <select className={selectClass(!!errors.interest)} {...register('interest')}>
                  <option value="">Select a service</option>
                  <option>Construction & Contracting</option>
                  <option>Real Estate Development</option>
                  <option>Gas Solutions</option>
                  <option>Property Management</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
                {errors.interest && (
                  <p className="mt-2 text-xs text-red-400">{errors.interest.message}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Project Budget</label>
                <select className={selectClass(false)} {...register('budget')}>
                  <option value="">Select a range</option>
                  <option>Under ₦10M</option>
                  <option>₦10M - ₦50M</option>
                  <option>₦50M - ₦100M</option>
                  <option>₦100M - ₦500M</option>
                  <option>Above ₦500M</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Project Location *</label>
                <input
                  type="text"
                  placeholder="City, State"
                  className={inputClass(!!errors.location)}
                  {...register('location')}
                />
                {errors.location && (
                  <p className="mt-2 text-xs text-red-400">{errors.location.message}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Project Timeline</label>
                <select className={selectClass(false)} {...register('timeline')}>
                  <option value="">Select a timeline</option>
                  <option>ASAP</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>1+ years</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-white/70">Message *</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className={`${inputClass(!!errors.message)} resize-none`}
                {...register('message')}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <input
                type="checkbox"
                id="agree"
                className="h-5 w-5 rounded-md border-white/30 bg-white/10 accent-primary"
                {...register('agree')}
              />
              <label htmlFor="agree" className="text-sm text-white/70">
                I agree to the privacy policy and terms of service
              </label>
            </div>
            {errors.agree && (
              <p className="mt-2 text-xs text-red-400">{errors.agree.message}</p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-gray-900 shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending…' : 'Submit Project Brief'}
              </button>
              {isSubmitSuccessful && (
                <p className="text-sm text-green-300">Thank you! We’ll reply within 24 hours.</p>
              )}
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Direct Access</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Connect with our leadership team.
                </h3>
                <p className="mt-3 text-sm text-white/60">
                  From feasibility to handover, we keep communication transparent and responsive.
                </p>
              </div>
              <div className="space-y-4">
                {contactHighlights.map(({ icon: Icon, title, content }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-primary/40 hover:bg-primary/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{title}</h4>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
              <iframe
                title="Office Location"
                src="https://maps.google.com/maps?q=Warri%20Delta%20State%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                className="h-80 w-full grayscale contrast-110"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
