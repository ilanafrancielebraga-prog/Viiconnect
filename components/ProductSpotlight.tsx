'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, Zap, Check } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';

export function ProductSpotlight() {
  const highlights = [
    'Chip físico de alta compatibilidade com smartphones 4G e 5G',
    'Planos desenhados para atender diferentes perfis de comunicação',
    'Suporte e orientação direta com a equipe comercial VII CONNECT',
    'Praticidade na contratação e clareza em todas as etapas',
  ];

  return (
    <section className="relative py-24 bg-[#070709] border-b border-neutral-900 overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#25D5E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Artwork */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-[#0A0A0C] shadow-2xl group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/chip_telecom_product_1793199411979.jpg"
                  alt="Destaque de produto: chip moderno VII CONNECT com reflexos luminosos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/70 via-transparent to-transparent" />
              </div>

              {/* Minimal floating badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#050505]/85 backdrop-blur-md border border-neutral-800 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#D7FF32]" />
                <span>VII CONNECT · Hardware & Conexão</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase text-[#477BFF]">
              <Zap className="w-4 h-4 text-[#25D5E8]" />
              <span>Destaque do Produto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              UM CHIP.{' '}
              <span className="text-vii-gradient">NOVAS POSSIBILIDADES.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              Conheça a proposta da VII CONNECT e encontre informações sobre os chips com planos de telefonia disponíveis.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 w-full mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#25D5E8]/10 border border-[#25D5E8]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#25D5E8]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action button */}
            <a
              href={getWhatsAppUrl('consumer')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-[#050505] bg-vii-gradient rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200"
            >
              <span>QUERO SABER MAIS</span>
              <ArrowRight className="w-4 h-4 text-[#050505]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
