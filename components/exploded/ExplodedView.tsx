"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, ChevronRight, Layers, Sliders } from "lucide-react";

interface ComponentCallout {
  id: number;
  key: string;
  name: string;
  subsystem: "Safari Core" | "Nomad Shelter" | "Accessories";
  material: string;
  role: string;
  status: "CAD Modeled" | "Proposed Material" | "Stress Simulation";
  details: string;
}

const CALLOUTS: ComponentCallout[] = [
  {
    id: 1,
    key: "main",
    name: "Main Storage Compartment",
    subsystem: "Safari Core",
    material: "420D Ballistic Cordura Nylon",
    role: "Internal 30L volume for clothing, footwear, and trekking gear.",
    status: "CAD Modeled",
    details: "Weather-gasketed clamshell zipper opening with dual compression divider panels.",
  },
  {
    id: 2,
    key: "laptop",
    name: "Suspended Laptop Sleeve",
    subsystem: "Safari Core",
    material: "Impact-absorbing EVA foam + microfiber lining",
    role: "Secure 16-inch laptop compartment isolated from direct ground shocks.",
    status: "CAD Modeled",
    details: "Suspended 25mm above backpack base to protect electronic devices during drop impacts.",
  },
  {
    id: 3,
    key: "tent-fabric",
    name: "Tent-Fabric Module",
    subsystem: "Nomad Shelter",
    material: "Proposed 20D Silicone/PU Coated Ripstop Nylon",
    role: "Tensioned outer fly and bivy canopy forming one-person weather shield.",
    status: "Proposed Material",
    details: "Packable sub-1kg technical textile designed to fold into dedicated base cylinder.",
  },
  {
    id: 4,
    key: "poles",
    name: "Foldable Support Poles",
    subsystem: "Nomad Shelter",
    material: "7001-T6 Anodized Aluminium Alloy",
    role: "Collapsible pre-curved shock-cord skeleton providing aerodynamic dome structure.",
    status: "CAD Modeled",
    details: "34cm segment length engineered to nest flush alongside backpack lateral rails.",
  },
  {
    id: 5,
    key: "rain-cover",
    name: "Waterproof Rain Cover",
    subsystem: "Accessories",
    material: "70D Polyester Taffeta with PU 3000mm coating",
    role: "Secondary outer storm shell for torrential transit conditions.",
    status: "Proposed Material",
    details: "Stored in concealed zippered pocket underneath top grab handle.",
  },
  {
    id: 6,
    key: "sleep-kit",
    name: "Sleeping-Kit Compartment",
    subsystem: "Accessories",
    material: "Elasticated abrasion-resistant composite",
    role: "Modular attachment zone for inflatable pad and micro sleeping bag.",
    status: "Proposed Material",
    details: "Mounts to bottom webbing loops without compromising center of gravity.",
  },
  {
    id: 7,
    key: "straps",
    name: "Compression Straps",
    subsystem: "Safari Core",
    material: "High-density nylon webbing with acetal quick-release buckles",
    role: "Dual lateral straps to stabilize internal load and prevent inertia shift.",
    status: "CAD Modeled",
    details: "Double-reinforced box-X stitching rated for high tension cinch cycles.",
  },
  {
    id: 8,
    key: "backpanel",
    name: "Padded Back Panel",
    subsystem: "Safari Core",
    material: "Molded 3D air mesh with central ventilation spine",
    role: "Ensures thermal dissipation and lumbar support during extended hikes.",
    status: "CAD Modeled",
    details: "Anatomically mapped airflow channels prevent sweat buildup along wearer's spine.",
  },
  {
    id: 9,
    key: "shoulder-straps",
    name: "Shoulder Straps & Sternum Harness",
    subsystem: "Safari Core",
    material: "Dual-density foam core with reflective safety piping",
    role: "Distributes pack weight across clavicles and pectoral muscles.",
    status: "CAD Modeled",
    details: "Includes magnetic hydration tube clip and emergency whistle buckle.",
  },
  {
    id: 10,
    key: "ventilation",
    name: "Ventilation & Entry Opening on Tent",
    subsystem: "Nomad Shelter",
    material: "No-See-Um micro-mesh + waterproof coil zipper",
    role: "Cross-breeze airflow to eliminate interior condensation overnight.",
    status: "Proposed Material",
    details: "Structured hooded vents allow air circulation even during rainfall.",
  },
];

export default function ExplodedView() {
  const [selectedId, setSelectedId] = useState<number>(3); // Default to Tent-Fabric Module
  const current = CALLOUTS.find((c) => c.id === selectedId) || CALLOUTS[0];

  return (
    <section id="components" className="relative w-full border-b border-[#2D333B] bg-[#171A1D] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8292F]/30 bg-[#D8292F]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#EE2E35]">
              Engineering Disassembly
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl">
              Exploded Architecture & Bill of Modules
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#8A8F96]">
              Detailed breakdown of the 10 structural subsystems separating the Safari travel chassis from the integrated OYO outdoor shelter components.
            </p>
          </div>
          <div className="font-mono text-xs text-[#8A8F96]">
            SELECT SUBSYSTEM BELOW TO INSPECT SPECS
          </div>
        </div>

        {/* Main Disassembly Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Diagram with Visual Callouts */}
          <div className="lg:col-span-7 rounded-2xl border border-[#2D333B] bg-[#121417] p-6 sm:p-8 relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="pointer-events-none absolute inset-0 tech-grid opacity-30"></div>

            <div className="relative z-10 flex items-center justify-between border-b border-[#2D333B] pb-4 mb-6">
              <div className="font-mono text-xs text-[#8A8F96]">
                ISOMETRIC DISASSEMBLY SCHEMATIC // REV 0.94
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#EE2E35]"></span>
                <span className="font-mono text-xs text-[#F5F3EE]">Active: #{current.id}</span>
              </div>
            </div>

            {/* Illustrative Exploded SVG Representation */}
            <div className="relative h-[420px] w-full flex items-center justify-center">
              <svg viewBox="0 0 600 450" className="w-full h-full" fill="none">
                {/* Connecting Axis Lines */}
                <line x1="300" y1="30" x2="300" y2="420" stroke="#2D333B" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="120" y1="220" x2="480" y2="220" stroke="#2D333B" strokeWidth="1" strokeDasharray="3 3" />

                {/* 1. Main Storage Compartment (Center Upper) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(1)}
                >
                  <rect
                    x="230"
                    y="130"
                    width="140"
                    height="130"
                    rx="16"
                    fill={selectedId === 1 ? "#EE2E35" : "#212529"}
                    stroke={selectedId === 1 ? "#FFFFFF" : "#3D444E"}
                    strokeWidth="2"
                  />
                  <text x="300" y="200" fill="#F5F3EE" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    01 // MAIN COMPARTMENT
                  </text>
                </g>

                {/* 2. Laptop Sleeve (Rear Float) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(2)}
                >
                  <rect
                    x="245"
                    y="50"
                    width="110"
                    height="70"
                    rx="8"
                    fill={selectedId === 2 ? "#EE2E35" : "#1A1D20"}
                    stroke={selectedId === 2 ? "#FFFFFF" : "#3D444E"}
                    strokeWidth="1.5"
                  />
                  <line x1="300" y1="120" x2="300" y2="130" stroke="#EE2E35" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="300" y="90" fill="#F5F3EE" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    02 // LAPTOP SLEEVE
                  </text>
                </g>

                {/* 3. Tent-Fabric Module (Bottom Center Detached) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(3)}
                >
                  <rect
                    x="215"
                    y="310"
                    width="170"
                    height="65"
                    rx="16"
                    fill={selectedId === 3 ? "#EE2E35" : "#2E3A33"}
                    stroke={selectedId === 3 ? "#FFFFFF" : "#536B54"}
                    strokeWidth="2.5"
                  />
                  <line x1="300" y1="260" x2="300" y2="310" stroke="#EE2E35" strokeWidth="2" />
                  <circle cx="300" cy="285" r="4" fill="#EE2E35" />
                  <text x="300" y="348" fill="#F5F3EE" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    03 // TENT FABRIC POD
                  </text>
                </g>

                {/* 4. Foldable Support Poles (Right Lateral) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(4)}
                >
                  <rect
                    x="420"
                    y="120"
                    width="45"
                    height="150"
                    rx="10"
                    fill={selectedId === 4 ? "#EE2E35" : "#1F2327"}
                    stroke={selectedId === 4 ? "#FFFFFF" : "#C5CBD3"}
                    strokeWidth="1.5"
                  />
                  <line x1="435" y1="135" x2="435" y2="255" stroke="#C5CBD3" strokeWidth="3" strokeLinecap="round" />
                  <line x1="450" y1="135" x2="450" y2="255" stroke="#C5CBD3" strokeWidth="3" strokeLinecap="round" />
                  <line x1="370" y1="195" x2="420" y2="195" stroke="#8A8F96" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="442" y="290" fill="#F5F3EE" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    04 // POLES
                  </text>
                </g>

                {/* 5. Waterproof Rain Cover (Top Cap) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(5)}
                >
                  <path
                    d="M230 40 Q 300 15 370 40 L 370 48 Q 300 23 230 48 Z"
                    fill={selectedId === 5 ? "#EE2E35" : "#536B54"}
                    stroke={selectedId === 5 ? "#FFFFFF" : "#6C8A6D"}
                    strokeWidth="1.5"
                  />
                  <text x="300" y="25" fill="#8A8F96" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    05 // RAIN COVER
                  </text>
                </g>

                {/* 6. Sleeping-Kit Compartment (Sub-base) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(6)}
                >
                  <rect
                    x="235"
                    y="390"
                    width="130"
                    height="32"
                    rx="8"
                    fill={selectedId === 6 ? "#EE2E35" : "#1A1D20"}
                    stroke={selectedId === 6 ? "#FFFFFF" : "#3D444E"}
                    strokeWidth="1.5"
                  />
                  <text x="300" y="411" fill="#F5F3EE" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    06 // SLEEP-KIT ZONE
                  </text>
                </g>

                {/* 7. Compression Straps (Left & Right Wings) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(7)}
                >
                  <line x1="210" y1="160" x2="230" y2="160" stroke="#D8292F" strokeWidth="5" />
                  <line x1="210" y1="230" x2="230" y2="230" stroke="#D8292F" strokeWidth="5" />
                  <line x1="370" y1="160" x2="390" y2="160" stroke="#D8292F" strokeWidth="5" />
                  <line x1="370" y1="230" x2="390" y2="230" stroke="#D8292F" strokeWidth="5" />
                  <text x="180" y="165" fill="#EE2E35" fontSize="8" fontFamily="monospace" textAnchor="end">
                    07 // STRAPS
                  </text>
                </g>

                {/* 8. Padded Back Panel (Left Offset) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(8)}
                >
                  <rect
                    x="90"
                    y="140"
                    width="85"
                    height="120"
                    rx="12"
                    fill={selectedId === 8 ? "#EE2E35" : "#1E2227"}
                    stroke={selectedId === 8 ? "#FFFFFF" : "#373E47"}
                    strokeWidth="1.5"
                  />
                  <line x1="175" y1="200" x2="230" y2="200" stroke="#8A8F96" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="132" y="205" fill="#F5F3EE" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    08 // BACK PANEL
                  </text>
                </g>

                {/* 9. Shoulder Straps Harness */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(9)}
                >
                  <path d="M100 120 C 60 150, 60 250, 95 280" stroke={selectedId === 9 ? "#EE2E35" : "#373E47"} strokeWidth="8" strokeLinecap="round" fill="none" />
                  <text x="50" y="210" fill="#8A8F96" fontSize="8" fontFamily="monospace">
                    09 // HARNESS
                  </text>
                </g>

                {/* 10. Ventilation & Entry Flap (Shelter Apex) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedId(10)}
                >
                  <circle cx="410" cy="340" r="14" fill={selectedId === 10 ? "#EE2E35" : "#536B54"} />
                  <line x1="385" y1="340" x2="396" y2="340" stroke="#8A8F96" strokeWidth="1.5" />
                  <text x="440" y="344" fill="#F5F3EE" fontSize="8" fontFamily="monospace">
                    10 // VENT / DOOR
                  </text>
                </g>
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#8A8F96] border-t border-[#2D333B] pt-3">
              <span>● CLICK ANY NUMBERED SUBSYSTEM IN DIAGRAM OR LIST</span>
              <span className="font-mono text-[#D8292F]">ALL 10 MODULES CATALOGUED</span>
            </div>
          </div>

          {/* Right Column: Detailed Specification Inspector */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Active Component Deep Dive Card */}
            <div className="rounded-2xl border border-[#EE2E35]/40 bg-[#1E2227] p-6 shadow-xl relative tech-bracket">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-[#EE2E35]/15 px-2.5 py-1 font-mono text-xs font-bold text-[#EE2E35]">
                  MODULE {String(current.id).padStart(2, "0")} OF 10
                </span>
                <span className="rounded-full border border-[#2D333B] bg-[#171A1D] px-2.5 py-0.5 font-mono text-[10px] text-[#6C8A6D]">
                  {current.status}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#F5F3EE]">
                {current.name}
              </h3>

              <div className="mt-3 flex items-center gap-2 font-mono text-xs text-[#D8292F]">
                <span>PARTNER SYSTEM:</span>
                <span className="text-[#F5F3EE] font-semibold">{current.subsystem}</span>
              </div>

              <div className="mt-4 space-y-3 border-t border-[#2D333B] pt-4 text-xs">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8F96]">
                    SPECIFIED MATERIAL
                  </span>
                  <p className="mt-0.5 font-semibold text-[#F5F3EE]">{current.material}</p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8F96]">
                    FUNCTIONAL ROLE
                  </span>
                  <p className="mt-0.5 text-[#8A8F96] leading-relaxed">{current.role}</p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8F96]">
                    ENGINEERING VERIFICATION NOTES
                  </span>
                  <p className="mt-0.5 text-[#8A8F96] leading-relaxed">{current.details}</p>
                </div>
              </div>
            </div>

            {/* Quick List of All 10 Components */}
            <div className="rounded-2xl border border-[#2D333B] bg-[#121417] p-4">
              <div className="font-mono text-xs font-semibold text-[#8A8F96] px-2 pb-2">
                COMPLETE BILL OF COMPONENTS
              </div>
              <div className="max-h-64 overflow-y-auto space-y-1 pr-1">
                {CALLOUTS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left font-mono text-xs transition ${
                      selectedId === item.id
                        ? "bg-[#EE2E35] text-white font-bold"
                        : "text-[#8A8F96] hover:bg-[#1E2227] hover:text-[#F5F3EE]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="opacity-70">{String(item.id).padStart(2, "0")}.</span>
                      <span className="truncate">{item.name}</span>
                    </div>
                    <ChevronRight size={14} className={selectedId === item.id ? "opacity-100" : "opacity-40"} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
