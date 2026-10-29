"use client";

import React from "react";
import { ShoppingBag, Luggage, MapPin, Smartphone, KeyRound, Tent, ArrowRightCircle } from "lucide-react";

interface TimelineStep {
  num: string;
  title: string;
  subtitle: string;
  icon: any;
  actor: "Consumer" | "Platform" | "Hardware";
  desc: string;
}

const STEPS: TimelineStep[] = [
  {
    num: "01",
    title: "Acquire Nomad System",
    subtitle: "Direct or Safari Flagship",
    icon: ShoppingBag,
    actor: "Consumer",
    desc: "Customer selects Nomad Core (42L pack + integrated shelter pod) and customizes optional Sleep Kit accessories.",
  },
  {
    num: "02",
    title: "Pack Essentials",
    subtitle: "Clamshell Organization",
    icon: Luggage,
    actor: "Hardware",
    desc: "Load clothing, trekking boots, and 16\" laptop. Lower shelter pod remains independent and balanced at base.",
  },
  {
    num: "03",
    title: "Discover Nomad Zone",
    subtitle: "OYO App Geolocation",
    icon: MapPin,
    actor: "Platform",
    desc: "Open OYO mobile app to explore verified partner outdoor pitches across mountains, lakesides, and forests.",
  },
  {
    num: "04",
    title: "Reserve Verified Pitch",
    subtitle: "Instant Mobile Booking",
    icon: Smartphone,
    actor: "Platform",
    desc: "Guaranteed 3m × 3m flat ground pitch with transparent upfront fees, clean washroom access, and host contact.",
  },
  {
    num: "05",
    title: "Arrive & Check In",
    subtitle: "QR Security Clearance",
    icon: KeyRound,
    actor: "Consumer",
    desc: "Present digital QR code at campsite security gate. Receive assigned pitch marker, emergency card & facility tour.",
  },
  {
    num: "06",
    title: "Deploy 60-Sec Shelter",
    subtitle: "Toolless Unfolding",
    icon: Tent,
    actor: "Hardware",
    desc: "Unclip lower capsule, snap shock-corded aluminum arch frame into corner eyelets, and anchor guy-lines.",
  },
  {
    num: "07",
    title: "Pack Down & Move On",
    subtitle: "Leave No Trace",
    icon: ArrowRightCircle,
    actor: "Consumer",
    desc: "Fold canopy back into cylindrical pod in under 90 seconds, dock to Safari backpack, and continue transit onward.",
  },
];

export default function JourneyTimeline() {
  return (
    <section id="journey" className="relative w-full border-b border-[#2D333B] bg-[#121417] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EE2E35]/30 bg-[#EE2E35]/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#EE2E35]">
            End-To-End Experience
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl md:text-5xl">
            The 7-Step Nomad Lifecycle
          </h2>
          <p className="mt-3 text-base text-[#8A8F96]">
            How consumer hardware and digital hospitality unite across every leg of an adventurous journey.
          </p>
        </div>

        {/* Timeline Horizontal / Stacked Grid */}
        <div className="relative">
          {/* Connector Line behind steps on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#D8292F] via-[#EE2E35] to-[#536B54] -translate-y-6 z-0 opacity-40"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="rounded-2xl border border-[#2D333B] bg-[#171A1D] p-4 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-[#8A8F96] shadow-lg"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#EE2E35] bg-[#EE2E35]/15 rounded px-2 py-0.5">
                        {s.num}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E2227] text-[#F5F3EE] border border-[#2D333B]">
                        <Icon size={16} />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-[#F5F3EE] leading-tight">
                      {s.title}
                    </h4>
                    <p className="font-mono text-[10px] text-[#8A8F96] mt-0.5">{s.subtitle}</p>

                    <p className="mt-3 text-[11px] leading-relaxed text-[#8A8F96]">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-[#2D333B] pt-2 text-[9px] font-mono uppercase text-[#8A8F96]">
                    ACTOR: <span className="text-[#F5F3EE]">{s.actor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
