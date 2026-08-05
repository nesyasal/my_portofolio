"use client";

import React, { useState } from 'react';
import { Award, Code2, Database, FileCode, Cpu, ShieldCheck, Mic, Radio, Eye, FileText, Image as ImageIcon, ExternalLink, X } from 'lucide-react';
import { CERTIFICATIONS, CertificationItem } from '@/data/cvData';

export const CertificationsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-rose-500" />;
      case 'Database': return <Database className="w-5 h-5 text-rose-500" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-rose-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-rose-500" />;
      case 'Mic': return <Mic className="w-5 h-5 text-rose-500" />;
      case 'Radio': return <Radio className="w-5 h-5 text-rose-500" />;
      default: return <Award className="w-5 h-5 text-rose-500" />;
    }
  };

  const handleOpenCertificate = (cert: CertificationItem) => {
    if (cert.certificateUrl) {
      window.open(cert.certificateUrl, '_blank');
    }
  };

  return (
    <section id="certifications" className="p-4 sm:p-8 flex flex-col gap-6 text-neutral-900 pb-32">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-rose-400 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow">Certifications & Accreditations</h2>
          <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-mono backdrop-blur-sm">
            {CERTIFICATIONS.length} Verified Proofs
          </span>
        </div>
        <span className="text-xs text-rose-100 hidden sm:block">
          Click any badge to view original PDF / Image certificate proof
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CERTIFICATIONS.map(cert => (
          <div
            key={cert.id}
            onClick={() => handleOpenCertificate(cert)}
            className="bg-white/95 hover:bg-white p-4 rounded-xl border border-pink-200 transition-all duration-300 flex flex-col justify-between group shadow-xl cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shrink-0 border border-pink-200 group-hover:border-rose-400 group-hover:scale-105 transition-all shadow-sm">
                {getIcon(cert.iconName)}
              </div>

              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-xs font-bold text-neutral-900 group-hover:text-rose-600 transition-colors leading-snug line-clamp-2">
                  {cert.title}
                </span>
                <span className="text-[11px] text-neutral-500 truncate">
                  {cert.issuer}
                </span>
              </div>
            </div>

            {/* Bottom Proof Actions */}
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-pink-100">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] bg-pink-100 text-rose-700 px-2 py-0.5 rounded font-mono">
                  {cert.year}
                </span>
                <span className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded font-bold shadow-xs">
                  {cert.type}
                </span>
              </div>

              {/* View Proof Button */}
              <div className="flex items-center gap-1 text-[11px] text-rose-600 font-bold group-hover:underline">
                {cert.fileType === 'pdf' ? (
                  <FileText className="w-3.5 h-3.5 text-rose-500" />
                ) : (
                  <ImageIcon className="w-3.5 h-3.5 text-rose-500" />
                )}
                <span>View Proof</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
