'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, Download, ExternalLink } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      cmd: 'boot_diagnostic',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">LEELA // DIGITAL ENGINEERING LAB TERMINAL v4.5</p>
          <p className="text-slate-400">FPGA Architecture: Online • HDL Synthesis Engine: Active • Core: 100MHz • Data & AI Stack: Ready</p>
          <p className="text-emerald-400">Type <span className="text-white font-bold">&apos;help&apos;</span> to list all interactive hardware diagnostic commands.</p>
        </div>
      ),
    },
  ]);
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setPastCommands((prev) => [...prev, cmd]);
    setCmdHistoryIdx(-1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-300 font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.terminalCommands.map((c) => (
                <div key={c.cmd} className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold w-24">{c.cmd}</span>
                  <span className="text-slate-400">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-cyan-300 font-bold">{PORTFOLIO_DATA.engineer.name} — {PORTFOLIO_DATA.engineer.title}</p>
            <p className="text-slate-400">{PORTFOLIO_DATA.engineer.degree} • {PORTFOLIO_DATA.engineer.institution}</p>
            <p className="text-xs text-slate-300 pt-1">{PORTFOLIO_DATA.engineer.bio}</p>
          </div>
        );
        break;

      case 'system':
        output = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-emerald-400 font-bold">SYSTEM TELEMETRY REPORT:</p>
            <p>CORE_STATUS     : <span className="text-cyan-400 font-bold">ONLINE</span></p>
            <p>FPGA_FABRIC     : <span className="text-cyan-400 font-bold">READY (XILINX / ALTERA)</span></p>
            <p>HDL_ENGINE      : <span className="text-cyan-400 font-bold">VERILOG (IEEE 1364)</span></p>
            <p>DATA_SCIENCE    : <span className="text-cyan-400 font-bold">PYTHON (NUMPY / PANDAS)</span></p>
            <p>CLOCK_FREQUENCY : <span className="text-emerald-400 font-bold">100.00 MHz</span></p>
            <p>CORE_VOLTAGE    : <span className="text-emerald-400 font-bold">1.20 V</span></p>
            <p>DIE_TEMPERATURE : <span className="text-amber-400 font-bold">38.4 °C</span></p>
            <p>PHASE_JITTER    : <span className="text-emerald-400 font-bold">&lt; 0.04 ns</span></p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-300 font-bold">CORE ENGINEERING DOMAINS ({PORTFOLIO_DATA.skills.length}):</p>
            <div className="space-y-1 text-xs">
              {PORTFOLIO_DATA.skills.map((s) => (
                <div key={s.id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-emerald-400 font-bold sm:w-48">• {s.title}:</span>
                  <span className="text-slate-400">{s.skills.map((sk) => sk.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-300 font-bold">FEATURED HARDWARE & DATA PROJECTS:</p>
            {PORTFOLIO_DATA.projects.map((p, i) => (
              <div key={p.id} className="text-xs">
                <span className="text-emerald-400 font-bold">0{i + 1}. {p.title}</span>
                <p className="text-slate-400 pl-4">{p.brief}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'verilog':
        output = (
          <pre className="p-3 rounded-lg bg-slate-900 text-[11px] text-cyan-300 overflow-x-auto">
            <code>{`// Parameterized Synchronous FIFO Memory in Verilog HDL
module sync_fifo #(parameter DATA_WIDTH=8, ADDR_WIDTH=4)(
    input  wire                  clk, rst_n, wr_en, rd_en,
    input  wire [DATA_WIDTH-1:0] wr_data,
    output reg  [DATA_WIDTH-1:0] rd_data,
    output wire                  full, empty
);
    localparam DEPTH = 1 << ADDR_WIDTH;
    reg [DATA_WIDTH-1:0] mem [0:DEPTH-1];
    reg [ADDR_WIDTH:0]   wr_ptr, rd_ptr;
    assign empty = (wr_ptr == rd_ptr);
    assign full  = (wr_ptr[ADDR_WIDTH] != rd_ptr[ADDR_WIDTH]) &&
                   (wr_ptr[ADDR_WIDTH-1:0] == rd_ptr[ADDR_WIDTH-1:0]);
endmodule`}</code>
          </pre>
        );
        break;

      case 'pinout':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-cyan-300 font-bold">FPGA 144-TQFP PINOUT TELEMETRY:</p>
            <p>P1-P8   : CLK_IN_100MHZ, RESET_N, PLL_FEEDBACK</p>
            <p>P9-P32  : IOB_BANK_0 (LVCMOS33) - 7-Segment & LEDs</p>
            <p>P33-P64 : IOB_BANK_1 (LVCMOS25) - UART & Sensor Buses</p>
            <p>P65-P96 : IOB_BANK_2 (LVCMOS18) - High-Speed FIFO I/O</p>
            <p>STATUS  : ALL 144 PINS PROVISIONED & CONSTRAINED</p>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-cyan-300 font-bold">INDUSTRIAL INTERNSHIP TIMELINE:</p>
            {PORTFOLIO_DATA.experience.map((exp, i) => (
              <div key={i} className="p-2 rounded bg-slate-900/60 border border-slate-800 space-y-0.5">
                <p className="text-emerald-400 font-bold">{exp.role} @ {exp.company}</p>
                <p className="text-slate-400 text-[11px]">{exp.period} • {exp.location}</p>
                <p className="text-slate-300 text-[11px]">{exp.highlights[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-cyan-300 font-bold">ACADEMIC PROFILE:</p>
            {PORTFOLIO_DATA.education.map((edu, i) => (
              <div key={i} className="p-2 rounded bg-slate-900/60 border border-slate-800 space-y-0.5">
                <p className="text-white font-bold">{edu.degree}</p>
                <p className="text-cyan-400 text-[11px]">{edu.institution} • {edu.period}</p>
                {edu.score && <p className="text-emerald-400 text-[11px]">{edu.score}</p>}
              </div>
            ))}
          </div>
        );
        break;

      case 'certifications':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-cyan-300 font-bold">VERIFIED HARDWARE & ENGINEERING CERTIFICATIONS ({PORTFOLIO_DATA.certifications.length}):</p>
            {PORTFOLIO_DATA.certifications.map((c) => (
              <div key={c.id} className="p-2 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{c.title}</p>
                  <p className="text-slate-400 text-[11px]">{c.issuer} • {c.issueDate} • ID: {c.credentialId}</p>
                </div>
                <a
                  href={c.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[10px] flex items-center gap-1"
                >
                  <span>PDF</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-cyan-300 font-bold">ENGINEERING COMMUNICATION ENDPOINTS:</p>
            <p>NAME     : {PORTFOLIO_DATA.engineer.name}</p>
            <p>EMAIL    : {PORTFOLIO_DATA.engineer.contact.email}</p>
            <p>PHONE    : {PORTFOLIO_DATA.engineer.contact.phone}</p>
            <p>GITHUB   : {PORTFOLIO_DATA.engineer.contact.github}</p>
            <p>LINKEDIN : {PORTFOLIO_DATA.engineer.contact.linkedin}</p>
            <p>LEETCODE : {PORTFOLIO_DATA.engineer.contact.leetcode}</p>
          </div>
        );
        break;

      case 'resume':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-emerald-400 font-bold">OFFICIAL RESUME PROTOCOL TRIGGERED:</p>
            <p>Target: <code className="text-cyan-300">LEELA_RESUME.pdf</code></p>
            <div className="flex gap-2 pt-1">
              <a
                href="/assets/resumes/LEELA_RESUME.pdf"
                download="LEELA_RESUME.pdf"
                className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold flex items-center gap-1.5 shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
              <a
                href="/assets/resumes/LEELA_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>VIEW IN BROWSER</span>
              </a>
            </div>
          </div>
        );
        break;

      case 'lab':
        output = (
          <p className="text-cyan-300 text-xs">
            Jumped to Virtual Engineering Lab. Scroll to the &apos;Virtual Engineering Lab&apos; section to test interactive FPGA logic gates & FSM traffic simulators.
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-red-400 text-xs">
            Command not recognized: &apos;{cmd}&apos;. Type <span className="text-white underline font-bold">help</span> to view available diagnostics.
          </p>
        );
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (pastCommands.length > 0) {
        const nextIdx = cmdHistoryIdx === -1 ? pastCommands.length - 1 : Math.max(0, cmdHistoryIdx - 1);
        setCmdHistoryIdx(nextIdx);
        setInputVal(pastCommands[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (cmdHistoryIdx !== -1) {
        const nextIdx = cmdHistoryIdx + 1;
        if (nextIdx >= pastCommands.length) {
          setCmdHistoryIdx(-1);
          setInputVal('');
        } else {
          setCmdHistoryIdx(nextIdx);
          setInputVal(pastCommands[nextIdx] || '');
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div
        className={`w-full bg-slate-950 border-2 border-cyan-500/50 rounded-2xl shadow-2xl shadow-cyan-950/80 flex flex-col transition-all duration-300 font-mono ${
          isMaximized ? 'h-[95vh] max-w-[96vw]' : 'h-[580px] max-w-3xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span>LEELA@ENGINEERING-LAB:~$ [ENGINEER CONSOLE]</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition-colors"
              title="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Suggestions */}
        <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-thin">
          <span className="text-slate-500 font-bold shrink-0">QUICK CMDS:</span>
          {['help', 'system', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'resume', 'contact'].map((c) => (
            <button
              key={c}
              onClick={() => handleCommand(c)}
              className="px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-800 text-slate-400 transition-colors whitespace-nowrap"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Terminal Scroll Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-slate-500">leela@engineering-lab:~$</span>
                <span className="font-bold text-white">{item.cmd}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 text-xs font-bold">leela@engineering-lab:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' for diagnostics..."
            className="flex-1 bg-transparent border-none outline-none text-xs text-cyan-300 placeholder:text-slate-600 font-mono"
            autoFocus
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs flex items-center gap-1"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
