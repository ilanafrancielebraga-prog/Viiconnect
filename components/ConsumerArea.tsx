'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';
import { Smartphone, MessagesSquare, CheckCircle2, ArrowUpRight, HelpCircle } from 'lucide-react';

export function ConsumerArea() {
  const steps = [
    {
      number: '01',
      title: 'Conheça as opções disponíveis',
      description: 'Entre em contato e informe o perfil de uso e necessidades para sua comunicação.',
      icon: Smartphone,
    },
    {
      number: '02',
      title: 'Converse com nossa equipe',
      description: 'Nossos atendentes esclarecem como funcionam os chips e os planos disponíveis.',
      icon: MessagesSquare,
    },
    {
      number: '03',
      title: 'Consulte as condições de contratação e ativação',
      description: 'Receba orientações claras sobre disponibilidade na sua região e etapas de ativação.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="para-voce" className="relative py-24 bg-[#050505] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase text-[#25D5E8]">
            <span className="w-2 h-2 rounded-sm bg-[#25D5E8]" />
            <span>PARA VOCÊ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            ENCONTRE UMA OPÇÃO <br className="hidden sm:inline" />
            <span className="text-vii-gradient">PARA SE CONECTAR.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Está procurando um chip com plano de telefonia? Entre em contato com a VII CONNECT, conheça as opções disponíveis e tire suas dúvidas com nossa equipe.
          </p>
        </div>

        {/* 3 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-6 sm:p-8 rounded-2xl bg-[#0B0B0D] border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Index & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-neutral-700 group-hover:text-[#25D5E8] transition-colors tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:text-[#D7FF32] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center gap-2 text-xs text-neutral-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF32]" />
                  <span>Atendimento consultivo</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Notice & Primary Action Button */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0E0E12] via-[#09090C] to-[#0E0E12] border border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-1 bg-vii-gradient" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                <HelpCircle className="w-4 h-4 text-[#25D5E8]" />
                <span>Atendimento humanizado e personalizado</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Pronto para encontrar o chip ideal para você?
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Nossos consultores informam os planos vigentes, valores atualizados e prazos de ativação diretamente no WhatsApp oficial.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl('consumer')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#050505] bg-vii-gradient rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              >
                <span>CONSULTAR PLANOS NO WHATSAPP</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
