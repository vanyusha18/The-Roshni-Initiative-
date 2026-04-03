import React from 'react';
import StoryHero from '../components/StoryHero';
import ImpactCounters from '../components/ImpactCounters';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col bg-roshni-sand">
      <StoryHero />
      
      {/* SVG Wave */}
      <div className="bg-roshni-ink w-full overflow-hidden leading-none relative z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 pb-0 mb-[-1px] transform rotate-180">
           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-roshni-sand"></path>
        </svg>
      </div>
      
      <ImpactCounters />
      
      <BeforeAfterSlider />

      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-heading text-roshni-ink mb-6">Become a Part of the Journey</h2>
        <p className="max-w-2xl mx-auto text-lg text-roshni-ink/80 mb-10 font-sans leading-relaxed">
          The transformation begins with you. Get your Impact Passport today and start tracking the real change you bring to children across rural India.
        </p>
        <Link to="/register" className="inline-block px-10 py-4 bg-roshni-amber text-roshni-ink font-bold font-sans tracking-widest uppercase rounded-sm shadow-xl shadow-roshni-amber/30 hover:-translate-y-1 transition-transform">
          Get Your Passport
        </Link>
      </section>
    </div>
  );
}
