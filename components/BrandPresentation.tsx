'use client';

import React from 'react';
import Image from 'next/image';
import { Radio, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';

export function BrandPresentation() {
  const pillars = [
    {
      icon: Radio,
      title: 'Conectividade Acessível',
      description: 'Opções pensadas para aproximar você do que realmente importa no seu dia a dia.',
    },
    {
      icon: Headphones,
      title: 'Atendimento Direto',
      description: 'Converse de forma transparente com pessoas reais prontas para esclarecer suas dúvidas.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparência Comercial',
      description: 'Condições informadas com clareza, respeito e responsabilidade em cada etapa.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#080808] border-b border-neutral-900 overflow-hidden">
      {/* Subtle diagonal ambient illumination */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#25D5E8]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] bg-[#A943F5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase: Chip + Smartphone Product Render */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#0C0C0E] shadow-2xl group">
              {/* Corner diagonal accent */}
              <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-[#D7FF32] to-[#25D5E8] z-20" />
              
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/chip_telecom_product_1793199411979.jpg"
                  alt="Chip VII CONNECT de alta tecnologia ao lado de smartphone moderno"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-transparent opacity-40" />
              </div>

              {/* Caption metadata */}
              <div className="p-5 border-t border-neutral-800/80 bg-[#0A0A0C]/90">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#25D5E8] font-bold">Chip Físico VII CONNECT</span>
                    <p className="text-sm text-neutral-300 font-medium">Tecnologia, estabilidade e praticidade</p>
                  </div>
                  <a
                    href={getWhatsAppUrl('consumer')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#D7FF32] transition-colors"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Pillars */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase text-[#D7FF32]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF32]" />
              <span>Apresentação da Marca</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              UMA NOVA FORMA DE <br className="hidden sm:block" />
              <span className="text-vii-gradient">SE CONECTAR.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              A VII CONNECT aproxima pessoas de novas possibilidades de comunicação. Conheça nossos chips com planos de telefonia e fale com nossa equipe para descobrir as opções disponíveis para você.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-4 w-full">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/70 hover:border-neutral-700 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neutral-800/80 border border-neutral-700/80 flex items-center justify-center shrink-0 text-[#25D5E8]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
