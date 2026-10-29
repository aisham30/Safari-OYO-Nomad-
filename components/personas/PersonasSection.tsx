"use client";

import React from "react";
import { GraduationCap, Compass, Car, Music2, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

interface Persona {
  id: string;
  title: string;
  tagline: string;
  icon: any;
  accentColor: string;
  useCase: string;
  challenge: string;
  appeal: string;
  barrier: string;
}

const PERSONAS: Persona[] = [
  {
    id: "college",
    title: "College Backpacker",
    tagline: "High freedom, strictly limited budget.",
    icon: GraduationCap,
    accentColor: "#D8292F",
    useCase: "Budget semester breaks to Himachal, Rishikesh, or Goa via sleeper bus and shared taxis.",
    challenge: "Peak holiday season hotel surges priced at ₹2,500+/night exceed student monthly allowances; hostels frequently fully booked.",
    appeal: "One-time equipment purchase that unlocks guaranteed ₹600–₹800 Nomad pitch stays with safe showers.",
    barrier: "Initial upfront product cost (₹6k+) may require parental sponsorship or seasonal rental options.",
  },
  {
    id: "solo",
    title: "Solo Adventure Trekker",
    tagline: "Agile, self-reliant explorer seeking quiet trailheads.",
    icon: Compass,
    accentColor: "#536B54",
    useCase: "Western Ghats weekend treks, Himalayan valley crossings, and spontaneous bikepacking journeys.",
    challenge: "Traditional tents are bulky and awkward to carry on public transit; non-standard pitches lack security and potable water.",
    appeal: "Unified aerodynamic carry chassis designed by Safari with toolless sub-60 second rapid pitch.",
    barrier: "Will demand proven wind/rain performance before trusting equipment in wilderness weather.",
  },
  {
    id: "roadtripper",
    title: "Weekend Road-Tripper",
    tagline: "Spontaneous escape from metro congestion.",
    icon: Car,
    accentColor: "#EE2E35",
    useCase: "Drive out from Bengaluru, Mumbai, or Delhi on Friday evening toward scenic lake or forest perimeters.",
    challenge: "Rigid hotel check-in times and overpriced tourist resorts require rigid weeks-in-advance booking.",
    appeal: "Keep Nomad in car trunk permanently; pull into any participating OYO Nomad Zone without prior reservations.",
    barrier: "May prefer conventional hotel bed comfort if sleeping mat ergonomics are not exceptionally plush.",
  },
  {
    id: "festival",
    title: "Festival & Outdoor Event Traveller",
    tagline: "Immersive culture & music attendee.",
    icon: Music2,
    accentColor: "#E5DEC9",
    useCase: "Multi-day events like Ziro Music Festival, Magnetic Fields, Sunburn, or regional cultural melas.",
    challenge: "Absence of nearby hotel rooms forces exorbitant cab commutes or overcrowded unlicensed tent clusters.",
    appeal: "Own personal, sanitized, lockable sleeping space parked right inside authorized event Nomad Zones.",
    barrier: "Infrequent use (1-2 events/year) may cause reluctance to purchase outright rather than rent on-site.",
  },
];

export default function PersonasSection() {
  return (
    <section id="personas" className="relative w-full border-b border-[#2D333B] bg-[#171A1D] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#536B54]/40 bg-[#536B54]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#6C8A6D]">
              Target Market Segmentation
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl">
              Customer Personas & Problem-Solution Fit
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#8A8F96]">
              Detailed qualitative analysis of the four primary domestic user archetypes in India whose travel pain points are resolved by portable modular shelter.
            </p>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 flex items-center gap-2 text-xs font-mono text-amber-400">
            <AlertCircle size={15} />
            <span>Demand elasticity to be validated via pilot landing page</span>
          </div>
        </div>

        {/* 4 Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="rounded-3xl border border-[#2D333B] bg-[#121417] p-6 flex flex-col justify-between transition-all hover:border-[#8A8F96] hover:bg-[#15191C]"
              >
                <div>
                  {/* Persona Header */}
                  <div className="flex items-center justify-between border-b border-[#2D333B] pb-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${p.accentColor}20`, color: p.accentColor }}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] uppercase text-[#8A8F96]">
                      Archetype #{p.id.slice(0, 3)}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#F5F3EE]">{p.title}</h3>
                  <p className="mt-1 font-mono text-xs text-[#8A8F96] italic">{p.tagline}</p>

                  <div className="mt-5 space-y-4 text-xs">
                    {/* Use Case */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#EE2E35] font-bold">
                        TRAVEL USE CASE
                      </span>
                      <p className="mt-0.5 text-[#8A8F96] leading-relaxed">{p.useCase}</p>
                    </div>

                    {/* Accommodation Challenge */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                        PAIN POINT / CHALLENGE
                      </span>
                      <p className="mt-0.5 text-[#8A8F96] leading-relaxed">{p.challenge}</p>
                    </div>

                    {/* Appeal */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C8A6D] font-bold">
                        WHY NOMAD APPEALS
                      </span>
                      <p className="mt-0.5 text-[#F5F3EE] leading-relaxed">{p.appeal}</p>
                    </div>

                    {/* Barrier */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#D8292F] font-bold">
                        POTENTIAL PURCHASE BARRIER
                      </span>
                      <p className="mt-0.5 text-[#8A8F96] leading-relaxed">{p.barrier}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-[#2D333B] pt-3 text-[10px] font-mono text-[#8A8F96]">
                  QUALITATIVE HYPOTHESIS
                </div>
              </div>
            );
          })}
        </div>

        {/* Validation Note */}
        <div className="mt-10 rounded-2xl border border-[#2D333B] bg-[#1E2227]/60 p-4 text-xs text-[#8A8F96] flex items-start gap-3">
          <AlertCircle size={18} className="text-[#EE2E35] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#F5F3EE]">Customer Research Disclosure:</strong> These user personas reflect qualitative problem-interview hypotheses compiled for the Formula Unicorn startup pitch. Quantitative conversion rates, price willingness-to-pay thresholds, and repeat campsite booking frequency require empirical validation through pre-order waitlist campaigns.
          </div>
        </div>
      </div>
    </section>
  );
}
