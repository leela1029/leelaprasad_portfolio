'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Terminal as TerminalIcon, Menu, X, Activity, Radio } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface NavbarProps {
  onToggleTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleTerminal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemTime, setSystemTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = ['hero', 'about', 'skills', 'projects', 'lab', 'experience', 'education', 'certifications', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'SYS_BOOT' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'lab', label: 'ENG_LAB' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'certifications', label: 'CERTS' },
    { id: 'resume', label: 'RESUME' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/20 py-2.5 shadow-lg shadow-black/50'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Callsign */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-colors">
            <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors" />
            <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
                LEELA
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                ECE // VLSI
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 tracking-tight flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              STATUS: {PORTFOLIO_DATA.systemTelemetry.coreStatus}
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Telemetry Clock & Quick Tools */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="text-cyan-400">{systemTime || '100.00 MHz'}</span>
          </div>

          {onToggleTerminal && (
            <button
              onClick={onToggleTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 text-xs font-mono transition-all duration-200 hover:shadow-md hover:shadow-cyan-500/20"
              title="Open Engineer Shell"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>TERMINAL</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          {onToggleTerminal && (
            <button
              onClick={onToggleTerminal}
              className="p-2 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300"
              aria-label="Toggle Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-5 space-y-1">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
            <span>LAB TELEMETRY: {PORTFOLIO_DATA.systemTelemetry.clockFrequency}</span>
            <span className="text-emerald-400">SYS READY</span>
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
