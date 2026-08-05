"use client";

import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { AboutSection } from '@/components/AboutSection';
import { ProjectTracklist } from '@/components/ProjectTracklist';
import { OrganizationGrid } from '@/components/OrganizationGrid';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { PlayerBar } from '@/components/PlayerBar';
import { ProjectModal } from '@/components/ProjectModal';
import { PERSONAL_INFO } from '@/data/cvData';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans">
      {/* Left Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area with White to Pink to Red Rose Scroll Gradient */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto bg-gradient-to-b from-white via-[#FFE4E8] via-[#FF809B] via-[#E63946] to-[#590D22] text-neutral-900 scrollbar-thin relative scroll-smooth">
        <TopBar />

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 pt-4">
          <AboutSection />
          <ProjectTracklist />
          <OrganizationGrid />
          <SkillsSection />
          <CertificationsSection />
        </div>

        {/* Clean, Centered Mobile & Desktop Footer */}
        <footer className="mx-4 my-8 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white flex flex-col items-center justify-center text-center gap-3 text-xs font-medium pb-32 md:pb-28 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-white font-black text-sm tracking-wide">{PERSONAL_INFO.name}</span>
            <span className="hidden sm:inline text-rose-200">•</span>
            <span className="text-rose-100 font-medium">Quality Assurance & Web Development Portfolio</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-rose-200 text-[11px]">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-pink-300 fill-pink-300" />
            <span>in Spotify Style with White to Pink Rose Gradient</span>
          </div>
        </footer>
      </main>

      {/* Persistent Spotify Bottom Player Bar */}
      <PlayerBar />

      {/* Modal for Project Detail Inspection */}
      <ProjectModal />
    </div>
  );
}
