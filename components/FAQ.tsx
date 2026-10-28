'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS, getWhatsAppUrl } from '@/lib/constants';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 bg-[#050505] border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase text-[#25D5E8]">
            <HelpCircle className="w-4 h-4 text-[#25D5E8]" />
            <span>TIRA-DÚVIDAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            PERGUNTAS <span className="text-vii-gradient">FREQUENTES.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Esclareça suas principais dúvidas sobre os chips, planos e a oportunidade de revenda da VII CONNECT.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border transition-all duration-200 overflow-hidden bg-[#0A0A0D] border-neutral-800/80 hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D5E8]"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4 leading-snug">
                    {index + 1}. {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-neutral-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#25D5E8] border-[#25D5E8]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-900"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-bold text-white">Ainda tem alguma pergunta?</p>
            <p className="text-xs text-neutral-400 mt-0.5">Nossa equipe comercial está à disposição no WhatsApp.</p>
          </div>
          <a
            href={getWhatsAppUrl('consumer')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#050505] bg-vii-gradient rounded-xl shadow-md hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <span>FALAR NO WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
