'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, MessageCircle, Sparkles, Smartphone, Users } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#050505] overflow-hidden border-b border-neutral-900"
    >
      {/* Background Diagonal Gradient Beam & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-diagonal-stripes" />
      
      {/* Radiant ambient glow orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#25D5E8]/10 via-[#477BFF]/10 to-[#A943F5]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subtitle, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Visual Brand Signature / Kicker */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-300">
              <span className="w-2.5 h-2.5 rounded-sm bg-vii-gradient shrink-0" />
              <span>VII CONNECT</span>
              <span className="text-neutral-500">·</span>
              <span className="text-[#25D5E8]">Conecta o que importa.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
              CONECTE O QUE{' '}
              <span className="text-vii-gradient">IMPORTA.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Conheça a VII CONNECT e descubra nossas opções de chips com planos de telefonia.
            </p>

            {/* Action Buttons: Dual Funnel (Consumer & Reseller) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#para-voce"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-bold text-[#050505] bg-vii-gradient rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 text-center"
              >
                <Smartphone className="w-5 h-5 text-[#050505]" />
                <span>QUERO CONHECER OS PLANOS</span>
              </a>

              <a
                href="#seja-revendedor"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-bold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 rounded-xl active:scale-[0.98] transition-all duration-200 text-center"
              >
                <Users className="w-5 h-5 text-[#25D5E8]" />
                <span>QUERO SER REVENDEDOR</span>
              </a>
            </div>

            {/* Direct WhatsApp Quick Consultation Link */}
            <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
              <MessageCircle className="w-4 h-4 text-[#D7FF32]" />
              <span>Dúvidas imediatas?</span>
              <a
                href={getWhatsAppUrl('consumer')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#25D5E8] underline underline-offset-4 font-medium transition-colors"
              >
                Fale com a equipe comercial no WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Photography with Diagonal Aesthetic Frame */}
          <div className="lg:col-span-5 relative">
            {/* Diagonal Decorative Color Accent Bars */}
            <div className="absolute -top-4 -left-4 w-24 h-2 bg-gradient-to-r from-[#D7FF32] to-[#25D5E8] rounded-full blur-[1px] opacity-75" />
            <div className="absolute -bottom-4 -right-4 w-28 h-2 bg-gradient-to-r from-[#477BFF] to-[#A943F5] rounded-full blur-[1px] opacity-75" />

            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full">
                <Image
                  src="/images/hero_person_smartphone_1793199410918.jpg"
                  alt="Pessoa conectada utilizando smartphone com tranquilidade e estilo"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  referrerPolicy="no-referrer"
                />
                
                {/* Bottom subtle gradient scrim to merge seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

                {/* Minimalist In-frame Brand Anchor */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A0A0A]/85 backdrop-blur-md border border-neutral-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Tecnologia & Proximidade</p>
                      <p className="text-sm font-bold text-white mt-0.5">Telefonia pensada para o seu dia a dia</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#D7FF32]">
                      <Sparkles className="w-4 h-4" />
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
