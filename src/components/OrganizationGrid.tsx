"use client";

import React, { useState } from 'react';
import { Play, Users, Award, Calendar, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { ORGANIZATIONS, OrganizationItem } from '@/data/cvData';

export const OrganizationGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="organizations" className="p-8 flex flex-col gap-6 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-spotify-green rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Organizations & Leadership</h2>
          <span className="text-xs bg-spotify-light text-spotify-subtext px-2.5 py-1 rounded-full font-mono">
            {ORGANIZATIONS.length} Albums
          </span>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ORGANIZATIONS.map(org => {
          const isExpanded = expandedId === org.id;

          return (
            <div
              key={org.id}
              onClick={() => toggleExpand(org.id)}
              className="bg-spotify-card hover:bg-spotify-card-hover rounded-2xl p-5 border border-spotify-light/30 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Top Album Sleeve Visual Header */}
              <div className="h-28 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 p-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-spotify-green border border-spotify-green/30">
                    {org.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-spotify-black/70 flex items-center justify-center text-white">
                    <Users className="w-4 h-4 text-spotify-green" />
                  </div>
                </div>

                <div className="text-xs text-white/80 font-mono flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded w-max">
                  <Calendar className="w-3.5 h-3.5 text-spotify-green" />
                  <span>{org.period}</span>
                </div>

                {/* Spotify Hover Play Button Overlay */}
                <div className="absolute right-3 bottom-3 w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center text-black shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  <Play className="w-5 h-5 fill-black stroke-black ml-0.5" />
                </div>
              </div>

              {/* Info Body */}
              <div className="flex flex-col gap-2 pt-4">
                <h3 className="text-lg font-bold text-white group-hover:text-spotify-green transition-colors leading-snug">
                  {org.name}
                </h3>
                <span className="text-sm font-semibold text-spotify-green">
                  {org.role}
                </span>

                {/* Bullet Points */}
                <div className="flex flex-col gap-1.5 pt-2 text-xs text-spotify-subtext">
                  {org.description.slice(0, isExpanded ? org.description.length : 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-spotify-green shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Gained Tags */}
                <div className="flex items-center gap-1.5 flex-wrap pt-3">
                  {org.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] bg-spotify-light/70 text-spotify-subtext border border-spotify-light px-2 py-0.5 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand Toggle Bar */}
              <div className="pt-3 mt-2 border-t border-spotify-light/20 flex items-center justify-between text-xs text-spotify-subtext font-semibold">
                <span>{isExpanded ? 'Hide Details' : 'View Full Role'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4 text-spotify-green" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
