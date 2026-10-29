"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Check, Sparkles, Clock, ShieldCheck, Box } from "lucide-react";

interface Stage {
  step: string;
  number: string;
  title: string;
  tagline: string;
  duration: string;
  description: string;
  actions: string[];
  specs: { label: string; value: string }[];
}

const STAGES: Stage[] = [
  {
    step: "STAGE 01",
    number: "01",
    title: "PACK",
    tagline: "“Your essentials, organised for the journey.”",
    duration: "Transit Mode",
    description: "The complete one-person shelter and sleep system nests securely inside the lower aerodynamic pod of the 42L Safari travel backpack. Carry-on compliant for airlines, trains, buses, and motorbike racks.",
    actions: [
      "Ergonomic weight distribution placing tent pod at lowest center-of-gravity point",
      "Quick-release dual side buckles hold tent module locked to main pack chassis",
      "Laptop and clothes compartments remain 100% accessible without disturbing shelter pod",
    ],
    specs: [
      { label: "Configuration", value: "Standard Backpack" },
      { label: "Transit Standard", value: "Overhead Carry-On" },
      { label: "Carry Comfort", value: "Safari Ergonomic Harness" },
    ],
  },
  {
    step: "STAGE 02",
    number: "02",
    title: "UNFOLD",
    tagline: "“Detach the shelter and deploy its support frame.”",
    duration: "~60 Seconds",
    description: "Upon arriving at an approved OYO Nomad Zone, release two primary acetal clips. The cylindrical tent capsule slides free. Four shock-corded aluminum alloy segments snap into place to form the self-supporting geodesic canopy.",
    actions: [
      "Disengage dual side compression clips to slide out the shelter pod",
      "Extend interlocking 7001-T6 aluminum poles from dedicated lateral sleeves",
      "Snap pole ends into corner eyelets; canopy tensions automatically",
    ],
    specs: [
      { label: "Tool Requirement", value: "Zero Tools Needed" },
      { label: "Frame Linkage", value: "Internal Elastic Shock-Cord" },
      { label: "Initial Pitch Time", value: "< 60s Target" },
    ],
  },
  {
    step: "STAGE 03",
    number: "03",
    title: "STAY",
    tagline: "“Create a compact shelter at an approved camping pitch.”",
    duration: "Overnight Shelter",
    description: "Your pitch is live. Anchor perimeter guy-lines to ground pins, unroll the optional Sleep Kit, and dock the empty backpack in the vestibule gear alcove. Access verified OYO washrooms and fresh drinking water on-site.",
    actions: [
      "High-wall bathtub ground sheet prevents damp and surface water ingress",
      "No-See-Um mesh door allows ventilation while excluding flying insects",
      "Main Safari pack converts into bedside gear storage locker inside vestibule",
    ],
    specs: [
      { label: "Occupancy", value: "1 Person + Gear" },
      { label: "Internal Length", value: "215 cm (Target)" },
      { label: "Site Integration", value: "OYO Nomad Zone Pitch" },
    ],
  },
];

export default function TransformationSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = STAGES[activeStageIndex];

  return (
    <section id="transformation" className="relative w-full border-b border-[#2D333B] bg-[#171A1D] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EE2E35]/30 bg-[#EE2E35]/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#EE2E35]">
            Mechanical Sequence
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl md:text-5xl">
            From Transit to Shelter in 3 Steps
          </h2>
          <p className="mt-3 text-base text-[#8A8F96]">
            Engineered so solo travellers can set up camp at twilight without struggle, tools, or complicated tent rigging.
          </p>

          {/* Progress Timeline Buttons */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4">
            {STAGES.map((s, idx) => (
              <button
                key={s.number}
                onClick={() => setActiveStageIndex(idx)}
                className={`group flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-bold transition-all ${
                  activeStageIndex === idx
                    ? "bg-[#D8292F] text-white shadow-glow-red scale-105"
                    : "border border-[#2D333B] bg-[#1E2227] text-[#8A8F96] hover:border-[#8A8F96] hover:text-[#F5F3EE]"
                }`}
              >
                <span>{s.number}</span>
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Stage Showcase Workspace */}
        <div className="rounded-3xl border border-[#2D333B] bg-[#121417] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Graphic Representation */}
            <div className="lg:col-span-7 rounded-2xl border border-[#2D333B] bg-[#171A1D] p-6 relative flex flex-col items-center justify-center min-h-[340px]">
              {/* Graphic Stage Diagrams */}
              <div className="relative w-full max-w-md h-64 flex items-center justify-center">
                {activeStageIndex === 0 && (
                  /* Stage 01: PACK visual */
                  <svg viewBox="0 0 300 240" className="w-full h-full" fill="none">
                    <rect x="90" y="30" width="120" height="150" rx="20" fill="#212529" stroke="#3D444E" strokeWidth="2.5" />
                    <line x1="150" y1="40" x2="150" y2="170" stroke="#D8292F" strokeWidth="3" />
                    <rect x="105" y="70" width="90" height="70" rx="10" fill="#2E3A33" stroke="#536B54" strokeWidth="1.5" />
                    <rect x="75" y="185" width="150" height="42" rx="12" fill="#3F483D" stroke="#D8292F" strokeWidth="2" />
                    <text x="150" y="210" fill="#F5F3EE" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      TENT MODULE DOCKED
                    </text>
                    <line x1="85" y1="170" x2="85" y2="195" stroke="#EE2E35" strokeWidth="3" strokeLinecap="round" />
                    <line x1="215" y1="170" x2="215" y2="195" stroke="#EE2E35" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                )}

                {activeStageIndex === 1 && (
                  /* Stage 02: UNFOLD visual */
                  <svg viewBox="0 0 300 240" className="w-full h-full" fill="none">
                    {/* Detached Pod Sliding Forward */}
                    <rect x="40" y="40" width="80" height="110" rx="14" fill="#212529" stroke="#3D444E" strokeWidth="2" opacity="0.6" />
                    <text x="80" y="100" fill="#8A8F96" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      PACK DETACHED
                    </text>

                    {/* Arrow showing deployment */}
                    <path d="M125 100 L 160 100" stroke="#EE2E35" strokeWidth="2" strokeDasharray="4 2" />
                    <polygon points="165,100 157,96 157,104" fill="#EE2E35" />

                    {/* Unfolding Shelter Frame */}
                    <path d="M150 180 Q 220 50 280 180" stroke="#C5CBD3" strokeWidth="3" fill="none" strokeDasharray="3 3" />
                    <path d="M180 180 Q 220 80 260 180" stroke="#EE2E35" strokeWidth="2" fill="none" />
                    <rect x="150" y="175" width="130" height="12" rx="3" fill="#2E3A33" stroke="#536B54" strokeWidth="1.5" />
                    <text x="215" y="150" fill="#F5F3EE" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      DEPLOYING FRAME
                    </text>
                  </svg>
                )}

                {activeStageIndex === 2 && (
                  /* Stage 03: STAY visual */
                  <svg viewBox="0 0 300 240" className="w-full h-full" fill="none">
                    {/* Ground line */}
                    <line x1="20" y1="200" x2="280" y2="200" stroke="#3D444E" strokeWidth="2" />
                    
                    {/* Pitched Tent Profile */}
                    <path d="M50 200 Q 150 70 250 200 Z" fill="#2E3A33" stroke="#536B54" strokeWidth="2.5" />
                    {/* Arch frame */}
                    <path d="M50 200 Q 150 65 250 200" stroke="#C5CBD3" strokeWidth="2.5" fill="none" />
                    {/* Front vestibule zipper */}
                    <line x1="150" y1="75" x2="150" y2="200" stroke="#EE2E35" strokeWidth="2" />
                    {/* Ventilator hood */}
                    <path d="M135 75 L 150 65 L 165 75 Z" fill="#D8292F" />
                    
                    {/* Safari Pack parked at entrance */}
                    <rect x="255" y="145" width="35" height="55" rx="6" fill="#212529" stroke="#D8292F" strokeWidth="1.5" />
                    <text x="272" y="175" fill="#FFFFFF" fontSize="6" fontFamily="monospace" textAnchor="middle">
                      GEAR
                    </text>
                    
                    <text x="150" y="150" fill="#F5F3EE" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      OYO NOMAD ZONE PITCH
                    </text>
                  </svg>
                )}
              </div>

              {/* Step Label Footer */}
              <div className="w-full flex items-center justify-between border-t border-[#2D333B] pt-3 text-xs">
                <span className="font-mono text-[#EE2E35] font-bold">{currentStage.step} {"//"} {currentStage.title}</span>
                <span className="font-mono text-[#8A8F96]">DURATION: {currentStage.duration}</span>
              </div>
            </div>

            {/* Right Column: Descriptions & Action List */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#EE2E35]">
                  TRANSFORMATION PROTOCOL
                </div>
                <h3 className="mt-2 text-2xl font-bold text-[#F5F3EE]">
                  {currentStage.title}: {currentStage.tagline}
                </h3>
                <p className="mt-3 text-sm text-[#8A8F96] leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Checklist of actions */}
                <div className="mt-6 space-y-2.5">
                  {currentStage.actions.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#F5F3EE]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#536B54]/30 text-[#6C8A6D] text-[10px] font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Specs Footnote */}
              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-[#2D333B] pt-4 text-center">
                {currentStage.specs.map((sp, idx) => (
                  <div key={idx} className="rounded-lg bg-[#171A1D] p-2 border border-[#2D333B]">
                    <div className="font-mono text-[9px] uppercase text-[#8A8F96]">{sp.label}</div>
                    <div className="font-mono text-xs font-bold text-[#F5F3EE] mt-0.5">{sp.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
