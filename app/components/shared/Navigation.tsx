"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="backdrop-blur bg-white/60 border-b border-gray-200 transition-colors duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/images/a4-logo.png"
              alt="A4 ON GOD logo"
              width={200}
              height={60}
              priority
              className="h-12 w-auto md:h-14"
            />
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition shadow-md"
            >
              Get Quote
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur z-30" onClick={toggleMenu}>
          <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-l-2xl p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 text-lg hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 px-4 py-2 bg-primary text-white text-center rounded-full hover:bg-primary-dark transition"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
