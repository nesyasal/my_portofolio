"use client";

import React from 'react';
import { X, Play, Pause, Github, ExternalLink, ShieldCheck, Sparkles, CheckCircle2, Layers, Calendar, User, FileText, FileSpreadsheet } from 'lucide-react';
import { useSpotifyPlayer } from '@/context/SpotifyPlayerContext';
import { AudioVisualizer } from './AudioVisualizer';

export const ProjectModal: React.FC = () => {
  const { selectedModalProject, closeModal, activeProject, isPlaying, playProject } = useSpotifyPlayer();

  if (!selectedModalProject) return null;

  const isCurrentPlaying = activeProject.id === selectedModalProject.id && isPlaying;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={closeModal}
    >
      <div
        className="bg-spotify-card border border-spotify-light/40 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto text-white shadow-2xl flex flex-col relative scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-spotify-black/80 hover:bg-spotify-light flex items-center justify-center text-spotify-subtext hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-pink-950 via-rose-950 to-spotify-card p-6 sm:p-8 rounded-t-3xl border-b border-spotify-light/30 flex flex-col gap-4 relative overflow-hidden">
          <div className="flex items-center gap-2 text-spotify-green text-xs font-bold uppercase tracking-widest">
            {selectedModalProject.category === 'QA' ? (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>QA & Katalon Automation Suite</span>
              </>
            ) : selectedModalProject.publicationUrl ? (
              <>
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Scopus Q2 International Journal</span>
              </>
            ) : (
              <>
                <Layers className="w-4 h-4" />
                <span>{selectedModalProject.category} Project</span>
              </>
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            {selectedModalProject.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-spotify-subtext font-semibold">
            <div className="flex items-center gap-1 text-spotify-green font-bold">
              <User className="w-3.5 h-3.5" />
              <span>{selectedModalProject.role}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Year {selectedModalProject.year}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 font-mono">
              <FileText className="w-3.5 h-3.5 text-spotify-green" />
              <span>{selectedModalProject.plays} Plays</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-6 border-b border-spotify-light/20 flex flex-wrap items-center justify-between gap-4 bg-spotify-black/40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => playProject(selectedModalProject)}
              className="w-12 h-12 rounded-full bg-spotify-green hover:bg-spotify-green-hover text-black flex items-center justify-center shadow-lg transition-all"
            >
              {isCurrentPlaying ? (
                <Pause className="w-6 h-6 fill-black stroke-black" />
              ) : (
                <Play className="w-6 h-6 fill-black stroke-black ml-0.5" />
              )}
            </button>

            {isCurrentPlaying && (
              <div className="flex items-center gap-2 text-spotify-green text-xs font-bold">
                <AudioVisualizer isPlaying={true} barCount={4} height="h-4" color="bg-spotify-green" />
                <span>Now Playing Project Track</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {selectedModalProject.spreadsheetUrl && (
              <a
                href={selectedModalProject.spreadsheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-spotify-green text-black font-bold text-xs rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-md"
              >
                <FileSpreadsheet className="w-4 h-4 text-black" />
                <span>Testing Document</span>
                <ExternalLink className="w-3 h-3 text-black" />
              </a>
            )}

            {selectedModalProject.githubUrl && (
              <a
                href={selectedModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-spotify-light/80 hover:bg-spotify-light text-white font-bold text-xs rounded-full flex items-center gap-2 transition-all border border-spotify-light"
              >
                <Github className="w-4 h-4 text-spotify-green" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-spotify-subtext" />
              </a>
            )}

            {selectedModalProject.publicationUrl && (
              <a
                href={selectedModalProject.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-900/60 hover:bg-purple-800 text-purple-200 font-bold text-xs rounded-full flex items-center gap-2 transition-all border border-purple-500/40"
              >
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span>Read Q2 Paper</span>
              </a>
            )}

            {selectedModalProject.liveUrl && !selectedModalProject.publicationUrl && (
              <a
                href={selectedModalProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-spotify-light/90 hover:bg-spotify-light text-white font-bold text-xs rounded-full flex items-center gap-2 transition-all border border-spotify-light/60"
              >
                <ExternalLink className="w-4 h-4 text-spotify-green" />
                <span>Live App Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Summary */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-spotify-green uppercase tracking-wider">Project Summary</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {selectedModalProject.description}
            </p>
          </div>

          {/* Key Deliverables & QA Specs */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-spotify-green uppercase tracking-wider">Key Highlights & Execution</h3>
            <div className="flex flex-col gap-2.5">
              {selectedModalProject.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-spotify-black/60 p-3.5 rounded-xl border border-spotify-light/30">
                  <CheckCircle2 className="w-4 h-4 text-spotify-green shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-200 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-spotify-green uppercase tracking-wider">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {selectedModalProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-spotify-light text-spotify-subtext border border-spotify-light/60 rounded-full text-xs font-mono font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
