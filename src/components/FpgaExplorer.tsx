'use client';

import React, { useState } from 'react';
import { Cpu, Grid, Layers, ArrowRight, Zap, Info, RotateCcw } from 'lucide-react';

export const FpgaExplorer: React.FC = () => {
  // Inputs A, B, C, D (0 or 1)
  const [inputs, setInputs] = useState<[number, number, number, number]>([1, 0, 1, 0]);
  const [lutFunction, setLutFunction] = useState<'xor' | 'adder' | 'majority' | 'mux'>('xor');
  const [sequentialMode, setSequentialMode] = useState<boolean>(false);
  const [clockPulse, setClockPulse] = useState<number>(0);
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  const toggleInput = (idx: 0 | 1 | 2 | 3) => {
    const next = [...inputs] as [number, number, number, number];
    next[idx] = next[idx] === 1 ? 0 : 1;
    setInputs(next);
  };

  // Evaluate 4-Input LUT Output
  const [a, b, c, d] = inputs;
  let lutCombOutput = 0;
  let formulaStr = '';

  switch (lutFunction) {
    case 'xor':
      lutCombOutput = a ^ b ^ c ^ d;
      formulaStr = 'Y = A ⊕ B ⊕ C ⊕ D (4-Bit Parity)';
      break;
    case 'adder':
      // Full adder Sum of A, B, Cin(C)
      lutCombOutput = a ^ b ^ c;
      formulaStr = 'SUM = A ⊕ B ⊕ Cin';
      break;
    case 'majority':
      lutCombOutput = (a & b) | (b & c) | (a & c);
      formulaStr = 'Y = (A·B) + (B·C) + (A·C) (Majority 3-of-4)';
      break;
    case 'mux':
      lutCombOutput = d === 0 ? a : b;
      formulaStr = 'Y = (D=0 ? A : B) (2:1 Multiplexer)';
      break;
  }

  // D-Flip Flop output
  const finalOutput = sequentialMode ? (clockPulse % 2 === 1 ? lutCombOutput : 0) : lutCombOutput;

  const triggerClock = () => {
    setClockPulse((p) => p + 1);
  };

  const blockDescriptions: Record<string, { title: string; desc: string; verilog: string }> = {
    iob_in: {
      title: 'I/O Input Pin Blocks (IOBs)',
      desc: 'Configurable I/O pins that interface external package pins to the internal FPGA routing fabric with programmable pull-ups and slew rate.',
      verilog: 'input wire [3:0] ext_pins;',
    },
    lut: {
      title: '4-Input Look-Up Table (4-LUT)',
      desc: 'SRAM-based lookup memory capable of implementing any arbitrary Boolean combinational function of 4 binary inputs.',
      verilog: 'assign lut_out = a ^ b ^ c ^ d;',
    },
    mux: {
      title: 'Dedicated Carry / Bypass Multiplexer',
      desc: 'High-speed hardwired multiplexers for fast ripple carry chains and arithmetic operations without routing delays.',
      verilog: 'assign mux_out = sel ? d1 : d0;',
    },
    dff: {
      title: 'Configurable D-Flip-Flop (D-FF)',
      desc: 'Edge-triggered sequential register with synchronous reset, clock enable, and optional combinational bypass path.',
      verilog: 'always @(posedge clk) q <= d;',
    },
    routing: {
      title: 'Switch Box & Programmable Routing Matrix',
      desc: 'Interconnect grid of pass transistors and SRAM switches connecting CLB outputs to adjacent slices.',
      verilog: '// Interconnect switch matrix',
    },
    iob_out: {
      title: 'I/O Output Pin Block',
      desc: 'Drives internal registered or combinational signals off-chip to external pins and LEDs.',
      verilog: 'output wire fpga_out_pin;',
    },
  };

  return (
    <div className="space-y-6">
      
      {/* Workbench Controls Header */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-cyan-400 font-bold">CONFIG 4-LUT FUNCTION:</span>
          <div className="flex items-center gap-1.5">
            {[
              { id: 'xor', label: '4-WAY XOR (PARITY)' },
              { id: 'adder', label: 'FULL ADDER (SUM)' },
              { id: 'majority', label: 'MAJORITY LOGIC' },
              { id: 'mux', label: '2:1 MUX (SEL=D)' },
            ].map((fn) => (
              <button
                key={fn.id}
                onClick={() => setLutFunction(fn.id as any)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                  lutFunction === fn.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/40'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-950'
                }`}
              >
                {fn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSequentialMode(!sequentialMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              sequentialMode
                ? 'bg-purple-950 text-purple-300 border border-purple-500/50 font-bold'
                : 'bg-slate-950 text-slate-400 border border-slate-800'
            }`}
          >
            {sequentialMode ? 'SEQUENTIAL MODE (D-FF ACTIVE)' : 'COMBINATIONAL BYPASS'}
          </button>

          {sequentialMode && (
            <button
              onClick={triggerClock}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>CLK STROBE ↑</span>
            </button>
          )}
        </div>
      </div>

      {/* Main FPGA Architecture Diagram Canvas */}
      <div className="p-6 rounded-2xl bg-slate-950 border-2 border-cyan-500/30 relative overflow-hidden shadow-2xl">
        
        {/* Architecture Flow Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 items-center">
          
          {/* Block 1: Input Pins */}
          <div
            onMouseEnter={() => setHoveredBlock('iob_in')}
            onMouseLeave={() => setHoveredBlock(null)}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all cursor-pointer text-center space-y-2"
          >
            <span className="text-[10px] font-mono text-cyan-400 block font-bold">1. INPUT PINS (IOB)</span>
            <div className="space-y-1.5">
              {(['A', 'B', 'C', 'D'] as const).map((pinName, i) => (
                <button
                  key={pinName}
                  onClick={() => toggleInput(i as any)}
                  className={`w-full py-1 px-2 rounded font-mono text-xs flex items-center justify-between transition-colors ${
                    inputs[i] === 1
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-bold'
                      : 'bg-slate-950 text-slate-500 border border-slate-800'
                  }`}
                >
                  <span>PIN {pinName}:</span>
                  <span className="text-sm font-bold">{inputs[i]}</span>
                </button>
              ))}
            </div>
            <span className="text-[9px] font-mono text-slate-500">Click pin to toggle</span>
          </div>

          {/* Block 2: 4-Input LUT */}
          <div
            onMouseEnter={() => setHoveredBlock('lut')}
            onMouseLeave={() => setHoveredBlock(null)}
            className="p-4 rounded-xl bg-slate-900 border-2 border-cyan-500/60 hover:border-cyan-400 transition-all cursor-pointer text-center space-y-3"
          >
            <div className="flex items-center justify-center gap-1 text-cyan-300">
              <Grid className="w-4 h-4" />
              <span className="text-[11px] font-mono font-bold">4-INPUT LUT</span>
            </div>
            <div className="p-2 rounded bg-slate-950 text-[10px] font-mono text-slate-300">
              {formulaStr}
            </div>
            <div className="flex items-center justify-between text-xs font-mono pt-1 border-t border-slate-800">
              <span className="text-slate-400">LUT OUT:</span>
              <span className={`font-bold ${lutCombOutput === 1 ? 'text-cyan-300' : 'text-slate-500'}`}>
                {lutCombOutput}
              </span>
            </div>
          </div>

          {/* Block 3: Dedicated MUX */}
          <div
            onMouseEnter={() => setHoveredBlock('mux')}
            onMouseLeave={() => setHoveredBlock(null)}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all cursor-pointer text-center space-y-2"
          >
            <span className="text-[10px] font-mono text-cyan-400 block font-bold">3. HARD MUX</span>
            <div className="w-12 h-16 mx-auto bg-slate-950 border border-slate-700 rounded flex flex-col items-center justify-center text-[10px] font-mono text-slate-400">
              <span>2:1</span>
              <span>MUX</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 block">
              SEL: {sequentialMode ? 'D-FF' : 'COMB'}
            </span>
          </div>

          {/* Block 4: D-Flip Flop */}
          <div
            onMouseEnter={() => setHoveredBlock('dff')}
            onMouseLeave={() => setHoveredBlock(null)}
            className={`p-4 rounded-xl border transition-all cursor-pointer text-center space-y-2 ${
              sequentialMode
                ? 'bg-purple-950/40 border-purple-500/60'
                : 'bg-slate-900 border-slate-800 opacity-60'
            }`}
          >
            <span className="text-[10px] font-mono text-purple-400 block font-bold">4. D-FLIP FLOP</span>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 font-mono text-xs space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-500">D IN:</span>
                <span className="text-slate-300">{lutCombOutput}</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-500">CLK:</span>
                <span className="text-emerald-400 font-bold">↑{clockPulse}</span>
              </div>
              <div className="flex justify-between font-bold text-xs pt-1 border-t border-slate-800">
                <span className="text-purple-400">Q OUT:</span>
                <span className="text-white">{finalOutput}</span>
              </div>
            </div>
          </div>

          {/* Block 5: Routing Matrix */}
          <div
            onMouseEnter={() => setHoveredBlock('routing')}
            onMouseLeave={() => setHoveredBlock(null)}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all cursor-pointer text-center space-y-2"
          >
            <span className="text-[10px] font-mono text-cyan-400 block font-bold">5. SWITCH MATRIX</span>
            <div className="grid grid-cols-2 gap-1 p-2 bg-slate-950 rounded border border-slate-800">
              <div className="w-full h-3 bg-cyan-500/20 rounded" />
              <div className="w-full h-3 bg-cyan-500/40 rounded" />
              <div className="w-full h-3 bg-cyan-500/40 rounded" />
              <div className="w-full h-3 bg-cyan-500/20 rounded" />
            </div>
            <span className="text-[9px] font-mono text-slate-500">SRAM INTERCONNECT</span>
          </div>

          {/* Block 6: Output I/O Pin */}
          <div
            onMouseEnter={() => setHoveredBlock('iob_out')}
            onMouseLeave={() => setHoveredBlock(null)}
            className="p-4 rounded-xl bg-slate-900 border-2 border-emerald-500/60 hover:border-emerald-400 transition-all cursor-pointer text-center space-y-2"
          >
            <span className="text-[10px] font-mono text-emerald-400 block font-bold">6. OUTPUT PIN</span>
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-950 border-2 border-emerald-500 flex flex-col items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="text-xl font-bold font-mono text-emerald-300">{finalOutput}</span>
              <span className="text-[8px] font-mono text-slate-400">LOGIC</span>
            </div>
            <span className={`text-[10px] font-mono font-bold ${finalOutput === 1 ? 'text-emerald-400' : 'text-slate-500'}`}>
              {finalOutput === 1 ? 'ACTIVE HIGH (1)' : 'ACTIVE LOW (0)'}
            </span>
          </div>

        </div>

        {/* Hovered Block Technical Deep-Dive Tooltip Panel */}
        {hoveredBlock && blockDescriptions[hoveredBlock] && (
          <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 space-y-2 animate-fadeIn font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                {blockDescriptions[hoveredBlock].title}
              </span>
              <span className="text-[10px] text-slate-400">FPGA FABRIC SPEC</span>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {blockDescriptions[hoveredBlock].desc}
            </p>
            <div className="p-2 rounded bg-slate-950 text-[11px] text-cyan-400 border border-slate-800">
              <code>{blockDescriptions[hoveredBlock].verilog}</code>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
