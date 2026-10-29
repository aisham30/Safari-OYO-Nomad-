"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, MonitorPlay, ShieldAlert, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenPresentation: () => void;
}

export default function Navbar({ onOpenPresentation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "overview",
        "3d-prototype",
        "components",
        "transformation",
        "specs",
        "sleep-kit",
        "nomad-zones",
        "booking-demo",
        "brand",
        "business-model",
        "personas",
        "journey",
      ];

      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "3D Prototype", href: "#3d-prototype" },
    { label: "Components", href: "#components" },
    { label: "Transformation", href: "#transformation" },
    { label: "Sleep Kit", href: "#sleep-kit" },
    { label: "Nomad Zones", href: "#nomad-zones" },
    { label: "Booking Demo", href: "#booking-demo" },
    { label: "Business Model", href: "#business-model" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#2D333B] bg-[#171A1D]/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Lockup */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D8292F] border-r border-[#2D333B] pr-2">
              SAFARI
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#EE2E35] pl-0.5">
              OYO
            </span>
          </div>
          <div className="h-4 w-px bg-[#2D333B]"></div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-[#F5F3EE] group-hover:text-white transition">
              NOMAD
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#8A8F96] uppercase">
              CARRY YOUR STAY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-wider transition-colors ${
                  isActive
                    ? "text-[#EE2E35] font-semibold"
                    : "text-[#8A8F96] hover:text-[#F5F3EE]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA: Presentation Mode */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPresentation}
            className="flex items-center gap-2 rounded-xl border border-[#EE2E35]/40 bg-[#EE2E35]/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-[#EE2E35] backdrop-blur-md transition-all hover:bg-[#EE2E35] hover:text-white hover:shadow-glow-red"
            title="Launch Formula Unicorn Competition Presentation Deck"
          >
            <MonitorPlay size={14} />
            <span className="hidden sm:inline">Presentation Mode</span>
            <span className="sm:hidden">Pitch</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg border border-[#2D333B] p-2 text-[#8A8F96] hover:text-[#F5F3EE]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#2D333B] bg-[#171A1D]/98 px-6 py-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm tracking-wider text-[#8A8F96] hover:text-[#EE2E35]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#2D333B]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPresentation();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#EE2E35] px-4 py-2.5 font-mono text-xs font-bold text-white shadow-glow-red"
              >
                <MonitorPlay size={15} />
                Launch Presentation Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
