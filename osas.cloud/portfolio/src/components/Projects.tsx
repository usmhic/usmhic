import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Lock } from 'lucide-react';
import { useLanguage } from '@/lib/language';

function ProjectCard({ project, i }: { project: { name: string; url: string | null; description: string; tags: string[] }; i: number }) {
  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
      className="group relative bg-background p-8 md:p-12 hover:bg-muted/10 transition-colors duration-500 min-h-[320px] flex flex-col justify-between"
      data-testid={`card-project-${project.name.toLowerCase()}`}
    >
      <div>
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-3xl font-serif">{project.name}</h3>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 border border-border hover:bg-foreground hover:text-background rounded-full"
              aria-label={`Visit ${project.name}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-muted-foreground font-light text-lg leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 border border-border text-xs uppercase tracking-widest text-muted-foreground font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.url && (
        <a href={project.url} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.name}`}>
          <span className="sr-only">View {project.name}</span>
        </a>
      )}
    </motion.div>
  );
}

function SectionLabel({ icon, label, delay = 0 }: { icon: React.ReactNode; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3 mb-12"
    >
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">{label}</span>
      <div className="flex-1 h-px bg-border/60" />
    </motion.div>
  );
}

export function Projects() {
  const { content } = useLanguage();
  return (
    <section className="py-32 border-t border-border/50" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-6xl font-serif tracking-tight mb-24"
      >
        Work, in progress
      </motion.h2>

      {/* Open Source */}
      <div className="mb-20">
        <SectionLabel icon={<GitBranch className="w-4 h-4" />} label={content.projects.openSourceLabel} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50">
          {content.projects.openSource.map((project, i) => (
            <ProjectCard key={project.name} project={project} i={i} />
          ))}
        </div>
      </div>

      {/* Proprietary */}
      <div>
        <SectionLabel icon={<Lock className="w-4 h-4" />} label={content.projects.proprietaryLabel} delay={0.1} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50">
          {content.projects.proprietary.map((project, i) => (
            <ProjectCard key={project.name} project={project} i={i} />
          ))}
          {content.projects.proprietary.length % 2 !== 0 && (
            <div className="bg-background p-8 md:p-12 hidden md:block" />
          )}
        </div>
      </div>
    </section>
  );
}
