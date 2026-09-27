'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { CircuitBackground } from '@/components/CircuitBackground';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { EngineeringLab } from '@/components/EngineeringLab';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Terminal } from '@/components/Terminal';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut listener for ~ / ` or Ctrl+K to open Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Interactive Circuit PCB Background Canvas */}
      <CircuitBackground />

      {/* Semiconductor HUD Navbar */}
      <Navbar onToggleTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <div className="relative z-10 space-y-8">
        
        {/* 1. Hero with 3D Silicon Die & Status Telemetry */}
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onExploreLab={() => scrollToSection('lab')}
          onViewResume={() => scrollToSection('resume')}
        />

        {/* 2. Engineer Profile & Datasheet */}
        <About />

        {/* 3. Engineering Skills Matrix */}
        <Skills />

        {/* 4. Interactive Project Laboratory */}
        <Projects />

        {/* 5. Signature Feature: Virtual Engineering Lab */}
        <EngineeringLab />

        {/* 6. Experience & Internship Timeline */}
        <Experience />

        {/* 7. Academic Foundation & Education */}
        <Education />

        {/* 8. Hardware Certifications Vault */}
        <Certifications />

        {/* 9. Resume & Dossier */}
        <Resume />

        {/* 10. Engineering Communication Port */}
        <Contact />

      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Engineer Shell Trigger */}
      <button
        onClick={() => setTerminalOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-cyan-950/90 hover:bg-cyan-900 border-2 border-cyan-500/50 text-cyan-300 shadow-xl shadow-black/80 backdrop-blur-md flex items-center gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
        title="Open Engineering Terminal (Ctrl+K)"
        aria-label="Open Engineering Terminal"
      >
        <TerminalIcon className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-mono text-xs font-bold tracking-wider">
          ENG_SHELL
        </span>
      </button>

      {/* Interactive Terminal Modal */}
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

    </main>
  );
}
