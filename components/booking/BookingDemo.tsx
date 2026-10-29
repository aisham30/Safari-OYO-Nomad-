"use client";

import React, { useState } from "react";
import { Search, Calendar, Users, MapPin, CheckCircle, Shield, ArrowRight, Filter, Star, Sparkles, Check, ChevronLeft } from "lucide-react";

interface DemoLocation {
  id: string;
  name: string;
  region: string;
  type: "Mountain" | "Lakeside" | "Forest";
  pricePerNight: number;
  capacityPerPitch: string;
  rating: number;
  facilities: string[];
  rules: string[];
  checkIn: string;
  checkOut: string;
  description: string;
  coordinates: string;
}

const DEMO_LOCATIONS: DemoLocation[] = [
  {
    id: "mountain",
    name: "Mountain Basecamp (Demo Concept)",
    region: "Parvati Valley Foothills, HP",
    type: "Mountain",
    pricePerNight: 799,
    capacityPerPitch: "1 Nomad Shelter (1 Person)",
    rating: 4.9,
    facilities: ["Hot Water Showers", "Potable UV Water Tap", "Solar Power Station", "Secure Lockers", "Campfire Circle"],
    rules: ["Quiet hours after 10:00 PM", "Strict Leave No Trace waste policy", "No open ground fires outside designated fire ring"],
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
    description: "An illustrative high-altitude pitch overlooking sub-alpine pine ridges. Offers level turf pads with windbreaks specifically dimensioned for the OYO Nomad bivy profile.",
    coordinates: "31.98° N, 77.34° E",
  },
  {
    id: "lakeside",
    name: "Lakeside Camp (Demo Concept)",
    region: "Pawna Lake Perimeter, Maharashtra",
    type: "Lakeside",
    pricePerNight: 949,
    capacityPerPitch: "1 Nomad Shelter (1 Person)",
    rating: 4.8,
    facilities: ["Sanitary Washrooms", "Kayak Dock", "Charging Lockers", "Campsite Cafe", "24/7 Gate Warden"],
    rules: ["Lifejackets required near water line", "No amplified sound equipment", "Pets must be leashed on common boardwalks"],
    checkIn: "03:00 PM",
    checkOut: "12:00 PM",
    description: "Proposed waterside retreat designed for weekend Mumbai & Pune road-trippers. Grassy embankment pitches equipped with individual solar tether beacons.",
    coordinates: "18.68° N, 73.49° E",
  },
  {
    id: "forest",
    name: "Forest Edge Camp (Demo Concept)",
    region: "Coorg Estate Fringe, Karnataka",
    type: "Forest",
    pricePerNight: 699,
    capacityPerPitch: "1 Nomad Shelter (1 Person)",
    rating: 4.7,
    facilities: ["Clean Showers", "Filtered Spring Water", "Tree Canopy Shading", "Local Trailhead Guide", "First-Aid Center"],
    rules: ["Do not feed estate wildlife", "Follow marked trail access roads", "Smoking prohibited in timber groves"],
    checkIn: "01:00 PM",
    checkOut: "10:30 AM",
    description: "Nestled between coffee plantations and Western Ghats forest buffer. Cool canopy microclimate ideal for solo backpackers testing out their Nomad setup.",
    coordinates: "12.33° N, 75.80° E",
  },
];

export default function BookingDemo() {
  const [screen, setScreen] = useState<1 | 2 | 3 | 4>(1);
  const [selectedLocation, setSelectedLocation] = useState<DemoLocation>(DEMO_LOCATIONS[0]);
  const [filterType, setFilterType] = useState<string>("All");
  const [selectedNights, setSelectedNights] = useState<number>(2);
  const [includeSleepKit, setIncludeSleepKit] = useState<boolean>(true);
  const [guestCount, setGuestCount] = useState<number>(1);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  // Filtered locations
  const filtered = filterType === "All"
    ? DEMO_LOCATIONS
    : DEMO_LOCATIONS.filter((l) => l.type === filterType);

  const SLEEP_KIT_FEE = 499; // per stay rental or trial kit fee
  const pitchSubtotal = selectedLocation.pricePerNight * selectedNights;
  const serviceFee = 149;
  const sleepKitTotal = includeSleepKit ? SLEEP_KIT_FEE : 0;
  const totalCost = pitchSubtotal + serviceFee + sleepKitTotal;

  return (
    <section id="booking-demo" className="relative w-full border-b border-[#2D333B] bg-[#121417] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EE2E35]/30 bg-[#EE2E35]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#EE2E35]">
              Hospitality Tech Interface
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F5F3EE] sm:text-4xl">
              OYO Nomad Booking App Prototype
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#8A8F96]">
              Interactive functional mock of the proposed OYO mobile booking flow for finding verified pitches, checking amenities, and reserving guaranteed pitches.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F96] rounded-xl border border-[#2D333B] bg-[#171A1D] px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>Interactive Demo Prototype • No Payment Collected</span>
          </div>
        </div>

        {/* Mobile Phone Mockup / App Frame Container */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#2D333B] bg-[#171A1D] shadow-2xl overflow-hidden">
          {/* App Header Navigation Bar */}
          <div className="flex items-center justify-between border-b border-[#2D333B] bg-[#1E2227] px-6 py-4">
            <div className="flex items-center gap-3">
              {screen > 1 && (
                <button
                  onClick={() => setScreen((prev) => (prev - 1) as any)}
                  className="rounded-lg border border-[#2D333B] p-1.5 text-[#8A8F96] hover:text-[#F5F3EE] transition"
                  aria-label="Back"
                >
                  <ChevronLeft size={16} />
                </button>
              )}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#EE2E35]">OYO</span>
                <span className="text-sm font-extrabold tracking-wider text-[#F5F3EE]">NOMAD APP</span>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-1.5 font-mono text-xs">
              {[
                { num: 1, label: "Explore" },
                { num: 2, label: "Discover" },
                { num: 3, label: "Details" },
                { num: 4, label: "Reserve" },
              ].map((s) => (
                <button
                  key={s.num}
                  onClick={() => setScreen(s.num as any)}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-bold transition ${
                    screen === s.num
                      ? "bg-[#EE2E35] text-white"
                      : "text-[#8A8F96] hover:text-[#F5F3EE]"
                  }`}
                >
                  {s.num}. {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* App Body Screens */}
          <div className="p-6 sm:p-8 min-h-[460px]">
            {/* ================= SCREEN 1: EXPLORE ================= */}
            {screen === 1 && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#EE2E35]/30 bg-gradient-to-r from-[#1E2227] via-[#241A1C] to-[#1E2227] p-6 sm:p-8 relative overflow-hidden">
                  <div className="max-w-xl">
                    <span className="rounded-full bg-[#EE2E35]/20 px-3 py-1 font-mono text-xs font-bold text-[#EE2E35]">
                      CARRY YOUR STAY
                    </span>
                    <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#F5F3EE]">
                      Find Approved Pitches with Clean Showers & 24/7 Security
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#8A8F96]">
                      Book a guaranteed 3m × 3m flat pitch designed for your Safari OYO Nomad shelter. Verified by OYO for clean washrooms, drinking water, and safe perimeter access.
                    </p>
                  </div>
                </div>

                {/* Search & Filter Mock Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-2xl border border-[#2D333B] bg-[#121417] p-4">
                  <div className="flex items-center gap-2.5 rounded-xl bg-[#171A1D] border border-[#2D333B] px-3.5 py-2.5 text-xs text-[#F5F3EE]">
                    <MapPin size={16} className="text-[#EE2E35]" />
                    <div>
                      <div className="font-mono text-[9px] uppercase text-[#8A8F96]">Destination</div>
                      <div className="font-bold">Any Approved Nomad Zone</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-[#171A1D] border border-[#2D333B] px-3.5 py-2.5 text-xs text-[#F5F3EE]">
                    <Calendar size={16} className="text-[#EE2E35]" />
                    <div>
                      <div className="font-mono text-[9px] uppercase text-[#8A8F96]">Dates</div>
                      <div className="font-bold">This Weekend ({selectedNights} Nights)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl bg-[#171A1D] border border-[#2D333B] px-3.5 py-2.5 text-xs text-[#F5F3EE]">
                    <Users size={16} className="text-[#EE2E35]" />
                    <div>
                      <div className="font-mono text-[9px] uppercase text-[#8A8F96]">Trekker</div>
                      <div className="font-bold">1 Person (Nomad Pod)</div>
                    </div>
                  </div>
                </div>

                {/* Terrain Filter Pills */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[#8A8F96]">TERRAIN:</span>
                    {["All", "Mountain", "Lakeside", "Forest"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setFilterType(t)}
                        className={`rounded-lg px-3 py-1 transition ${
                          filterType === t
                            ? "bg-[#D8292F] text-white font-bold"
                            : "border border-[#2D333B] bg-[#1E2227] text-[#8A8F96] hover:text-[#F5F3EE]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setScreen(2)}
                    className="flex items-center gap-2 rounded-xl bg-[#EE2E35] px-5 py-2.5 font-mono text-xs font-bold text-white shadow-glow-red hover:bg-[#D8292F] transition"
                  >
                    <span>Discover 3 Demo Sites</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* ================= SCREEN 2: DISCOVER ================= */}
            {screen === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8A8F96]">
                    SHOWING {filtered.length} DEMO LOCATIONS (ILLUSTRATIVE DATA)
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-amber-400">
                    <Shield size={13} />
                    <span>OYO Verified Standard Pitch Quality</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filtered.map((loc) => (
                    <div
                      key={loc.id}
                      className="rounded-2xl border border-[#2D333B] bg-[#121417] p-4 flex flex-col justify-between transition-all hover:border-[#8A8F96]"
                    >
                      <div>
                        {/* Terrain Badge */}
                        <div className="flex items-center justify-between">
                          <span className="rounded bg-[#536B54]/20 border border-[#536B54]/40 px-2 py-0.5 font-mono text-[10px] text-[#6C8A6D]">
                            {loc.type} Zone
                          </span>
                          <span className="flex items-center gap-1 font-mono text-xs text-amber-400">
                            <Star size={12} fill="currentColor" />
                            {loc.rating}
                          </span>
                        </div>

                        <h4 className="mt-3 text-base font-bold text-[#F5F3EE]">{loc.name}</h4>
                        <p className="mt-0.5 text-xs text-[#8A8F96] flex items-center gap-1">
                          <MapPin size={12} className="text-[#EE2E35]" />
                          {loc.region}
                        </p>

                        <p className="mt-2.5 text-xs text-[#8A8F96] line-clamp-2 leading-relaxed">
                          {loc.description}
                        </p>

                        {/* Amenities checklist */}
                        <div className="mt-3 flex flex-wrap gap-1">
                          {loc.facilities.slice(0, 3).map((f, i) => (
                            <span key={i} className="rounded bg-[#1E2227] px-2 py-0.5 text-[10px] text-[#F5F3EE]">
                              • {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 border-t border-[#2D333B] pt-3 flex items-center justify-between">
                        <div>
                          <span className="text-base font-bold text-[#EE2E35]">₹{loc.pricePerNight}</span>
                          <span className="text-[10px] text-[#8A8F96]"> / pitch / night</span>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedLocation(loc);
                            setScreen(3);
                          }}
                          className="rounded-lg bg-[#D8292F] px-3.5 py-1.5 font-mono text-xs font-bold text-white hover:bg-[#EE2E35] transition"
                        >
                          View Site →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= SCREEN 3: SITE DETAILS ================= */}
            {screen === 3 && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#2D333B] bg-[#121417] p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2D333B] pb-4">
                    <div>
                      <span className="font-mono text-xs text-[#EE2E35] font-bold uppercase tracking-wider">
                        {selectedLocation.type} ECOSYSTEM // OYO NOMAD ZONE
                      </span>
                      <h3 className="text-2xl font-bold text-[#F5F3EE] mt-1">
                        {selectedLocation.name}
                      </h3>
                      <p className="text-xs text-[#8A8F96] mt-0.5">{selectedLocation.region} • Coordinates: {selectedLocation.coordinates}</p>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#EE2E35]">₹{selectedLocation.pricePerNight}</div>
                      <div className="font-mono text-[10px] text-[#8A8F96]">ESTIMATED PITCH RATE</div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#8A8F96] leading-relaxed">
                    {selectedLocation.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Facilities Included */}
                    <div className="rounded-xl border border-[#2D333B] bg-[#171A1D] p-4">
                      <div className="font-mono text-xs font-bold text-[#F5F3EE] uppercase tracking-wider mb-2">
                        PITCH & CAMPSITE FACILITIES
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#8A8F96]">
                        {selectedLocation.facilities.map((fac, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-[#6C8A6D]" />
                            <span>{fac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Site Rules & Logistics */}
                    <div className="rounded-xl border border-[#2D333B] bg-[#171A1D] p-4">
                      <div className="font-mono text-xs font-bold text-[#F5F3EE] uppercase tracking-wider mb-2">
                        CHECK-IN & SAFETY RULES
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#8A8F96] mb-3">
                        <div>CHECK-IN: <span className="text-[#F5F3EE] font-bold">{selectedLocation.checkIn}</span></div>
                        <div>CHECKOUT: <span className="text-[#F5F3EE] font-bold">{selectedLocation.checkOut}</span></div>
                      </div>
                      <ul className="space-y-1 text-xs text-[#8A8F96]">
                        {selectedLocation.rules.map((rule, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-[#EE2E35]"></span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#2D333B] pt-4">
                    <span className="text-xs text-[#8A8F96]">
                      Max footprint: 1 Solo Nomad Shelter + Pack Locker
                    </span>
                    <button
                      onClick={() => setScreen(4)}
                      className="rounded-xl bg-[#EE2E35] px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-glow-red hover:bg-[#D8292F] transition"
                    >
                      Reserve Demo Pitch →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ================= SCREEN 4: RESERVATION SUMMARY ================= */}
            {screen === 4 && (
              <div className="space-y-6 max-w-2xl mx-auto">
                {!bookingConfirmed ? (
                  <div className="rounded-2xl border border-[#2D333B] bg-[#121417] p-6 sm:p-8">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#EE2E35] mb-2">
                      STEP 4 // RESERVATION PREVIEW
                    </div>
                    <h3 className="text-2xl font-bold text-[#F5F3EE]">Review Pitch Summary</h3>
                    <p className="text-xs text-[#8A8F96] mt-1">
                      {selectedLocation.name} — {selectedLocation.region}
                    </p>

                    {/* Interactive Duration & Sleep Kit Selector */}
                    <div className="mt-6 space-y-4 border-y border-[#2D333B] py-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8A8F96]">Stay Duration:</span>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3].map((n) => (
                            <button
                              key={n}
                              onClick={() => setSelectedNights(n)}
                              className={`rounded-lg px-3 py-1 font-mono text-xs transition ${
                                selectedNights === n
                                  ? "bg-[#D8292F] text-white font-bold"
                                  : "border border-[#2D333B] bg-[#171A1D] text-[#8A8F96]"
                              }`}
                            >
                              {n} {n === 1 ? "Night" : "Nights"}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-[#F5F3EE]">Optional Nomad Sleep Kit Add-on</div>
                          <div className="text-[11px] text-[#8A8F96]">
                            Includes sanitized sleeping mat, micro-quilt & hygiene pouch at check-in
                          </div>
                        </div>
                        <button
                          onClick={() => setIncludeSleepKit(!includeSleepKit)}
                          className={`rounded-lg px-3 py-1 font-mono text-xs transition ${
                            includeSleepKit
                              ? "bg-[#536B54] text-white font-bold"
                              : "border border-[#2D333B] bg-[#171A1D] text-[#8A8F96]"
                          }`}
                        >
                          {includeSleepKit ? "✓ Added (₹499)" : "+ Add (₹499)"}
                        </button>
                      </div>
                    </div>

                    {/* Transparent Price Calculation Breakdown */}
                    <div className="mt-4 space-y-2 font-mono text-xs text-[#8A8F96]">
                      <div className="flex justify-between">
                        <span>Pitch Rate (₹{selectedLocation.pricePerNight} × {selectedNights} nights):</span>
                        <span className="text-[#F5F3EE]">₹{pitchSubtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Campsite Hospitality & Sanitation Fee:</span>
                        <span className="text-[#F5F3EE]">₹{serviceFee}</span>
                      </div>
                      {includeSleepKit && (
                        <div className="flex justify-between text-[#6C8A6D]">
                          <span>Nomad Sleep Kit On-Site Lease:</span>
                          <span>₹{SLEEP_KIT_FEE}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-[#2D333B] pt-3 text-sm font-bold text-[#F5F3EE]">
                        <span>Estimated Total (Illustrative):</span>
                        <span className="text-xl text-[#EE2E35]">₹{totalCost}</span>
                      </div>
                    </div>

                    {/* Reserve CTA */}
                    <div className="mt-8">
                      <button
                        onClick={() => setBookingConfirmed(true)}
                        className="w-full rounded-xl bg-[#EE2E35] py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-glow-red hover:bg-[#D8292F] transition"
                      >
                        Confirm Mock Reservation (Demo Only)
                      </button>
                      <p className="mt-2 text-center text-[10px] text-[#8A8F96]">
                        * Frontend conceptual simulation. No credit card or live booking is created.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Confirmation Modal / Screen */
                  <div className="rounded-2xl border border-[#536B54] bg-[#121417] p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#536B54]/20 text-[#6C8A6D]">
                      <Check size={28} />
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-[#F5F3EE]">
                      Mock Reservation Confirmed!
                    </h3>
                    <p className="mt-2 text-xs font-mono text-[#8A8F96]">
                      CONFIRMATION CODE: NOMAD-849201
                    </p>

                    <div className="mt-6 max-w-md mx-auto rounded-xl border border-[#2D333B] bg-[#171A1D] p-4 text-left text-xs font-mono space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#8A8F96]">SITE:</span>
                        <span className="text-[#F5F3EE] font-bold">{selectedLocation.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8A8F96]">DURATION:</span>
                        <span className="text-[#F5F3EE]">{selectedNights} Nights</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8A8F96]">SLEEP KIT:</span>
                        <span className="text-[#6C8A6D]">{includeSleepKit ? "Reserved at Site Check-In" : "Self-Provided"}</span>
                      </div>
                      <div className="flex justify-between border-t border-[#2D333B] pt-2">
                        <span className="text-[#8A8F96]">SIMULATED CHARGE:</span>
                        <span className="text-[#EE2E35] font-bold">₹{totalCost}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center gap-3">
                      <button
                        onClick={() => {
                          setBookingConfirmed(false);
                          setScreen(1);
                        }}
                        className="rounded-xl border border-[#2D333B] bg-[#1E2227] px-5 py-2 font-mono text-xs text-[#F5F3EE] hover:bg-[#252B32] transition"
                      >
                        Reset Booking Flow
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
