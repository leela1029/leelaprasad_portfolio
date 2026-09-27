'use client';

import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, Certification } from '@/data/portfolioData';
import { 
  ShieldCheck, 
  ExternalLink, 
  Download, 
  X, 
  FileText, 
  Copy, 
  Check, 
  Search, 
  Award, 
  Eye, 
  Sparkles,
  Maximize2,
  Calendar,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const certs = PORTFOLIO_DATA.certifications;

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'VLSI & HDL', label: 'VLSI & Hardware' },
    { id: 'AI & ML', label: 'AI & Machine Learning' },
    { id: 'Data Science', label: 'Data Science & Python' },
    { id: 'Entrepreneurship', label: 'Entrepreneurship' },
  ];

  const filteredCerts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return certs.filter((cert) => {
      const matchesCat = selectedCategory === 'all' || cert.category === selectedCategory;
      const matchesSearch =
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.credentialId.toLowerCase().includes(q) ||
        cert.skillsCovered.some((s) => s.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [certs, selectedCategory, searchQuery]);

  const handleCopyId = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>MODULE // 07</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              HARDWARE & ENGINEERING CERTIFICATION VAULT
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-2 md:mt-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>VERIFIED CREDENTIAL ARCHIVE ({certs.length} RECORDS)</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-4 mb-8 backdrop-blur-xl flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates..."
              className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 text-xs font-mono text-slate-200 placeholder-slate-500 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-slate-950/85 border border-slate-800/90 hover:border-cyan-500/50 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 group relative overflow-hidden"
            >
              {/* Corner Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Header with Category & Verification */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                      {cert.category}
                    </span>
                    {cert.duration && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {cert.duration}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold font-mono text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                  <span className="text-cyan-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    {cert.issuer}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {cert.issueDate}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-5 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skillsCovered.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer with Credential ID & Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {/* Copy Credential ID */}
                <button
                  onClick={(e) => handleCopyId(cert.credentialId, e)}
                  title="Click to copy Credential ID"
                  className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors py-1 px-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40"
                >
                  {copiedId === cert.credentialId ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED ID!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-500" />
                      <span>ID: <strong className="text-slate-300">{cert.credentialId}</strong></span>
                    </>
                  )}
                </button>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>PREVIEW PDF</span>
                  </button>

                  <a
                    href={cert.pdfUrl}
                    download
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                    title="Download Certificate PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate PDF Viewer Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
            <div className="max-w-4xl w-full h-[90vh] rounded-3xl bg-slate-950 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/80 flex flex-col overflow-hidden">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold">
                        {selectedCert.category} // VERIFIED DOCUMENT
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        ID: {selectedCert.credentialId}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold font-mono text-white line-clamp-1">
                      {selectedCert.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.pdfUrl}
                    download
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>DOWNLOAD</span>
                  </a>

                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200"
                    title="Open PDF in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer / Document Frame */}
              <div className="flex-1 bg-slate-900 relative">
                <iframe
                  src={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0`}
                  title={selectedCert.title}
                  className="w-full h-full border-none"
                />

                {/* Fallback Overlay if browser doesn't support iframe PDF */}
                <noscript>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                    <p className="text-sm font-mono text-slate-300">
                      Your browser does not support inline PDF preview.
                    </p>
                    <a
                      href={selectedCert.pdfUrl}
                      download
                      className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-mono text-xs font-bold"
                    >
                      Download Certificate PDF
                    </a>
                  </div>
                </noscript>
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
                <div className="text-slate-400">
                  <span className="text-cyan-400 font-bold">ISSUER:</span> {selectedCert.issuer} • <span className="text-slate-300">{selectedCert.issueDate}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800"
                  >
                    CLOSE
                  </button>

                  <a
                    href={selectedCert.pdfUrl}
                    download
                    className="sm:hidden px-4 py-1.5 rounded-xl bg-cyan-600 text-slate-950 text-xs font-mono font-bold flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    <span>DOWNLOAD PDF</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
