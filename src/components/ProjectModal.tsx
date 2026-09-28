'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/data/portfolioData';
import {
  X,
  Cpu,
  Layers,
  Terminal,
  Code2,
  Activity,
  Play,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Zap,
  ArrowRight,
  Radio
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'simulation' | 'code' | 'specs'>('architecture');
  const [copiedCode, setCopiedCode] = useState(false);

  // Active Simulation States
  // 1. Traffic System Sim
  const [trafficEmergency, setTrafficEmergency] = useState(false);
  const [trafficPhase, setTrafficPhase] = useState<'NS_GREEN' | 'YELLOW' | 'EMERGENCY_CORRIDOR'>('NS_GREEN');

  // 2. Water Level Controller Sim
  const [waterLevel, setWaterLevel] = useState<number>(65);

  // 3. Olympics Data Analytics Sim
  const [olympicYear, setOlympicYear] = useState<number>(2024);

  useEffect(() => {
    if (!project) return;
    setActiveTab('architecture');
  }, [project]);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.verilogSnippet || project.workingPrinciple || '');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Traffic Light Toggle
  const handleTriggerEmergency = () => {
    setTrafficEmergency(true);
    setTrafficPhase('EMERGENCY_CORRIDOR');
    setTimeout(() => {
      setTrafficEmergency(false);
      setTrafficPhase('NS_GREEN');
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-950 border-2 border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col max-h-[92vh]">

        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-semibold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500">
                SYSTEM ID: {project.id.toUpperCase()}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-wide">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-400 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 bg-slate-900/40 border-b border-slate-800 overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${activeTab === 'architecture'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            VIEW ARCHITECTURE
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all whitespace-nowrap ${activeTab === 'simulation'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-bold'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Play className="w-3.5 h-3.5 text-emerald-400" />
            <span>LIVE SIMULATION</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all whitespace-nowrap ${activeTab === 'code'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERILOG RTL CODE</span>
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${activeTab === 'specs'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            SPECS & RESULTS
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300">

          {/* TAB 1: ARCHITECTURE & SIGNAL FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Problem & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">
                    PROBLEM STATEMENT
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {project.problemStatement}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-mono text-emerald-400 block font-bold">
                    ENGINEERING OBJECTIVE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {project.objective}
                  </p>
                </div>
              </div>

              {/* Interactive Architecture Block Diagram */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    HARDWARE ARCHITECTURE BLOCKS
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">SYNCHRONOUS RTL</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.architectureNodes.map((node, idx) => (
                    <div
                      key={node.id}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors relative"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-cyan-400">
                          NODE 0{idx + 1} // {node.type.toUpperCase()}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </div>
                      <h4 className="text-xs font-mono font-bold text-white mb-1">
                        {node.label}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-sans">
                        {node.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signal Propagation Flow */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-200 block">
                  SIGNAL PROPAGATION & CONTROL SEQUENCE:
                </span>
                <div className="space-y-2">
                  {project.signalFlow.map((step, index) => (
                    <div key={index} className="flex items-center gap-3 text-xs font-mono">
                      <span className="w-6 h-6 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE SIMULATION WORKBENCH */}
          {activeTab === 'simulation' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-mono font-bold text-cyan-300">
                    INTERACTIVE LOGIC SIMULATOR: {project.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Interact directly with inputs to observe hardware FSM state transitions & output signals.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 text-xs font-mono border border-emerald-500/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  EMULATOR READY
                </span>
              </div>

              {/* SIMULATION 1: TRAFFIC SYSTEM */}
              {project.simulationType === 'traffic' && (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
                    {/* North-South Light */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 w-44 flex flex-col items-center">
                      <span className="text-xs font-mono text-slate-400 mb-3">NORTH-SOUTH (MAIN)</span>
                      <div className="w-16 p-2 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col gap-2 items-center">
                        <div className={`w-8 h-8 rounded-full ${trafficEmergency || trafficPhase === 'YELLOW' ? 'bg-slate-800' : 'bg-emerald-500 shadow-lg shadow-emerald-500/50'}`} />
                        <div className={`w-8 h-8 rounded-full ${trafficPhase === 'YELLOW' ? 'bg-amber-400 shadow-lg shadow-amber-400/50' : 'bg-slate-800'}`} />
                        <div className={`w-8 h-8 rounded-full ${trafficEmergency ? 'bg-slate-800' : 'bg-slate-800'}`} />
                      </div>
                      <span className="text-xs font-mono text-emerald-400 mt-2">
                        {trafficEmergency ? 'CORRIDOR GREEN' : 'NORMAL GREEN'}
                      </span>
                    </div>

                    {/* East-West Light */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 w-44 flex flex-col items-center">
                      <span className="text-xs font-mono text-slate-400 mb-3">EAST-WEST (CROSS)</span>
                      <div className="w-16 p-2 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col gap-2 items-center">
                        <div className={`w-8 h-8 rounded-full ${trafficEmergency ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-slate-800'}`} />
                        <div className="w-8 h-8 rounded-full bg-slate-800" />
                        <div className={`w-8 h-8 rounded-full ${trafficEmergency ? 'bg-slate-800' : 'bg-red-500 shadow-lg shadow-red-500/50'}`} />
                      </div>
                      <span className="text-xs font-mono text-red-400 mt-2">
                        {trafficEmergency ? 'PREEMPTION LOCK' : 'RED HOLD'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-800">
                    <button
                      onClick={handleTriggerEmergency}
                      disabled={trafficEmergency}
                      className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-red-600/30 flex items-center gap-2"
                    >
                      <Zap className="w-4 h-4" />
                      <span>{trafficEmergency ? 'EMERGENCY OVERRIDE ENGAGED' : 'INJECT EMERGENCY VEHICLE RFID'}</span>
                    </button>
                  </div>
                </div>
              )}



              {/* SIMULATION 6: WATER LEVEL CONTROLLER */}
              {project.simulationType === 'waterlevel' && (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                    <div>
                      <span className="text-slate-400 block mb-1">RESERVOIR WATER DEPTH:</span>
                      <span className="text-2xl font-bold text-cyan-400">{waterLevel}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${waterLevel >= 25 ? 'bg-emerald-400' : 'bg-slate-800'}`} />
                        <span className="text-[10px] text-slate-400">25% (LOW)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${waterLevel >= 50 ? 'bg-cyan-400' : 'bg-slate-800'}`} />
                        <span className="text-[10px] text-slate-400">50% (MID)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${waterLevel >= 75 ? 'bg-amber-400' : 'bg-slate-800'}`} />
                        <span className="text-[10px] text-slate-400">75% (HIGH)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${waterLevel >= 100 ? 'bg-red-500 animate-ping' : 'bg-slate-800'}`} />
                        <span className="text-[10px] text-slate-400">100% (OVERFLOW)</span>
                      </div>
                    </div>
                  </div>

                  {/* Water Tank Graphic */}
                  <div className="relative w-full h-32 bg-slate-950 border-2 border-cyan-500/30 rounded-2xl overflow-hidden p-2">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-600/60 to-cyan-400/40 border-t border-cyan-300 transition-all duration-300 flex items-center justify-center"
                      style={{ height: `${waterLevel}%` }}
                    >
                      <span className="text-xs font-mono font-bold text-white drop-shadow">
                        {waterLevel}% LIQUID LEVEL
                      </span>
                    </div>
                  </div>

                  {/* Level Slider & Actuator Status */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>SIMULATE WATER INFLOW / CONSUMPTION:</span>
                      <span className="text-cyan-300 font-bold">{waterLevel}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={waterLevel}
                      onChange={(e) => setWaterLevel(Number(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">555 TIMER ALARM:</span>
                      <span className={`font-bold ${waterLevel >= 100 ? 'text-red-400 animate-pulse' : 'text-slate-600'}`}>
                        {waterLevel >= 100 ? 'BUZZER ACTIVE (ASTABLE OSCILLATION)' : 'IDLE'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">RELAY MOTOR:</span>
                      <span className={`font-bold px-2 py-0.5 rounded ${waterLevel >= 100 ? 'bg-red-950 text-red-400 border border-red-500/30' : 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'}`}>
                        {waterLevel >= 100 ? 'CUTOFF (SAFETY LOCKED)' : 'PUMP POWER ON'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATION 7: OLYMPICS DATA ANALYTICS */}
              {project.simulationType === 'olympics' && (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                    <div>
                      <span className="text-slate-400 block mb-1">HISTORICAL OLYMPIC DATA EXPLORER</span>
                      <span className="text-lg font-bold text-cyan-300">PANDAS & SEABORN ANALYTICAL PIPELINE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={olympicYear}
                        onChange={(e) => setOlympicYear(Number(e.target.value))}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 outline-none"
                      >
                        <option value={2024}>Paris 2024</option>
                        <option value={2020}>Tokyo 2020</option>
                        <option value={2016}>Rio 2016</option>
                        <option value={2012}>London 2012</option>
                        <option value={2008}>Beijing 2008</option>
                      </select>
                    </div>
                  </div>

                  {/* Country Medal Aggregation Bars */}
                  <div className="space-y-3 font-mono text-xs">
                    <span className="text-slate-400 block">TOP NATION MEDAL PROGRESSION MATRIX ({olympicYear}):</span>
                    {[
                      { nation: 'United States (USA)', gold: 40, silver: 44, bronze: 42, total: 126, pct: 100 },
                      { nation: 'China (CHN)', gold: 40, silver: 27, bronze: 24, total: 91, pct: 72 },
                      { nation: 'Great Britain (GBR)', gold: 14, silver: 22, bronze: 29, total: 65, pct: 52 },
                      { nation: 'France (FRA)', gold: 16, silver: 26, bronze: 22, total: 64, pct: 51 },
                      { nation: 'India (IND)', gold: 0, silver: 1, bronze: 5, total: 6, pct: 15 },
                    ].map((row) => (
                      <div key={row.nation} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                        <div className="flex justify-between items-center text-slate-300">
                          <span className="font-bold">{row.nation}</span>
                          <span className="text-cyan-400 font-bold">{row.total} Medals (G:{row.gold} S:{row.silver} B:{row.bronze})</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden flex">
                          <div style={{ width: `${row.pct}%` }} className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>CORRELATION ANALYSIS:</span>
                    <span className="text-emerald-400 font-bold">R² = 0.84 (GDP / Athlete Count Correlation)</span>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: VERILOG RTL / PYTHON SOURCE CODE */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  {project.verilogSnippet ? 'SYNTHESIZABLE VERILOG HDL (IEEE 1364)' : 'SOURCE ARCHITECTURE / PYTHON SPECIFICATION'}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'COPIED' : 'COPY CODE'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed max-h-[420px] shadow-inner">
                <code>
                  {project.verilogSnippet || `# Project: ${project.title}
# Category: ${project.category}
# Designer: Leelaprasad Baggu (GIET ECE)

# Principle:
# ${project.workingPrinciple}

# Technologies Applied:
# ${project.technologies.join(', ')}
`}
                </code>
              </pre>
            </div>
          )}

          {/* TAB 4: SPECS & RESULTS */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              {/* Stack Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 block">HARDWARE COMPONENTS</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.hardwareUsed.map((hw) => (
                      <span key={hw} className="px-2.5 py-1 rounded bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800">
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 block">EDA SOFTWARE & SUITES</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.softwareUsed.map((sw) => (
                      <span key={sw} className="px-2.5 py-1 rounded bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results & Verification */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-emerald-400 block">VERIFIED RESULTS:</span>
                <div className="space-y-2">
                  {project.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Scope */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 block">FUTURE ENHANCEMENTS:</span>
                <ul className="list-disc list-inside text-xs font-sans text-slate-400 space-y-1">
                  {project.futureScope.map((scope, i) => (
                    <li key={i}>{scope}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('simulation')}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5" />
              <span>TEST SIMULATION</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>VIEW CODE</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <span className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>REPO: {project.githubUrl}</span>
              </span>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs font-bold"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
