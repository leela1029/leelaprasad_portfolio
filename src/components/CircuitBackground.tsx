'use client';

import React, { useEffect, useRef, useState } from 'react';

export const CircuitBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    window.addEventListener('resize', handleResize);

    interface Trace {
      points: { x: number; y: number }[];
      speed: number;
      progress: number;
      length: number;
      color: string;
      radius: number;
    }

    interface Node {
      x: number;
      y: number;
      radius: number;
      pulsePhase: number;
      pulseSpeed: number;
    }

    let traces: Trace[] = [];
    let nodes: Node[] = [];

    const gridSize = 64;

    const initGrid = () => {
      traces = [];
      nodes = [];

      // Create static circuit nodes on a sparse grid
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      for (let i = 0; i < cols; i += 2) {
        for (let j = 0; j < rows; j += 2) {
          if (Math.random() > 0.45) {
            nodes.push({
              x: i * gridSize,
              y: j * gridSize,
              radius: Math.random() > 0.8 ? 3 : 1.8,
              pulsePhase: Math.random() * Math.PI * 2,
              pulseSpeed: 0.02 + Math.random() * 0.03,
            });
          }
        }
      }

      // Generate circuit traces with 90-degree bends (Manhattan routing)
      const numTraces = Math.min(24, Math.floor(width / 60));
      for (let t = 0; t < numTraces; t++) {
        const startX = Math.floor(Math.random() * cols) * gridSize;
        const startY = Math.floor(Math.random() * rows) * gridSize;

        const points = [{ x: startX, y: startY }];
        let currX = startX;
        let currY = startY;
        const numSegments = 3 + Math.floor(Math.random() * 4);

        for (let s = 0; s < numSegments; s++) {
          const moveHorizontal = s % 2 === 0;
          const dist = (1 + Math.floor(Math.random() * 3)) * gridSize * (Math.random() > 0.5 ? 1 : -1);
          if (moveHorizontal) {
            currX += dist;
          } else {
            currY += dist;
          }
          points.push({ x: currX, y: currY });
        }

        // Calculate total length
        let totalLen = 0;
        for (let p = 0; p < points.length - 1; p++) {
          totalLen += Math.hypot(points[p + 1].x - points[p].x, points[p + 1].y - points[p].y);
        }

        traces.push({
          points,
          speed: 0.8 + Math.random() * 1.4,
          progress: Math.random() * totalLen,
          length: totalLen,
          color: Math.random() > 0.4 ? '#06b6d4' : '#38bdf8',
          radius: 2,
        });
      }
    };

    initGrid();

    // Helper to get point on polyline given a distance progress
    const getPointAtDist = (points: { x: number; y: number }[], dist: number) => {
      let accumulated = 0;
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const segLen = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        if (accumulated + segLen >= dist) {
          const ratio = (dist - accumulated) / segLen;
          return {
            x: p1.x + (p2.x - p1.x) * ratio,
            y: p1.y + (p2.y - p1.y) * ratio,
          };
        }
        accumulated += segLen;
      }
      return points[points.length - 1];
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle PCB grid background lines
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.035)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw static PCB circuit traces
      ctx.lineWidth = 1;
      traces.forEach((trace) => {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.beginPath();
        trace.points.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
      });

      // Draw nodes & solder pads
      nodes.forEach((node) => {
        node.pulsePhase += node.pulseSpeed;
        const pulse = 0.3 + 0.3 * Math.sin(node.pulsePhase);

        // Check distance to mouse for interactive highlight
        const distToMouse = Math.hypot(mousePos.x - node.x, mousePos.y - node.y);
        const mouseGlow = distToMouse < 160 ? (1 - distToMouse / 160) * 0.7 : 0;

        ctx.fillStyle = `rgba(6, 182, 212, ${pulse + mouseGlow})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (mouseGlow > 0 ? 1 : 0), 0, Math.PI * 2);
        ctx.fill();

        if (node.radius > 2 || mouseGlow > 0.2) {
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 + mouseGlow})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Draw traveling electron signal packets along traces
      traces.forEach((trace) => {
        trace.progress += trace.speed;
        if (trace.progress > trace.length) {
          trace.progress = 0;
        }

        const head = getPointAtDist(trace.points, trace.progress);
        const trailDist = Math.max(0, trace.progress - 28);
        const tail = getPointAtDist(trace.points, trailDist);

        const gradient = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
        gradient.addColorStop(1, trace.color);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.lineTo(head.x, head.y);
        ctx.stroke();

        // Glowing packet head
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = trace.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
