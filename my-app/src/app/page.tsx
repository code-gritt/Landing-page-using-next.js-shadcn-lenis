"use client";

import { useEffect } from "react";
import NavBar from "@/components/common/NavBar";
import Lenis from "@studio-freight/lenis";
import HeroSection from "@/components/sections/HeroSection";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import WhatsImportantSection from "@/components/sections/WhatImportantSection";
import RemarkSection from "@/components/sections/RemarkSection";
import WeShipSection from "@/components/sections/WeShipSection";
import GetStartedSection from "@/components/sections/GetStartedSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <NavBar />
      <HeroSection />
      <LogoGroupSection />
      <WhatsImportantSection />
      <RemarkSection />
      <WeShipSection />
      <GetStartedSection />
      <FooterSection />
    </main>
  );
}
