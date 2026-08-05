"use client";

import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ExternalLink, Github, Info, Repeat, Shuffle, ShieldCheck, Sparkles, FileSpreadsheet } from 'lucide-react';
import { useSpotifyPlayer } from '@/context/SpotifyPlayerContext';
import { AudioVisualizer } from './AudioVisualizer';

export const PlayerBar: React.FC = () => {
  const {
    activeProject,
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    progress,
    openModal,
    playNext,
    playPrev
  } = useSpotifyPlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 sm:h-24 bg-spotify-black/95 backdrop-blur-xl border-t border-spotify-light/30 px-3 sm:px-6 md:px-8 flex items-center justify-between z-40 text-white shadow-2xl">
      {/* Top Mobile Progress Line */}
      <div className="sm:hidden absolute top-0 left-0 right-0 h-1 bg-spotify-light overflow-hidden">
        <div
          className="h-full bg-spotify-green transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Left Track Info */}
      <div className="flex items-center gap-2.5 sm:gap-4 flex-1 min-w-0 pr-2">
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-pink-400 via-rose-800 to-spotify-card p-1.5 sm:p-2 flex flex-col justify-between shrink-0 shadow-lg border border-spotify-light/40 relative group">
          <div className="flex items-center justify-between">
            <span className="text-[8px] sm:text-[9px] font-black uppercase text-spotify-green bg-black/60 px-1 py-0.5 rounded">
              {activeProject.category}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <AudioVisualizer isPlaying={isPlaying} barCount={4} height="h-2.5 sm:h-3" color="bg-spotify-green" />
          </div>
        </div>

        <div className="flex flex-col truncate min-w-0">
          <div className="flex items-center gap-1">
            <span
              onClick={() => openModal(activeProject)}
              className="text-xs sm:text-sm font-bold text-white hover:text-spotify-green hover:underline cursor-pointer truncate transition-colors"
            >
              {activeProject.title}
            </span>
            {activeProject.category === 'QA' && (
              <ShieldCheck className="w-3.5 h-3.5 text-spotify-green shrink-0" />
            )}
            {activeProject.publicationUrl && (
              <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            )}
          </div>
          <span className="text-[11px] text-spotify-subtext truncate">
            {activeProject.role}
          </span>
        </div>
      </div>

      {/* Center Controls & Progress Slider */}
      <div className="flex flex-col items-center gap-1 shrink-0 sm:w-1/3 sm:max-w-md">
        {/* Playback Buttons */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button className="text-spotify-subtext hover:text-white transition-colors hidden sm:block">
            <Shuffle className="w-4 h-4" />
          </button>

          <button
            onClick={playPrev}
            className="text-spotify-subtext hover:text-white transition-colors p-1"
            title="Previous Project Track"
          >
            <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          </button>

          <button
            onClick={togglePlay}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-spotify-green text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-black stroke-black" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-black stroke-black ml-0.5" />
            )}
          </button>

          <button
            onClick={playNext}
            className="text-spotify-subtext hover:text-white transition-colors p-1"
            title="Next Project Track"
          >
            <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          </button>

          <button className="text-spotify-subtext hover:text-white transition-colors hidden sm:block">
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar (Hidden on tiny mobile, replaced by top mobile progress line) */}
        <div className="hidden sm:flex w-full items-center gap-3 text-xs font-mono text-spotify-subtext">
          <span>0:{(Math.floor((progress / 100) * 40)).toString().padStart(2, '0')}</span>
          <div className="flex-1 h-1.5 bg-spotify-light rounded-full overflow-hidden cursor-pointer group relative">
            <div
              className="h-full bg-white group-hover:bg-spotify-green rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>{activeProject.duration}</span>
        </div>
      </div>

      {/* Right Quick Action Links */}
      <div className="flex items-center justify-end gap-2 sm:gap-4 shrink-0 pl-2">
        <button
          onClick={() => openModal(activeProject)}
          className="p-1.5 sm:p-2 bg-spotify-light/60 hover:bg-spotify-light text-spotify-green rounded-full transition-all border border-spotify-green/30 flex items-center gap-1.5 text-xs font-bold px-2.5 sm:px-3"
          title="Inspect Specs"
        >
          <Info className="w-4 h-4" />
          <span className="hidden md:inline">Inspect Specs</span>
        </button>

        {activeProject.spreadsheetUrl && (
          <a
            href={activeProject.spreadsheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 hover:bg-spotify-light text-spotify-green hover:scale-110 rounded-full transition-all"
            title="View Testing Document (Spreadsheet/Excel)"
          >
            <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5 text-spotify-green" />
          </a>
        )}

        {activeProject.githubUrl && (
          <a
            href={activeProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 hover:bg-spotify-light text-spotify-subtext hover:text-spotify-green rounded-full transition-all hidden xs:block"
            title="View GitHub Repo"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        )}

        {/* Volume Slider (Desktop only) */}
        <div className="items-center gap-2 hidden lg:flex">
          <button onClick={() => setVolume(volume === 0 ? 80 : 0)} className="text-spotify-subtext hover:text-white">
            {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-20 h-1 bg-spotify-light accent-spotify-green rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
