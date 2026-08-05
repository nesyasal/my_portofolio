"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Github, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/cvData';
import { useSpotifyPlayer } from '@/context/SpotifyPlayerContext';

export const TopBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleSidebar, isSidebarOpen } = useSpotifyPlayer();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim()) {
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="h-16 sm:h-20 bg-white/95 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-3 sm:px-6 border-b border-pink-200/80 text-neutral-900 shadow-md">
      {/* Sidebar Toggle & Search Bar */}
      <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0 max-w-md">
        {/* Toggle Menu Button for Mobile & Desktop */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full bg-pink-50 border border-pink-200 hover:bg-pink-100 text-rose-600 transition-all flex items-center justify-center shrink-0 shadow-sm"
          title={isSidebarOpen ? "Close Sidebar Menu" : "Open Sidebar Menu"}
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <button className="w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-all border border-pink-200">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-all border border-pink-200">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 min-w-0">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-rose-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search QA, Python, Laravel..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full bg-pink-50/90 border border-pink-200 text-xs sm:text-sm text-neutral-900 placeholder-rose-300 rounded-full pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Profile & CTA Links */}
      <div className="flex items-center gap-2 sm:gap-3 ml-2 shrink-0">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-pink-50 hover:bg-pink-100 px-3 py-2 rounded-full text-xs font-bold transition-all border border-pink-200 text-neutral-800 shadow-xs"
        >
          <Github className="w-4 h-4 text-rose-600" />
          <span>GitHub</span>
          <ExternalLink className="w-3 h-3 text-neutral-400" />
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="bg-rose-500 hover:bg-rose-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md hover:scale-105 flex items-center gap-1.5"
          title="Send Email"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden xs:inline">Contact</span>
        </a>

        <div
          onClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 bg-white border border-pink-200 pl-1.5 pr-2.5 py-1 rounded-full cursor-pointer hover:bg-pink-50 hover:border-rose-300 transition-all shadow-sm"
          title="Click to view Nesya's Personal Profile"
        >
          <img
            src="/nesya_cantik.jpeg"
            alt={PERSONAL_INFO.name}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-rose-400"
          />
          <span className="text-xs font-bold truncate max-w-[80px] sm:max-w-[120px] hidden sm:inline text-neutral-900">{PERSONAL_INFO.name}</span>
        </div>
      </div>
    </header>
  );
};
