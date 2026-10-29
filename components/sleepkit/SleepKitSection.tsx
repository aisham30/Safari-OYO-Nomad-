"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle, PlusCircle, Sparkles, Shield, Info } from "lucide-react";

interface SleepItem {
  id: string;
  name: string;
  type: "Included in Sleep Kit" | "Optional Add-On" | "Modular Extra";
  status: "included" | "optional";
  purpose: string;
  weightTarget: string;
  materials: string;
  packDimensionTarget: string;
  fitsInsidePack: "Hypothesized — Pending Lab Measurement" | "External Webbing Mount";
  description: string;
}

const SLEEP_ITEMS: SleepItem[] = [
  {
    id: "mat",
    name: "Compact Self-Inflating Sleeping Mat",
    type: "Included in Sleep Kit",
    status: "included",
    purpose: "Thermal insulation and cushioned barrier between sleeper and ground cold.",
    weightTarget: "~480g target",
    materials: "30D diamond ripstop polyester + open-cell polyurethane foam core",
    packDimensionTarget: "24cm × 9cm cylinder (target)",
    fitsInsidePack: "Hypothesized — Pending Lab Measurement",
    description: "Multi-chamber design with an estimated R-value of 2.6 suitable for 3-season camping. Rapid one-way valve allows inflation in 8 to 10 breaths.",
  },
  {
    id: "bag",
    name: "Ultra-Packable Sleeping Quilt / Bag",
    type: "Included in Sleep Kit",
    status: "included",
    purpose: "Body warmth retention rated for 10°C to 18°C ambient temperate conditions.",
    weightTarget: "~620g target",
    materials: "Recycled micro-thermal synthetic clusters + 15D DWR nylon shell",
    packDimensionTarget: "20cm × 12cm compression sack (target)",
    fitsInsidePack: "Hypothesized — Pending Lab Measurement",
    description: "Can be opened flat as a double quilt for warm evenings or zipped into an ergonomic mummy footbox for cool mountain basecamp nights.",
  },
  {
    id: "pillow",
    name: "Ergonomic Inflatable Travel Pillow",
    type: "Included in Sleep Kit",
    status: "included",
    purpose: "Cervical neck support with curved ergonomic cradle.",
    weightTarget: "~75g target",
    materials: "Brushed elastic TPU composite with soft touch synthetic face",
    packDimensionTarget: "Palm-sized fold (10cm × 5cm)",
    fitsInsidePack: "Hypothesized — Pending Lab Measurement",
    description: "Packs smaller than a smartphone. Features non-slip silicone micro-bead bottom grip to lock onto sleeping mat.",
  },
  {
    id: "hygiene",
    name: "Compact Nomad Hygiene Pouch",
    type: "Included in Sleep Kit",
    status: "included",
    purpose: "Sanitary organization for shared campsite washrooms at OYO Nomad Zones.",
    weightTarget: "~110g dry",
    materials: "Antimicrobial quick-dry silicone nylon with mesh drainage pocket",
    packDimensionTarget: "18cm × 10cm × 4cm pouch",
    fitsInsidePack: "Hypothesized — Pending Lab Measurement",
    description: "Includes quick-dry travel towel, biodegradable multi-use wash bar, dental kit, and silicone hanging strap for campsite hookup.",
  },
  {
    id: "raincover",
    name: "High-Visibility Storm Rain Cover",
    type: "Optional Add-On",
    status: "optional",
    purpose: "Supplementary monsoon and torrential downpour water deflection.",
    weightTarget: "~140g target",
    materials: "70D PU 4000mm seam-taped waterproof polyester",
    packDimensionTarget: "Integrated stash pocket in backpack lid",
    fitsInsidePack: "External Webbing Mount",
    description: "Fluorescent Safari red with 3M Scotchlite reflective graphics for night-time roadside trekking visibility.",
  },
];

export default function SleepKitSection() {
  const [selectedId, setSelectedId] = useState<string>("mat");
  const selectedItem = SLEEP_ITEMS.find((item) => item.id === selectedId) || SLEEP_ITEMS[0];

  return (
    <section id="sleep-kit" className="relative w-full border-b border-[#2D333B] bg-[#121417] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8292F]/30 bg-[#D8292F]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#EE2E35]">
              Modular Accessories
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl">
              Nomad Sleep Kit & Gear Suite
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#8A8F96]">
              A curated suite of micro-footprint sleep and hygiene essentials engineered to fit within the Nomad ecosystem without requiring a secondary duffel.
            </p>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-2 flex items-center gap-2 text-xs font-mono text-amber-400">
            <AlertTriangle size={15} />
            <span>Volume nesting to be confirmed in physical mock-ups</span>
          </div>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Product Selector Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SLEEP_ITEMS.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`group flex flex-col justify-between rounded-2xl border p-5 text-left transition-all ${
                    isSelected
                      ? "border-[#EE2E35] bg-[#1E2227] shadow-glow-red scale-[1.02]"
                      : "border-[#2D333B] bg-[#171A1D] hover:border-[#8A8F96] hover:bg-[#1E2227]/60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                          item.status === "included"
                            ? "bg-[#536B54]/20 text-[#6C8A6D] border border-[#536B54]/40"
                            : "bg-[#EE2E35]/15 text-[#EE2E35] border border-[#EE2E35]/30"
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className="font-mono text-xs text-[#8A8F96]">{item.weightTarget}</span>
                    </div>

                    <h4 className="mt-3 text-base font-bold text-[#F5F3EE] group-hover:text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-xs text-[#8A8F96] line-clamp-2">{item.purpose}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#2D333B] pt-3 font-mono text-[11px]">
                    <span className="text-[#8A8F96]">Pack Vol: {item.packDimensionTarget}</span>
                    <span className={isSelected ? "text-[#EE2E35] font-bold" : "text-[#8A8F96]"}>
                      {isSelected ? "Inspecting" : "Select →"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Specification Card */}
          <div className="lg:col-span-5 rounded-2xl border border-[#2D333B] bg-[#171A1D] p-6 sm:p-8 relative overflow-hidden tech-bracket">
            <div className="flex items-center justify-between border-b border-[#2D333B] pb-4">
              <span className="font-mono text-xs text-[#8A8F96]">ACCESSORY SPECIFICATION SHEET</span>
              <span className={`font-mono text-xs font-bold uppercase ${selectedItem.status === "included" ? "text-[#6C8A6D]" : "text-[#EE2E35]"}`}>
                {selectedItem.type}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#F5F3EE]">{selectedItem.name}</h3>

            <p className="mt-3 text-sm text-[#8A8F96] leading-relaxed">
              {selectedItem.description}
            </p>

            <div className="mt-6 space-y-3 rounded-xl border border-[#2D333B] bg-[#121417] p-4 text-xs font-mono">
              <div className="flex justify-between border-b border-[#2D333B]/50 pb-2">
                <span className="text-[#8A8F96]">PRIMARY PURPOSE:</span>
                <span className="text-[#F5F3EE] text-right font-sans font-medium">{selectedItem.purpose}</span>
              </div>
              <div className="flex justify-between border-b border-[#2D333B]/50 pb-2">
                <span className="text-[#8A8F96]">TARGET WEIGHT:</span>
                <span className="text-[#EE2E35] font-bold">{selectedItem.weightTarget}</span>
              </div>
              <div className="flex justify-between border-b border-[#2D333B]/50 pb-2">
                <span className="text-[#8A8F96]">MATERIALS:</span>
                <span className="text-[#F5F3EE] text-right font-sans">{selectedItem.materials}</span>
              </div>
              <div className="flex justify-between border-b border-[#2D333B]/50 pb-2">
                <span className="text-[#8A8F96]">PACK DIMENSIONS:</span>
                <span className="text-[#F5F3EE]">{selectedItem.packDimensionTarget}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#8A8F96]">BACKPACK NESTING:</span>
                <span className="text-amber-400 font-sans">{selectedItem.fitsInsidePack}</span>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-[#2D333B] bg-[#1E2227]/60 p-3.5 text-xs text-[#8A8F96] flex items-start gap-2.5">
              <Info size={16} className="text-[#EE2E35] shrink-0 mt-0.5" />
              <span>
                <strong>Ethical Engineering Clarification:</strong> While designed as a cohesive bundle, physical internal storage of all sleep components alongside a traveler’s full clothing loadout is an active industrial design objective currently undergoing validation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
