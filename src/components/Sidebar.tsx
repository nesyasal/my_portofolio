"use client";

import React, { useEffect } from 'react';
import { FolderGit2, Award, Briefcase, UserCheck, Heart, Sparkles, Mail, Github, Linkedin, ShieldCheck, X } from 'lucide-react';
import { useSpotifyPlayer } from '@/context/SpotifyPlayerContext';
import { PERSONAL_INFO } from '@/data/cvData';

export const Sidebar: React.FC = () => {
  const { activeFilter, setActiveFilter, isSidebarOpen, closeSidebar, toggleSidebar } = useSpotifyPlayer();

  // Initialize sidebar open by default on desktop, closed on mobile
  useEffect(() => {
    if (window.innerWidth >= 768) {
      // Desktop default: open
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
    // Auto close sidebar on mobile screens
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden animate-fadeIn"
        />
      )}

      {/* Sidebar Wrapper */}
      <aside
        className={`
          fixed md:relative top-0 left-0 bottom-0 z-50 md:z-20
          bg-spotify-sidebar text-spotify-subtext flex flex-col h-full select-none
          border-r border-spotify-light/20 transition-all duration-300 ease-in-out
          ${
            /* Mobile styles */
            isSidebarOpen
              ? 'translate-x-0 opacity-100 w-72 p-3'
              : '-translate-x-full md:translate-x-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'
          }
          ${
            /* Desktop toggle styles */
            isSidebarOpen
              ? 'md:w-64 md:p-3 md:opacity-100'
              : 'md:w-0 md:p-0 md:border-none md:overflow-hidden md:opacity-0'
          }
        `}
      >
        <div className="flex flex-col h-full gap-2 min-w-[240px]">
          {/* Brand Header */}
          <div className="bg-spotify-card rounded-xl p-4 flex flex-col gap-4 relative">
            {/* Close button on Mobile */}
            <button
              onClick={closeSidebar}
              className="md:hidden absolute top-3 right-3 p-1 rounded-full text-spotify-subtext hover:text-white hover:bg-spotify-light transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-white font-bold text-lg tracking-tight">
              <div className="w-8 h-8 bg-spotify-green text-black rounded-full flex items-center justify-center font-black">
                <Sparkles className="w-5 h-5 fill-black stroke-black" />
              </div>
              <span className="text-white text-xl font-black tracking-wide">Spotify</span>
            </div>

            {/* Main Navigation */}
            <nav className="flex flex-col gap-1 text-sm font-semibold">
              <button
                onClick={() => handleNavClick('about')}
                className="flex items-center gap-4 px-3 py-2 text-white hover:text-spotify-green transition-colors rounded-lg hover:bg-spotify-light/30 text-left"
              >
                <UserCheck className="w-5 h-5 text-spotify-green" />
                <span>About Nesya (Profile)</span>
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className="flex items-center gap-4 px-3 py-2 text-spotify-subtext hover:text-white transition-colors rounded-lg hover:bg-spotify-light/30 text-left"
              >
                <FolderGit2 className="w-5 h-5" />
                <span>Projects Tracklist</span>
              </button>
              <button
                onClick={() => handleNavClick('organizations')}
                className="flex items-center gap-4 px-3 py-2 text-spotify-subtext hover:text-white transition-colors rounded-lg hover:bg-spotify-light/30 text-left"
              >
                <Briefcase className="w-5 h-5" />
                <span>Organizations</span>
              </button>
              <button
                onClick={() => handleNavClick('skills')}
                className="flex items-center gap-4 px-3 py-2 text-spotify-subtext hover:text-white transition-colors rounded-lg hover:bg-spotify-light/30 text-left"
              >
                <UserCheck className="w-5 h-5" />
                <span>Skills & Languages</span>
              </button>
              <button
                onClick={() => handleNavClick('certifications')}
                className="flex items-center gap-4 px-3 py-2 text-spotify-subtext hover:text-white transition-colors rounded-lg hover:bg-spotify-light/30 text-left"
              >
                <Award className="w-5 h-5" />
                <span>Certifications</span>
              </button>
            </nav>
          </div>

          {/* Library & Playlists Section */}
          <div className="bg-spotify-card rounded-xl p-4 flex-1 flex flex-col gap-3 overflow-hidden">
            <div className="flex items-center justify-between text-spotify-subtext font-bold text-sm">
              <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <ShieldCheck className="w-5 h-5 text-spotify-green" />
                <span>Project Playlists</span>
              </div>
              <span className="text-xs bg-spotify-light px-2 py-1 rounded text-white font-mono">6 Repos</span>
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
                      ? 'bg-white text-black font-bold'
                      : 'bg-spotify-light/60 text-spotify-subtext hover:bg-spotify-light hover:text-white'
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
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-spotify-light/50 cursor-pointer group transition-all"
              >
                <div className="w-10 h-10 rounded bg-gradient-to-br from-pink-400 to-rose-900 flex items-center justify-center text-black font-bold group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold text-white group-hover:text-spotify-green truncate">QA & Automation Suite</span>
                  <span className="text-xs text-spotify-subtext">Playlist • Katalon & UAT</span>
                </div>
              </div>

              <div
                onClick={() => { setActiveFilter('AI & ML'); handleNavClick('projects'); }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-spotify-light/50 cursor-pointer group transition-all"
              >
                <div className="w-10 h-10 rounded bg-gradient-to-br from-purple-600 to-indigo-950 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold text-white group-hover:text-spotify-green truncate">AI & Sentiment Research</span>
                  <span className="text-xs text-spotify-subtext">Playlist • Q2 Journal Published</span>
                </div>
              </div>

              <div
                onClick={() => { setActiveFilter('Fullstack Web'); handleNavClick('projects'); }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-spotify-light/50 cursor-pointer group transition-all"
              >
                <div className="w-10 h-10 rounded bg-gradient-to-br from-blue-600 to-cyan-950 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform">
                  <FolderGit2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold text-white group-hover:text-spotify-green truncate">Web Apps & Real-time API</span>
                  <span className="text-xs text-spotify-subtext">Playlist • Laravel & Node.js</span>
                </div>
              </div>

              <div
                onClick={() => handleNavClick('organizations')}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-spotify-light/50 cursor-pointer group transition-all"
              >
                <div className="w-10 h-10 rounded bg-gradient-to-br from-pink-600 to-rose-950 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="w-10 h-10 rounded bg-gradient-to-br from-pink-600 to-rose-950 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform">Leadership & Committees</span>
                  <span className="text-xs text-spotify-subtext">Playlist • ILBIC, HMTI, CILT</span>
                </div>
              </div>
            </div>

            {/* External Links */}
            <div className="pt-2 border-t border-spotify-light/30 flex items-center justify-around text-spotify-subtext">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-spotify-green hover:bg-spotify-light rounded-full transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 hover:text-spotify-green hover:bg-spotify-light rounded-full transition-all"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-spotify-green hover:bg-spotify-light rounded-full transition-all"
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
