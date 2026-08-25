import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export function About() {
  const { content } = useLanguage();
  const { about } = content;
  return (
    <section className="py-32 border-t border-border/50" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

        {/* Left label */}
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32 flex flex-col gap-6"
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              {about.label}
            </h2>
            <a
              href="https://osas.cloud"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border border-border px-4 py-3 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 group w-fit"
              data-testid="link-osas-cloud"
            >
              <span className="font-serif italic">{about.button}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="md:col-span-8 flex flex-col gap-12">

          {/* Intro blurb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-foreground">
              {about.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl">
              {about.paragraphs[0]}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl"
          >
            {about.paragraphs[1]}
          </motion.p>

          {/* Fun facts grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/50 border border-border/50"
          >
            {about.facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="bg-background p-6 flex flex-col gap-1"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
                  {fact.label}
                </span>
                <span className="text-sm font-medium text-foreground">{fact.value}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm text-muted-foreground font-light"
          >
            {about.fullStory}{' '}
            <a
              href="https://me.osas.cloud"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              me.osas.cloud
            </a>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
}
