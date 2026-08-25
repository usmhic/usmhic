import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language';

export function RequestProject() {
  const { content } = useLanguage();
  const { request } = content;
  const mailToUrl = `mailto:hello@osas.cloud?subject=${encodeURIComponent(request.mailSubject)}&body=${encodeURIComponent(request.mailBody)}`;

  return (
    <section className="py-32" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-foreground text-background p-12 md:p-24 text-center relative overflow-hidden"
      >
        {/* Subtle grid on the inverted card */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(var(--background) 1px, transparent 1px), linear-gradient(90deg, var(--background) 1px, transparent 1px)',
             backgroundSize: '2rem 2rem'
           }}
        />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-8">
            {request.titleLines[0]}<br />
            {request.titleLines[1]}
          </h2>
          <p className="text-background/70 text-lg md:text-xl font-light mb-12 max-w-xl">
            {request.description}
          </p>
          <a
            href={mailToUrl}
            className="inline-block border-2 border-background px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-background hover:text-foreground transition-all duration-300"
          >
            {request.cta}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
