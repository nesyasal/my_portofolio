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
    <section id="projects" className="p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 text-white">
      {/* Header Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-spotify-green rounded-full" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">Top Projects Tracklist</h2>
          <span className="text-xs bg-spotify-light text-spotify-subtext px-2.5 py-1 rounded-full font-mono">
            {filteredProjects.length} Tracks
          </span>
        </div>

        <div className="text-xs text-spotify-subtext font-medium hidden sm:block">
          Click track row to play audio & inspect specs
        </div>
      </div>

      {/* Desktop Tracklist Table Header (Hidden on Mobile) */}
      <div className="hidden md:grid grid-cols-12 px-4 py-2 text-xs font-bold text-spotify-subtext uppercase tracking-wider border-b border-spotify-light/30">
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
                    ? 'bg-spotify-light/80 border border-spotify-green/40 shadow-lg'
                    : 'hover:bg-spotify-card/80 border border-transparent'
                }`}
                onClick={() => playProject(project)}
              >
                {/* Column 1: Index / Play Icon / Visualizer */}
                <div className="col-span-1 flex items-center justify-center">
                  {isCurrentPlaying ? (
                    <AudioVisualizer isPlaying={true} barCount={3} height="h-4" color="bg-spotify-green" />
                  ) : (
                    <div className="relative">
                      <span className={`text-sm font-semibold group-hover:hidden ${isCurrent ? 'text-spotify-green font-bold' : 'text-spotify-subtext'}`}>
                        {index + 1}
                      </span>
                      <Play className="w-4 h-4 text-white fill-white hidden group-hover:block ml-0.5" />
                    </div>
                  )}
                </div>

                {/* Column 2: Title & Tech Tags */}
                <div className="col-span-5 flex flex-col gap-1 pr-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-sm font-bold truncate ${isCurrent ? 'text-spotify-green' : 'text-white group-hover:text-spotify-green'} transition-colors`}>
                      {project.title}
                    </span>
                    {project.publicationUrl && (
                      <span className="text-[10px] bg-purple-900/60 text-purple-200 border border-purple-500/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        Q2 Journal
                      </span>
                    )}
                    {project.category === 'QA' && (
                      <span className="text-[10px] bg-pink-950/80 text-spotify-green border border-spotify-green/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-spotify-green" />
                        QA Katalon
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-spotify-subtext line-clamp-1">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-spotify-black/80 text-spotify-subtext border border-spotify-light/30 px-2 py-0.5 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] text-spotify-subtext">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Column 3: Role & Category */}
                <div className="col-span-4 flex flex-col">
                  <span className="text-xs font-semibold text-neutral-200">{project.role}</span>
                  <span className="text-[11px] text-spotify-subtext">{project.category}</span>
                </div>

                {/* Column 4: Year */}
                <div className="col-span-1 text-center">
                  <span className="text-xs text-spotify-subtext font-mono">{project.year}</span>
                </div>

                {/* Column 5: Action Links */}
                <div
                  className="col-span-1 flex items-center justify-end gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => openModal(project)}
                    className="p-1.5 hover:bg-spotify-light rounded-full text-spotify-subtext hover:text-white transition-all"
                    title="Inspect QA Scenarios & Full Specs"
                  >
                    <Info className="w-4 h-4 text-spotify-green" />
                  </button>

                  {project.spreadsheetUrl && (
                    <a
                      href={project.spreadsheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-spotify-light rounded-full text-spotify-green hover:scale-110 transition-all"
                      title="View Testing Document (Spreadsheet/Excel)"
                    >
                      <FileSpreadsheet className="w-4 h-4 text-spotify-green" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:bg-spotify-light rounded-full text-spotify-subtext hover:text-spotify-green transition-all"
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
                      className="p-1.5 hover:bg-spotify-light rounded-full text-spotify-subtext hover:text-spotify-green transition-all"
                      title="Open Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* MOBILE CARD VIEW (< md screens) */}
              <div
                className={`md:hidden p-4 rounded-2xl transition-all cursor-pointer border flex flex-col gap-3 ${
                  isCurrent
                    ? 'bg-spotify-card border-spotify-green shadow-xl'
                    : 'bg-spotify-card/80 border-spotify-light/30 hover:border-spotify-light'
                }`}
                onClick={() => playProject(project)}
              >
                {/* Header Row: Number + Title + Action Icons */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    <div className="flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-spotify-black border border-spotify-light/40 mt-0.5">
                      {isCurrentPlaying ? (
                        <AudioVisualizer isPlaying={true} barCount={3} height="h-3" color="bg-spotify-green" />
                      ) : (
                        <span className={`text-xs font-mono ${isCurrent ? 'text-spotify-green font-bold' : 'text-spotify-subtext'}`}>
                          {index + 1}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <h3 className={`text-sm font-bold leading-snug break-words ${isCurrent ? 'text-spotify-green' : 'text-white'}`}>
                        {project.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-spotify-green mt-0.5">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Action Icons Bar */}
                  <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => openModal(project)}
                      className="p-1.5 bg-spotify-light/80 text-spotify-green rounded-full hover:bg-spotify-light"
                      title="Inspect Specs"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    {project.spreadsheetUrl && (
                      <a
                        href={project.spreadsheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-spotify-light/80 text-spotify-green rounded-full hover:bg-spotify-light"
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
                        className="p-1.5 bg-spotify-light/80 text-spotify-subtext hover:text-white rounded-full"
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
                        className="p-1.5 bg-spotify-light/80 text-spotify-subtext hover:text-white rounded-full"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Category & Badges */}
                <div className="flex items-center justify-between gap-2 text-[10px] text-spotify-subtext border-t border-spotify-light/20 pt-2 font-mono">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="bg-spotify-black px-2 py-0.5 rounded text-neutral-300 font-sans font-medium">
                      {project.category}
                    </span>
                    {project.publicationUrl && (
                      <span className="bg-purple-900/60 text-purple-200 border border-purple-500/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-purple-300" />
                        Q2 Journal
                      </span>
                    )}
                    {project.category === 'QA' && (
                      <span className="bg-pink-950/80 text-spotify-green border border-spotify-green/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5" />
                        QA Katalon
                      </span>
                    )}
                  </div>
                  <span>Year {project.year}</span>
                </div>

                {/* Description Snippet */}
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex items-center gap-1 flex-wrap pt-1">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-spotify-black/80 text-spotify-subtext border border-spotify-light/40 px-2 py-0.5 rounded font-mono"
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
