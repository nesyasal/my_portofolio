"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROJECTS, ProjectItem } from '@/data/cvData';

interface SpotifyPlayerContextType {
  activeProject: ProjectItem;
  isPlaying: boolean;
  volume: number;
  progress: number;
  activeFilter: string;
  selectedModalProject: ProjectItem | null;
  isSidebarOpen: boolean;
  playProject: (project: ProjectItem) => void;
  togglePlay: () => void;
  setVolume: (val: number) => void;
  setActiveFilter: (filter: string) => void;
  openModal: (project: ProjectItem) => void;
  closeModal: () => void;
  playNext: () => void;
  playPrev: () => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const SpotifyPlayerContext = createContext<SpotifyPlayerContextType | undefined>(undefined);

export const SpotifyPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeProject, setActiveProject] = useState<ProjectItem>(PROJECTS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(80);
  const [progress, setProgress] = useState<number>(15);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Playback timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            playNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeProject]);

  const playProject = (project: ProjectItem) => {
    if (activeProject.id === project.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveProject(project);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const openModal = (project: ProjectItem) => {
    setSelectedModalProject(project);
  };

  const closeModal = () => {
    setSelectedModalProject(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const playNext = () => {
    const currentIndex = PROJECTS.findIndex(p => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setActiveProject(PROJECTS[nextIndex]);
    setProgress(0);
  };

  const playPrev = () => {
    const currentIndex = PROJECTS.findIndex(p => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setActiveProject(PROJECTS[prevIndex]);
    setProgress(0);
  };

  return (
    <SpotifyPlayerContext.Provider
      value={{
        activeProject,
        isPlaying,
        volume,
        progress,
        activeFilter,
        selectedModalProject,
        isSidebarOpen,
        playProject,
        togglePlay,
        setVolume,
        setActiveFilter,
        openModal,
        closeModal,
        playNext,
        playPrev,
        toggleSidebar,
        closeSidebar
      }}
    >
      {children}
    </SpotifyPlayerContext.Provider>
  );
};

export const useSpotifyPlayer = () => {
  const context = useContext(SpotifyPlayerContext);
  if (!context) {
    throw new Error('useSpotifyPlayer must be used within SpotifyPlayerProvider');
  }
  return context;
};
