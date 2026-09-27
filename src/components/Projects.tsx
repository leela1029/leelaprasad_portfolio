'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  Layers, 
  Cpu, 
  ArrowUpRight, 
  Code2, 
  Play, 
  Sparkles,
  CircuitBoard,
  Activity
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const projects = PORTFOLIO_DATA.projects;
  const filteredProjects =
    filterCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === filterCategory);

  const categories = ['all', 'FPGA / Verilog', 'Digital VLSI', 'Embedded / IoT', 'Data Science / AI', 'Digital System'];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>MODULE // 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              INTERACTIVE PROJECT LABORATORY
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2 md:mt-0">
            5 SYNTHESIZED HARDWARE DESIGNS // VERIFIED RTL
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                filterCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat === 'all' ? `ALL PROJECTS (${projects.length})` : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="rounded-2xl bg-slate-950/85 border border-slate-800 hover:border-cyan-500/50 p-6 backdrop-blur-md flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50 group relative overflow-hidden"
            >
              {/* Subtle Card Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

              <div>
                {/* Card Header: Category & Index */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-900">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                    PRJ_0{idx + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-5 line-clamp-3">
                  {proj.brief}
                </p>

                {/* Mini Architecture Flow Preview */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-5 font-mono text-[10px] text-slate-400 space-y-1">
                  <div className="flex items-center justify-between text-cyan-400 font-bold mb-1">
                    <span>ARCHITECTURE FLOW</span>
                    <Activity className="w-3 h-3 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto text-[9px] text-slate-300 py-1">
                    {proj.architectureNodes.slice(0, 3).map((node, i) => (
                      <React.Fragment key={node.id}>
                        <span className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 shrink-0">
                          {node.label}
                        </span>
                        {i < 2 && <span className="text-cyan-500">→</span>}
                      </React.Fragment>
                    ))}
                    {proj.architectureNodes.length > 3 && (
                      <span className="text-slate-500 shrink-0">...</span>
                    )}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500">
                      +{proj.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-semibold group-hover:underline flex items-center gap-1">
                  <span>LAUNCH INTERFACE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  SIMULATION
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
