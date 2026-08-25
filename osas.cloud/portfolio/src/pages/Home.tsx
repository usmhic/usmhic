import React from 'react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { RequestProject } from '@/components/RequestProject';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export function Home() {
  return (
    <div className="bg-noise min-h-[100dvh] flex flex-col relative overflow-hidden bg-background">
      <Nav />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <Projects />
        <RequestProject />
        <About />
      </main>
      <Footer />
    </div>
  );
}
