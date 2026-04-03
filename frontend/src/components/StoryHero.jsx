import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StoryHero() {
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/stories/featured')
      .then(res => res.json())
      .then(data => setStory(data))
      .catch(err => console.error("Could not fetch featured story", err));
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-roshni-ink">
      {story?.image && (
        <img 
          src={story.image} 
          alt="Featured child" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-roshni-ink/50 to-roshni-ink"></div>
      
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {story ? (
          <>
            <h1 className="text-4xl md:text-6xl text-roshni-sand font-heading mb-6 leading-[1.3]">
              "{story.storyLine}"
            </h1>
            <p className="text-xl text-roshni-amber font-sans tracking-widest uppercase">
              Meet {story.childName}, {story.age}
            </p>
          </>
        ) : (
          <p className="text-roshni-sand text-lg tracking-widest uppercase animate-pulse">Loading story...</p>
        )}
      </motion.div>
    </section>
  );
}
