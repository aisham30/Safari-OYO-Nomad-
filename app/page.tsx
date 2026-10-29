"use client";

import React, { useState } from "react";
import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProductViewer from "@/components/3d/ProductViewer";
import ExplodedView from "@/components/exploded/ExplodedView";
import SpecsPanel from "@/components/specs/SpecsPanel";
import TransformationSection from "@/components/transformation/TransformationSection";
import SleepKitSection from "@/components/sleepkit/SleepKitSection";
import NomadZoneSection from "@/components/zones/NomadZoneSection";
import BookingDemo from "@/components/booking/BookingDemo";
import BrandCollabSection from "@/components/brand/BrandCollabSection";
import BusinessModel from "@/components/business/BusinessModel";
import PersonasSection from "@/components/personas/PersonasSection";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import Footer from "@/components/footer/Footer";
import PresentationMode from "@/components/presentation/PresentationMode";

export default function Home() {
  const [presentationOpen, setPresentationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#171A1D] text-[#F5F3EE] selection:bg-[#EE2E35] selection:text-white">
      {/* Fixed Navigation */}
      <Navbar onOpenPresentation={() => setPresentationOpen(true)} />

      {/* 1. Hero Section */}
      <HeroSection onStartDemo={() => setPresentationOpen(true)} />

      {/* 2. Interactive 3D Product Prototype (Central Experience) */}
      <ProductViewer />

      {/* 3. Exploded Product View */}
      <ExplodedView />

      {/* 4. Transformation Demonstration */}
      <TransformationSection />

      {/* 5. Technical Specifications Matrix */}
      <SpecsPanel />

      {/* 6. Nomad Sleep Kit */}
      <SleepKitSection />

      {/* 7. OYO Nomad Zones Location & Blueprint */}
      <NomadZoneSection />

      {/* 8. Booking App Prototype */}
      <BookingDemo />

      {/* 9. Brand Collaboration Synergy */}
      <BrandCollabSection />

      {/* 10. Business Model & Unit Economics Calculator */}
      <BusinessModel />

      {/* 11. Customer Personas */}
      <PersonasSection />

      {/* 12. Product Journey Timeline */}
      <JourneyTimeline />

      {/* 13. Footer with Formula Unicorn Competition Statements */}
      <Footer />

      {/* Full-Screen Competition Presentation Deck Mode */}
      <PresentationMode
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
    </main>
  );
}
