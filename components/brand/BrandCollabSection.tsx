"use client";

import React from "react";
import { Briefcase, Building2, Compass, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BrandCollabSection() {
  const journeySteps = [
    { step: "01", title: "PACK", desc: "Safari 42L chassis organizes your clothing, tech & sleep capsule." },
    { step: "02", title: "TRAVEL", desc: "Carry-on compliant across trains, flights, buses, and motorbikes." },
    { step: "03", title: "DISCOVER", desc: "OYO app geo-locates approved Nomad Zone partner campsites." },
    { step: "04", title: "RESERVE", desc: "Lock in guaranteed pitch with verified washrooms & security." },
    { step: "05", title: "SET UP", desc: "Rapid 60-second shelter detachment and toolless frame pitch." },
    { step: "06", title: "STAY", desc: "Sleep safely under stars with access to sanitized OYO amenities." },
  ];

  return (
    <section id="brand" className="relative w-full border-b border-[#2D333B] bg-[#171A1D] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8292F]/40 bg-[#D8292F]/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#EE2E35]">
            Strategic Brand Synergy
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl md:text-5xl leading-tight">
            “Safari powers the journey. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8292F] to-[#EE2E35]">
              OYO connects the stay.”
            </span>
          </h2>
          <p className="mt-4 text-base text-[#8A8F96]">
            A symbiosis of legacy Indian luggage manufacturing mastery with India&apos;s largest distributed hospitality network.
          </p>
        </div>

        {/* Brand Capability Split Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Safari Card */}
          <div className="rounded-3xl border border-[#2D333B] bg-[#121417] p-8 relative flex flex-col justify-between tech-bracket">
            <div>
              <div className="flex items-center justify-between border-b border-[#2D333B] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8292F]/20 text-[#D8292F]">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F96]">Hard Goods Expertise</span>
                    <h3 className="text-xl font-black text-[#F5F3EE]">SAFARI LUGGAGE</h3>
                  </div>
                </div>
                <span className="rounded bg-[#D8292F]/10 px-2.5 py-1 font-mono text-[10px] font-bold text-[#EE2E35]">
                  Hardware Pillar
                </span>
              </div>

              <p className="text-sm text-[#8A8F96] leading-relaxed mb-6">
                Safari provides over four decades of consumer luggage durability engineering, fabric testing, ergonomics, and high-volume manufacturing capabilities across South Asia.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-2.5 text-[#F5F3EE]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D8292F]/20 text-[#EE2E35] font-bold mt-0.5">✓</span>
                  <span>Travel bags and high-tensile outdoor textile engineering</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#F5F3EE]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D8292F]/20 text-[#EE2E35] font-bold mt-0.5">✓</span>
                  <span>CAD modeling, rapid prototyping & structural load optimization</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#F5F3EE]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D8292F]/20 text-[#EE2E35] font-bold mt-0.5">✓</span>
                  <span>Storage compartments, weather sealing & luggage accessories</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#2D333B] pt-4 font-mono text-[11px] text-[#8A8F96]">
              CONTRIBUTION: PHYSICAL NOMAD CHASSIS & INTEGRATED TENT POD
            </div>
          </div>

          {/* OYO Card */}
          <div className="rounded-3xl border border-[#2D333B] bg-[#121417] p-8 relative flex flex-col justify-between tech-bracket">
            <div>
              <div className="flex items-center justify-between border-b border-[#2D333B] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EE2E35]/20 text-[#EE2E35]">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8A8F96]">Hospitality Network</span>
                    <h3 className="text-xl font-black text-[#F5F3EE]">OYO ROOMS</h3>
                  </div>
                </div>
                <span className="rounded bg-[#EE2E35]/10 px-2.5 py-1 font-mono text-[10px] font-bold text-[#EE2E35]">
                  Platform Pillar
                </span>
              </div>

              <p className="text-sm text-[#8A8F96] leading-relaxed mb-6">
                OYO contributes its digital marketplace technology, app discovery architecture, and nationwide footprint of partner hotel lawns, campsites, and rural retreats.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-2.5 text-[#F5F3EE]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EE2E35]/20 text-[#EE2E35] font-bold mt-0.5">✓</span>
                  <span>Digital campsite pitch discovery, real-time availability & mobile booking</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#F5F3EE]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EE2E35]/20 text-[#EE2E35] font-bold mt-0.5">✓</span>
                  <span>Standardized hygiene audit protocol for shared washrooms & security</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#F5F3EE]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EE2E35]/20 text-[#EE2E35] font-bold mt-0.5">✓</span>
                  <span>Direct distribution to millions of domestic budget & weekend travellers</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#2D333B] pt-4 font-mono text-[11px] text-[#8A8F96]">
              CONTRIBUTION: DIGITAL BOOKING SUITE & OYO NOMAD ZONES NETWORK
            </div>
          </div>
        </div>

        {/* Customer Journey Flow */}
        <div className="mt-16 rounded-3xl border border-[#2D333B] bg-[#121417] p-8">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#EE2E35] mb-2">
            INTEGRATED CUSTOMER JOURNEY
          </div>
          <h3 className="text-2xl font-bold text-[#F5F3EE]">
            From Home to Campsite: The Frictionless Nomad Experience
          </h3>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
            {journeySteps.map((st, i) => (
              <div key={i} className="flex flex-col rounded-xl border border-[#2D333B] bg-[#171A1D] p-4 text-left relative">
                <span className="font-mono text-xs font-extrabold text-[#D8292F]">{st.step}</span>
                <span className="mt-2 text-sm font-bold text-[#F5F3EE]">{st.title}</span>
                <p className="mt-1 text-[11px] text-[#8A8F96] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#2D333B] pt-4 text-[11px] font-mono text-[#8A8F96]">
            <span>* CONCEPTUAL PARTNERSHIP MODEL PROPOSED FOR FORMULA UNICORN</span>
            <span className="text-[#6C8A6D]">MUTUALLY BENEFICIAL VALUE FLYWHEEL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
