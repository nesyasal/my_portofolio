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
    <section id="organizations" className="p-4 sm:p-8 flex flex-col gap-6 text-neutral-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-rose-500 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow">Organizations & Leadership</h2>
          <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-mono backdrop-blur-sm">
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
              className="bg-white/95 hover:bg-white rounded-2xl p-5 border border-pink-200 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Top Album Sleeve Visual Header */}
              <div className={`h-28 rounded-xl bg-gradient-to-br ${org.coverGradient} p-4 flex flex-col justify-between relative overflow-hidden shadow-md`}>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white border border-white/20">
                    {org.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
                    <Users className="w-4 h-4 text-pink-200" />
                  </div>
                </div>

                <div className="text-xs text-white/90 font-mono flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded w-max">
                  <Calendar className="w-3.5 h-3.5 text-pink-200" />
                  <span>{org.period}</span>
                </div>

                {/* Spotify Hover Play Button Overlay */}
                <div className="absolute right-3 bottom-3 w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  <Play className="w-5 h-5 fill-white stroke-white ml-0.5" />
                </div>
              </div>

              {/* Info Body */}
              <div className="flex flex-col gap-2 pt-4">
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-rose-600 transition-colors leading-snug">
                  {org.name}
                </h3>
                <span className="text-sm font-bold text-rose-500">
                  {org.role}
                </span>

                {/* Bullet Points */}
                <div className="flex flex-col gap-1.5 pt-2 text-xs text-neutral-700">
                  {org.description.slice(0, isExpanded ? org.description.length : 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Gained Tags */}
                <div className="flex items-center gap-1.5 flex-wrap pt-3">
                  {org.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] bg-pink-50 text-rose-700 border border-pink-200 px-2 py-0.5 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand Toggle Bar */}
              <div className="pt-3 mt-2 border-t border-pink-100 flex items-center justify-between text-xs text-neutral-500 font-semibold">
                <span>{isExpanded ? 'Hide Details' : 'View Full Role'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4 text-rose-500" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
