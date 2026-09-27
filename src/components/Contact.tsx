'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Mail, Send, Copy, Check, Radio, Phone, Code2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [pingSent, setPingSent] = useState(false);

  const contact = PORTFOLIO_DATA.engineer.contact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phone || '+91-8374618021');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendPing = () => {
    setPingSent(true);
    setTimeout(() => setPingSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>MODULE // 09</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
              ENGINEERING COMMUNICATION PORT
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2 md:mt-0">
            TRANSMIT PACKET // OPEN PROTOCOLS
          </p>
        </div>

        {/* Contact Station Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950/90 border-2 border-cyan-500/30 p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>LINK STATUS: ACCEPTING INQUIRIES & OPPORTUNITIES</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                Let&apos;s Build Next-Gen Digital Hardware & Data Systems.
              </h3>

              <p className="text-slate-300 text-sm font-sans leading-relaxed">
                I am actively open to full-time engineering positions, Graduate Engineering Trainee (GET) roles, and technical internships in <strong className="text-cyan-300">VLSI Design, FPGA RTL Prototyping, Digital Logic Verification, and Python Data Analytics</strong>.
              </p>

              <div className="pt-2 space-y-2 font-mono text-xs text-slate-400">
                <p>LOCATION: <span className="text-slate-200">{contact.location}</span></p>
                <p>INSTITUTION: <span className="text-cyan-300">{PORTFOLIO_DATA.engineer.institution} (ECE)</span></p>
              </div>
            </div>

            {/* Right Action Channels Column */}
            <div className="md:col-span-5 space-y-3">
              
              {/* Direct Mailto Channel */}
              <a
                href={`mailto:${contact.email}`}
                className="w-full p-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono text-xs font-bold flex items-center justify-between transition-all shadow-lg shadow-cyan-600/30 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>TRANSMIT EMAIL</span>
                </div>
                <Send className="w-4 h-4" />
              </a>

              {/* Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="w-full p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 font-mono text-xs flex items-center justify-between transition-colors"
              >
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>EMAIL:</span>
                </span>
                <span className="font-bold flex items-center gap-1.5 text-cyan-300 text-[11px]">
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'COPIED TO CLIPBOARD' : contact.email}
                </span>
              </button>

              {/* Phone Channel */}
              <button
                onClick={handleCopyPhone}
                className="w-full p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 font-mono text-xs flex items-center justify-between transition-colors"
              >
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PHONE:</span>
                </span>
                <span className="font-bold flex items-center gap-1.5 text-cyan-300 text-[11px]">
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedPhone ? 'COPIED PHONE' : contact.phone}
                </span>
              </button>

              {/* External Profiles Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href={contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>LEETCODE</span>
                </a>
              </div>

              {/* Hardware Ping Strobe Button */}
              <button
                onClick={handleSendPing}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-[11px] font-mono text-slate-400 hover:text-emerald-400 flex items-center justify-center gap-2 transition-colors"
              >
                <Radio className="w-3.5 h-3.5" />
                <span>{pingSent ? 'PING ACKNOWLEDGED (RTT: 0.02ms)' : 'TEST TELEMETRY PING (ECHO)'}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
