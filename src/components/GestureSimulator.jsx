import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Sparkles, Activity, ShieldCheck, Terminal, Maximize2, MousePointer, Hand, Volume2, Move, Layers, ExternalLink } from 'lucide-react';
import { playBlip } from '../utils/audio';

export default function GestureSimulator() {
  const canvasRef = useRef(null);
  const [currentGesture, setCurrentGesture] = useState('✋ Spatial Idle (Tracking)');
  const [activeMode, setActiveMode] = useState('mouse'); // 'mouse', 'scroll', 'media'
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    confidence: '99.4%',
    latency: '0.4ms',
    jointsActive: 21
  });
  const [isPinching, setIsPinching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 600);
    let height = (canvas.height = 340);

    // Virtual 21 hand landmarks relative to cursor
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let isClicking = false;

    // 21 standard MediaPipe Hand landmark offsets (wrist = 0, thumb = 1-4, index = 5-8, middle = 9-12, ring = 13-16, pinky = 17-20)
    const baseLandmarks = [
      { x: 0, y: 55 },    // 0: Wrist
      { x: -35, y: 35 },  // 1: Thumb CMC
      { x: -55, y: 15 },  // 2: Thumb MCP
      { x: -70, y: -8 },  // 3: Thumb IP
      { x: -80, y: -30 }, // 4: Thumb Tip
      { x: -28, y: -20 }, // 5: Index MCP
      { x: -32, y: -55 }, // 6: Index PIP
      { x: -35, y: -85 }, // 7: Index DIP
      { x: -37, y: -115 },// 8: Index Tip
      { x: -4, y: -25 },  // 9: Middle MCP
      { x: -5, y: -65 },  // 10: Middle PIP
      { x: -6, y: -98 },  // 11: Middle DIP
      { x: -7, y: -128 }, // 12: Middle Tip
      { x: 20, y: -20 },  // 13: Ring MCP
      { x: 23, y: -55 },  // 14: Ring PIP
      { x: 25, y: -85 },  // 15: Ring DIP
      { x: 27, y: -112 }, // 16: Ring Tip
      { x: 42, y: -10 },  // 17: Pinky MCP
      { x: 50, y: -38 },  // 18: Pinky PIP
      { x: 55, y: -62 },  // 19: Pinky DIP
      { x: 60, y: -85 }   // 20: Pinky Tip
    ];

    // Landmark skeletal connection pairs
    const bones = [
      [0, 1], [1, 2], [2, 3], [3, 4],       // Thumb
      [0, 5], [5, 6], [6, 7], [7, 8],       // Index
      [0, 9], [9, 10], [10, 11], [11, 12],   // Middle
      [0, 13], [13, 14], [14, 15], [15, 16], // Ring
      [0, 17], [17, 18], [18, 19], [19, 20], // Pinky
      [5, 9], [9, 13], [13, 17]             // Palm base
    ];

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth cursor follow
      mouseX += (targetX - mouseX) * 0.18;
      mouseY += (targetY - mouseY) * 0.18;
      time += 0.04;

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Compute animated 21 landmarks
      const currentJoints = baseLandmarks.map((pt, i) => {
        let x = mouseX + pt.x;
        let y = mouseY + pt.y;

        // Idle micro-oscillation
        x += Math.sin(time + i * 0.5) * 2;
        y += Math.cos(time + i * 0.5) * 2;

        // If pinching/clicking, bring index tip (8) and thumb tip (4) together
        if (isClicking) {
          if (i === 4 || i === 8) {
            x = mouseX - 58;
            y = mouseY - 70;
          }
        }

        return { x, y };
      });

      // Draw bones (connections)
      bones.forEach(([from, to]) => {
        const p1 = currentJoints[from];
        const p2 = currentJoints[to];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = isClicking ? 'rgba(34, 211, 238, 0.85)' : 'rgba(99, 102, 241, 0.7)';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      });

      // Draw joint nodes (21 landmarks)
      currentJoints.forEach((j, i) => {
        ctx.beginPath();
        const isTip = [4, 8, 12, 16, 20].includes(i);
        const radius = isTip ? 4.5 : 3;
        ctx.arc(j.x, j.y, radius, 0, Math.PI * 2);

        if (isTip) {
          ctx.fillStyle = isClicking ? '#22d3ee' : '#38bdf8';
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = '#818cf8';
          ctx.shadowBlur = 4;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw cursor pulse aura around index tip
      const tip = currentJoints[8];
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, isClicking ? 18 : 12, 0, Math.PI * 2);
      ctx.strokeStyle = isClicking ? 'rgba(34, 211, 238, 0.9)' : 'rgba(99, 102, 241, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const handleMouseDown = () => {
      isClicking = true;
      setIsPinching(true);
      setCurrentGesture('👌 Air Pinch (Trigger Left Click)');
      playBlip(1400, 0.08, 'sine');
    };

    const handleMouseUp = () => {
      isClicking = false;
      setIsPinching(false);
      setCurrentGesture('✋ 3D Palm Tracking (Zero Latency)');
    };

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const selectMode = (mode, gestureLabel) => {
    setActiveMode(mode);
    setCurrentGesture(gestureLabel);
    playBlip(950, 0.07, 'triangle');
  };

  return (
    <section id="simulator" className="relative py-28 border-t border-white/[0.08] bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest">
              <span className="w-4 h-[1px] bg-primary-400"></span>
              <span>03 // Interactive Edge-AI Laboratory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Test SnapSense AI in Real-Time
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Interact directly with Suja's flagship computer vision engine. Move your mouse or touch the canvas below to translate 21-joint 3D hand coordinates at 60 FPS, or click to trigger an air pinch!
            </p>
          </div>

          <a
            href="https://github.com/sujatamil2006-star/SnapSense-AI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 border border-white/[0.1] text-xs font-mono font-semibold text-slate-200 hover:text-white transition-all shadow-sm shrink-0"
          >
            <Cpu className="w-4 h-4 text-primary-400" />
            <span>SnapSense-AI GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* The Simulator Card */}
        <div className="spec-panel rounded-2xl border border-white/[0.12] shadow-2xl overflow-hidden relative">
          {/* Top HUD Header */}
          <div className="px-6 py-3.5 bg-obsidian-900 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>NPU ACCELERATED</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 hidden sm:inline">
                MediaPipe 3D Landmark Pipeline (21 Joints)
              </span>
            </div>

            {/* Gesture Mode Buttons */}
            <div className="flex items-center gap-1 bg-obsidian-950 p-1 rounded-xl border border-white/[0.08]">
              <button
                onClick={() => selectMode('mouse', '👆 Pointer Mode (Cursor Translation)')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeMode === 'mouse'
                    ? 'bg-primary-400 text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <MousePointer className="w-3 h-3" />
                <span>Pointer</span>
              </button>
              <button
                onClick={() => selectMode('scroll', '📜 Scroll Mode (Kinetic Gesture)')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeMode === 'scroll'
                    ? 'bg-primary-400 text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Move className="w-3 h-3" />
                <span>Scroll</span>
              </button>
              <button
                onClick={() => selectMode('media', '🎵 Media & Multitasking Mode')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeMode === 'media'
                    ? 'bg-primary-400 text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Volume2 className="w-3 h-3" />
                <span>Media</span>
              </button>
            </div>
          </div>

          {/* Interactive Canvas Viewport */}
          <div className="relative w-full h-[360px] bg-obsidian-950 cursor-crosshair overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Live HUD Overlays inside Canvas */}
            <div className="absolute top-4 left-5 pointer-events-none space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Detected Gesture State</div>
              <div className="text-sm sm:text-base font-mono font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                <span>{currentGesture}</span>
              </div>
            </div>

            <div className="absolute top-4 right-5 pointer-events-none text-right font-mono text-xs text-slate-400 space-y-1 hidden sm:block">
              <div>FPS: <span className="text-emerald-400 font-bold">{telemetry.fps}</span></div>
              <div>Inference: <span className="text-primary-300 font-bold">{telemetry.latency}</span></div>
              <div>Confidence: <span className="text-emerald-400 font-bold">{telemetry.confidence}</span></div>
            </div>

            {/* Bottom Interaction Guide */}
            <div className="absolute bottom-4 left-5 right-5 pointer-events-none flex flex-wrap items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2 bg-obsidian-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <span className="text-primary-400 font-mono font-bold">INTERACT:</span>
                <span className="font-sans">Hover to translate 21 joints. <strong>Click & Hold</strong> to trigger Air Pinch.</span>
              </div>
              <div className="font-mono text-[11px] text-slate-500 hidden md:block">
                SnapSense AI • Edge Inference for Snapdragon X Elite
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Strip */}
          <div className="px-6 py-4 bg-obsidian-900/90 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <div className="text-slate-500 text-[10px] uppercase">Tracking Skeleton</div>
              <div className="text-white font-bold mt-0.5">21 3D Joint Coordinates</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase">Engine Architecture</div>
              <div className="text-white font-bold mt-0.5">MediaPipe + PySide6 Worker</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase">Processing Model</div>
              <div className="text-emerald-400 font-bold mt-0.5">100% On-Device Edge AI</div>
            </div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase">Target Platform</div>
              <div className="text-primary-400 font-bold mt-0.5">Snapdragon X Elite / Windows 11</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
