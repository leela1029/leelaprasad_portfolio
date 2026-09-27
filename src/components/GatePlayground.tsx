'use client';

import React, { useState } from 'react';
import { Cpu, Code2, Zap, Copy, Check, Info } from 'lucide-react';

export const GatePlayground: React.FC = () => {
  const [gateType, setGateType] = useState<
    'and' | 'or' | 'xor' | 'nand' | 'nor' | 'xnor' | 'half_adder' | 'full_adder' | 'mux21'
  >('xor');

  const [inA, setInA] = useState<number>(1);
  const [inB, setInB] = useState<number>(0);
  const [inCin, setInCin] = useState<number>(1); // for full adder / mux sel
  const [copiedVerilog, setCopiedVerilog] = useState<boolean>(false);

  // Logic calculation
  let outY = 0;
  let outCarry = 0;
  let booleanExpr = '';
  let verilogCode = '';

  switch (gateType) {
    case 'and':
      outY = inA & inB;
      booleanExpr = 'Y = A · B';
      verilogCode = `module and_gate (\n    input  wire a,\n    input  wire b,\n    output wire y\n);\n    assign y = a & b;\nendmodule`;
      break;
    case 'or':
      outY = inA | inB;
      booleanExpr = 'Y = A + B';
      verilogCode = `module or_gate (\n    input  wire a,\n    input  wire b,\n    output wire y\n);\n    assign y = a | b;\nendmodule`;
      break;
    case 'xor':
      outY = inA ^ inB;
      booleanExpr = 'Y = A ⊕ B';
      verilogCode = `module xor_gate (\n    input  wire a,\n    input  wire b,\n    output wire y\n);\n    assign y = a ^ b;\nendmodule`;
      break;
    case 'nand':
      outY = ~(inA & inB) & 1;
      booleanExpr = 'Y = (A · B)\'';
      verilogCode = `module nand_gate (\n    input  wire a,\n    input  wire b,\n    output wire y\n);\n    assign y = ~(a & b);\nendmodule`;
      break;
    case 'nor':
      outY = ~(inA | inB) & 1;
      booleanExpr = 'Y = (A + B)\'';
      verilogCode = `module nor_gate (\n    input  wire a,\n    input  wire b,\n    output wire y\n);\n    assign y = ~(a | b);\nendmodule`;
      break;
    case 'xnor':
      outY = ~(inA ^ inB) & 1;
      booleanExpr = 'Y = (A ⊕ B)\'';
      verilogCode = `module xnor_gate (\n    input  wire a,\n    input  wire b,\n    output wire y\n);\n    assign y = ~(a ^ b);\nendmodule`;
      break;
    case 'half_adder':
      outY = inA ^ inB; // Sum
      outCarry = inA & inB; // Carry
      booleanExpr = 'SUM = A ⊕ B, CARRY = A · B';
      verilogCode = `module half_adder (\n    input  wire a,\n    input  wire b,\n    output wire sum,\n    output wire carry\n);\n    assign sum   = a ^ b;\n    assign carry = a & b;\nendmodule`;
      break;
    case 'full_adder':
      outY = inA ^ inB ^ inCin; // Sum
      outCarry = (inA & inB) | (inB & inCin) | (inA & inCin); // Cout
      booleanExpr = 'SUM = A ⊕ B ⊕ Cin, COUT = (A·B) + (B·Cin) + (A·Cin)';
      verilogCode = `module full_adder (\n    input  wire a,\n    input  wire b,\n    input  wire cin,\n    output wire sum,\n    output wire cout\n);\n    assign sum  = a ^ b ^ cin;\n    assign cout = (a & b) | (b & cin) | (a & cin);\nendmodule`;
      break;
    case 'mux21':
      outY = inCin === 0 ? inA : inB;
      booleanExpr = 'Y = (SEL=0 ? A : B)';
      verilogCode = `module mux_2to1 (\n    input  wire a,\n    input  wire b,\n    input  wire sel,\n    output wire y\n);\n    assign y = sel ? b : a;\nendmodule`;
      break;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(verilogCode);
    setCopiedVerilog(true);
    setTimeout(() => setCopiedVerilog(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Gate Selector Bar */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2 overflow-x-auto">
        {[
          { id: 'xor', label: 'XOR GATE' },
          { id: 'and', label: 'AND GATE' },
          { id: 'or', label: 'OR GATE' },
          { id: 'nand', label: 'NAND GATE' },
          { id: 'nor', label: 'NOR GATE' },
          { id: 'xnor', label: 'XNOR GATE' },
          { id: 'half_adder', label: 'HALF ADDER' },
          { id: 'full_adder', label: 'FULL ADDER' },
          { id: 'mux21', label: '2:1 MUX' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setGateType(item.id as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors ${
              gateType === item.id
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/40'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Main Interactive Circuit Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Interactive Logic Simulation Canvas */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border-2 border-cyan-500/30 flex flex-col justify-between space-y-6 shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-cyan-400 font-bold">
              LOGIC GATE STAGE: {gateType.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {booleanExpr}
            </span>
          </div>

          {/* Interactive Schematic Visualizer */}
          <div className="flex items-center justify-around py-8 relative">
            
            {/* Input Switches */}
            <div className="flex flex-col gap-3 z-10">
              <button
                onClick={() => setInA(inA === 1 ? 0 : 1)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border flex items-center justify-between gap-3 transition-all ${
                  inA === 1
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}
              >
                <span>INPUT A:</span>
                <span className="text-sm font-extrabold">{inA}</span>
              </button>

              <button
                onClick={() => setInB(inB === 1 ? 0 : 1)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border flex items-center justify-between gap-3 transition-all ${
                  inB === 1
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}
              >
                <span>INPUT B:</span>
                <span className="text-sm font-extrabold">{inB}</span>
              </button>

              {(gateType === 'full_adder' || gateType === 'mux21') && (
                <button
                  onClick={() => setInCin(inCin === 1 ? 0 : 1)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border flex items-center justify-between gap-3 transition-all ${
                    inCin === 1
                      ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}
                >
                  <span>{gateType === 'mux21' ? 'SEL PIN:' : 'CIN PIN:'}</span>
                  <span className="text-sm font-extrabold">{inCin}</span>
                </button>
              )}
            </div>

            {/* Central Logic Gate Symbol Box */}
            <div className="w-28 h-28 rounded-2xl bg-slate-900 border-2 border-cyan-400 flex flex-col items-center justify-center p-3 text-center shadow-xl shadow-cyan-500/20">
              <Cpu className="w-8 h-8 text-cyan-400 mb-1" />
              <span className="text-xs font-mono font-bold text-white tracking-wider">
                {gateType.toUpperCase()}
              </span>
            </div>

            {/* Output LED Indicators */}
            <div className="flex flex-col gap-3 z-10">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center font-mono space-y-1">
                <span className="text-[10px] text-slate-400 block">
                  {gateType === 'half_adder' || gateType === 'full_adder' ? 'SUM OUTPUT' : 'LOGIC OUT (Y)'}
                </span>
                <div
                  className={`w-12 h-12 mx-auto rounded-full border-2 flex items-center justify-center font-bold text-base transition-all ${
                    outY === 1
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/40'
                      : 'bg-slate-950 border-slate-800 text-slate-600'
                  }`}
                >
                  {outY}
                </div>
              </div>

              {(gateType === 'half_adder' || gateType === 'full_adder') && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center font-mono space-y-1">
                  <span className="text-[10px] text-slate-400 block">CARRY OUT</span>
                  <div
                    className={`w-10 h-10 mx-auto rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                      outCarry === 1
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/40'
                        : 'bg-slate-950 border-slate-800 text-slate-600'
                    }`}
                  >
                    {outCarry}
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className="text-[11px] font-mono text-slate-400 text-center">
            Click any input pin on the left to toggle binary values (0 ↔ 1)
          </div>
        </div>

        {/* Right Column: Auto-Generated Synthesizable Verilog Module */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-cyan-400" />
              AUTO-SYNTHESIZED RTL MODULE
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[11px] font-mono text-cyan-300 border border-slate-700"
            >
              {copiedVerilog ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedVerilog ? 'COPIED' : 'COPY'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed flex-1 shadow-inner">
            <code>{verilogCode}</code>
          </pre>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Info className="w-3.5 h-3.5" />
              <span>SYNTHESIS CHARACTERISTIC</span>
            </div>
            <p className="text-[10px] text-slate-400 font-sans">
              Pure combinational logic cell directly mappable to standard CMOS library cells (NAND2, XOR2, AOI22) or FPGA 4-input LUT primitives.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
