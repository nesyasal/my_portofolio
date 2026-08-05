"use client";

import React from 'react';
import { Play, Pause, BadgeCheck, Github, Mail, Phone, MapPin, Download, ExternalLink, Sparkles, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '@/data/cvData';
import { useSpotifyPlayer } from '@/context/SpotifyPlayerContext';

export const HeroHeader: React.FC = () => {
  const { activeProject, isPlaying, togglePlay, playProject } = useSpotifyPlayer();

  const handlePlayAll = () => {
    if (!isPlaying) {
      playProject(PROJECTS[0]);
    } else {
      togglePlay();
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-emerald-950 via-spotify-black/90 to-spotify-black p-8 rounded-b-2xl border-b border-spotify-light/20 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-spotify-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center md:items-end gap-8 relative z-10">
        {/* Avatar Profile Picture */}
        <div className="relative group">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-spotify-green/40 group-hover:border-spotify-green transition-all duration-300">
            <img
              src="/nesya_cantik.jpeg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-spotify-green text-black p-2 rounded-full shadow-lg border-2 border-spotify-black">
            <BadgeCheck className="w-6 h-6 fill-black stroke-spotify-green" />
          </div>
        </div>

        {/* Artist / Developer Metadata */}
        
      </div>

      {/* Action Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-spotify-light/20 relative z-10">
        <div className="flex items-center gap-4">
          {/* Main Big Green Spotify Play Button */}
          <button
            onClick={handlePlayAll}
            className="w-14 h-14 bg-spotify-green hover:bg-spotify-green-hover text-black rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all group"
            title={isPlaying ? "Pause Portfolio Playback" : "Play All Projects"}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-black stroke-black" />
            ) : (
              <Play className="w-7 h-7 fill-black stroke-black ml-1" />
            )}
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-spotify-subtext/40 hover:border-white text-white font-bold text-sm hover:scale-105 transition-all flex items-center gap-2 bg-spotify-card/60"
          >
            <Github className="w-4 h-4 text-spotify-green" />
            <span>GitHub Repositories</span>
            <ExternalLink className="w-3.5 h-3.5 text-spotify-subtext" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm hover:scale-105 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>
        </div>

        {/* Quick Contact info */}
        <div className="flex items-center gap-4 text-xs text-spotify-subtext">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-spotify-green" />
            <span>{PERSONAL_INFO.phone}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-spotify-green" />
            <span>{PERSONAL_INFO.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
