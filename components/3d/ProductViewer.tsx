"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { SceneMode, Hotspot } from "./BackpackTentScene";
import { RotateCcw, Eye, EyeOff, Play, Pause, Compass, Layers, Info, CheckCircle2, AlertCircle } from "lucide-react";

// Dynamically import Three.js scene with SSR disabled
const BackpackTentScene = dynamic(() => import("./BackpackTentScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#171A1D] text-[#8A8F96]">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#D8292F] border-t-transparent"></div>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[#F5F3EE]">
        INITIALIZING 3D PROTOTYPE RUNTIME...
      </p>
      <span className="mt-1 font-mono text-[10px] text-[#8A8F96]">Loading WebGL Context & Procedural Geometry</span>
    </div>
  ),
});

export default function ProductViewer() {
  const [mode, setMode] = useState<SceneMode>("backpack");
  const [transformProgress, setTransformProgress] = useState(0);
  const [isPlayingTransform, setIsPlayingTransform] = useState(false);
  const [showHotspots, setShowHotspots] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Transformation playback loop
  useEffect(() => {
    let animId: number;
    if (mode === "transform" && isPlayingTransform) {
      let current = transformProgress;
      const step = () => {
        current += 0.008;
        if (current >= 1) {
          current = 1;
          setTransformProgress(1);
          setIsPlayingTransform(false);
        } else {
          setTransformProgress(current);
          animId = requestAnimationFrame(step);
        }
      };
      animId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animId);
  }, [mode, isPlayingTransform, transformProgress]);

  const handleSelectMode = (newMode: SceneMode) => {
    setMode(newMode);
    if (newMode === "transform") {
      setTransformProgress(0.2);
      setIsPlayingTransform(true);
    } else {
      setIsPlayingTransform(false);
    }
  };

  return (
    <section id="3d-prototype" className="relative w-full border-b border-[#2D333B] bg-[#121417] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8292F]/30 bg-[#D8292F]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#EE2E35]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE2E35]"></span>
              High-Precision Concept Prototype
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl lg:text-5xl">
              Interactive 3D System
            </h2>
            <p className="mt-2 max-w-2xl text-base text-[#8A8F96]">
              Real-time procedural CAD geometry demonstrating the seamless mechanical transition from Safari carry-on backpack to OYO one-person shelter.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#8A8F96]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              WebGL 2.0 Active
            </span>
            <span>•</span>
            <span>PBR Shading</span>
            <span>•</span>
            <span className="text-[#D8292F]">Patent Pending Concept</span>
          </div>
        </div>

        {/* 3D Viewport Box */}
        <div className="relative h-[550px] w-full overflow-hidden rounded-2xl border border-[#2D333B] bg-[#171A1D] shadow-2xl md:h-[680px]">
          {/* Engineering HUD Grid Overlay */}
          <div className="pointer-events-none absolute inset-0 tech-grid opacity-30 z-0"></div>

          {/* Top Left: Status & Spec Watermark */}
          <div className="pointer-events-none absolute left-5 top-5 z-10 flex flex-col gap-1 font-mono text-[11px] text-[#8A8F96]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#F5F3EE]">OYO NOMAD // MK-1</span>
              <span className="rounded bg-[#536B54]/30 px-1.5 py-0.5 text-[#6C8A6D]">CONCEPT VERIFIED</span>
            </div>
            <span>VOLUME: ~42L CARRY + SHELTER POD</span>
            <span>DEPLOYMENT SPEED: &lt; 90 SECONDS (TARGET)</span>
          </div>

          {/* Top Right: Controls */}
          <div className="absolute right-5 top-5 z-10 flex items-center gap-2">
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className="flex items-center gap-1.5 rounded-lg border border-[#2D333B] bg-[#1E2227]/90 px-3 py-1.5 font-mono text-xs text-[#F5F3EE] backdrop-blur transition hover:border-[#8A8F96]"
              title="Toggle Hotspots"
            >
              {showHotspots ? <EyeOff size={14} className="text-[#EE2E35]" /> : <Eye size={14} />}
              <span className="hidden sm:inline">{showHotspots ? "Hide Markers" : "Show Markers"}</span>
            </button>
            <div className="hidden rounded-lg border border-[#2D333B] bg-[#1E2227]/90 px-3 py-1.5 font-mono text-xs text-[#8A8F96] backdrop-blur sm:flex sm:items-center sm:gap-1.5">
              <Compass size={14} className="text-[#D8292F]" />
              <span>Drag to rotate • Scroll to zoom</span>
            </div>
          </div>

          {/* The Actual 3D Scene */}
          {isClient && (
            <BackpackTentScene
              mode={mode}
              transformProgress={transformProgress}
              onSelectHotspot={(spot) => setSelectedHotspot(spot)}
              showHotspots={showHotspots}
            />
          )}

          {/* Bottom Bar: Mode Selector & Transform Scrubber */}
          <div className="absolute bottom-5 left-1/2 z-10 w-[95%] -translate-x-1/2 md:w-auto">
            <div className="flex flex-col gap-3 rounded-2xl border border-[#2D333B] bg-[#171A1D]/95 p-2 shadow-2xl backdrop-blur-xl md:flex-row md:items-center md:gap-4 md:px-5 md:py-3">
              {/* Three States Selector */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleSelectMode("backpack")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-semibold tracking-wider transition ${
                    mode === "backpack"
                      ? "bg-[#D8292F] text-white shadow-glow-red"
                      : "text-[#8A8F96] hover:bg-[#1E2227] hover:text-[#F5F3EE]"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                  STATE A: BACKPACK
                </button>

                <button
                  onClick={() => handleSelectMode("transform")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-semibold tracking-wider transition ${
                    mode === "transform"
                      ? "bg-[#EE2E35] text-white shadow-glow-red"
                      : "text-[#8A8F96] hover:bg-[#1E2227] hover:text-[#F5F3EE]"
                  }`}
                >
                  <Layers size={13} />
                  STATE B: TRANSFORM
                </button>

                <button
                  onClick={() => handleSelectMode("shelter")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-semibold tracking-wider transition ${
                    mode === "shelter"
                      ? "bg-[#536B54] text-white"
                      : "text-[#8A8F96] hover:bg-[#1E2227] hover:text-[#F5F3EE]"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                  STATE C: SHELTER
                </button>
              </div>

              {/* Transformation Interactive Scrubber (When in Transform Mode) */}
              {mode === "transform" && (
                <div className="flex items-center gap-3 border-t border-[#2D333B] pt-2 md:border-l md:border-t-0 md:pl-4 md:pt-0">
                  <button
                    onClick={() => setIsPlayingTransform(!isPlayingTransform)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2D333B] text-[#F5F3EE] transition hover:bg-[#D8292F]"
                    title={isPlayingTransform ? "Pause" : "Play Sequence"}
                  >
                    {isPlayingTransform ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                  </button>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-mono text-[10px] text-[#8A8F96]">
                      <span>UNCLIP POD</span>
                      <span>DEPLOY FRAME</span>
                      <span>CANOPY TENSION</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={transformProgress}
                      onChange={(e) => {
                        setIsPlayingTransform(false);
                        setTransformProgress(parseFloat(e.target.value));
                      }}
                      className="h-1.5 w-44 cursor-pointer appearance-none rounded-lg bg-[#2D333B] accent-[#EE2E35] md:w-56"
                    />
                  </div>
                  <span className="font-mono text-xs text-[#F5F3EE]">
                    {Math.round(transformProgress * 100)}%
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Hotspot Drawer / Card */}
          {selectedHotspot && (
            <div className="absolute left-5 bottom-24 z-20 max-w-sm rounded-xl border border-[#D8292F]/50 bg-[#171A1D]/95 p-4 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-[#2D333B] pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#EE2E35]">
                  HOTSPOT INSPECTION • {selectedHotspot.category}
                </span>
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="text-xs text-[#8A8F96] hover:text-white"
                >
                  ✕
                </button>
              </div>
              <h4 className="mt-2 text-base font-bold text-[#F5F3EE]">{selectedHotspot.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-[#8A8F96]">{selectedHotspot.description}</p>
            </div>
          )}
        </div>

        {/* Feature Explainer Tabs beneath 3D */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#2D333B] bg-[#1E2227]/50 p-5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#D8292F]">
              <span className="font-bold">01 //</span> Nomad Core Backpack
            </div>
            <h3 className="mt-2 text-base font-bold text-[#F5F3EE]">Safari Luggage Engineering</h3>
            <p className="mt-1 text-xs text-[#8A8F96]">
              Engineered with Safari&apos;s high-tensile ripstop nylon, padded ergonomic harness, laptop compartment, and lower pod docking bay.
            </p>
          </div>

          <div className="rounded-xl border border-[#2D333B] bg-[#1E2227]/50 p-5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#EE2E35]">
              <span className="font-bold">02 //</span> Rapid Modular Deployment
            </div>
            <h3 className="mt-2 text-base font-bold text-[#F5F3EE]">Shock-Corded Aluminium Frame</h3>
            <p className="mt-1 text-xs text-[#8A8F96]">
              Pre-curved collapsible frame poles automatically seat into base grommets. No external stakes required for initial pitch.
            </p>
          </div>

          <div className="rounded-xl border border-[#2D333B] bg-[#1E2227]/50 p-5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#536B54]">
              <span className="font-bold">03 //</span> Nomad Shelter
            </div>
            <h3 className="mt-2 text-base font-bold text-[#F5F3EE]">One-Person Aerodynamic Bivy</h3>
            <p className="mt-1 text-xs text-[#8A8F96]">
              High-wall bathtub floor, dual-side ventilation scoops, and bug-proof mesh door designed for OYO Nomad Zone outdoor pitches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
