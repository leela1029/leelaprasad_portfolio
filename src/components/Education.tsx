'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GraduationCap, BookOpen, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  const educationList = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>MODULE // 06</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              ACADEMIC FOUNDATION
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2 md:mt-0">
            GIET ENGINEERING COLLEGE // RAJAHMUNDRY
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Degree Card (B.Tech ECE) */}
          <div className="lg:col-span-8 rounded-3xl bg-slate-950/90 border-2 border-cyan-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
                  {educationList[0].degree}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {educationList[0].institution} • {educationList[0].location}
                </p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs">
                <span className="text-emerald-400 font-bold block">{educationList[0].status}</span>
                <span className="text-slate-400">{educationList[0].period}</span>
              </div>
            </div>

            {/* Core Coursework Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                KEY RELEVANT COURSEWORK & LABS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {educationList[0].coursework.map((course) => (
                  <div
                    key={course}
                    className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                ACADEMIC HIGHLIGHTS:
              </span>
              <div className="space-y-1.5">
                {educationList[0].achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Education Card */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-950/80 border border-slate-800 p-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="pb-4 border-b border-slate-800">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                  HIGHER SECONDARY
                </span>
                <h4 className="text-base font-bold font-mono text-white mt-2">
                  {educationList[1].degree}
                </h4>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {educationList[1].institution} • {educationList[1].period}
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <span className="text-xs font-mono text-slate-400 block font-bold">
                  CORE SUBJECTS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {educationList[1].coursework.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 font-sans">
              Strong grounding in analytical mathematics, semiconductor physics, and circuit theory providing a foundation for VLSI & digital logic design.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
