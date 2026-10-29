"use client";

import React from "react";
import { AlertCircle, CheckCircle2, Clock, HelpCircle, Shield, Award } from "lucide-react";

interface SpecItem {
  category: string;
  label: string;
  value: string;
  status: "Target" | "Proposed" | "To be tested";
  notes: string;
}

const SPECIFICATIONS: SpecItem[] = [
  {
    category: "Operational Scope",
    label: "Intended Use",
    value: "Short outdoor trips & approved camping locations (OYO Nomad Zones)",
    status: "Proposed",
    notes: "Designed specifically for managed campsite perimeters rather than extreme mountaineering expeditions.",
  },
  {
    category: "Physical Architecture",
    label: "Occupancy Capacity",
    value: "1 Person",
    status: "Target",
    notes: "Optimized for single adventurer or backpacker with gear storage vestibule.",
  },
  {
    category: "Physical Architecture",
    label: "Form Factor Design",
    value: "Backpack with detachable modular shelter",
    status: "Proposed",
    notes: "Safari carry chassis with lower quick-release docking station.",
  },
  {
    category: "Cargo & Payload",
    label: "Internal Storage",
    value: "Travel essentials + dedicated optional sleeping kit",
    status: "Proposed",
    notes: "Main volume for clothing and daily accessories; laptop compartment isolated.",
  },
  {
    category: "Material Science",
    label: "Fabric Construction",
    value: "Lightweight, durable, weather-resistant textile construction",
    status: "Proposed",
    notes: "Candidate blends include 420D ballistic Cordura for pack and 20D ripstop for canopy.",
  },
  {
    category: "Structural Support",
    label: "Frame System",
    value: "Lightweight foldable supports",
    status: "Proposed",
    notes: "Pre-bent aluminum alloy shock-corded pole sections that stow flush in side holsters.",
  },
  {
    category: "Human Factors & Assembly",
    label: "Deployment & Setup",
    value: "To be validated through prototype testing",
    status: "To be tested",
    notes: "Target benchmark is single-operator setup under 90 seconds without auxiliary tools.",
  },
  {
    category: "Physical Metrics",
    label: "Packed Weight",
    value: "Not yet validated",
    status: "To be tested",
    notes: "Targeting sub-3.8kg combined baseline weight subject to material sample selection.",
  },
  {
    category: "Physical Metrics",
    label: "Packed Dimensions",
    value: "Not yet validated",
    status: "To be tested",
    notes: "Sized to comply with standard domestic overhead airline carry-on bins.",
  },
  {
    category: "Environmental Protection",
    label: "Weather Resistance",
    value: "Requires hydrostatic & wind testing",
    status: "To be tested",
    notes: "Hydrostatic head and wind shear testing to be conducted in certified testing lab.",
  },
  {
    category: "Commercial Viability",
    label: "Target Retail Price",
    value: "Proposed ₹5,999 – ₹10,999",
    status: "Proposed",
    notes: "Tiered pricing hypothesis depending on included sleep-kit accessories; subject to cost validation.",
  },
];

export default function SpecsPanel() {
  const getBadgeStyle = (status: SpecItem["status"]) => {
    switch (status) {
      case "Proposed":
        return "bg-[#D8292F]/15 text-[#EE2E35] border-[#D8292F]/40";
      case "Target":
        return "bg-[#536B54]/20 text-[#6C8A6D] border-[#536B54]/40";
      case "To be tested":
        return "bg-amber-500/15 text-amber-400 border-amber-500/40";
      default:
        return "bg-gray-800 text-gray-300 border-gray-700";
    }
  };

  return (
    <section id="specs" className="relative w-full border-b border-[#2D333B] bg-[#121417] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#536B54]/40 bg-[#536B54]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#6C8A6D]">
              <Shield size={13} />
              Concept Transparency Protocol
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl">
              Technical Specification Matrix
            </h2>
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-[#8A8F96]">
              Honest industrial design documentation for Formula Unicorn evaluators. All specifications are rigorously classified by prototype maturity stage.
            </p>
          </div>

          {/* Status Legend */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="rounded-md border border-[#D8292F]/40 bg-[#D8292F]/10 px-2.5 py-1 text-[#EE2E35]">
              Proposed (Design Intent)
            </span>
            <span className="rounded-md border border-[#536B54]/40 bg-[#536B54]/10 px-2.5 py-1 text-[#6C8A6D]">
              Target (Benchmark)
            </span>
            <span className="rounded-md border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-amber-400">
              To be tested (Pending Lab)
            </span>
          </div>
        </div>

        {/* Notice Card */}
        <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed text-[#8A8F96]">
            <span className="font-bold text-[#F5F3EE]">Prototype Disclosure:</span> OYO Nomad is currently an industrial design concept and prototype study. In compliance with strict engineering ethics, theoretical specifications are not represented as certified commercial ratings. Physical thermal resistance, wind load ratings, and hydrostatic head ratings require third-party physical lab verification.
          </div>
        </div>

        {/* Specifications Table */}
        <div className="overflow-hidden rounded-2xl border border-[#2D333B] bg-[#171A1D] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead className="border-b border-[#2D333B] bg-[#1E2227] font-mono text-[11px] uppercase tracking-wider text-[#8A8F96]">
                <tr>
                  <th scope="col" className="px-6 py-4">Parameter</th>
                  <th scope="col" className="px-6 py-4">Specification / Value</th>
                  <th scope="col" className="px-6 py-4">Verification Status</th>
                  <th scope="col" className="px-6 py-4 hidden md:table-cell">Engineering Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D333B]">
                {SPECIFICATIONS.map((spec, idx) => (
                  <tr key={idx} className="transition hover:bg-[#1E2227]/40">
                    <td className="px-6 py-4 font-semibold text-[#F5F3EE]">
                      <div>{spec.label}</div>
                      <div className="font-mono text-[10px] text-[#8A8F96]">{spec.category}</div>
                    </td>
                    <td className="px-6 py-4 font-mono font-medium text-[#F5F3EE]">
                      {spec.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 font-mono text-[10px] uppercase font-bold tracking-wider ${getBadgeStyle(spec.status)}`}>
                        {spec.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-[#8A8F96] leading-relaxed hidden md:table-cell">
                      {spec.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
