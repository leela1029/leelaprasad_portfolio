'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Cpu, Zap, Activity } from 'lucide-react';

interface Chip3DProps {
  onInteract?: () => void;
}

export const Chip3D: React.FC<Chip3DProps> = ({ onInteract }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [clockTick, setClockTick] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    // Three.js Setup
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      setWebGlSupported(false);
      return;
    }

    // Chip Group
    const chipGroup = new THREE.Group();
    scene.add(chipGroup);

    // 1. PCB Package Substrate (Dark Matte Slate)
    const substrateGeo = new THREE.BoxGeometry(3.6, 3.6, 0.22);
    const substrateMat = new THREE.MeshStandardMaterial({
      color: 0x070d18,
      roughness: 0.35,
      metalness: 0.8,
    });
    const substrate = new THREE.Mesh(substrateGeo, substrateMat);
    chipGroup.add(substrate);

    // Substrate Edge Bevel Border (Gold Plated)
    const borderGeo = new THREE.BoxGeometry(3.68, 3.68, 0.04);
    const borderMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2,
    });
    borderGeo.translate(0, 0, -0.09);
    const border = new THREE.Mesh(borderGeo, borderMat);
    chipGroup.add(border);

    // 2. Central Silicon Die (Glossy Obsidian)
    const dieGeo = new THREE.BoxGeometry(2.0, 2.0, 0.14);
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0x020617,
      roughness: 0.15,
      metalness: 0.95,
    });
    dieGeo.translate(0, 0, 0.14);
    const die = new THREE.Mesh(dieGeo, dieMat);
    chipGroup.add(die);

    // 3. Silicon Logic Core Circuit Heatspreader / Logo plate
    const coreGeo = new THREE.PlaneGeometry(1.6, 1.6);
    const coreCanvas = document.createElement('canvas');
    coreCanvas.width = 512;
    coreCanvas.height = 512;
    const cctx = coreCanvas.getContext('2d');
    if (cctx) {
      cctx.fillStyle = '#020617';
      cctx.fillRect(0, 0, 512, 512);

      // Grid of logic blocks (LUT array)
      cctx.strokeStyle = '#06b6d4';
      cctx.lineWidth = 2;
      for (let i = 40; i < 480; i += 40) {
        cctx.beginPath();
        cctx.moveTo(i, 40);
        cctx.lineTo(i, 472);
        cctx.stroke();

        cctx.beginPath();
        cctx.moveTo(40, i);
        cctx.lineTo(472, i);
        cctx.stroke();
      }

      // Logic routing buses
      cctx.strokeStyle = '#38bdf8';
      cctx.lineWidth = 4;
      cctx.strokeRect(60, 60, 392, 392);
      cctx.strokeRect(120, 120, 272, 272);

      // Central processor text
      cctx.fillStyle = '#ffffff';
      cctx.font = 'bold 36px monospace';
      cctx.textAlign = 'center';
      cctx.fillText('LEELA-FPGA', 256, 230);
      cctx.fillStyle = '#06b6d4';
      cctx.font = '22px monospace';
      cctx.fillText('VLSI RTL CORE', 256, 275);
      cctx.font = '18px monospace';
      cctx.fillStyle = '#10b981';
      cctx.fillText('100 MHz // SYNTHESIZED', 256, 310);
    }

    const coreTexture = new THREE.CanvasTexture(coreCanvas);
    const coreMat = new THREE.MeshStandardMaterial({
      map: coreTexture,
      roughness: 0.2,
      metalness: 0.85,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.25,
    });
    const corePlate = new THREE.Mesh(coreGeo, coreMat);
    corePlate.position.set(0, 0, 0.22);
    chipGroup.add(corePlate);

    // 4. Gold Package Pins around perimeter
    const pinGeo = new THREE.BoxGeometry(0.12, 0.32, 0.08);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.95,
      roughness: 0.1,
    });

    const pinsPerSide = 12;
    const pinOffset = 3.6 / 2;
    for (let i = 0; i < pinsPerSide; i++) {
      const pos = -1.5 + (i * 3.0) / (pinsPerSide - 1);
      // Top side
      const pTop = new THREE.Mesh(pinGeo, pinMat);
      pTop.position.set(pos, pinOffset + 0.1, 0);
      chipGroup.add(pTop);

      // Bottom side
      const pBot = new THREE.Mesh(pinGeo, pinMat);
      pBot.position.set(pos, -pinOffset - 0.1, 0);
      chipGroup.add(pBot);

      // Left side
      const pLeft = new THREE.Mesh(pinGeo, pinMat);
      pLeft.rotation.z = Math.PI / 2;
      pLeft.position.set(-pinOffset - 0.1, pos, 0);
      chipGroup.add(pLeft);

      // Right side
      const pRight = new THREE.Mesh(pinGeo, pinMat);
      pRight.rotation.z = Math.PI / 2;
      pRight.position.set(pinOffset + 0.1, pos, 0);
      chipGroup.add(pRight);
    }

    // 5. Glowing Micro Bond Rings / Signal Orbit
    const ringGeo = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2.8;
    chipGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.0, 0.012, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3;
    chipGroup.add(ring2);

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanPoint = new THREE.PointLight(0x06b6d4, 4.5, 20);
    cyanPoint.position.set(2.5, 2.5, 4.0);
    scene.add(cyanPoint);

    const bluePoint = new THREE.PointLight(0x3b82f6, 3.5, 20);
    bluePoint.position.set(-2.5, -2.5, 3.0);
    scene.add(bluePoint);

    const emeraldPoint = new THREE.PointLight(0x10b981, 2.0, 15);
    emeraldPoint.position.set(0, 0, 3.5);
    scene.add(emeraldPoint);

    // Mouse Interaction
    let targetRotX = 0.35;
    let targetRotY = -0.45;
    let currRotX = 0.35;
    let currRotY = -0.45;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.75;
      targetRotX = -y * 0.65 + 0.25;
    };

    const handleMouseLeave = () => {
      targetRotX = 0.35;
      targetRotY = -0.45;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    let animationFrameId: number;
    let clock = 0;

    const animate = () => {
      clock += 0.015;
      currRotX += (targetRotX - currRotX) * 0.08;
      currRotY += (targetRotY - currRotY) * 0.08;

      chipGroup.rotation.x = currRotX;
      chipGroup.rotation.y = currRotY;
      chipGroup.position.y = Math.sin(clock * 1.5) * 0.12;

      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;

      cyanPoint.intensity = 4.0 + Math.sin(clock * 4.0) * 1.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Pulse ticker for HUD
  useEffect(() => {
    const interval = setInterval(() => {
      setClockTick((c) => (c + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onInteract}
    >
      {/* Background Holographic Halo */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl -z-10 animate-pulse" />

      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing relative z-10 transition-opacity duration-500 ${
          webGlSupported ? 'opacity-100' : 'hidden'
        }`}
      />

      {/* Fallback 2D High-Tech Interactive Silicon Die */}
      {!webGlSupported && (
        <div className="w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-2xl bg-slate-950 border-2 border-cyan-500/50 p-6 flex flex-col items-center justify-center relative shadow-2xl shadow-cyan-500/20">
          {/* Outer Gold Pin Array */}
          <div className="absolute inset-2 border border-yellow-500/30 rounded-xl pointer-events-none" />
          <div className="w-48 h-48 rounded-xl bg-slate-900 border-2 border-cyan-400 p-4 flex flex-col items-center justify-center text-center shadow-lg shadow-cyan-500/30">
            <Cpu className="w-10 h-10 text-cyan-400 mb-2 animate-bounce" />
            <span className="font-mono text-sm font-bold text-white tracking-widest">LEELA-FPGA</span>
            <span className="font-mono text-[10px] text-cyan-300">VLSI RTL CORE</span>
            <span className="font-mono text-[9px] text-emerald-400 mt-1">100 MHz ACTIVE</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>DIE TEMPERATURE: 38.4°C</span>
          </div>
        </div>
      )}

      {/* Interactive Micro Telemetry Overlays */}
      <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-slate-900/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 backdrop-blur-sm pointer-events-none flex items-center gap-1.5 shadow-md">
        <Zap className="w-3 h-3 text-cyan-400" />
        <span>V_CORE: 1.20V</span>
      </div>

      <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-slate-900/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 backdrop-blur-sm pointer-events-none flex items-center gap-1.5 shadow-md">
        <Activity className="w-3 h-3 text-emerald-400" />
        <span>CLK_TICK: {clockTick.toString().padStart(3, '0')}ns</span>
      </div>
    </div>
  );
};
