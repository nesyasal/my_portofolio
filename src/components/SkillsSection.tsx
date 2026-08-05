"use client";

import React from 'react';
import { ShieldCheck, Code, CheckCircle, Globe, Sparkles, UserCheck } from 'lucide-react';
import { SKILLS_DATA } from '@/data/cvData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="p-4 sm:p-8 flex flex-col gap-8 text-neutral-900">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow">Skills & Technical Proficiency</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quality Assurance & Automation Skills */}
        <div className="bg-white/95 rounded-2xl p-6 border border-pink-200 flex flex-col gap-5 shadow-xl">
          <div className="flex items-center gap-3 border-b border-pink-100 pb-3">
            <div className="p-2.5 bg-pink-100 text-rose-600 rounded-xl border border-pink-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Quality Assurance & Testing</h3>
              <p className="text-xs text-neutral-500">Katalon Studio, Manual/Auto Test Case & UAT</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {SKILLS_DATA.qaTesting.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-neutral-800">{item.name}</span>
                  <span className="text-rose-600 font-mono font-bold">{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development & Tech Stack */}
        <div className="bg-white/95 rounded-2xl p-6 border border-pink-200 flex flex-col gap-5 shadow-xl">
          <div className="flex items-center gap-3 border-b border-pink-100 pb-3">
            <div className="p-2.5 bg-pink-100 text-purple-600 rounded-xl border border-pink-200">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Programming & Development</h3>
              <p className="text-xs text-neutral-500">Python, JavaScript, Node.js, Laravel, C#, MySQL</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {SKILLS_DATA.hardSkills.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-neutral-800">{item.name}</span>
                  <span className="text-rose-600 font-mono font-bold">{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
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
        <div className="md:col-span-2 bg-white/95 rounded-2xl p-6 border border-pink-200 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-pink-100 pb-3">
            <UserCheck className="w-5 h-5 text-rose-500" />
            <h3 className="text-lg font-bold text-neutral-900">Soft Skills & Professional Competencies</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILLS_DATA.softSkills.map((skill, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2.5 bg-pink-50/80 border border-pink-200/80 p-3 rounded-xl">
                <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="text-xs font-semibold text-neutral-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white/95 rounded-2xl p-6 border border-pink-200 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-pink-100 pb-3">
            <Globe className="w-5 h-5 text-rose-500" />
            <h3 className="text-lg font-bold text-neutral-900">Languages</h3>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            {SKILLS_DATA.languages.map((lang, lIdx) => (
              <div key={lIdx} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-neutral-900 font-bold">{lang.name}</span>
                  <span className="text-rose-600">{lang.detail}</span>
                </div>
                <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-500 rounded-full"
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
