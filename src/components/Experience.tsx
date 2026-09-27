'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>MODULE // 05</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              ENGINEERING EXPERIENCE & INTERNSHIP
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2 md:mt-0">
            INDUSTRIAL HARDWARE TRAINING // VERIFIED
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-950/85 border-2 border-cyan-500/30 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-cyan-950/40"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                      {exp.type.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-slate-500">EXP_RECORD_0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-mono text-white tracking-wide">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-400">
                    <span className="text-slate-200 font-bold flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      {exp.company}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>COMPLETED & CERTIFIED</span>
                  </div>
                </div>
              </div>

              {/* Major Work & Key Contributions */}
              <div className="pt-6 space-y-4">
                <span className="text-xs font-mono font-bold text-slate-200 block">
                  TECHNICAL CONTRIBUTIONS & INDUSTRIAL LEARNING:
                </span>
                <div className="space-y-3">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">TECH APPLIED:</span>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
