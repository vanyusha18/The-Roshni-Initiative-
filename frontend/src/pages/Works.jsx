import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Works() {
    return (
        <div className="bg-roshni-sand min-h-screen pb-20">
            <div className="bg-roshni-ink text-white py-24 text-center px-6 relative overflow-hidden">
                <div className="relative z-10 w-full max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-heading mb-6 tracking-wide text-roshni-amber">Our Works</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto text-roshni-sand/80 font-sans font-light leading-relaxed">
                        Explore the villages we've transformed and the measurable impact created through continuous digital literacy efforts.
                    </p>
                </div>
            </div>

            {/* Reusing BeforeAfterSlider as a highlight of projects */}
            <BeforeAfterSlider />

            <section className="max-w-6xl mx-auto px-6 py-10">
                <h2 className="text-4xl font-heading text-roshni-ink mb-12 text-center">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                        <div className="h-64 bg-gray-300 w-full relative overflow-hidden" style={{ backgroundImage: 'url(/images/gallery_solar.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="absolute inset-0 bg-roshni-ink/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-10">
                            <span className="inline-block bg-roshni-green/10 text-roshni-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Completed</span>
                            <h3 className="text-3xl font-heading text-roshni-ink mb-4">Project Ujala - Bihar</h3>
                            <p className="text-gray-600 mb-8 font-sans leading-relaxed text-lg">Installed high-efficiency solar-powered computer labs in 5 highly remote rural schools, providing digital access for the very first time to over 800 aspiring students.</p>
                            <Link to="/gallery" className="text-roshni-teal font-bold tracking-widest uppercase text-sm flex items-center gap-2 hover:gap-4 transition-all">View Gallery <ArrowRight size={16} /></Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                        <div className="h-64 bg-gray-300 w-full relative overflow-hidden" style={{ backgroundImage: 'url(/images/gallery_women.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="absolute inset-0 bg-roshni-ink/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-10">
                            <span className="inline-block bg-roshni-amber/20 text-roshni-amber px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Ongoing</span>
                            <h3 className="text-3xl font-heading text-roshni-ink mb-4">Tech Circles - Rajasthan</h3>
                            <p className="text-gray-600 mb-8 font-sans leading-relaxed text-lg">Dedicated clusters training 250 local women in comprehensive digital literacy alongside small-business tools, equipping them with smartphones and secure internet hygiene.</p>
                            <Link to="/gallery" className="text-roshni-teal font-bold tracking-widest uppercase text-sm flex items-center gap-2 hover:gap-4 transition-all">View Gallery <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
