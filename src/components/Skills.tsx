'use client';

import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, SkillCategory, SkillItem } from '@/data/portfolioData';
import { 
  Cpu, 
  Binary, 
  Layers, 
  Grid, 
  Activity, 
  Code2, 
  Radio, 
  Search, 
  X, 
  Sparkles,
  Info,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Terminal,
  ExternalLink,
  Zap,
  LayoutGrid,
  ListFilter
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [activeSkillModal, setActiveSkillModal] = useState<{
    skill: SkillItem;
    categoryTitle: string;
  } | null>(null);

  const getCategoryIcon = (id: string, className = "w-4 h-4 text-cyan-400") => {
    switch (id) {
      case 'hardware-rtl': return <Cpu className={className} />;
      case 'vlsi-fpga': return <Layers className={className} />;
      case 'software-prog': return <Code2 className={className} />;
      case 'data-ai': return <Binary className={className} />;
      case 'eda-tools': return <Activity className={className} />;
      case 'embedded-iot': return <Radio className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Project Experience':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Project Experience
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Working Knowledge
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Exploring & Learning
          </span>
        );
    }
  };

  const categories = PORTFOLIO_DATA.skills;

  // Filter skills based on domain, search query, and level
  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return categories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => {
        const matchingSkills = cat.skills.filter((skill) => {
          const matchesQuery = 
            !q ||
            skill.name.toLowerCase().includes(q) ||
            skill.details.toLowerCase().includes(q) ||
            skill.highlight?.toLowerCase().includes(q) ||
            skill.tools?.some((t) => t.toLowerCase().includes(q)) ||
            skill.projectsApplied?.some((p) => p.toLowerCase().includes(q));

          const matchesLevel =
            levelFilter === 'all' || skill.level === levelFilter;

          return matchesQuery && matchesLevel;
        });

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [categories, selectedCategory, searchQuery, levelFilter]);

  const totalSkillCount = useMemo(() => {
    return categories.reduce((acc, c) => acc + c.skills.length, 0);
  }, [categories]);

  const totalMatchingSkills = useMemo(() => {
    return filteredData.reduce((acc, c) => acc + c.skills.length, 0);
  }, [filteredData]);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>MODULE // 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              ENGINEERING SKILLS MATRIX
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mt-3 md:mt-0">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <strong className="text-cyan-400">{totalSkillCount}</strong> VERIFIED COMPETENCIES
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <strong className="text-emerald-400">6</strong> CORE DOMAINS
            </span>
          </div>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-4 mb-8 backdrop-blur-xl shadow-lg shadow-black/40 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills, tools, or topics (e.g. Verilog, Python, Vivado, FSM, Pandas)..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs font-mono text-slate-200 placeholder-slate-500 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Level Filter Dropdown */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-xs font-mono text-slate-500 whitespace-nowrap hidden sm:inline">
                LEVEL:
              </span>
              <button
                onClick={() => setLevelFilter('all')}
                className={`px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  levelFilter === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                All Levels
              </button>
              <button
                onClick={() => setLevelFilter('Project Experience')}
                className={`px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  levelFilter === 'Project Experience'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                    : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Project Exp
              </button>
              <button
                onClick={() => setLevelFilter('Working Knowledge')}
                className={`px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  levelFilter === 'Working Knowledge'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Working Knowl.
              </button>
            </div>
          </div>

          {/* Domain Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>ALL DOMAINS ({totalSkillCount})</span>
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap flex items-center gap-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {getCategoryIcon(cat.id, `w-3.5 h-3.5 ${selectedCategory === cat.id ? 'text-slate-950' : 'text-cyan-400'}`)}
                <span>{cat.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat.id ? 'bg-slate-900/20 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  {cat.skills.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Feedback Bar */}
        {(searchQuery || levelFilter !== 'all' || selectedCategory !== 'all') && (
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6 px-1">
            <span>
              Showing <strong className="text-cyan-300">{totalMatchingSkills}</strong> skills matching your filter
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setLevelFilter('all');
                setSelectedCategory('all');
              }}
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Reset Filters
            </button>
          </div>
        )}

        {/* No Results Fallback */}
        {filteredData.length === 0 && (
          <div className="p-12 rounded-3xl bg-slate-950/60 border border-slate-800 text-center space-y-3">
            <Search className="w-8 h-8 text-slate-600 mx-auto" />
            <h3 className="text-base font-mono font-bold text-slate-300">
              No skills found matching &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="text-xs font-sans text-slate-500 max-w-sm mx-auto">
              Try searching for terms like Verilog, Python, FSM, FIFO, Vivado, ModelSim, or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setLevelFilter('all');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 font-mono text-xs"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Categories & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((cat) => (
            <div
              key={cat.id}
              className="rounded-3xl bg-slate-950/85 border border-slate-800/90 hover:border-cyan-500/40 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 group relative overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all">
                      {getCategoryIcon(cat.id, "w-5 h-5 text-cyan-400")}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
                        {cat.badge}
                      </span>
                      <h3 className="text-base font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {cat.skills.length}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed font-sans">
                  {cat.description}
                </p>

                {/* Skills List in Domain */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() =>
                        setActiveSkillModal({
                          skill,
                          categoryTitle: cat.title,
                        })
                      }
                      className="p-3 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 cursor-pointer transition-all duration-200 group/item hover:shadow-lg hover:shadow-cyan-950/20"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono font-bold text-slate-200 group-hover/item:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        {getLevelBadge(skill.level)}
                      </div>

                      {skill.highlight && (
                        <p className="text-[11px] font-mono text-cyan-400/80 mb-2">
                          ✦ {skill.highlight}
                        </p>
                      )}

                      {/* Tool Badges */}
                      {skill.tools && skill.tools.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2.5">
                          {skill.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[9px] font-mono text-slate-400"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Hardware Depth Meter & Action Cue */}
                      <div className="flex items-center justify-between pt-1 border-t border-slate-800/60">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-mono text-slate-500">MASTERY:</span>
                          <div className="flex items-center gap-1">
                            <div
                              className={`w-5 h-1.5 rounded-sm transition-all ${
                                skill.depth >= 1 ? 'bg-cyan-400 shadow-xs shadow-cyan-400' : 'bg-slate-800'
                              }`}
                            />
                            <div
                              className={`w-5 h-1.5 rounded-sm transition-all ${
                                skill.depth >= 2 ? 'bg-cyan-400 shadow-xs shadow-cyan-400' : 'bg-slate-800'
                              }`}
                            />
                            <div
                              className={`w-5 h-1.5 rounded-sm transition-all ${
                                skill.depth >= 3 ? 'bg-emerald-400 shadow-xs shadow-emerald-400' : 'bg-slate-800'
                              }`}
                            />
                          </div>
                        </div>

                        <span className="text-[10px] font-mono text-slate-500 group-hover/item:text-cyan-400 flex items-center gap-0.5 transition-colors">
                          <span>Inspect</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Detail Inspector Modal */}
        {activeSkillModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="max-w-lg w-full rounded-3xl bg-slate-950 border-2 border-cyan-500/50 p-6 sm:p-7 shadow-2xl shadow-cyan-950 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                      {activeSkillModal.categoryTitle.toUpperCase()}
                    </span>
                    {getLevelBadge(activeSkillModal.skill.level)}
                  </div>
                  <h3 className="text-xl font-mono font-bold text-white mt-1">
                    {activeSkillModal.skill.name}
                  </h3>
                  {activeSkillModal.skill.highlight && (
                    <p className="text-xs font-mono text-cyan-400">
                      Specification: {activeSkillModal.skill.highlight}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setActiveSkillModal(null)}
                  className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Description Body */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  TECHNICAL SCOPE & METHODOLOGY:
                </span>
                <p className="text-xs text-slate-300 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 leading-relaxed font-sans">
                  {activeSkillModal.skill.details}
                </p>
              </div>

              {/* Projects Applied In */}
              {activeSkillModal.skill.projectsApplied && activeSkillModal.skill.projectsApplied.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    APPLIED IN HARDWARE / DATA PROJECTS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeSkillModal.skill.projectsApplied.map((proj) => (
                      <span
                        key={proj}
                        className="px-2.5 py-1 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{proj}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Environments */}
              {activeSkillModal.skill.tools && activeSkillModal.skill.tools.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    ASSOCIATED TOOLS & SIMULATORS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSkillModal.skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="flex justify-end pt-3 border-t border-slate-800">
                <button
                  onClick={() => setActiveSkillModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-mono font-bold transition-all shadow-md shadow-cyan-500/25"
                >
                  CLOSE INSPECTOR
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
