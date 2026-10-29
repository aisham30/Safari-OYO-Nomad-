"use client";

import React, { useState } from "react";
import { Calculator } from "lucide-react";

// Deterministic INR formatter independent of server/client OS locale
const formatINR = (val: number): string => {
  const str = Math.round(val).toString();
  if (str.length <= 3) return str;
  const lastThree = str.substring(str.length - 3);
  const otherNumbers = str.substring(0, str.length - 3);
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
};

export default function BusinessModel() {
  // Dynamic Calculator State with sensible defaults
  const [sellingPrice, setSellingPrice] = useState<number>(7999); // ₹7,999
  const [mfgCost, setMfgCost] = useState<number>(3100); // ₹3,100
  const [distMarketingCost, setDistMarketingCost] = useState<number>(1400); // ₹1,400
  const [unitsSold, setUnitsSold] = useState<number>(5000); // 5,000 units in Year 1

  // Dynamic calculations
  const grossContributionPerUnit = sellingPrice - (mfgCost + distMarketingCost);
  const grossMarginPercent = Math.round((grossContributionPerUnit / sellingPrice) * 100);
  const totalContribution = grossContributionPerUnit * unitsSold;

  return (
    <section id="business-model" className="relative w-full border-b border-[#2D333B] bg-[#121417] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8292F]/30 bg-[#D8292F]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#EE2E35]">
              Commercial Architecture
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl">
              Business Model & Unit Economics
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#8A8F96]">
              A diversified monetization model balancing upfront hardware sales, ongoing modular accessories, and recurring marketplace booking commissions.
            </p>
          </div>

          <div className="font-mono text-xs text-[#8A8F96] bg-[#171A1D] border border-[#2D333B] rounded-xl px-3.5 py-2">
            Target Price Hypothesis: <span className="text-[#EE2E35] font-bold">₹5,999 – ₹10,999</span>
          </div>
        </div>

        {/* 3 Core Revenue Streams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stream 1 */}
          <div className="rounded-2xl border border-[#2D333B] bg-[#171A1D] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#D8292F]">STREAM 01</span>
                <span className="rounded bg-[#D8292F]/10 px-2 py-0.5 font-mono text-[10px] text-[#EE2E35]">Hardware</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-[#F5F3EE]">Hardware Product Sales</h3>
              <p className="mt-2 text-xs text-[#8A8F96] leading-relaxed">
                Direct-to-consumer and retail sales of the core <strong>OYO Nomad Core</strong> backpack system with tiered versions (Lite 20D vs Heavy-Duty Pro 40D).
              </p>
            </div>
            <div className="mt-6 border-t border-[#2D333B] pt-3 font-mono text-xs text-[#F5F3EE]">
              HYPOTHETICAL TARGET: ₹5,999 – ₹10,999
            </div>
          </div>

          {/* Stream 2 */}
          <div className="rounded-2xl border border-[#2D333B] bg-[#171A1D] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#536B54]">STREAM 02</span>
                <span className="rounded bg-[#536B54]/10 px-2 py-0.5 font-mono text-[10px] text-[#6C8A6D]">Accessories</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-[#F5F3EE]">Modular Accessories & Upgrades</h3>
              <p className="mt-2 text-xs text-[#8A8F96] leading-relaxed">
                Nomad Sleep Kit bundle, high-visibility storm rain covers, replacement pole segments, and seasonal winter canopy liners sold via Safari and OYO app store.
              </p>
            </div>
            <div className="mt-6 border-t border-[#2D333B] pt-3 font-mono text-xs text-[#F5F3EE]">
              HYPOTHETICAL TARGET: ₹999 – ₹2,499
            </div>
          </div>

          {/* Stream 3 */}
          <div className="rounded-2xl border border-[#2D333B] bg-[#171A1D] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#EE2E35]">STREAM 03</span>
                <span className="rounded bg-[#EE2E35]/10 px-2 py-0.5 font-mono text-[10px] text-[#EE2E35]">Marketplace</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-[#F5F3EE]">Nomad Zone Partner Bookings</h3>
              <p className="mt-2 text-xs text-[#8A8F96] leading-relaxed">
                Take-rate commission (projected 15%–20%) on all outdoor pitch reservations, local gear rentals, and curated experiential trekking passes booked through the OYO app.
              </p>
            </div>
            <div className="mt-6 border-t border-[#2D333B] pt-3 font-mono text-xs text-[#F5F3EE]">
              EST. REVENUE SHARE: 15% – 20% / PITCH NIGHT
            </div>
          </div>
        </div>

        {/* Dynamic Financial Scenario Calculator */}
        <div className="rounded-3xl border border-[#2D333B] bg-[#171A1D] p-6 sm:p-10 shadow-2xl relative overflow-hidden tech-bracket">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2D333B] pb-4 mb-8">
            <div className="flex items-center gap-2">
              <Calculator size={20} className="text-[#EE2E35]" />
              <h3 className="text-xl font-bold text-[#F5F3EE]">
                Interactive Unit Economics Calculator
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[#8A8F96]">
              * REAL-TIME SIMULATION OF MARGIN HYPOTHESES (NOT AUDITED FORECASTS)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Selling Price */}
              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-[#8A8F96]">Assumed Retail Selling Price:</span>
                  <span className="font-bold text-[#F5F3EE] text-sm">₹{formatINR(sellingPrice)}</span>
                </div>
                <input
                  type="range"
                  min="5999"
                  max="10999"
                  step="100"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#2D333B] accent-[#EE2E35]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#8A8F96] mt-1">
                  <span>Entry: ₹5,999</span>
                  <span>Mid: ₹7,999</span>
                  <span>Premium: ₹10,999</span>
                </div>
              </div>

              {/* Slider 2: Manufacturing Cost (COGS) */}
              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-[#8A8F96]">Assumed Manufacturing Cost (COGS):</span>
                  <span className="font-bold text-[#F5F3EE] text-sm">₹{formatINR(mfgCost)}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="4500"
                  step="50"
                  value={mfgCost}
                  onChange={(e) => setMfgCost(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#2D333B] accent-[#D8292F]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#8A8F96] mt-1">
                  <span>₹2,000 (Bulk scale)</span>
                  <span>₹3,100 (Nominal prototype target)</span>
                  <span>₹4,500 (Low-volume batch)</span>
                </div>
              </div>

              {/* Slider 3: Distribution & Marketing */}
              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-[#8A8F96]">Estimated Distribution & Marketing per Unit:</span>
                  <span className="font-bold text-[#F5F3EE] text-sm">₹{formatINR(distMarketingCost)}</span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="2500"
                  step="50"
                  value={distMarketingCost}
                  onChange={(e) => setDistMarketingCost(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#2D333B] accent-[#536B54]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#8A8F96] mt-1">
                  <span>₹800 (Organic / OYO in-app)</span>
                  <span>₹1,400 (Omnichannel)</span>
                  <span>₹2,500 (Heavy acquisition)</span>
                </div>
              </div>

              {/* Slider 4: Volume Target */}
              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-[#8A8F96]">Annual Target Units Sold:</span>
                  <span className="font-bold text-[#F5F3EE] text-sm">{formatINR(unitsSold)} units</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={unitsSold}
                  onChange={(e) => setUnitsSold(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#2D333B] accent-amber-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#8A8F96] mt-1">
                  <span>1,000 (Pilot)</span>
                  <span>5,000 (Year 1)</span>
                  <span>25,000 (Scaled roll-out)</span>
                </div>
              </div>
            </div>

            {/* Live Output KPI Dashboard */}
            <div className="lg:col-span-5 rounded-2xl border border-[#EE2E35]/40 bg-[#121417] p-6 space-y-5">
              <div className="font-mono text-xs uppercase tracking-wider text-[#EE2E35] font-bold">
                DYNAMIC FINANCIAL OUTPUT
              </div>

              <div className="rounded-xl border border-[#2D333B] bg-[#171A1D] p-4">
                <div className="font-mono text-[10px] uppercase text-[#8A8F96]">
                  ESTIMATED GROSS CONTRIBUTION / UNIT
                </div>
                <div className="text-3xl font-extrabold text-[#F5F3EE] mt-1">
                  ₹{formatINR(grossContributionPerUnit)}
                </div>
                <div className="mt-1 font-mono text-xs text-[#6C8A6D]">
                  {grossMarginPercent}% Contribution Margin
                </div>
              </div>

              <div className="rounded-xl border border-[#2D333B] bg-[#171A1D] p-4">
                <div className="font-mono text-[10px] uppercase text-[#8A8F96]">
                  TOTAL CONTRIBUTION BEFORE FIXED COSTS
                </div>
                <div className="text-3xl font-extrabold text-[#EE2E35] mt-1">
                  ₹{(totalContribution / 10000000).toFixed(2)} Cr
                </div>
                <div className="mt-1 font-mono text-xs text-[#8A8F96]">
                  (₹{formatINR(totalContribution)} across {formatINR(unitsSold)} units)
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-[10px] text-[#8A8F96] leading-relaxed border-t border-[#2D333B] pt-3">
                <strong>Disclaimer for Judges:</strong> All figures above represent theoretical unit-economics simulations based on initial bill-of-materials estimates. They are hypotheses requiring supplier quotation verification, tooling amortization modeling, and retail margin agreements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
