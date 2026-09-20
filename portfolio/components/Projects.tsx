import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Apple, ArrowUpRight, Github, GitBranch, Globe, Lock, Play, Radio } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import type { Project, ProjectLink } from '@/content/site';

function getLinkIcon(kind: ProjectLink['kind']) {
  if (kind === 'source') return <Github className="w-4 h-4" />;
  if (kind === 'app-store') return <Apple className="w-4 h-4" />;
  if (kind === 'play-store') return <Play className="w-4 h-4" />;
  return <Globe className="w-4 h-4" />;
}

function StoreButton({
  link,
  projectName,
  comingSoonLabel,
}: {
  link: ProjectLink;
  projectName: string;
  comingSoonLabel: string;
}) {
  const [shown, setShown] = useState(false);

  if (!link.comingSoon) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 border border-border px-3 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
        aria-label={`Open ${projectName} ${link.label}`}
      >
        {getLinkIcon(link.kind)}
        <span>{link.label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setShown(true);
        window.setTimeout(() => setShown(false), 1600);
      }}
      className="relative inline-flex items-center gap-2 border border-border px-3 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label={`${projectName} ${link.label} — ${comingSoonLabel}`}
      title={comingSoonLabel}
    >
      {getLinkIcon(link.kind)}
      <span>{link.label}</span>
      <span
        className={`pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap border border-border bg-background px-2 py-1 text-[10px] uppercase tracking-widest text-foreground shadow-sm transition-opacity ${
          shown ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {comingSoonLabel}
      </span>
    </button>
  );
}

function ProjectCard({
  project,
  i,
  statusLabels,
  progressLabel,
  comingSoonLabel,
}: {
  project: Project;
  i: number;
  statusLabels: Record<Project['status'], string>;
  progressLabel: string;
  comingSoonLabel: string;
}) {
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
          <div>
            <div className="mb-4 inline-flex items-center gap-2 border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              <Radio className="w-3 h-3" />
              <span>{statusLabels[project.status]}</span>
            </div>
            <h3 className="text-3xl font-serif">{project.name}</h3>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-muted-foreground font-light text-lg leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
          <span>{progressLabel}</span>
          <span>{project.progress}%</span>
        </div>
        <div className="h-px bg-border">
          <div className="h-px bg-foreground" style={{ width: `${project.progress}%` }} />
        </div>
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

      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <StoreButton
              key={`${project.name}-${link.kind}`}
              link={link}
              projectName={project.name}
              comingSoonLabel={comingSoonLabel}
            />
          ))}
        </div>
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
  const { projects } = content;

  return (
    <section className="py-32 border-t border-border/50" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-6xl font-serif tracking-tight mb-24"
      >
        {projects.title}
      </motion.h2>

      {/* Open Source */}
      <div className="mb-20">
        <SectionLabel icon={<GitBranch className="w-4 h-4" />} label={projects.openSourceLabel} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50">
          {projects.openSource.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              i={i}
              statusLabels={projects.statusLabels}
              progressLabel={projects.progressLabel}
              comingSoonLabel={projects.comingSoonLabel}
            />
          ))}
        </div>
      </div>

      {/* Proprietary */}
      <div>
        <SectionLabel icon={<Lock className="w-4 h-4" />} label={projects.proprietaryLabel} delay={0.1} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50">
          {projects.proprietary.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              i={i}
              statusLabels={projects.statusLabels}
              progressLabel={projects.progressLabel}
              comingSoonLabel={projects.comingSoonLabel}
            />
          ))}
          {projects.proprietary.length % 2 !== 0 && (
            <div className="bg-background p-8 md:p-12 hidden md:block" />
          )}
        </div>
      </div>
    </section>
  );
}
