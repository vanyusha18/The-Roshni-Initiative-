import React from 'react';

export default function About() {
    return (
        <div className="bg-roshni-sand min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-20">
                <section className="text-center">
                    <h1 className="text-5xl font-heading text-roshni-ink mb-6">About Roshni Initiative</h1>
                    <p className="text-xl text-roshni-ink/80 font-sans leading-relaxed tracking-wide bg-white/50 p-8 rounded-xl shadow border border-white">
                        Lighting the path from rural darkness to digital possibility. We believe every child deserves access to modern education and technology, regardless of their geography. We don't just build labs; we build communities around digital futures.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-10 rounded-2xl shadow-xl shadow-roshni-ink/5 border-t-4 border-roshni-amber transition-transform hover:-translate-y-2">
                        <h2 className="text-3xl font-bold font-heading text-roshni-ink mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed font-sans text-lg">A future where rural India is seamlessly connected to the digital world, empowering the next generation of innovators, leaders, and creators without geographic barriers.</p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-xl shadow-roshni-ink/5 border-t-4 border-roshni-teal transition-transform hover:-translate-y-2">
                        <h2 className="text-3xl font-bold font-heading text-roshni-ink mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed font-sans text-lg">To bridge the digital divide by building tablet libraries, conducting coding camps, and fostering women-only tech circles across 500 villages by the year 2030.</p>
                    </div>
                </div>

                <section className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center">
                    <h2 className="text-4xl font-heading text-roshni-ink mb-12">Meet Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[{ name: 'Aisha Mathur', role: 'Founder & CEO' }, { name: 'Rahul Nair', role: 'Head of Education' }, { name: 'Sneha Rao', role: 'Field Operations' }].map(member => (
                            <div key={member.name} className="flex flex-col items-center">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mb-6 border-4 border-roshni-sand shadow-inner flex items-center justify-center text-4xl text-gray-400 font-heading">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-2xl font-bold font-sans text-roshni-ink mb-1">{member.name}</h3>
                                <p className="text-roshni-teal font-semibold tracking-wider text-sm uppercase">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
