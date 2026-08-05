"use client";

import React, { useEffect } from 'react';
import { FolderGit2, Award, Briefcase, UserCheck, Heart, Sparkles, Mail, Github, Linkedin, ShieldCheck, X } from 'lucide-react';
import { useSpotifyPlayer } from '@/context/SpotifyPlayerContext';
import { PERSONAL_INFO } from '@/data/cvData';

export const Sidebar: React.FC = () => {
  const { activeFilter, setActiveFilter, isSidebarOpen, closeSidebar, toggleSidebar } = useSpotifyPlayer();

  useEffect(() => {
    if (window.innerWidth >= 768) {
      if (!isSidebarOpen) {
        toggleSidebar();
      }
    }
  }, []);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <>
      {/* Mobile Dark Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
        />
      )}

      {/* Sidebar Wrapper */}
      <aside
        className={`
          fixed md:relative top-0 left-0 bottom-0 z-50 md:z-20
          bg-white/95 backdrop-blur-xl text-neutral-800 flex flex-col h-full select-none
          border-r border-rose-200/60 transition-all duration-300 ease-in-out shadow-lg
          ${
            isSidebarOpen
              ? 'translate-x-0 opacity-100 w-72 p-3'
              : '-translate-x-full md:translate-x-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'
          }
          ${
            isSidebarOpen
              ? 'md:w-64 md:p-3 md:opacity-100'
              : 'md:w-0 md:p-0 md:border-none md:overflow-hidden md:opacity-0'
          }
        `}
      >
        <div className="flex flex-col h-full gap-2 min-w-[240px]">
          {/* Brand Header */}
          <div className="bg-pink-50/80 rounded-xl p-4 flex flex-col gap-4 relative border border-pink-200/60 shadow-sm">
            {/* Close button on Mobile */}
            <button
              onClick={closeSidebar}
              className="md:hidden absolute top-3 right-3 p-1 rounded-full text-neutral-500 hover:text-rose-600 hover:bg-pink-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-rose-600 font-bold text-lg tracking-tight">
              <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-black shadow-md">
                <Sparkles className="w-5 h-5 fill-white stroke-white" />
              </div>
              <span className="text-rose-600 text-xl font-black tracking-wide">Spotify</span>
            </div>

            {/* Main Navigation */}
            <nav className="flex flex-col gap-1 text-sm font-semibold">
              <button
                onClick={() => handleNavClick('about')}
                className="flex items-center gap-4 px-3 py-2 text-rose-600 hover:text-rose-700 transition-colors rounded-lg hover:bg-pink-100/80 text-left bg-pink-100/50"
              >
                <UserCheck className="w-5 h-5 text-rose-600" />
                <span>About Nesya (Profile)</span>
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className="flex items-center gap-4 px-3 py-2 text-neutral-700 hover:text-rose-600 transition-colors rounded-lg hover:bg-pink-100/60 text-left"
              >
                <FolderGit2 className="w-5 h-5 text-neutral-500 group-hover:text-rose-600" />
                <span>Projects Tracklist</span>
              </button>
              <button
                onClick={() => handleNavClick('organizations')}
                className="flex items-center gap-4 px-3 py-2 text-neutral-700 hover:text-rose-600 transition-colors rounded-lg hover:bg-pink-100/60 text-left"
              >
                <Briefcase className="w-5 h-5 text-neutral-500" />
                <span>Organizations</span>
              </button>
              <button
                onClick={() => handleNavClick('skills')}
                className="flex items-center gap-4 px-3 py-2 text-neutral-700 hover:text-rose-600 transition-colors rounded-lg hover:bg-pink-100/60 text-left"
              >
                <UserCheck className="w-5 h-5 text-neutral-500" />
                <span>Skills & Languages</span>
              </button>
              <button
                onClick={() => handleNavClick('certifications')}
                className="flex items-center gap-4 px-3 py-2 text-neutral-700 hover:text-rose-600 transition-colors rounded-lg hover:bg-pink-100/60 text-left"
              >
                <Award className="w-5 h-5 text-neutral-500" />
                <span>Certifications</span>
              </button>
            </nav>
          </div>

          {/* Library & Playlists Section */}
          <div className="bg-pink-50/80 rounded-xl p-4 flex-1 flex flex-col gap-3 overflow-hidden border border-pink-200/60 shadow-sm">
            <div className="flex items-center justify-between text-neutral-700 font-bold text-sm">
              <div className="flex items-center gap-2 hover:text-rose-600 transition-colors cursor-pointer">
                <ShieldCheck className="w-5 h-5 text-rose-500" />
                <span>Project Playlists</span>
              </div>
              <span className="text-xs bg-pink-100 text-rose-600 px-2 py-0.5 rounded font-mono font-bold">6 Repos</span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
              {[
                { id: 'all', label: 'All' },
                { id: 'QA', label: 'QA & Testing' },
                { id: 'AI & ML', label: 'AI / ML' },
                { id: 'Fullstack Web', label: 'Web Apps' },
                { id: 'Desktop & Game', label: 'Desktop & Game' },
              ].map(pill => (
                <button
                  key={pill.id}
                  onClick={() => {
                    setActiveFilter(pill.id);
                    handleNavClick('projects');
                  }}
                  className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-all ${
                    activeFilter === pill.id
                      ? 'bg-rose-500 text-white font-bold shadow-sm'
                      : 'bg-white/80 text-neutral-700 hover:bg-pink-100 hover:text-rose-600 border border-pink-200'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Playlist Items */}
            <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2 scrollbar-thin">
              <div
                onClick={() => { setActiveFilter('QA'); handleNavClick('projects'); }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100/80 cursor-pointer group transition-all"
              >
                <div className="w-10 h-10 rounded bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold text-neutral-900 group-hover:text-rose-600 truncate">QA & Automation Suite</span>
                  <span className="text-xs text-neutral-500">Playlist • Katalon & UAT</span>
                </div>
              </div>

              <div
                onClick={() => { setActiveFilter('AI & ML'); handleNavClick('projects'); }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100/80 cursor-pointer group transition-all"
              >
                <div className="w-10 h-10 rounded bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform shadow-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold text-neutral-900 group-hover:text-rose-600 truncate">AI & Sentiment Research</span>
                  <span className="text-xs text-neutral-500">Playlist • Q2 Journal Published</span>
                </div>
              </div>

              <div
                onClick={() => { setActiveFilter('Fullstack Web'); handleNavClick('projects'); }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100/80 cursor-pointer group transition-all"
              >
                <div className="w-10 h-10 rounded bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform shadow-sm">
                  <FolderGit2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold text-neutral-900 group-hover:text-rose-600 truncate">Web Apps & Real-time API</span>
                  <span className="text-xs text-neutral-500">Playlist • Laravel & Node.js</span>
                </div>
              </div>

              <div
                onClick={() => handleNavClick('organizations')}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-100/80 cursor-pointer group transition-all"
              >
                <div className="w-10 h-10 rounded bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform shadow-sm">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold text-neutral-900 group-hover:text-rose-600 truncate">Leadership & Committees</span>
                  <span className="text-xs text-neutral-500">Playlist • ILBIC, HIMATIF, CILT</span>
                </div>
              </div>
            </div>

            {/* External Links */}
            <div className="pt-2 border-t border-pink-200/60 flex items-center justify-around text-neutral-500">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-rose-600 hover:bg-pink-100 rounded-full transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 hover:text-rose-600 hover:bg-pink-100 rounded-full transition-all"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-rose-600 hover:bg-pink-100 rounded-full transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
