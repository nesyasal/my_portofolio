"use client";

import React from 'react';
import { PERSONAL_INFO } from '@/data/cvData';
import { UserCheck, GraduationCap, MapPin, Mail, Phone, Github, Linkedin, ShieldCheck, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="p-4 sm:p-8 flex flex-col gap-6 text-neutral-900 pt-6">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900">About Me</h2>
      </div>

      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-pink-200 shadow-xl flex flex-col lg:flex-row gap-8 items-center lg:items-start relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />

        {/* Left Column: Avatar & Quick Info Badge */}
        <div className="flex flex-col items-center gap-4 shrink-0 w-full sm:w-64">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-rose-300 relative group">
            <img
              src="/nesya_cantik.jpeg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold text-pink-200">QA & Web Developer</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 bg-pink-50/90 p-4 rounded-2xl border border-pink-200 text-xs text-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">Full Name:</span>
              <span className="text-neutral-900 font-bold">{PERSONAL_INFO.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">Birth:</span>
              <span className="text-neutral-900 font-medium">{PERSONAL_INFO.birthInfo}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">Location:</span>
              <span className="text-rose-600 font-bold">Bandung, Sarijadi</span>
            </div>
          </div>
        </div>

        {/* Right Column: Full CV Bio & Education */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Header Tagline */}
          <div className="flex flex-col gap-2 border-b border-pink-200 pb-4">
            <h3 className="text-2xl font-extrabold text-neutral-900 flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <ShieldCheck className="w-6 h-6 text-rose-500" />
            </h3>
            <p className="text-rose-600 font-bold text-sm">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* CV Bio Narrative */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500">Profile Summary</h4>
            <p className="text-sm md:text-base text-neutral-800 leading-relaxed bg-pink-50/60 p-4 rounded-2xl border border-pink-200/80">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-pink-50/80 p-4 rounded-2xl border border-pink-200 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
                <GraduationCap className="w-4 h-4 text-rose-500" />
                <span>Education Background</span>
              </div>
              <h5 className="text-sm font-bold text-neutral-900">{PERSONAL_INFO.university}</h5>
              <p className="text-xs text-neutral-600 font-mono">{PERSONAL_INFO.major} ({PERSONAL_INFO.yearRange})</p>
            </div>

            <div className="bg-pink-50/80 p-4 rounded-2xl border border-pink-200 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-rose-500" />
                <span>Core QA Specialization</span>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Katalon Studio Automation, Manual Testing, Test Scenario & Case Writing, UAT Execution, Bug Verification.
              </p>
            </div>
          </div>

          {/* Quick Contacts Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs rounded-full flex items-center gap-2 transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white hover:bg-pink-50 text-neutral-800 font-bold text-xs rounded-full flex items-center gap-2 transition-all border border-pink-200 shadow-sm"
            >
              <Github className="w-4 h-4 text-rose-600" />
              <span>{PERSONAL_INFO.github}</span>
            </a>

            <div className="px-4 py-2 bg-pink-50 text-neutral-700 font-mono text-xs rounded-full flex items-center gap-2 border border-pink-200">
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
