'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Activity, Radio, MoveHorizontal } from 'lucide-react';

export const LogicAnalyzer: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [timebase, setTimebase] = useState<number>(50); // ns per division
  const [frequencyMHz, setFrequencyMHz] = useState<number>(100);
  const [cursorTimeNs, setCursorTimeNs] = useState<number>(140);
  const [cursor2TimeNs, setCursor2TimeNs] = useState<number>(240);
  const [triggerEdge, setTriggerEdge] = useState<'rising' | 'falling'>('rising');
  const [phaseOffset, setPhaseOffset] = useState<number>(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Channels Definition
  const channels = [
    { name: 'CH1: CLK (100MHz)', color: '#06b6d4' },
    { name: 'CH2: RESET_N', color: '#10b981' },
    { name: 'CH3: DATA_IN[0]', color: '#38bdf8' },
    { name: 'CH4: WRITE_EN', color: '#eab308' },
    { name: 'CH5: FIFO_FULL', color: '#ef4444' },
    { name: 'CH6: STATE_FSM', color: '#a855f7' },
  ];

  // Animation Loop for live waveform sweep
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setPhaseOffset((prev) => (prev + 2) % 1000);
    }, 40);
    return () => clearInterval(interval);
  }, [isRunning]);

  // Render Waveforms on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    const height = (canvas.height = 360);

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Oscilloscope CRT Grid Lines (Horizontal & Vertical)
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
    ctx.lineWidth = 1;

    const divX = width / 10;
    const divY = height / 6;

    for (let x = 0; x <= width; x += divX) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y <= height; y += divY) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2. Waveform Signal Generators per channel
    const periodNs = 1000 / frequencyMHz;
    const pxPerNs = width / (10 * timebase);

    channels.forEach((ch, chIdx) => {
      const baseY = chIdx * divY + divY * 0.82;
      const highY = chIdx * divY + divY * 0.22;

      ctx.strokeStyle = ch.color;
      ctx.lineWidth = 2.2;
      ctx.beginPath();

      let lastLevel = 0;

      for (let px = 0; px < width; px += 2) {
        const timeNs = px / pxPerNs + phaseOffset * 0.2;
        let level = 0;

        switch (chIdx) {
          case 0: // CLK
            level = (timeNs % periodNs) < periodNs / 2 ? 1 : 0;
            break;
          case 1: // RESET_N (Active High after initial 30ns)
            level = timeNs > 30 ? 1 : 0;
            break;
          case 2: // DATA_IN
            level = Math.sin(timeNs * 0.08) > 0 ? 1 : 0;
            break;
          case 3: // WRITE_EN
            level = (timeNs % (periodNs * 4)) < periodNs ? 1 : 0;
            break;
          case 4: // FIFO_FULL
            level = (timeNs % (periodNs * 12)) > periodNs * 10 ? 1 : 0;
            break;
          case 5: // STATE_FSM
            level = Math.floor(timeNs / (periodNs * 3)) % 2 === 1 ? 1 : 0;
            break;
        }

        const currY = level === 1 ? highY : baseY;

        if (px === 0) {
          ctx.moveTo(px, currY);
        } else {
          // If level changed, draw vertical edge
          if (level !== lastLevel) {
            ctx.lineTo(px, lastLevel === 1 ? highY : baseY);
            ctx.lineTo(px, currY);
          } else {
            ctx.lineTo(px, currY);
          }
        }
        lastLevel = level;
      }
      ctx.stroke();

      // Channel Label in Grid
      ctx.fillStyle = ch.color;
      ctx.font = 'bold 10px monospace';
      ctx.fillText(ch.name, 12, chIdx * divY + 16);
    });

    // 3. Cursor 1 & Cursor 2 Measurement Lines
    const cursor1Px = (cursorTimeNs * pxPerNs) % width;
    const cursor2Px = (cursor2TimeNs * pxPerNs) % width;

    // Cursor 1
    ctx.strokeStyle = 'rgba(234, 179, 8, 0.85)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cursor1Px, 0);
    ctx.lineTo(cursor1Px, height);
    ctx.stroke();

    ctx.fillStyle = '#eab308';
    ctx.font = '10px monospace';
    ctx.fillText(`T1: ${cursorTimeNs}ns`, cursor1Px + 4, height - 10);

    // Cursor 2
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.85)';
    ctx.beginPath();
    ctx.moveTo(cursor2Px, 0);
    ctx.lineTo(cursor2Px, height);
    ctx.stroke();

    ctx.fillStyle = '#a855f7';
    ctx.fillText(`T2: ${cursor2TimeNs}ns`, cursor2Px + 4, height - 24);
    ctx.setLineDash([]); // reset

  }, [channels, frequencyMHz, isRunning, phaseOffset, timebase, cursorTimeNs, cursor2TimeNs]);

  const deltaT = Math.abs(cursor2TimeNs - cursorTimeNs);
  const calculatedFreq = deltaT > 0 ? (1000 / deltaT).toFixed(2) : '0';

  return (
    <div className="space-y-6">
      
      {/* Oscilloscope Control Top Toolbar */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        
        {/* Run/Stop & Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 font-bold transition-colors ${
              isRunning
                ? 'bg-emerald-600 hover:bg-emerald-500 text-slate-950'
                : 'bg-red-600 hover:bg-red-500 text-white'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? 'RUNNING (SWEEP)' : 'STOPPED'}</span>
          </button>

          <button
            onClick={() => setPhaseOffset(0)}
            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
            title="Reset Trigger Phase"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Timebase Selector */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400">TIME/DIV:</span>
          {[25, 50, 100, 200].map((tb) => (
            <button
              key={tb}
              onClick={() => setTimebase(tb)}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                timebase === tb
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/40'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-950'
              }`}
            >
              {tb}ns
            </button>
          ))}
        </div>

        {/* Frequency Adjuster */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400">CLOCK FREQ:</span>
          <select
            value={frequencyMHz}
            onChange={(e) => setFrequencyMHz(Number(e.target.value))}
            className="px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-cyan-300 text-xs font-mono"
          >
            <option value={25}>25.00 MHz</option>
            <option value={50}>50.00 MHz</option>
            <option value={100}>100.00 MHz (Primary)</option>
            <option value={150}>150.00 MHz</option>
            <option value={200}>200.00 MHz</option>
          </select>
        </div>

      </div>

      {/* Main Digital Oscilloscope Screen */}
      <div className="p-4 rounded-2xl bg-slate-950 border-2 border-cyan-500/40 shadow-2xl relative scanlines">
        <canvas ref={canvasRef} className="w-full rounded-xl bg-slate-950" />
      </div>

      {/* Interactive Cursor Measurement Readout Bar */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="text-slate-400 flex items-center gap-1.5">
            <MoveHorizontal className="w-4 h-4 text-cyan-400" />
            CURSOR MEASUREMENTS:
          </span>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1.5 text-yellow-400">
              <span>T1:</span>
              <input
                type="range"
                min="0"
                max="500"
                value={cursorTimeNs}
                onChange={(e) => setCursorTimeNs(Number(e.target.value))}
                className="w-24 accent-yellow-400"
              />
              <span>{cursorTimeNs}ns</span>
            </label>

            <label className="flex items-center gap-1.5 text-purple-400">
              <span>T2:</span>
              <input
                type="range"
                min="0"
                max="500"
                value={cursor2TimeNs}
                onChange={(e) => setCursor2TimeNs(Number(e.target.value))}
                className="w-24 accent-purple-400"
              />
              <span>{cursor2TimeNs}ns</span>
            </label>
          </div>
        </div>

        {/* Delta-T & Frequency Readout */}
        <div className="flex items-center gap-4 text-xs">
          <div className="px-3 py-1 rounded bg-slate-950 border border-slate-800">
            <span className="text-slate-500">Δt (PERIOD): </span>
            <strong className="text-cyan-300">{deltaT} ns</strong>
          </div>
          <div className="px-3 py-1 rounded bg-slate-950 border border-slate-800">
            <span className="text-slate-500">1/Δt (FREQ): </span>
            <strong className="text-emerald-400">{calculatedFreq} MHz</strong>
          </div>
        </div>
      </div>

    </div>
  );
};
