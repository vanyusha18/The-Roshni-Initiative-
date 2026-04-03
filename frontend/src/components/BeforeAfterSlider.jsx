import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider() {
  const [village, setVillage] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch('https://the-roshni-initiative-production.up.railway.app/api/villages')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setVillage(data[0]);
      })
      .catch(err => console.error(err));
  }, []);

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  if (!village) return <div className="py-20 text-center animate-pulse">Loading visual impact...</div>;

  return (
    <section className="py-24 bg-roshni-sand">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 text-roshni-ink">Witness the Transformation</h2>
          <p className="text-2xl text-roshni-green font-heading italic">{village.name}: {village.description}</p>
        </div>

        {/* Timeline */}
        <div className="flex justify-between items-center mb-10 px-4 overflow-x-auto gap-4 scrollbar-hide border-b-2 border-roshni-teal/20 pb-4">
          {village.timeline.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center min-w-[120px]">
              <span className="text-roshni-amber font-bold font-sans text-xl">{item.month}</span>
              <span className="text-sm font-sans text-roshni-ink/80">{item.event}</span>
            </div>
          ))}
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-roshni-ink/20 cursor-ew-resize"
          ref={containerRef}
          onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
          onTouchMove={handleDrag}
          onMouseDown={(e) => handleDrag(e)}>

          {/* After image */}
          <img src={village.afterImage} alt="After Transformation" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />

          {/* Before image with clipPath */}
          <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
            <img src={village.beforeImage} alt="Before Transformation" className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" />
          </div>

          {/* Slider Thumb */}
          <div className="absolute top-0 bottom-0 w-[4px] bg-white z-20 flex items-center justify-center translate-x-[-50%]" style={{ left: `${sliderPos}%` }}>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform active:scale-95 transition-transform">
              <span className="text-roshni-teal font-black">⟷</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 z-20 bg-roshni-ink/80 text-white px-4 py-2 rounded text-sm uppercase tracking-widest font-sans font-bold">Before</div>
          <div className="absolute bottom-4 right-4 z-10 bg-roshni-teal/80 text-white px-4 py-2 rounded text-sm uppercase tracking-widest font-sans font-bold">After</div>
        </div>
      </div>
    </section>
  );
}
