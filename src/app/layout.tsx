import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Leela | ECE • VLSI • FPGA • Digital Design',
  description:
    'Portfolio and interactive digital engineering laboratory of Leela, a 4th-year B.Tech Electronics & Communication Engineering student focused on VLSI, FPGA, Verilog HDL, digital design and hardware systems.',
  keywords: [
    'Leela',
    'ECE Portfolio',
    'VLSI Design',
    'FPGA Engineering',
    'Verilog HDL',
    'Digital System Design',
    'RTL Synthesis',
    'ModelSim',
    'GIET Engineering College',
    'Digital Electronics',
    'Hardware Engineering Lab'
  ],
  authors: [{ name: 'Leela' }],
  creator: 'Leela',
  openGraph: {
    title: 'Leela | ECE • VLSI • FPGA • Digital Design Engineering Lab',
    description:
      'High-end interactive digital engineering laboratory showcasing VLSI, FPGA, Verilog HDL, and embedded hardware architectures.',
    type: 'website',
    locale: 'en_US',
    siteName: "Leela's Engineering Lab",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leela | ECE • VLSI • FPGA • Digital Design',
    description:
      'Explore synthesizable Verilog modules, 6-channel logic analyzers, FPGA LUT explorers, and interactive hardware projects.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
