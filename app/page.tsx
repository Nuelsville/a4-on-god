import dynamic from 'next/dynamic';

// Dynamically import sections to reduce initial bundle size
const Hero = dynamic(() => import('@/app/components/sections/Hero'));
const About = dynamic(() => import('@/app/components/sections/About'));
const Services = dynamic(() => import('@/app/components/sections/Services'));
const Projects = dynamic(() => import('@/app/components/sections/Projects'));
const Process = dynamic(() => import('@/app/components/sections/Process'));
const Testimonials = dynamic(() => import('@/app/components/sections/Testimonials'));
const Team = dynamic(() => import('@/app/components/sections/Team'));
const Stats = dynamic(() => import('@/app/components/sections/Stats'));
const CTA = dynamic(() => import('@/app/components/sections/CTA'));
const Contact = dynamic(() => import('@/app/components/sections/Contact'));
const Footer = dynamic(() => import('@/app/components/sections/Footer'));
const Navigation = dynamic(() => import('@/app/components/shared/Navigation'));

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative mt-16">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Team />
        <Stats />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}