"use client";

import React from 'react';
import { ShieldCheck, Code, CheckCircle, Globe, Sparkles, UserCheck } from 'lucide-react';
import { SKILLS_DATA } from '@/data/cvData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="p-8 flex flex-col gap-8 text-white">
      <div className="flex items-center gap-3">
        <div className="w-3 h-8 bg-spotify-green rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black tracking-tight">Skills & Technical Proficiency</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quality Assurance & Automation Skills */}
        <div className="bg-spotify-card rounded-2xl p-6 border border-spotify-light/30 flex flex-col gap-5 shadow-xl">
          <div className="flex items-center gap-3 border-b border-spotify-light/30 pb-3">
            <div className="p-2.5 bg-spotify-green/20 text-spotify-green rounded-xl border border-spotify-green/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Quality Assurance & Testing</h3>
              <p className="text-xs text-spotify-subtext">Katalon Studio, Manual/Auto Test Case & UAT</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {SKILLS_DATA.qaTesting.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-neutral-200">{item?.name}</span>
                  <span className="text-spotify-green font-mono font-bold">{item?.level}%</span>
                </div>
                <div className="w-full h-2 bg-spotify-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-pink-400 to-spotify-green rounded-full transition-all duration-1000"
                    style={{ width: `${item?.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development & Tech Stack */}
        <div className="bg-spotify-card rounded-2xl p-6 border border-spotify-light/30 flex flex-col gap-5 shadow-xl">
          <div className="flex items-center gap-3 border-b border-spotify-light/30 pb-3">
            <div className="p-2.5 bg-purple-900/40 text-purple-400 rounded-xl border border-purple-500/30">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Programming & Development</h3>
              <p className="text-xs text-spotify-subtext">Python, JavaScript, Node.js, Laravel, C#, MySQL</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {SKILLS_DATA.hardSkills.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-neutral-200">{item?.name}</span>
                  <span className="text-spotify-green font-mono font-bold">{item?.level}%</span>
                </div>
                <div className="w-full h-2 bg-spotify-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-400 to-pink-300 rounded-full transition-all duration-1000"
                    style={{ width: `${item?.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft Skills & Language Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Soft Skills */}
        <div className="md:col-span-2 bg-spotify-card rounded-2xl p-6 border border-spotify-light/30 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-spotify-light/30 pb-3">
            <UserCheck className="w-5 h-5 text-spotify-green" />
            <h3 className="text-lg font-bold text-white">Soft Skills & Professional Competencies</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILLS_DATA.softSkills.map((skill, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2.5 bg-spotify-black/60 border border-spotify-light/40 p-3 rounded-xl">
                <Sparkles className="w-4 h-4 text-spotify-green shrink-0" />
                <span className="text-xs font-semibold text-neutral-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-spotify-card rounded-2xl p-6 border border-spotify-light/30 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-spotify-light/30 pb-3">
            <Globe className="w-5 h-5 text-spotify-green" />
            <h3 className="text-lg font-bold text-white">Languages</h3>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            {SKILLS_DATA.languages.map((lang, lIdx) => (
              <div key={lIdx} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-white font-bold">{lang.name}</span>
                  <span className="text-spotify-green">{lang.detail}</span>
                </div>
                <div className="w-full h-2 bg-spotify-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-spotify-green rounded-full"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
