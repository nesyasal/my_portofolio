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
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={closeModal}
    >
      <div
        className="bg-white border border-pink-200 rounded-3xl w-full max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-y-auto text-neutral-900 shadow-2xl flex flex-col relative scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/30 shadow-lg"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 p-5 sm:p-8 rounded-t-3xl border-b border-pink-200 flex flex-col gap-3 relative text-white shadow-md">
          <div className="flex items-center gap-2 text-pink-100 text-xs font-bold uppercase tracking-widest pr-10">
            {selectedModalProject.category === 'QA' ? (
              <>
                <ShieldCheck className="w-4 h-4 text-pink-200" />
                <span>QA & Katalon Automation Suite</span>
              </>
            ) : selectedModalProject.publicationUrl ? (
              <>
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Scopus Q2 International Journal</span>
              </>
            ) : (
              <>
                <Layers className="w-4 h-4 text-pink-200" />
                <span>{selectedModalProject.category} Project</span>
              </>
            )}
          </div>

          <h2 className="text-xl sm:text-3xl font-black text-white leading-snug pr-10">
            {selectedModalProject.title}
          </h2>

          <div className="flex flex-wrap items-center gap-3 text-xs text-pink-100 font-semibold pt-1">
            <div className="flex items-center gap-1 text-white font-bold bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-xs">
              <User className="w-3.5 h-3.5" />
              <span>{selectedModalProject.role}</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>Year {selectedModalProject.year}</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-xs font-mono">
              <FileText className="w-3.5 h-3.5 text-pink-200" />
              <span>{selectedModalProject.plays} Plays</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-4 sm:p-6 border-b border-pink-100 flex flex-wrap items-center justify-between gap-3 bg-pink-50/60">
          <div className="flex items-center gap-3">
            <button
              onClick={() => playProject(selectedModalProject)}
              className="w-11 h-11 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg transition-all"
            >
              {isCurrentPlaying ? (
                <Pause className="w-5 h-5 fill-white stroke-white" />
              ) : (
                <Play className="w-5 h-5 fill-white stroke-white ml-0.5" />
              )}
            </button>

            {isCurrentPlaying && (
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                <AudioVisualizer isPlaying={true} barCount={4} height="h-4" color="bg-rose-500" />
                <span className="hidden sm:inline">Now Playing Project Track</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {selectedModalProject.spreadsheetUrl && (
              <a
                href={selectedModalProject.spreadsheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md flex-1 sm:flex-initial"
              >
                <FileSpreadsheet className="w-4 h-4 text-white" />
                <span>Testing Document (Spreadsheet)</span>
                <ExternalLink className="w-3 h-3 text-white" />
              </a>
            )}

            {selectedModalProject.githubUrl && (
              <a
                href={selectedModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white hover:bg-pink-100 text-neutral-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all border border-pink-200 shadow-xs flex-1 sm:flex-initial"
              >
                <Github className="w-4 h-4 text-rose-600" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            )}

            {selectedModalProject.publicationUrl && (
              <a
                href={selectedModalProject.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md flex-1 sm:flex-initial"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Read Q2 Paper</span>
                <ExternalLink className="w-3 h-3 text-purple-200" />
              </a>
            )}

            {selectedModalProject.liveUrl && !selectedModalProject.publicationUrl && (
              <a
                href={selectedModalProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white hover:bg-pink-100 text-neutral-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all border border-pink-200 shadow-xs flex-1 sm:flex-initial"
              >
                <ExternalLink className="w-4 h-4 text-rose-500" />
                <span>Live App Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-8 flex flex-col gap-6">
          {/* Summary */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold text-rose-600 uppercase tracking-wider">Project Summary</h3>
            <p className="text-sm text-neutral-800 leading-relaxed bg-pink-50/50 p-4 rounded-2xl border border-pink-100">
              {selectedModalProject.description}
            </p>
          </div>

          {/* Key Deliverables & QA Specs */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-rose-600 uppercase tracking-wider">Key Highlights & Execution</h3>
            <div className="flex flex-col gap-2.5">
              {selectedModalProject.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-pink-50/70 p-3.5 rounded-xl border border-pink-200">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-800 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-rose-600 uppercase tracking-wider">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {selectedModalProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-pink-50 text-rose-700 border border-pink-200 rounded-full text-xs font-mono font-semibold"
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
