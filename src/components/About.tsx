'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { 
  User, 
  Cpu, 
  Layers, 
  Microchip, 
  CheckCircle2, 
  Terminal, 
  Activity, 
  Compass,
  FileCode2,
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'datasheet' | 'workflow' | 'instrumentation'>('datasheet');

  const engineer = PORTFOLIO_DATA.engineer;

  const workflows = [
    {
      step: '01',
      title: 'Logic Formulation & K-Map Minimization',
      desc: 'Deriving optimal Boolean expressions, state transition tables, and hazard-free gate networks.',
    },
    {
      step: '02',
      title: 'Synthesizable RTL in Verilog HDL',
      desc: 'Modeling synchronous registers, clean FSMs, and modular hardware blocks adhering to synthesis rules.',
    },
    {
      step: '03',
      title: 'Testbench Verification & Waveform Simulation',
      desc: 'Writing self-checking testbenches in ModelSim to evaluate corner-cases, setup/hold timing, and glitch freedom.',
    },
    {
      step: '04',
      title: 'FPGA Synthesis & Bitstream Implementation',
      desc: 'Mapping RTL to LUTs, CLBs, clock distribution networks, and verifying on physical hardware with logic analyzers.',
    },
  ];

  const labInstruments = [
    { name: 'Digital Storage Oscilloscope (DSO)', purpose: 'Signal integrity, rise/fall time, clock jitter inspection' },
    { name: 'Logic Analyzer', purpose: 'Multi-channel digital bus probing and protocol decoding (UART/SPI)' },
    { name: 'FPGA Development Boards', purpose: 'Xilinx Artix-7, Spartan-6, and Altera Cyclone IV prototyping' },
    { name: 'EDA Simulation Suites', purpose: 'ModelSim, QuestaSim, and EDA Playground for RTL verification' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>MODULE // 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              ENGINEER PROFILE & DATASHEET
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2 md:mt-0">
            CHIP SPECIFICATION // REV 4.0 // GIET-ECE
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Silicon Datasheet Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="rounded-2xl bg-slate-950/90 border-2 border-cyan-500/30 p-6 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-cyan-950/50">
              
              {/* Corner Chip Markings */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-cyan-500/70 border border-cyan-500/30 px-2 py-0.5 rounded">
                PINOUT: 144-TQFP
              </div>

              {/* Silicon Profile Card Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                <div className="w-16 h-16 rounded-xl bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 relative overflow-hidden shadow-md shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent" />
                  <Cpu className="w-8 h-8 relative z-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-mono text-white tracking-wide">
                    {engineer.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {engineer.degree}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    {engineer.institution} • {engineer.year}
                  </p>
                </div>
              </div>

              {/* Datasheet Key-Value Parameters */}
              <div className="space-y-3 pt-5 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">PRIMARY FOCUS</span>
                  <span className="text-cyan-300 font-semibold text-right">{engineer.focus}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">CORE HDL</span>
                  <span className="text-emerald-400 font-semibold">Verilog HDL (IEEE 1364)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">TARGET ARCH</span>
                  <span className="text-slate-200">FPGA & Digital ASIC RTL</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">LOCATION</span>
                  <span className="text-slate-200">{engineer.location}</span>
                </div>
              </div>

              {/* Primary Interests Tags */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block mb-2">
                  PRIMARY INTERESTS & SPECIALIZATIONS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {engineer.primaryInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-[11px] font-mono text-cyan-300 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lab Stats Bar */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-800 text-center font-mono">
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-lg font-bold text-cyan-400">{engineer.labStats.logicBlocksDesigned}</span>
                  <span className="text-[10px] text-slate-400 block">RTL Modules Designed</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-lg font-bold text-emerald-400">{engineer.labStats.simulationHours}</span>
                  <span className="text-[10px] text-slate-400 block">Simulation Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Tabs & Laboratory Methodology */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Bio Card */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>ENGINEERING OBJECTIVE & PHILOSOPHY</span>
              </div>
              <p className="text-slate-200 text-base leading-relaxed font-sans">
                {engineer.bio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                My undergraduate journey at GIET Engineering College has centered on bridging theoretical semiconductor physics with hardware implementation. Whether simulating synchronous FIFO buffers, architecting FSMs for intelligent intersection preemption, or inspecting waveforms on digital oscilloscopes, I am passionate about crafting robust, synthesizable digital hardware logic.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800 mb-5 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('datasheet')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                    activeTab === 'datasheet'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  HARDWARE SPECS
                </button>
                <button
                  onClick={() => setActiveTab('workflow')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                    activeTab === 'workflow'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  DESIGN METHODOLOGY
                </button>
                <button
                  onClick={() => setActiveTab('instrumentation')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                    activeTab === 'instrumentation'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  LAB INSTRUMENTATION
                </button>
              </div>

              {/* Tab 1: Hardware Specs */}
              {activeTab === 'datasheet' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  {engineer.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                    >
                      <span className="text-[10px] text-cyan-400 block mb-1">{spec.label}</span>
                      <span className="text-slate-200 font-medium">{spec.val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Design Methodology */}
              {activeTab === 'workflow' && (
                <div className="space-y-3">
                  {workflows.map((wf) => (
                    <div
                      key={wf.step}
                      className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800"
                    >
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950 px-2 py-1 rounded border border-cyan-800">
                        {wf.step}
                      </span>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-100">{wf.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{wf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Lab Instrumentation */}
              {activeTab === 'instrumentation' && (
                <div className="space-y-3">
                  {labInstruments.map((inst) => (
                    <div
                      key={inst.name}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-xs font-mono font-bold text-cyan-300">{inst.name}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{inst.purpose}</p>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
