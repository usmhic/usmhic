'use client';

import { Nav } from '@/components/Nav';
import { Projects } from '@/components/Projects';
import { RequestProject } from '@/components/RequestProject';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-noise min-h-[100dvh] flex flex-col relative overflow-hidden bg-background">
      <Nav />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <About />
        <Projects />
        <RequestProject />
      </main>
      <Footer />
    </div>
  );
}
