'use client';

import React from 'react';
import Image from 'next/image';
import { Briefcase, FileCheck, PhoneCall, ArrowDown, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';

export function ResellerArea() {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Conheça o modelo de revenda',
      description: 'Apresentação detalhada da proposta, canais de distribuição e funcionamento da parceria.',
    },
    {
      icon: FileCheck,
      title: 'Consulte as condições comerciais',
      description: 'Informações transparentes sobre fornecimento, suporte e diretrizes para parceiros.',
    },
    {
      icon: PhoneCall,
      title: 'Fale com nossa equipe',
      description: 'Canal direto para tirar dúvidas, alinhar objetivos e verificar a viabilidade da revenda.',
    },
  ];

  return (
    <section id="seja-revendedor" className="relative py-24 bg-[#050505] border-b border-neutral-900 overflow-hidden">
      {/* Dynamic ambient diagonal beams */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#A943F5]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D7FF32]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase text-[#D7FF32]">
              <span className="w-2 h-2 rounded-sm bg-[#D7FF32]" />
              <span>OPORTUNIDADE COMERCIAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
              SUA PRÓXIMA OPORTUNIDADE <br />
              <span className="text-vii-gradient">PODE COMEÇAR AQUI.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              Quer empreender e conhecer novas possibilidades comerciais? Faça parte da rede de revendedores VII CONNECT e descubra como funciona nossa proposta de revenda de chips com planos de telefonia.
            </p>

            {/* 3 Pillars of Reseller program without false promises */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0C0C0F] border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#25D5E8] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#formulario-revenda"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#050505] bg-vii-gradient rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 text-center"
              >
                <span>QUERO SER REVENDEDOR</span>
                <ArrowDown className="w-4 h-4 text-[#050505]" />
              </a>

              <a
                href={getWhatsAppUrl('reseller')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 rounded-xl active:scale-[0.98] transition-all duration-200 text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#25D5E8]" />
                <span>TIRAR DÚVIDAS PELO WHATSAPP</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              Comunicação responsável: consulte os requisitos comerciais e disponibilidade regional com a equipe oficial.
            </p>
          </div>

          {/* Right Column: Realistic Entrepreneur Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-[#0C0C0E] shadow-2xl group">
              <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/5] w-full">
                <Image
                  src="/images/revendedor_empreendedor_1793199412485.jpg"
                  alt="Profissional empreendedor confiante e motivado da rede VII CONNECT"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark gradient base scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#050505]/90 backdrop-blur-md border border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-vii-gradient flex items-center justify-center text-[#050505] font-black text-sm">
                      VII
                    </div>
                    <div>
                      <p className="text-xs text-[#D7FF32] font-semibold uppercase tracking-wider">Rede de Parceiros</p>
                      <p className="text-sm font-bold text-white">Empreenda com tecnologia e suporte</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
