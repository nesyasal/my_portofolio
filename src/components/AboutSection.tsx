"use client";

import React from 'react';
import { PERSONAL_INFO } from '@/data/cvData';
import { UserCheck, GraduationCap, MapPin, Mail, Phone, Github, Linkedin, ShieldCheck, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="p-8 flex flex-col gap-6 text-white">
      <div className="flex items-center gap-3">
        <div className="w-3 h-8 bg-spotify-green rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black tracking-tight">About Me</h2>
      </div>

      <div className="bg-spotify-card rounded-3xl p-6 md:p-8 border border-spotify-light/30 shadow-2xl flex flex-col lg:flex-row gap-8 items-center lg:items-start relative overflow-hidden">
        {/* Decorative Spotify Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-spotify-green/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Column: Avatar & Quick Info Badge */}
        <div className="flex flex-col items-center gap-4 shrink-0 w-full sm:w-64">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-spotify-green/40 relative group">
            <img
              src="/nesya_cantik.jpeg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold text-spotify-green">QA & Web Developer</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 bg-spotify-black/80 p-4 rounded-2xl border border-spotify-light/30 text-xs">
            <div className="flex items-center justify-between text-spotify-subtext">
              <span>Full Name:</span>
              <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
            </div>
            <div className="flex items-center justify-between text-spotify-subtext">
              <span>Birth:</span>
              <span className="text-white font-medium">{PERSONAL_INFO.birthInfo}</span>
            </div>
            <div className="flex items-center justify-between text-spotify-subtext">
              <span>Location:</span>
              <span className="text-spotify-green font-semibold">Bandung, Sarijadi</span>
            </div>
          </div>
        </div>

        {/* Right Column: Full CV Bio & Education */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Header Tagline */}
          <div className="flex flex-col gap-2 border-b border-spotify-light/20 pb-4">
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <ShieldCheck className="w-6 h-6 text-spotify-green" />
            </h3>
            <p className="text-spotify-green font-semibold text-sm">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* CV Bio Narrative */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-spotify-subtext">Profile Summary</h4>
            <p className="text-sm md:text-base text-neutral-200 leading-relaxed bg-spotify-black/40 p-4 rounded-2xl border border-spotify-light/20">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-spotify-black/60 p-4 rounded-2xl border border-spotify-light/30 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-spotify-green font-bold text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>Education Background</span>
              </div>
              <h5 className="text-sm font-bold text-white">{PERSONAL_INFO.university}</h5>
              <p className="text-xs text-spotify-subtext font-mono">{PERSONAL_INFO.major} ({PERSONAL_INFO.yearRange})</p>
            </div>

            <div className="bg-spotify-black/60 p-4 rounded-2xl border border-spotify-light/30 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-spotify-green font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Core QA Specialization</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Katalon Studio Automation, Manual Testing, Test Scenario & Case Writing, UAT Execution, Bug Verification.
              </p>
            </div>
          </div>

          {/* Quick Contacts Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2 bg-spotify-green hover:bg-spotify-green-hover text-black font-bold text-xs rounded-full flex items-center gap-2 transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-spotify-light/80 hover:bg-spotify-light text-white font-bold text-xs rounded-full flex items-center gap-2 transition-all border border-spotify-light"
            >
              <Github className="w-4 h-4 text-spotify-green" />
              <span>{PERSONAL_INFO.github}</span>
            </a>

            <div className="px-4 py-2 bg-spotify-black/80 text-spotify-subtext font-mono text-xs rounded-full flex items-center gap-2 border border-spotify-light/30">
              <Phone className="w-3.5 h-3.5 text-spotify-green" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
