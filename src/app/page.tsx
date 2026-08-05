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

      {/* Main Content Area with White to Pink to Red Rose Scroll Gradient (Scrollbar Hidden) */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto bg-gradient-to-b from-white via-[#FFE4E8] via-[#FF809B] via-[#E63946] to-[#590D22] text-neutral-900 no-scrollbar relative scroll-smooth">
        <TopBar />

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 pt-4">
          <AboutSection />
          <ProjectTracklist />
          <OrganizationGrid />
          <SkillsSection />
          <CertificationsSection />
        </div>

        {/* Footer */}
        <footer className="p-8 border-t border-rose-400/40 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium pb-32">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
            <span>•</span>
            <span className="text-rose-100">Porotfolio</span>
          </div>

          <div className="flex items-center gap-1.5 text-rose-100">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-pink-200 fill-pink-200" />
            <span>Next.js and Tailwind CSS</span>
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
