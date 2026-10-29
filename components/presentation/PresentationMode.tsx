"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MonitorPlay, Maximize2, Sparkles, CheckCircle2 } from "lucide-react";

interface Slide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  highlight: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  judgeTakeaway: string;
}

const SLIDES: Slide[] = [
  {
    id: "pitch",
    category: "EXECUTIVE SUMMARY // FORMULA UNICORN",
    title: "OYO Nomad: Carry Your Stay",
    subtitle: "A Portable Camping System by Safari × OYO",
    highlight: "Transforming domestic travel from rigid hotel dependency into flexible outdoor exploration.",
    bullets: [
      "Carry-on compliant travel backpack with an integrated quick-release 1-person tent pod.",
      "Hardware engineered by Safari (textiles, ergonomics, durability, manufacturing).",
      "Hospitality network enabled by OYO (digital pitch discovery, verified washrooms, 24/7 security).",
      "Solves seasonal hotel price gouging for millions of budget backpackers and solo trekkers.",
    ],
    metrics: [
      { label: "Target Retail Price", value: "₹5,999 – ₹10,999" },
      { label: "Est. Deployment Time", value: "< 90 Seconds" },
      { label: "Target Capacity", value: "1 Person + 42L Pack" },
    ],
    judgeTakeaway: "Clear hardware-software synergy creating a defensible moat neither brand could achieve alone.",
  },
  {
    id: "3d",
    category: "INDUSTRIAL DESIGN & PROTOTYPE",
    title: "Mechanical Modular Architecture",
    subtitle: "Three Discrete Operational States",
    highlight: "Seamless transition from aerodynamic transit chassis to grounded weatherproof shelter.",
    bullets: [
      "STATE A (PACK): 42L Cordura nylon backpack with isolated laptop compartment and base tent docking bay.",
      "STATE B (TRANSFORM): Quick-release acetal clips disengage capsule; shock-corded aluminum frame auto-seats.",
      "STATE C (SHELTER): Self-supporting geodesic bivy with high-wall bathtub floor and insect-proof mesh vestibule.",
      "Zero external tools required; backpack functions as internal bedside gear locker.",
    ],
    metrics: [
      { label: "Pack Volume", value: "42 Liters" },
      { label: "Frame Material", value: "7001-T6 Aluminum" },
      { label: "Canopy Textile", value: "20D Ripstop Nylon" },
    ],
    judgeTakeaway: "Feasible mechanical packaging respecting real-world human factors and airline overhead carry-on limits.",
  },
  {
    id: "zones",
    category: "HOSPITALITY INFRASTRUCTURE",
    title: "OYO Nomad Zones Blueprint",
    subtitle: "Monetizing Idle Outdoor Acreage",
    highlight: "Standardized 1-acre campsite specification for partner resorts and rural landholders.",
    bullets: [
      "Turns unused lawn, estate, or lakeside perimeters into compliant, serviced campsite pitches.",
      "OYO Standard: guaranteed clean washrooms, UV drinking water, perimeter lighting, and on-site warden.",
      "Instant mobile QR check-in and cashless reservation flow inside the primary OYO application.",
      "Expands OYO accommodation capacity by 30% during peak festivals without constructing brick-and-mortar hotels.",
    ],
    metrics: [
      { label: "Pitch Footprint", value: "3m × 3m Designated" },
      { label: "Est. Nightly Pitch Rate", value: "₹699 – ₹999" },
      { label: "Standardized Amenities", value: "9 Audited Facilities" },
    ],
    judgeTakeaway: "Asset-light network expansion leveraging existing land partners with high ROI per square foot.",
  },
  {
    id: "business",
    category: "UNIT ECONOMICS & FINANCIAL MODEL",
    title: "Sustainable Triple-Revenue Engine",
    subtitle: "Hardware Margin + Accessories + Platform Commission",
    highlight: "A balanced financial structure generating high upfront contribution and recurring digital transaction fees.",
    bullets: [
      "Stream 1: Hardware sales (₹7,999 nominal price) yield ~44% gross margin (₹3,499 contribution/unit).",
      "Stream 2: High-margin Nomad Sleep Kit and weather accessories sold at ₹999 – ₹2,499.",
      "Stream 3: 15%–20% marketplace take-rate on campsite pitch bookings and local experiential activities.",
      "Year 1 Pilot Target: 5,000 units sold = ₹1.75 Cr gross contribution before fixed marketing overheads.",
    ],
    metrics: [
      { label: "Gross Margin", value: "~44% Target" },
      { label: "Take-Rate Commission", value: "15% – 20%" },
      { label: "Year 1 Target Contribution", value: "₹1.75 Cr" },
    ],
    judgeTakeaway: "Viable unit economics capable of self-funding initial tooling amortization within the first production run.",
  },
  {
    id: "roadmap",
    category: "EXECUTION & VALIDATION PROTOCOL",
    title: "Roadmap to Commercialization",
    subtitle: "Laboratory Testing to Regional Launch",
    highlight: "Disciplined engineering milestones separating concept prototyping from commercial deployment.",
    bullets: [
      "Phase 1: Fabric hydrostatic head (waterproof) testing and wind tunnel aerodynamic validation in accredited textile labs.",
      "Phase 2: Pilot landing page pre-order waitlist to measure customer demand elasticity across 4 core personas.",
      "Phase 3: 50-unit prototype beta test at 3 pilot OYO Nomad Zones (Parvati Valley, Pawna Lake, Coorg).",
      "Phase 4: Commercial launch timed with national festival season.",
    ],
    metrics: [
      { label: "Prototype Stage", value: "TRL-4 (Lab Proof)" },
      { label: "Pilot Zones", value: "3 Locations" },
      { label: "Beta Test Cohort", value: "50 Solo Travellers" },
    ],
    judgeTakeaway: "Intellectually honest presentation that acknowledges testing requirements while demonstrating rapid path to market.",
  },
];

interface PresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PresentationMode({ isOpen, onClose }: PresentationModeProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        setSlideIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowLeft") {
        setSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slide = SLIDES[slideIndex];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0F1113] text-[#F5F3EE] p-6 sm:p-12 overflow-y-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#2D333B] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#D8292F]">SAFARI × OYO</span>
          <span className="text-xs text-[#8A8F96]">•</span>
          <span className="text-sm font-extrabold tracking-wider text-[#F5F3EE]">
            NOMAD PITCH DECK // FORMULA UNICORN
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#8A8F96]">
            SLIDE {slideIndex + 1} OF {SLIDES.length}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-lg border border-[#2D333B] bg-[#1E2227] px-3 py-1.5 font-mono text-xs text-[#F5F3EE] hover:bg-[#EE2E35] transition"
          >
            <X size={14} />
            <span>Exit Pitch Mode</span>
          </button>
        </div>
      </div>

      {/* Main Slide Body */}
      <div className="my-auto py-8 max-w-5xl mx-auto w-full">
        <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#EE2E35] mb-2">
          {slide.category}
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F5F3EE] tracking-tight">
          {slide.title}
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#8A8F96] mt-1">
          {slide.subtitle}
        </h3>

        {/* Highlight Callout */}
        <div className="mt-6 rounded-2xl border border-[#EE2E35]/40 bg-[#1E2227]/90 p-5 font-sans text-base sm:text-lg font-medium text-[#F5F3EE] shadow-glow-red">
          “{slide.highlight}”
        </div>

        {/* Two Column Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Key Argument Bullets */}
          <div className="md:col-span-7 space-y-3">
            {slide.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#F5F3EE] leading-relaxed">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EE2E35] text-white text-xs font-bold mt-1">
                  ✓
                </span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* Key Metrics Strip */}
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-2xl border border-[#2D333B] bg-[#171A1D] p-5 space-y-4">
              <div className="font-mono text-xs font-bold uppercase text-[#8A8F96]">
                KEY VALIDATION METRICS
              </div>
              {slide.metrics.map((m, idx) => (
                <div key={idx} className="border-t border-[#2D333B] pt-2 flex justify-between items-baseline">
                  <span className="text-xs text-[#8A8F96]">{m.label}</span>
                  <span className="font-mono text-base font-extrabold text-[#EE2E35]">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Judge Takeaway Card */}
            <div className="rounded-2xl border border-[#536B54]/60 bg-[#536B54]/15 p-4 text-xs">
              <span className="font-mono text-[10px] font-bold uppercase text-[#6C8A6D]">
                KEY TAKEAWAY FOR JUDGES
              </span>
              <p className="mt-1 font-sans text-[#F5F3EE] font-medium leading-relaxed">
                {slide.judgeTakeaway}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slide Controls */}
      <div className="flex items-center justify-between border-t border-[#2D333B] pt-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setSlideIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                slideIndex === idx ? "w-8 bg-[#EE2E35]" : "w-2 bg-[#2D333B] hover:bg-[#8A8F96]"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSlideIndex((prev) => Math.max(0, prev - 1))}
            disabled={slideIndex === 0}
            className="flex items-center gap-1.5 rounded-xl border border-[#2D333B] bg-[#1E2227] px-4 py-2 text-[#F5F3EE] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#252B32] transition"
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <button
            onClick={() => setSlideIndex((prev) => Math.min(SLIDES.length - 1, prev + 1))}
            disabled={slideIndex === SLIDES.length - 1}
            className="flex items-center gap-1.5 rounded-xl bg-[#EE2E35] px-5 py-2 font-bold text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D8292F] transition shadow-glow-red"
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
