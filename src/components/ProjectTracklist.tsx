"use client";

import React from 'react';
import { Play, Pause, ExternalLink, Github, Sparkles, Info, ShieldCheck, Clock, Layers, FileSpreadsheet } from 'lucide-react';
import { PROJECTS, ProjectItem } from '@/data/cvData';
import { useSpotifyPlayer } from '@/context/SpotifyPlayerContext';
import { AudioVisualizer } from './AudioVisualizer';

export const ProjectTracklist: React.FC = () => {
  const { activeProject, isPlaying, playProject, activeFilter, openModal } = useSpotifyPlayer();

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 text-neutral-900">
      {/* Header Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-neutral-900">Top Projects Tracklist</h2>
          <span className="text-xs bg-pink-100 text-rose-700 px-2.5 py-1 rounded-full font-mono border border-pink-200">
            {filteredProjects.length} Tracks
          </span>
        </div>

        <div className="text-xs text-neutral-600 font-medium hidden sm:block">
          Click track row to play audio & inspect specs
        </div>
      </div>

      {/* Desktop Tracklist Table Header (Hidden on Mobile) */}
      <div className="hidden md:grid grid-cols-12 px-4 py-2 text-xs font-bold text-neutral-600 uppercase tracking-wider border-b border-pink-200">
        <div className="col-span-1 text-center">#</div>
        <div className="col-span-5">Title & Tech Stack</div>
        <div className="col-span-4">Role & Category</div>
        <div className="col-span-1 text-center">Year</div>
        <div className="col-span-1 text-right pr-2">Links & Inspect</div>
      </div>

      {/* Track List Items */}
      <div className="flex flex-col gap-3 md:gap-1">
        {filteredProjects.map((project, index) => {
          const isCurrent = activeProject.id === project.id;
          const isCurrentPlaying = isCurrent && isPlaying;

          return (
            <React.Fragment key={project.id}>
              {/* DESKTOP VIEW (md screens and above) */}
              <div
                className={`hidden md:grid grid-cols-12 items-center px-4 py-3.5 rounded-xl transition-all group cursor-pointer ${
                  isCurrent
                    ? 'bg-white border border-rose-400 shadow-md'
                    : 'bg-white/80 hover:bg-white border border-pink-100'
                }`}
                onClick={() => playProject(project)}
              >
                {/* Column 1: Index / Play Icon / Visualizer */}
                <div className="col-span-1 flex items-center justify-center">
                  {isCurrentPlaying ? (
                    <AudioVisualizer isPlaying={true} barCount={3} height="h-4" color="bg-rose-500" />
                  ) : (
                    <div className="relative">
                      <span className={`text-sm font-semibold group-hover:hidden ${isCurrent ? 'text-rose-600 font-bold' : 'text-neutral-500'}`}>
                        {index + 1}
                      </span>
                      <Play className="w-4 h-4 text-rose-600 fill-rose-600 hidden group-hover:block ml-0.5" />
                    </div>
                  )}
                </div>

                {/* Column 2: Title & Tech Tags */}
                <div className="col-span-5 flex flex-col gap-1 pr-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-sm font-bold truncate ${isCurrent ? 'text-rose-600' : 'text-neutral-900 group-hover:text-rose-600'} transition-colors`}>
                      {project.title}
                    </span>
                    {project.publicationUrl && (
                      <span className="text-[10px] bg-purple-100 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-purple-600" />
                        Q2 Journal
                      </span>
                    )}
                    {project.category === 'QA' && (
                      <span className="text-[10px] bg-pink-100 text-rose-700 border border-pink-200 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-rose-500" />
                        QA Katalon
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-neutral-600 line-clamp-1">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-pink-50 text-neutral-700 border border-pink-200 px-2 py-0.5 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] text-neutral-500">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Column 3: Role & Category */}
                <div className="col-span-4 flex flex-col">
                  <span className="text-xs font-semibold text-neutral-800">{project.role}</span>
                  <span className="text-[11px] text-neutral-500">{project.category}</span>
                </div>

                {/* Column 4: Year */}
                <div className="col-span-1 text-center">
                  <span className="text-xs text-neutral-500 font-mono">{project.year}</span>
                </div>

                {/* Column 5: Action Links */}
                <div
                  className="col-span-1 flex items-center justify-end gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => openModal(project)}
                    className="p-1.5 hover:bg-pink-100 rounded-full text-rose-600 transition-all"
                    title="Inspect QA Scenarios & Full Specs"
                  >
                    <Info className="w-4 h-4 text-rose-600" />
                  </button>

                  {project.spreadsheetUrl && (
                    <a
                      href={project.spreadsheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-pink-100 rounded-full text-rose-600 hover:scale-110 transition-all"
                      title="View Testing Document (Spreadsheet/Excel)"
                    >
                      <FileSpreadsheet className="w-4 h-4 text-rose-600" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-pink-100 rounded-full text-neutral-600 hover:text-rose-600 transition-all"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-pink-100 rounded-full text-neutral-600 hover:text-rose-600 transition-all"
                      title="Open Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* MOBILE CARD VIEW (< md screens) */}
              <div
                className={`md:hidden p-4 rounded-2xl transition-all cursor-pointer border flex flex-col gap-3 shadow-md ${
                  isCurrent
                    ? 'bg-white border-rose-400'
                    : 'bg-white/90 border-pink-200 hover:border-rose-300'
                }`}
                onClick={() => playProject(project)}
              >
                {/* Header Row: Number + Title + Action Icons */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    <div className="flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-pink-50 border border-pink-200 mt-0.5">
                      {isCurrentPlaying ? (
                        <AudioVisualizer isPlaying={true} barCount={3} height="h-3" color="bg-rose-500" />
                      ) : (
                        <span className={`text-xs font-mono ${isCurrent ? 'text-rose-600 font-bold' : 'text-neutral-500'}`}>
                          {index + 1}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <h3 className={`text-sm font-bold leading-snug break-words ${isCurrent ? 'text-rose-600' : 'text-neutral-900'}`}>
                        {project.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-rose-500 mt-0.5">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Action Icons Bar */}
                  <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => openModal(project)}
                      className="p-1.5 bg-pink-50 text-rose-600 rounded-full border border-pink-200 hover:bg-pink-100"
                      title="Inspect Specs"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    {project.spreadsheetUrl && (
                      <a
                        href={project.spreadsheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-pink-50 text-rose-600 rounded-full border border-pink-200 hover:bg-pink-100"
                        title="Spreadsheet Document"
                      >
                        <FileSpreadsheet className="w-4 h-4" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-pink-50 text-neutral-600 rounded-full border border-pink-200 hover:text-rose-600"
                        title="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-pink-50 text-neutral-600 rounded-full border border-pink-200 hover:text-rose-600"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Category & Badges */}
                <div className="flex items-center justify-between gap-2 text-[10px] text-neutral-500 border-t border-pink-100 pt-2 font-mono">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="bg-pink-50 text-neutral-700 border border-pink-200 px-2 py-0.5 rounded font-sans font-medium">
                      {project.category}
                    </span>
                    {project.publicationUrl && (
                      <span className="bg-purple-100 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                        Q2 Journal
                      </span>
                    )}
                    {project.category === 'QA' && (
                      <span className="bg-pink-100 text-rose-700 border border-pink-200 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5 text-rose-500" />
                        QA Katalon
                      </span>
                    )}
                  </div>
                  <span>Year {project.year}</span>
                </div>

                {/* Description Snippet */}
                <p className="text-xs text-neutral-700 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex items-center gap-1 flex-wrap pt-1">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-pink-50 text-neutral-700 border border-pink-200 px-2 py-0.5 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
