"use client";

import Image from 'next/image';
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
const services = [
  { label: 'Construction & Contracting', href: '#services' },
  { label: 'Real Estate Development', href: '#services' },
  { label: 'Gas Solutions', href: '#services' },
  { label: 'Property Management', href: '#services' },
  { label: 'Consultancy', href: '#services' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className="bg-secondary-dark text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4 w-40">
              <Image
                src="/images/a4-logo.png"
                alt="A4 ON GOD LIMITED logo"
                width={160}
                height={60}
                className="h-auto w-full"
              />
              <span className="sr-only">A4 ON GOD LIMITED</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm max-w-xs">
              A4 ON GOD LIMITED is your trusted partner for construction, real estate, and gas solutions across Nigeria. We deliver quality, safety and innovation in every project.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-primary">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>1 New Layout, Okotoko, Warri</li>
              <li>0816 488 3771</li>
              <li>0808 600 1370</li>
              <li>info@a4ongodltd.com</li>
              <li>
                <a href="https://a4ongodltd.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  www.a4ongodltd.com
                </a>
              </li>
              <li>Mon–Fri: 8AM–5PM</li>
            </ul>
          </div>
        </div>
        {/* Newsletter (optional) */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-white mb-3">Stay Updated</p>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for project updates and industry insights</p>
          <form className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 w-64 rounded-full bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 mt-12 text-center text-sm text-gray-500">
        <p>
          © {currentYear} A4 ON GOD LIMITED. All rights reserved. Registered with Corporate Affairs Commission (RC: XXXXXXX)
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-primary">Cookie Policy</a>
        </div>
        <p className="mt-2 text-gray-400">Designed & Developed with ♥ for Excellence</p>
      </div>
    </footer>
  );
}
