import React, { useState } from 'react';

export default function Gallery() {
    const [filter, setFilter] = useState('All');

    const images = [
        { cat: 'Education', url: '/images/gallery_education.png' },
        { cat: 'Technology', url: '/images/hero_priya.png' },
        { cat: 'Women', url: '/images/gallery_women.png' },
        { cat: 'Education', url: '/images/village_after.png' },
        { cat: 'Infrastructure', url: '/images/gallery_solar.png' },
        { cat: 'Technology', url: '/images/village_before.png' },
    ];

    const filtered = filter === 'All' ? images : images.filter(img => img.cat === filter);
    const categories = ['All', 'Education', 'Technology', 'Women', 'Infrastructure'];

    return (
        <div className="bg-roshni-sand min-h-screen py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-heading text-roshni-ink mb-4">Photo Gallery</h1>
                    <p className="font-sans text-lg text-gray-500">Visual proof of the change your volunteering brings to life.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-14">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full font-bold font-sans tracking-widest uppercase text-sm border-2 transition-all ${filter === cat ? 'bg-roshni-teal border-roshni-teal text-white shadow-xl shadow-roshni-teal/30 scale-105' : 'bg-transparent border-roshni-teal/30 text-roshni-ink hover:border-roshni-teal'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((img, i) => (
                        <div key={i} className="group overflow-hidden rounded-2xl bg-white shadow-xl relative aspect-[4/3] cursor-pointer">
                            <img src={img.url} alt="Gallery moment" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-roshni-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold font-sans uppercase tracking-widest">{img.cat}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
