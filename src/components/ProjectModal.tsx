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
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={closeModal}
    >
      <div
        className="bg-white border border-pink-200 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto text-neutral-900 shadow-2xl flex flex-col relative no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-pink-100 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-all border border-pink-200 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 p-6 sm:p-8 rounded-t-3xl border-b border-pink-200 flex flex-col gap-4 relative overflow-hidden text-white shadow-md">
          <div className="flex items-center gap-2 text-pink-200 text-xs font-bold uppercase tracking-widest">
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

          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            {selectedModalProject.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-pink-100 font-semibold">
            <div className="flex items-center gap-1 text-white font-bold">
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
              <FileText className="w-3.5 h-3.5 text-pink-200" />
              <span>{selectedModalProject.plays} Plays</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-6 border-b border-pink-100 flex flex-wrap items-center justify-between gap-4 bg-pink-50/50">
          <div className="flex items-center gap-4">
            <button
              onClick={() => playProject(selectedModalProject)}
              className="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg transition-all"
            >
              {isCurrentPlaying ? (
                <Pause className="w-6 h-6 fill-white stroke-white" />
              ) : (
                <Play className="w-6 h-6 fill-white stroke-white ml-0.5" />
              )}
            </button>

            {isCurrentPlaying && (
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                <AudioVisualizer isPlaying={true} barCount={4} height="h-4" color="bg-rose-500" />
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
                className="px-4 py-2 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center gap-2 transition-all hover:bg-rose-600 shadow-md"
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
                className="px-4 py-2 bg-white hover:bg-pink-100 text-neutral-800 font-bold text-xs rounded-full flex items-center gap-2 transition-all border border-pink-200 shadow-sm"
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
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-full flex items-center gap-2 transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Read Q2 Paper</span>
              </a>
            )}

            {selectedModalProject.liveUrl && !selectedModalProject.publicationUrl && (
              <a
                href={selectedModalProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white hover:bg-pink-100 text-neutral-800 font-bold text-xs rounded-full flex items-center gap-2 transition-all border border-pink-200 shadow-sm"
              >
                <ExternalLink className="w-4 h-4 text-rose-500" />
                <span>Live App Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Summary */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-rose-600 uppercase tracking-wider">Project Summary</h3>
            <p className="text-sm text-neutral-700 leading-relaxed bg-pink-50/50 p-4 rounded-2xl border border-pink-100">
              {selectedModalProject.description}
            </p>
          </div>

          {/* Key Deliverables & QA Specs */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-rose-600 uppercase tracking-wider">Key Highlights & Execution</h3>
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
            <h3 className="text-sm font-bold text-rose-600 uppercase tracking-wider">Technologies & Tools</h3>
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
