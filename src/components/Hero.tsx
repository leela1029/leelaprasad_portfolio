'use client';

import React, { useState } from 'react';
import { Chip3D } from './Chip3D';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { 
  Terminal, 
  ArrowRight, 
  FileText, 
  Activity, 
  Cpu, 
  Radio, 
  Layers, 
  ShieldCheck,
  Binary,
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
  onExploreLab: () => void;
  onViewResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTerminal,
  onExploreLab,
  onViewResume,
}) => {
  const [activeSignal, setActiveSignal] = useState<'CLK' | 'RTL' | 'FSM' | 'IO'>('CLK');

  const statusItems = [
    { label: 'CORE', status: 'ONLINE', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
    { label: 'FPGA', status: 'READY', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
    { label: 'HDL', status: 'ACTIVE', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
    { label: 'DIGITAL', status: 'ACTIVE', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
    { label: 'SYSTEM', status: 'STABLE', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Heading & Value Proposition */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Engineering Station Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-950">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-widest">DIGITAL ENGINEERING LAB // WORKSTATION</span>
          </div>

          {/* Name & Domain Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-mono">
              LEELA
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-mono font-semibold text-cyan-400 tracking-wider">
              <span>ECE</span>
              <span className="text-slate-600">×</span>
              <span>VLSI</span>
              <span className="text-slate-600">×</span>
              <span>FPGA</span>
              <span className="text-slate-600">×</span>
              <span>DIGITAL DESIGN</span>
            </div>
          </div>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
            {PORTFOLIO_DATA.engineer.tagline}
          </p>

          {/* Core Telemetry Specs Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
              <span className="text-[10px] font-mono text-slate-400 block">EDUCATION</span>
              <span className="text-xs font-mono font-semibold text-slate-200">B.Tech (4th Yr)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
              <span className="text-[10px] font-mono text-slate-400 block">PRIMARY HDL</span>
              <span className="text-xs font-mono font-semibold text-cyan-400">Verilog HDL</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
              <span className="text-[10px] font-mono text-slate-400 block">HARDWARE</span>
              <span className="text-xs font-mono font-semibold text-slate-200">FPGA / RTL</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
              <span className="text-[10px] font-mono text-slate-400 block">CLOCK FREQ</span>
              <span className="text-xs font-mono font-semibold text-emerald-400">100.00 MHz</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreLab}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-slate-950 font-mono text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>EXPLORE ENGINEERING LAB</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 font-mono text-sm font-semibold tracking-wide transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>VIEW RESUME</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 font-mono text-xs transition-all duration-200"
              title="Launch Engineer Shell"
            >
              <Terminal className="w-4 h-4" />
              <span>LAUNCH TERMINAL</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Silicon Die & System Status HUD */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-5">
          
          {/* 3D Chip / FPGA Display */}
          <div className="w-full flex items-center justify-center">
            <Chip3D />
          </div>

          {/* System Status Dashboard Card */}
          <div className="w-full max-w-[420px] rounded-xl bg-slate-950/85 border border-cyan-500/25 p-4 backdrop-blur-md shadow-xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-slate-200">
                  SYSTEM STATUS TELEMETRY
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                STABLE
              </span>
            </div>

            {/* Status Grid */}
            <div className="grid grid-cols-5 gap-1.5 font-mono text-center">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className={`p-2 rounded-lg bg-slate-900/80 border ${item.border} flex flex-col items-center justify-center`}
                >
                  <span className="text-[9px] text-slate-400 tracking-wider mb-0.5">
                    {item.label}
                  </span>
                  <span className={`text-[10px] font-bold ${item.color} flex items-center gap-1`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Signal Probe Interactive Selector */}
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-cyan-400" />
                PROBE SIGNAL:
              </span>
              <div className="flex items-center gap-1">
                {(['CLK', 'RTL', 'FSM', 'IO'] as const).map((sig) => (
                  <button
                    key={sig}
                    onClick={() => setActiveSignal(sig)}
                    className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                      activeSignal === sig
                        ? 'bg-cyan-500/30 text-cyan-300 font-bold border border-cyan-400/40'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {sig}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
