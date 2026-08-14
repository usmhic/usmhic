import React from 'react';
import { motion } from 'framer-motion';

export function RequestProject() {
  const mailToUrl = `mailto:hello@osas.cloud?subject=${encodeURIComponent("Project Request")}&body=${encodeURIComponent("Hi, I'd like to discuss a project idea with you.\n\nProject name: \nDescription: \nTimeline: \nBudget: ")}`;

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
            Have an idea?<br />
            Let&apos;s build it.
          </h2>
          <p className="text-background/70 text-lg md:text-xl font-light mb-12 max-w-xl">
            Currently accepting new projects. Let&apos;s discuss your technical requirements and turn your concept into a reality.
          </p>
          <a 
            href={mailToUrl}
            className="inline-block border-2 border-background px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-background hover:text-foreground transition-all duration-300"
          >
            Start the conversation
          </a>
        </div>
      </motion.div>
    </section>
  );
}
