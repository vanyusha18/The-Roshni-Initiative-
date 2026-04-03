import React, { useEffect, useState, useRef } from 'react';

export default function ImpactCounters() {
  const [metrics, setMetrics] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/impact')
      .then(res => res.json())
      .then(data => setMetrics(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Counter = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible || !target) return;
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
      <div className="flex flex-col items-center p-6 border-b-4 border-roshni-teal">
        <span className="text-5xl font-heading text-roshni-green font-bold mb-2">{count.toLocaleString()}+</span>
        <span className="text-lg text-roshni-ink font-sans tracking-wide uppercase">{label}</span>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading mb-4 text-roshni-ink">Real-Time Impact</h2>
          {metrics && (
            <p className="text-sm text-gray-400 font-sans italic tracking-wide uppercase">
              Last updated: {Math.floor((new Date() - new Date(metrics.lastUpdated)) / 60000)} mins ago
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Counter target={metrics?.studentsReached || 0} label="Students Reached" />
          <Counter target={metrics?.villagesTransformed || 0} label="Villages Transformed" />
          <Counter target={metrics?.womenTrained || 0} label="Women Trained" />
        </div>
      </div>
    </section>
  );
}
