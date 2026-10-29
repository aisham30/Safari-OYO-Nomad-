"use client";

import React, { useState } from "react";
import { MapPin, Navigation, ShieldAlert, Sparkles, CheckCircle2, Footprints, AlertTriangle } from "lucide-react";

interface ZoneMarker {
  id: number;
  label: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  category: "Lodging" | "Hygiene" | "Safety" | "Community";
  description: string;
  facilities: string[];
}

const MARKERS: ZoneMarker[] = [
  {
    id: 1,
    label: "01",
    name: "Individual Tent Pitches",
    x: 62,
    y: 35,
    category: "Lodging",
    description: "Designated 3m × 3m flat grass/gravel platforms with perimeter ground anchors, low-voltage solar night beacon, and privacy separation hedges.",
    facilities: ["Level compacted soil", "Solar bollard beacon", "Wind deflection shelter"],
  },
  {
    id: 2,
    label: "02",
    name: "Shared Washrooms & Showers",
    x: 32,
    y: 40,
    category: "Hygiene",
    description: "Clean, hygienic, gender-separated sanitary blocks serviced according to OYO commercial hospitality hygiene standards.",
    facilities: ["Hot water geyser", "Touchless sanitizers", "Scheduled 3x daily deep clean"],
  },
  {
    id: 3,
    label: "03",
    name: "Drinking-Water Station",
    x: 48,
    y: 46,
    category: "Hygiene",
    description: "Certified UV-filtered potable drinking water refilling hub designed to reduce single-use plastic water bottles for backpackers.",
    facilities: ["UV + RO multi-stage filtration", "High-flow bottle filling tap", "Drainage sink"],
  },
  {
    id: 4,
    label: "04",
    name: "Perimeter & Pathway Lighting",
    x: 55,
    y: 65,
    category: "Safety",
    description: "Low-glare, dark-sky compliant warm LED bollards ensuring safe navigation between pitch and facilities without light pollution.",
    facilities: ["Motion-activated lighting", "Solar-battery backup", "Ground-level illumination"],
  },
  {
    id: 5,
    label: "05",
    name: "Reception & Check-In Point",
    x: 20,
    y: 75,
    category: "Community",
    description: "Digital QR-code check-in desk staffed by verified site host. Provides physical pitch assignment, emergency contact card, and local trek guides.",
    facilities: ["Instant QR badge scanning", "First-aid locker", "Power bank loan station"],
  },
  {
    id: 6,
    label: "06",
    name: "Waste & Recycling Collection",
    x: 18,
    y: 50,
    category: "Hygiene",
    description: "Segregated organic, recyclable, and dry waste stations reinforcing Leave No Trace outdoor principles across all guests.",
    facilities: ["Color-coded waste bins", "Animal-proof latches", "Compostable waste bin"],
  },
  {
    id: 7,
    label: "07",
    name: "Emergency Access Route",
    x: 82,
    y: 80,
    category: "Safety",
    description: "Unobstructed all-weather vehicle road connecting the campsite directly to the local arterial highway for emergency services.",
    facilities: ["4.5m wide reinforced path", "Direct gate sensor", "Emergency vehicle turnaround"],
  },
  {
    id: 8,
    label: "08",
    name: "Common Rest Area & Charging Cafe",
    x: 42,
    y: 22,
    category: "Community",
    description: "Covered timber pavilion with community tables, solar phone charging stations, campfire pit, and sheltered hangout space.",
    facilities: ["USB fast chargers", "Weather-protected canopy", "Community fire ring"],
  },
  {
    id: 9,
    label: "09",
    name: "24/7 Security Point & Barrier",
    x: 12,
    y: 85,
    category: "Safety",
    description: "Fenced perimeter security outpost monitoring guest entry and exit to ensure peace of mind for solo travellers and trekkers.",
    facilities: ["Trained site warden", "CCTV coverage of access gate", "Emergency distress beacon"],
  },
];

export default function NomadZoneSection() {
  const [selectedMarkerId, setSelectedMarkerId] = useState<number>(1);
  const [guestJourneyMode, setGuestJourneyMode] = useState<boolean>(false);

  const activeMarker = MARKERS.find((m) => m.id === selectedMarkerId) || MARKERS[0];

  return (
    <section id="nomad-zones" className="relative w-full border-b border-[#2D333B] bg-[#171A1D] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#536B54]/40 bg-[#536B54]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#6C8A6D]">
              Hospitality Infrastructure
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl">
              OYO Nomad Zone // Campsite Blueprint
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#8A8F96]">
              A standardized blueprint for partner properties and licensed outdoor campgrounds to convert open acreage into secure, serviced Nomad pitches.
            </p>
          </div>

          {/* Guest Journey Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGuestJourneyMode(!guestJourneyMode)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-bold transition-all ${
                guestJourneyMode
                  ? "bg-[#EE2E35] text-white shadow-glow-red"
                  : "border border-[#2D333B] bg-[#1E2227] text-[#8A8F96] hover:text-[#F5F3EE]"
              }`}
            >
              <Footprints size={15} />
              <span>{guestJourneyMode ? "Guest Journey: ON" : "Toggle Guest Journey Mode"}</span>
            </button>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="mb-8 rounded-xl border border-[#2D333B] bg-[#121417] p-3.5 flex items-center gap-3 text-xs text-[#8A8F96]">
          <AlertTriangle size={16} className="text-[#D8292F] shrink-0" />
          <span>
            <strong>Architectural Concept Disclosure:</strong> This top-down site layout is a proposed model for partner property onboarding, not an active commercial OYO reservation network. Actual partner locations will vary based on municipal zoning and terrain.
          </span>
        </div>

        {/* Map & Inspector Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map */}
          <div className="lg:col-span-8 rounded-3xl border border-[#2D333B] bg-[#121417] p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#2D333B] pb-3 mb-4 text-xs font-mono text-[#8A8F96]">
              <span className="flex items-center gap-1.5 text-[#F5F3EE]">
                <MapPin size={14} className="text-[#EE2E35]" />
                ILLUSTRATIVE 1-ACRE SITE SCHEMATIC
              </span>
              <span>SCALE: 1:500 ARCHITECTURAL</span>
            </div>

            {/* Top-Down Map Canvas */}
            <div className="relative w-full h-[450px] sm:h-[520px] rounded-2xl bg-gradient-to-br from-[#19231B] via-[#171D1A] to-[#141A16] border border-[#2D333B] overflow-hidden">
              {/* Site Topography & Features */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 700" fill="none">
                {/* Site Boundary */}
                <rect x="50" y="40" width="900" height="620" rx="40" stroke="#37483B" strokeWidth="3" strokeDasharray="8 6" />

                {/* Topo Contours */}
                <path d="M60 200 C 300 240, 600 160, 940 220" stroke="#253528" strokeWidth="2" />
                <path d="M60 400 C 400 360, 700 480, 940 430" stroke="#253528" strokeWidth="2" />

                {/* Main Access Road */}
                <path d="M120 660 L 120 540 Q 120 500 200 500 L 800 500 Q 850 500 850 660" stroke="#2D333B" strokeWidth="28" strokeLinecap="round" />
                <path d="M120 660 L 120 540 Q 120 500 200 500 L 800 500 Q 850 500 850 660" stroke="#F5F3EE" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.4" />

                {/* Pedestrian Pathways */}
                <path d="M200 500 Q 320 420 320 280 Q 320 180 420 160 L 620 220" stroke="#3D4A3E" strokeWidth="10" strokeLinecap="round" />

                {/* Pitch Cluster Areas (Illustrative Circles) */}
                {[
                  [580, 220], [640, 210], [700, 230],
                  [590, 280], [660, 270], [720, 290],
                  [620, 340], [680, 330]
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <rect x={cx - 24} y={cy - 24} width="48" height="48" rx="8" fill="#2E3A33" stroke="#536B54" strokeWidth="1.5" />
                    <text x={cx} y={cy + 4} fill="#8A8F96" fontSize="9" fontFamily="monospace" textAnchor="middle">
                      P{i + 1}
                    </text>
                  </g>
                ))}

                {/* Guest Journey Trail Highlight when enabled */}
                {guestJourneyMode && (
                  <g>
                    <path
                      d="M120 600 L 200 520 L 320 400 L 480 320 L 620 250"
                      stroke="#EE2E35"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="6 4"
                      className="animate-pulse"
                    />
                    <text x="360" y="440" fill="#EE2E35" fontSize="12" fontFamily="monospace" fontWeight="bold">
                      GUEST CHECK-IN TO PITCH ROUTE (180m)
                    </text>
                  </g>
                )}
              </svg>

              {/* Numbered Interactive Markers */}
              {MARKERS.map((marker) => {
                const isSelected = selectedMarkerId === marker.id;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setSelectedMarkerId(marker.id)}
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all ${
                      isSelected ? "z-30 scale-125" : "z-20 hover:scale-110"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-black shadow-lg transition-all ${
                        isSelected
                          ? "bg-[#EE2E35] text-white ring-4 ring-[#EE2E35]/40"
                          : "border border-white/20 bg-[#171A1D]/90 text-[#F5F3EE] hover:bg-[#D8292F]"
                      }`}
                    >
                      {marker.label}
                    </span>
                    <span className="pointer-events-none absolute left-9 whitespace-nowrap rounded-md border border-[#2D333B] bg-[#171A1D]/95 px-2 py-1 font-mono text-[10px] text-[#F5F3EE] opacity-0 backdrop-blur group-hover:opacity-100 transition-opacity">
                      {marker.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Legend */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#2D333B] pt-3 text-xs font-mono text-[#8A8F96]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-[#2E3A33] border border-[#536B54]"></span>
                  Tent Pitches
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-[#3D4A3E]"></span>
                  Paved Pathways
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-[#EE2E35]"></span>
                  Active Selection
                </span>
              </div>
              <span className="text-[#EE2E35]">CLICK ANY NUMBERED MARKER TO INSPECT</span>
            </div>
          </div>

          {/* Right Column: Zone Details Drawer */}
          <div className="lg:col-span-4 rounded-3xl border border-[#2D333B] bg-[#121417] p-6 sm:p-8 relative tech-bracket">
            <div className="flex items-center justify-between border-b border-[#2D333B] pb-3">
              <span className="rounded-md bg-[#536B54]/20 border border-[#536B54]/40 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-[#6C8A6D]">
                ZONE CATEGORY: {activeMarker.category}
              </span>
              <span className="font-mono text-xs font-bold text-[#EE2E35]">
                FACILITY #{activeMarker.label}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#F5F3EE]">
              {activeMarker.name}
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-[#8A8F96]">
              {activeMarker.description}
            </p>

            <div className="mt-6 border-t border-[#2D333B] pt-4">
              <h4 className="font-mono text-xs font-bold uppercase text-[#F5F3EE]">
                STANDARDIZED OYO CRITERIA:
              </h4>
              <ul className="mt-2.5 space-y-2 text-xs text-[#8A8F96]">
                {activeMarker.facilities.map((fac, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EE2E35]"></span>
                    <span>{fac}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Navigation to Other Markers */}
            <div className="mt-6 border-t border-[#2D333B] pt-4">
              <span className="font-mono text-[10px] uppercase text-[#8A8F96]">
                ALL SITE MARKERS:
              </span>
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {MARKERS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMarkerId(m.id)}
                    className={`rounded-lg border px-2 py-1 font-mono text-[10px] transition ${
                      selectedMarkerId === m.id
                        ? "border-[#EE2E35] bg-[#EE2E35] text-white font-bold"
                        : "border-[#2D333B] bg-[#171A1D] text-[#8A8F96] hover:text-[#F5F3EE]"
                    }`}
                  >
                    #{m.label} {m.name.split(" ")[0]}
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
