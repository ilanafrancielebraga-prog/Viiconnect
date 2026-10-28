'use client';

import React from 'react';
import { Smartphone, Users, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, BRAND } from '@/lib/constants';

export function FinalCTA() {
  return (
    <section className="relative py-24 bg-[#08080A] border-b border-neutral-900 overflow-hidden">
      {/* Background Neon Halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D7FF32]/10 via-[#25D5E8]/10 to-[#A943F5]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Slogan Top Accent */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#D7FF32]">
          <span className="w-2 h-2 rounded-sm bg-[#D7FF32]" />
          <span>{BRAND.slogan}</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          VAMOS NOS <span className="text-vii-gradient">CONECTAR?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Escolha seu próximo passo: conheça nossos planos ou converse com a equipe sobre a oportunidade de revenda.
        </p>

        {/* Dual Funnel Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto mb-10">
          <a
            href={getWhatsAppUrl('consumer')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#050505] bg-vii-gradient rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200"
          >
            <Smartphone className="w-5 h-5 text-[#050505]" />
            <span>CONHECER OS PLANOS</span>
            <ArrowUpRight className="w-4 h-4 text-[#050505]" />
          </a>

          <a
            href="#formulario-revenda"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 rounded-xl active:scale-[0.98] transition-all duration-200"
          >
            <Users className="w-5 h-5 text-[#25D5E8]" />
            <span>QUERO SER REVENDEDOR</span>
          </a>
        </div>

        {/* Visual Brand Signature */}
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-500">
          VII CONNECT — CONECTA O QUE IMPORTA.
        </p>
      </div>
    </section>
  );
}
