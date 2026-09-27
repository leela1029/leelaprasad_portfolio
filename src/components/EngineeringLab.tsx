'use client';

import React, { useState } from 'react';
import { FpgaExplorer } from './FpgaExplorer';
import { LogicAnalyzer } from './LogicAnalyzer';
import { GatePlayground } from './GatePlayground';
import { 
  Cpu, 
  Activity, 
  Binary, 
  Terminal, 
  Sparkles, 
  Sliders,
  Layers,
  Zap
} from 'lucide-react';

export const EngineeringLab: React.FC = () => {
  const [activeModule, setActiveModule] = useState<'fpga' | 'scope' | 'gates'>('fpga');

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>MODULE // 04 • SIGNATURE WORKSTATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              THE VIRTUAL ENGINEERING LAB
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-2 md:mt-0 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE HARDWARE EMULATION ACTIVE</span>
          </div>
        </div>

        {/* Workbench Switcher Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setActiveModule('fpga')}
            className={`px-5 py-3 rounded-xl text-xs font-mono flex items-center gap-2.5 transition-all whitespace-nowrap ${
              activeModule === 'fpga'
                ? 'bg-cyan-500/20 text-cyan-300 border-2 border-cyan-500/60 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <GridIcon className="w-4 h-4 text-cyan-400" />
            <span>WORKBENCH 1: FPGA CLB & LUT EXPLORER</span>
          </button>

          <button
            onClick={() => setActiveModule('scope')}
            className={`px-5 py-3 rounded-xl text-xs font-mono flex items-center gap-2.5 transition-all whitespace-nowrap ${
              activeModule === 'scope'
                ? 'bg-cyan-500/20 text-cyan-300 border-2 border-cyan-500/60 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>WORKBENCH 2: 6-CHANNEL LOGIC ANALYZER</span>
          </button>

          <button
            onClick={() => setActiveModule('gates')}
            className={`px-5 py-3 rounded-xl text-xs font-mono flex items-center gap-2.5 transition-all whitespace-nowrap ${
              activeModule === 'gates'
                ? 'bg-cyan-500/20 text-cyan-300 border-2 border-cyan-500/60 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Binary className="w-4 h-4 text-cyan-400" />
            <span>WORKBENCH 3: DIGITAL LOGIC GATE & RTL SYNTH</span>
          </button>
        </div>

        {/* Workbench Container Stage */}
        <div className="rounded-3xl bg-slate-950/90 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/80">
          {activeModule === 'fpga' && <FpgaExplorer />}
          {activeModule === 'scope' && <LogicAnalyzer />}
          {activeModule === 'gates' && <GatePlayground />}
        </div>

      </div>
    </section>
  );
};

function GridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}
