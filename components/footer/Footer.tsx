"use client";

import React from "react";
import { ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[#2D333B] bg-[#0F1113] py-12 text-[#8A8F96]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#2D333B]">
          {/* Brand Lockup */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-black text-[#D8292F]">SAFARI</span>
              <span className="text-[#8A8F96]">×</span>
              <span className="font-mono text-sm font-black text-[#EE2E35]">OYO</span>
              <span className="text-sm font-black text-[#F5F3EE]">NOMAD</span>
            </div>
            <div className="mt-1 font-mono text-xs tracking-widest text-[#F5F3EE] uppercase font-bold">
              “CARRY YOUR STAY.”
            </div>
            <p className="mt-1 text-xs text-[#8A8F96] max-w-md">
              A conceptual portable camping system and decentralized outdoor hospitality network prototype.
            </p>
          </div>

          {/* Competition Badge & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="rounded-xl border border-[#2D333B] bg-[#171A1D] px-4 py-2 font-mono text-xs text-[#F5F3EE]">
              Formula Unicorn 2026 // Pitch Prototype
            </div>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2D333B] bg-[#171A1D] text-[#8A8F96] hover:border-[#EE2E35] hover:text-[#EE2E35] transition"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Legal Disclaimers as required by prompt */}
        <div className="mt-8 space-y-2 text-xs leading-relaxed text-[#8A8F96] font-mono">
          <p className="text-[#F5F3EE] font-semibold">
            Concept prototype created for Formula Unicorn.
          </p>
          <p>
            Proposed collaboration concept; not an official announcement by Safari Industries (India) Ltd. or OYO (Oravel Stays Ltd.).
          </p>
          <p className="text-[11px] text-[#52575E]">
            All trademarks, logos, and brand names are the property of their respective owners. Design specifications, performance benchmarks, and financial simulations are speculative hypotheses prepared strictly for academic and startup competition evaluation.
          </p>
        </div>
      </div>
    </footer>
  );
}
