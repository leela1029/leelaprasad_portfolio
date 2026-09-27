'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Cpu, 
  ExternalLink, 
  GitBranch,
  Users,
  Sparkles, 
  Terminal, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Layers, 
  Eye, 
  Maximize2,
  Copy,
  Check,
  FileCheck,
  X
} from 'lucide-react';

export const Resume: React.FC = () => {
  const [viewMode, setViewMode] = useState<'dossier' | 'pdf'>('dossier');
  const [showFullPdfModal, setShowFullPdfModal] = useState(false);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const engineer = PORTFOLIO_DATA.engineer;
  const resumePdfPath = '/assets/resumes/LEELA_RESUME.pdf';

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(label);
    setTimeout(() => setCopiedContact(null), 2500);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>MODULE // 08</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              ENGINEERING RESUME & DOSSIER
            </h2>
          </div>
          
          {/* Controls: Mode Switcher & Download */}
          <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
            {/* View Mode Toggle */}
            <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 p-1">
              <button
                onClick={() => setViewMode('dossier')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'dossier'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                INTERACTIVE CV
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === 'pdf'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>ORIGINAL PDF</span>
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href={resumePdfPath}
              download="LEELA_RESUME.pdf"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
          </div>
        </div>

        {/* View Mode 1: Interactive Curriculum Vitae Dossier */}
        {viewMode === 'dossier' && (
          <div className="rounded-3xl bg-slate-950/90 border-2 border-cyan-500/30 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/50 space-y-8 relative overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Dossier Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                    ECE UNDERGRADUATE // ROLL: {engineer.rollNumber}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-bold">
                    CGPA: {engineer.cgpa}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-wide">
                  {engineer.name}
                </h3>

                <p className="text-sm font-mono text-cyan-400">
                  Electronics & Communication Engineering • GIET Engineering College (2023–2027)
                </p>

                {/* Quick Contact & Profile Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-300">
                  <button
                    onClick={() => handleCopy(engineer.contact.email, 'email')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{engineer.contact.email}</span>
                    {copiedContact === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                  </button>

                  <button
                    onClick={() => handleCopy(engineer.contact.phone || '+91-8374618021', 'phone')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{engineer.contact.phone}</span>
                    {copiedContact === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                  </button>

                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{engineer.location}</span>
                  </span>
                </div>
              </div>

              {/* Profiles & External Links */}
              <div className="flex flex-wrap lg:flex-col gap-2">
                <a
                  href={engineer.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2 transition-all hover:border-cyan-500/40"
                >
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span>GitHub: <strong className="text-white">leela1029</strong></span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                </a>

                <a
                  href={engineer.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2 transition-all hover:border-cyan-500/40"
                >
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn: <strong className="text-white">leelaprasad-baggu</strong></span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                </a>

                <a
                  href={engineer.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2 transition-all hover:border-cyan-500/40"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode: <strong className="text-white">leela1029</strong></span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                </a>
              </div>
            </div>

            {/* Dossier 3-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-2">
              
              {/* Col 1: Experience & Internships */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-xs font-mono font-bold text-cyan-400">
                  <Briefcase className="w-4 h-4" />
                  <span>INDUSTRIAL EXPERIENCE ({PORTFOLIO_DATA.experience.length})</span>
                </div>

                <div className="space-y-4">
                  {PORTFOLIO_DATA.experience.map((exp, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {exp.period}
                      </span>
                      <h4 className="text-sm font-mono font-bold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400">
                        {exp.company}
                      </p>
                      <ul className="space-y-1.5 pt-1">
                        {exp.highlights.slice(0, 2).map((h, idx) => (
                          <li key={idx} className="text-xs text-slate-300 font-sans flex items-start gap-1.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Col 2: Education & Academic Track */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-xs font-mono font-bold text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>

                <div className="space-y-4">
                  {PORTFOLIO_DATA.education.map((edu, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {edu.period}
                        </span>
                        {edu.score && (
                          <span className="text-[10px] font-mono font-bold text-emerald-400">
                            {edu.score}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-mono font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-mono text-slate-400">
                        {edu.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Col 3: Key Technical Projects & Achievements */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-xs font-mono font-bold text-cyan-400">
                  <Award className="w-4 h-4" />
                  <span>FEATURED PROJECTS & ACHIEVEMENTS</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">FPGA / VERILOG / IOT</span>
                    <h5 className="text-xs font-mono font-bold text-white">Smart Traffic Priority System</h5>
                    <p className="text-[11px] text-slate-400 font-sans">
                      RFID & IR emergency vehicle preemption FSM targeted on FPGA fabric.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">PYTHON / DATA ANALYTICS</span>
                    <h5 className="text-xs font-mono font-bold text-white">Olympics Historical Data Analysis</h5>
                    <p className="text-[11px] text-slate-400 font-sans">
                      Pandas, NumPy, Matplotlib & Seaborn pipeline for 120-year medal trends.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-mono text-purple-400 font-bold">HARDWARE CIRCUITS</span>
                    <h5 className="text-xs font-mono font-bold text-white">Water Level Indicator & Pump Controller</h5>
                    <p className="text-[11px] text-slate-400 font-sans">
                      555 timer oscillator with conductive probe sensors & relay isolation.
                    </p>
                  </div>

                  {/* LeetCode Achievement */}
                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                    <div className="text-[11px] font-mono">
                      <strong className="text-amber-300 block">LeetCode Problem Solver</strong>
                      <span className="text-slate-400">30+ Algorithmic Challenges Solved & 20-Day Streak</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Dossier Bottom Action Bar */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>OFFICIAL CURRICULUM VITAE // VERIFIED & CURRENT</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFullPdfModal(true)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>FULLSCREEN PREVIEW</span>
                </button>

                <a
                  href={resumePdfPath}
                  download="LEELA_RESUME.pdf"
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-cyan-500/25"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* View Mode 2: Live Embedded PDF Viewer */}
        {viewMode === 'pdf' && (
          <div className="rounded-3xl bg-slate-950/90 border-2 border-cyan-500/40 backdrop-blur-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col h-[780px]">
            {/* Viewer Toolbar */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-white">
                  LEELA RESUME.pdf (Official Document)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFullPdfModal(true)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={resumePdfPath}
                  download="LEELA_RESUME.pdf"
                  className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD</span>
                </a>
              </div>
            </div>

            {/* Embedded PDF iframe */}
            <div className="flex-1 bg-slate-900">
              <iframe
                src={`${resumePdfPath}#toolbar=1&navpanes=0`}
                title="Leela Resume PDF"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        )}

        {/* Fullscreen Modal PDF Viewer */}
        {showFullPdfModal && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
            <div className="max-w-5xl w-full h-[92vh] rounded-3xl bg-slate-950 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950 flex flex-col overflow-hidden">
              
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-sm sm:text-base font-bold font-mono text-white">
                    LEELA RESUME // FULL DOCUMENT VIEWER
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={resumePdfPath}
                    download="LEELA_RESUME.pdf"
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>DOWNLOAD PDF</span>
                  </a>

                  <button
                    onClick={() => setShowFullPdfModal(false)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-slate-900">
                <iframe
                  src={`${resumePdfPath}#toolbar=1&navpanes=0`}
                  title="Full Leela Resume PDF Viewer"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
