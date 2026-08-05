"use client";

import React from 'react';

interface AudioVisualizerProps {
  isPlaying: boolean;
  barCount?: number;
  height?: string;
  color?: string;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  isPlaying,
  barCount = 4,
  height = "h-4",
  color = "bg-spotify-green"
}) => {
  return (
    <div className={`flex items-end gap-[3px] ${height}`}>
      {Array.from({ length: barCount }).map((_, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full transition-all duration-300 ${color} ${
            isPlaying ? 'animate-equalizer' : 'h-[30%]'
          }`}
          style={{
            animationDelay: isPlaying ? `${i * 0.25}s` : '0s',
            animationDuration: `${0.6 + (i % 3) * 0.3}s`
          }}
        />
      ))}
    </div>
  );
};
