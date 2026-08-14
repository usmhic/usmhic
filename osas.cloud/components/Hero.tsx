import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const words = ["products.", "ideas.", "platforms.", "experiences.", "solutions."];

export function Hero() {
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-24 relative" id="hero">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative z-10 max-w-5xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] text-foreground tracking-tight mb-6">
            Imagine it.<br />
            <span className="text-muted-foreground italic font-serif">We&apos;ll build it.</span>
          </h1>
        </motion.div>

        {/* Rotating word */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="text-muted-foreground text-lg font-light">Turning ideas into real</span>
          <div className="relative overflow-hidden h-7 w-40">
            <motion.span
              key={wordIndex}
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -28, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-lg font-medium text-foreground"
            >
              {words[wordIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light mb-16"
        >
          No ghost writers, no fluff — just someone who genuinely loves building things
          and ships them into the world. From solo projects to global platforms.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-4 text-sm font-medium tracking-widest uppercase hover:text-muted-foreground transition-colors"
            data-testid="button-scroll-projects"
          >
            <span className="border-b border-foreground group-hover:border-muted-foreground transition-colors pb-1">
              See the work
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
