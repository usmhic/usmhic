"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Moon,
  Plus,
  Sun,
} from "lucide-react";
import { useLanguage } from "@/lib/language";
import { useTheme } from "@/lib/theme";
import "./portfolio.css";

export default function Home() {
  const { language, content, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [filter, setFilter] = useState("all");
  const [copyState, setCopyState] = useState("idle");
  const fr = language === "fr";
  const projects = [
    ...content.projects.openSource.map((p) => ({ ...p, category: "open" })),
    ...content.projects.proprietary.map((p) => ({ ...p, category: "private" })),
  ].filter((p) => filter === "all" || p.category === filter);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("me@osas.cloud");
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }
  return (
    <div className="portfolio" id="top">
      <a className="skip-link" href="#main">
        {fr ? "Aller au contenu" : "Skip to content"}
      </a>
      <header className="portfolio-nav">
        <a className="wordmark" href="#top" aria-label="Oussama Hichou — home">
          oh<span>.</span>
        </a>
        <nav aria-label={fr ? "Navigation principale" : "Main navigation"}>
          <a href="#projects">
            {content.nav.work}
            <span>08</span>
          </a>
          <a href="#about">{content.nav.about}</a>
          <a href="#contact">
            {content.nav.contact}
            <ArrowUpRight size={14} />
          </a>
        </nav>
        <div className="nav-settings">
          <button
            onClick={toggleLanguage}
            aria-label={content.nav.switchToLanguage}
          >
            {fr ? "EN" : "FR"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? content.nav.switchToLight
                : content.nav.switchToDark
            }
            suppressHydrationWarning
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="business-card" aria-labelledby="intro-title">
          <div className="card-topline">
            <span>
              {fr
                ? "INGÉNIEUR FULL-STACK & CRÉATEUR"
                : "FULL-STACK ENGINEER & BUILDER"}
            </span>
            <span className="availability">
              <i />
              {fr ? "Ouvert aux projets" : "Open to projects"}
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-intro">
              <p className="hello">{fr ? "Bonjour, je suis" : "Hey, I’m"}</p>
              <h1 id="intro-title">
                Oussama
                <br />
                Hichou<span>.</span>
              </h1>
              <p className="hero-description">
                {fr
                  ? "Des idées ambitieuses. Des logiciels bien pensés."
                  : "Big ideas. Thoughtfully built software."}
                <br />
                <span>
                  {fr
                    ? "Du premier « et si » à la mise en ligne."
                    : "From the first “what if” to out in the world."}
                </span>
              </p>
              <div className="hero-links">
                <a className="primary-link" href="mailto:me@osas.cloud">
                  {fr ? "Disons bonjour" : "Let’s talk"}
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://github.com/usmhic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://linkedin.com/in/usmhic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} />
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
            <a
              className="orbit-art"
              href="#projects"
              aria-label={content.hero.cta}
            >
              <div className="orbit-grid" />
              <div className="orbital-sphere">
                {Array.from({ length: 12 }, (_, i) => (
                  <span key={i} style={{ transform: `rotate(${i * 15}deg)` }} />
                ))}
                <b>✳</b>
              </div>
              <span className="art-coordinate">
                OH—001 / {fr ? "TOUJOURS CURIEUX" : "ALWAYS CURIOUS"}
              </span>
              <span className="art-caption">
                {fr ? "Une idée prend forme." : "Something good takes shape."}
                <ArrowUpRight size={17} />
              </span>
            </a>
          </div>
          <div className="card-bottomline">
            <span>
              {fr
                ? "INDÉPENDANT D’ESPRIT. OUVERT PAR NATURE."
                : "INDEPENDENT MIND. OPEN-SOURCE SPIRIT."}
            </span>
            <a href="#projects">
              {fr ? "La suite, juste ici" : "A little more below"}
              <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <section
          className="work-section"
          id="projects"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / {fr ? "LES PROJETS" : "THE WORK"}</p>
              <h2 id="work-title">
                {fr ? "Des idées en action" : "Ideas, out in the wild"}
                <span>.</span>
              </h2>
            </div>
            <p>
              {fr
                ? "Des projets personnels aux plateformes ambitieuses."
                : "Side projects. Serious platforms."}
              <br />
              {fr
                ? "Toujours l’envie de construire."
                : "Same curiosity behind all of them."}
            </p>
          </div>
          <div className="project-toolbar">
            <div
              className="project-filters"
              role="group"
              aria-label={fr ? "Filtrer les projets" : "Filter projects"}
            >
              {["all", "open", "private"].map((value) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {value === "all"
                    ? fr
                      ? "Tout"
                      : "All work"
                    : value === "open"
                      ? "Open source"
                      : fr
                        ? "Propriétaire"
                        : "Proprietary"}
                </button>
              ))}
            </div>
            <span className="project-count" aria-live="polite">
              {String(projects.length).padStart(2, "0")}{" "}
              {fr ? "PROJETS" : "PROJECTS"}
            </span>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <details className="project-row" key={project.name}>
                <summary>
                  <span className="project-symbol" aria-hidden="true">
                    {project.name.slice(0, 1)}
                    <span>↗</span>
                  </span>
                  <span className="project-name">
                    {project.name}
                    <small>{project.tags.slice(0, 3).join(" / ")}</small>
                  </span>
                  <span className={`project-status status-${project.status}`}>
                    <i />
                    {content.projects.statusLabels[project.status]}
                  </span>
                  <Plus className="expand-icon" size={22} />
                </summary>
                <div className="project-detail">
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-destinations">
                    {project.links.map((link) =>
                      link.comingSoon ? (
                        <span key={link.kind} className="coming-soon">
                          {link.label} · {content.projects.comingSoonLabel}
                        </span>
                      ) : (
                        <a
                          key={link.kind}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                          <ArrowUpRight size={15} />
                        </a>
                      ),
                    )}
                    {project.links.length === 0 && (
                      <span className="coming-soon">
                        {content.projects.comingSoonLabel}
                      </span>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
          <a
            className="text-link"
            href="https://github.com/usmhic"
            target="_blank"
            rel="noreferrer"
          >
            {fr
              ? "Dans les coulisses, sur GitHub"
              : "More behind the scenes on GitHub"}
            <ArrowUpRight size={17} />
          </a>
        </section>
        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">02 / {fr ? "LA PERSONNE" : "THE PERSON"}</p>
            <h2 id="about-title">
              {fr ? "Sérieux dans le travail." : "Serious about the craft."}
              <br />
              <span>
                {fr ? "Curieux de tout." : "Curious about everything."}
              </span>
            </h2>
            <a
              className="text-link"
              href="https://linkedin.com/in/usmhic"
              target="_blank"
              rel="noreferrer"
            >
              {fr ? "Faisons connaissance" : "A little more about me"}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="about-copy">
            <p>
              {fr
                ? "Je suis un ingénieur full-stack qui aime transformer les problèmes complexes en produits simples à utiliser. Des outils open source aux plateformes d’entreprise, j’aime construire des choses utiles et les voir vivre."
                : "I’m a full-stack engineer who likes turning complicated problems into things that feel simple. From open-source tools to enterprise platforms, I care about making useful things and getting them into people’s hands."}
            </p>
            <p>
              {fr
                ? "Loin du clavier : voyages, photographie, aviation et découverte de nouvelles villes. La curiosité ne s’arrête pas à l’écran."
                : "Away from the keyboard: travel, photography, aviation, and getting to know a new city. The curiosity doesn’t stop at the screen."}
            </p>
            <div className="interest-tags">
              <span>Engineering</span>
              <span>Open source</span>
              <span>Cloud & DevSecOps</span>
              <span>{fr ? "Photographie" : "Photography"}</span>
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">
            03 / {fr ? "ET MAINTENANT ?" : "WHAT’S NEXT?"}
          </p>
          <div className="contact-heading">
            <h2 id="contact-title">
              {fr ? "Une bonne idée ?" : "Got a good idea?"}
              <br />
              <a href="mailto:me@osas.cloud">
                {fr ? "Parlons-en." : "Let’s make it real."}
                <ArrowUpRight />
              </a>
            </h2>
            <span className="contact-asterisk" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="contact-bottom">
            <p>
              {fr
                ? "Un projet, une collaboration, ou simplement un bonjour."
                : "A project, a collaboration, or just a hello."}
            </p>
            <div className="email-actions">
              <a href="mailto:me@osas.cloud">
                <Mail size={17} />
                me@osas.cloud
              </a>
              <button
                onClick={copyEmail}
                aria-label={
                  fr ? "Copier l’adresse e-mail" : "Copy email address"
                }
              >
                {copyState === "copied" ? (
                  <Check size={17} />
                ) : (
                  <Copy size={17} />
                )}
              </button>
              <span className="copy-feedback" role="status">
                {copyState === "copied"
                  ? fr
                    ? "Copié !"
                    : "Copied!"
                  : copyState === "error"
                    ? fr
                      ? "Copiez l’adresse ci-dessus."
                      : "Please copy the address above."
                    : ""}
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="portfolio-footer">
        <a className="wordmark" href="#top">
          oh<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Oussama Hichou</span>
        <a href="#top">
          {fr ? "Tout en haut" : "Back to top"}
          <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}
