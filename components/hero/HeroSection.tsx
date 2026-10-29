"use client";

import React from "react";
import { ArrowDown, Box, Compass, ShieldCheck, ChevronRight, Sparkles } from "lucide-react";

export default function HeroSection({ onStartDemo }: { onStartDemo: () => void }) {
  return (
    <section id="overview" className="relative min-h-screen w-full overflow-hidden bg-[#171A1D] pt-24 pb-16 flex flex-col justify-between">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-25"></div>
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-[#EE2E35]/15 via-[#536B54]/10 to-transparent blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2D333B] bg-[#1E2227]/80 px-3.5 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#D8292F]"></span>
            <span className="font-mono text-xs font-medium text-[#F5F3EE]">
              Safari Luggage Co. × OYO Rooms
            </span>
            <span className="text-xs text-[#8A8F96]">•</span>
            <span className="font-mono text-xs text-[#EE2E35]">Formula Unicorn Pitch</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-[#8A8F96]">
            <span>PROPOSED CONCEPT PROTOTYPE</span>
            <span className="h-1 w-1 rounded-full bg-[#8A8F96]"></span>
            <span>NOT COMMERCIALLY RELEASED</span>
          </div>
        </div>

        {/* Main Grid: Headline & Big Focal Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#EE2E35] mb-3">
              INDUSTRIAL DESIGN COLLABORATION
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#F5F3EE] uppercase leading-[0.95]">
              OYO NOMAD
            </h1>

            <div className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D8292F] via-[#EE2E35] to-[#F5F3EE]">
              “CARRY YOUR STAY.”
            </div>

            <p className="mt-6 text-base sm:text-lg text-[#8A8F96] leading-relaxed max-w-xl">
              A portable camping system designed to take your journey beyond conventional accommodation. Carry-on engineered by Safari; verified outdoor destination pitches unlocked by OYO.
            </p>

            {/* Component Status Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#2D333B] bg-[#1E2227] px-3 py-1 font-mono text-[11px] text-[#F5F3EE]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D8292F]"></span>
                NOMAD CORE // 42L PACK
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#2D333B] bg-[#1E2227] px-3 py-1 font-mono text-[11px] text-[#F5F3EE]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#536B54]"></span>
                NOMAD SHELTER // BIVY POD
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#2D333B] bg-[#1E2227] px-3 py-1 font-mono text-[11px] text-[#F5F3EE]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8A8F96]"></span>
                NOMAD SLEEP KIT // MODULAR
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#3d-prototype"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#EE2E35] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-glow-red transition-all hover:bg-[#D8292F] hover:scale-[1.02]"
              >
                <Box size={16} />
                Explore the Prototype
              </a>

              <a
                href="#transformation"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#2D333B] bg-[#1E2227] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#F5F3EE] transition hover:border-[#8A8F96] hover:bg-[#252B32]"
              >
                See How It Transforms
                <ChevronRight size={15} />
              </a>

              <button
                onClick={onStartDemo}
                className="hidden xl:flex items-center gap-1.5 rounded-xl border border-[#536B54]/40 bg-[#536B54]/20 px-4 py-3.5 font-mono text-xs font-semibold text-[#6C8A6D] transition hover:bg-[#536B54] hover:text-white"
              >
                <Sparkles size={14} />
                Judge Pitch Mode
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Focal Render */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-3xl border border-[#2D333B] bg-gradient-to-b from-[#1E2227] to-[#121417] p-4 sm:p-8 shadow-2xl overflow-hidden group">
              {/* Graphic Engineering Backdrop */}
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[#8A8F96] text-right">
                <div>SPEC REV: 0.94-ALPHA</div>
                <div>SCALE: 1:1 RATIO</div>
              </div>

              {/* Product Visual Presentation Card */}
              <div className="relative h-80 sm:h-96 w-full flex items-center justify-center">
                {/* Visual SVG schematic representing the unified backpack-tent architecture */}
                <svg
                  viewBox="0 0 500 400"
                  className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle terrain contour lines in background */}
                  <path d="M20 360 C 140 340, 260 370, 480 345" stroke="#2D333B" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M10 375 C 160 365, 300 380, 490 365" stroke="#2D333B" strokeWidth="1.5" />

                  {/* Backpack Main Chassis */}
                  <rect x="180" y="80" width="140" height="200" rx="28" fill="#212529" stroke="#373E47" strokeWidth="3" />
                  
                  {/* Safari Red Front Accent Spine */}
                  <line x1="250" y1="90" x2="250" y2="270" stroke="#D8292F" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Front Expandable Pocket */}
                  <rect x="195" y="130" width="110" height="110" rx="16" fill="#2E3A33" stroke="#536B54" strokeWidth="2" />
                  
                  {/* Safari Luggage Tag Badge */}
                  <rect x="230" y="150" width="40" height="12" rx="3" fill="#EE2E35" />
                  <text x="250" y="159" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    SAFARI
                  </text>

                  {/* Detachable Tent Pod at Base */}
                  <rect x="165" y="275" width="170" height="55" rx="14" fill="#3A463E" stroke="#536B54" strokeWidth="2.5" />
                  <rect x="190" y="280" width="12" height="45" rx="2" fill="#D8292F" />
                  <rect x="298" y="280" width="12" height="45" rx="2" fill="#D8292F" />
                  <text x="250" y="306" fill="#F5F3EE" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="1" textAnchor="middle">
                    NOMAD SHELTER POD
                  </text>

                  {/* Side Pole Sleeves */}
                  <rect x="162" y="120" width="16" height="130" rx="8" fill="#171A1D" stroke="#373E47" strokeWidth="2" />
                  <line x1="170" y1="105" x2="170" y2="245" stroke="#C5CBD3" strokeWidth="4" strokeLinecap="round" />

                  <rect x="322" y="120" width="16" height="130" rx="8" fill="#171A1D" stroke="#373E47" strokeWidth="2" />
                  <line x1="330" y1="105" x2="330" y2="245" stroke="#C5CBD3" strokeWidth="4" strokeLinecap="round" />

                  {/* Top Ergo Handle */}
                  <path d="M220 80 C 220 62, 280 62, 280 80" stroke="#0F1113" strokeWidth="8" strokeLinecap="round" fill="none" />

                  {/* Padded Shoulder Straps Silhouette */}
                  <path d="M190 95 C 145 130, 140 210, 160 250" stroke="#171A1D" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.6" />
                  <path d="M310 95 C 355 130, 360 210, 340 250" stroke="#171A1D" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.6" />

                  {/* Projected Tent Expansion Ghost Wireframe */}
                  <path
                    d="M170 300 Q 250 180 430 310 L 410 340 L 170 340 Z"
                    fill="none"
                    stroke="#EE2E35"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity="0.8"
                  />
                  <circle cx="430" cy="310" r="4" fill="#EE2E35" />
                  <text x="435" y="300" fill="#EE2E35" fontSize="8" fontFamily="monospace">
                    DEPLOYMENT AXIS
                  </text>

                  {/* Engineering Dimension Callouts */}
                  <line x1="140" y1="80" x2="140" y2="330" stroke="#8A8F96" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="130" y="210" fill="#8A8F96" fontSize="9" fontFamily="monospace" textAnchor="end">
                    550mm
                  </text>
                  <line x1="165" y1="365" x2="335" y2="365" stroke="#8A8F96" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="250" y="380" fill="#8A8F96" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    350mm (CARRY-ON COMPLIANT)
                  </text>
                </svg>

                {/* Live 3D Prompt Overlay */}
                <a
                  href="#3d-prototype"
                  className="absolute bottom-3 right-3 rounded-lg border border-[#D8292F]/40 bg-[#171A1D]/90 px-3 py-1.5 font-mono text-[10px] text-[#F5F3EE] backdrop-blur-md transition hover:border-[#EE2E35]"
                >
                  <span className="text-[#EE2E35]">●</span> Click to manipulate in 3D
                </a>
              </div>

              {/* Bottom Quick Specs Strip */}
              <div className="mt-4 grid grid-cols-3 divide-x divide-[#2D333B] border-t border-[#2D333B] pt-4 text-center">
                <div>
                  <div className="font-mono text-[10px] text-[#8A8F96]">CAPACITY</div>
                  <div className="text-sm font-bold text-[#F5F3EE]">1 Person + 42L</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8A8F96]">POD WEIGHT (EST.)</div>
                  <div className="text-sm font-bold text-[#EE2E35]">~1.2 kg Target</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8A8F96]">STATUS</div>
                  <div className="text-sm font-bold text-[#6C8A6D]">Design Prototype</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mx-auto flex flex-col items-center justify-center gap-2 pt-4">
        <a href="#3d-prototype" className="flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-[#8A8F96] hover:text-[#EE2E35] transition">
          <span>Explore Prototype Geometry</span>
          <ArrowDown size={14} className="animate-bounce text-[#EE2E35]" />
        </a>
      </div>
    </section>
  );
}
