'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Smartphone, Users } from 'lucide-react';
import { getWhatsAppUrl, BRAND } from '@/lib/constants';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Select Popover */}
      {isOpen && (
        <div className="mb-3 w-64 p-4 rounded-2xl bg-[#0C0C0F] border border-neutral-800 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Atendimento VII CONNECT
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-md"
              aria-label="Fechar opções do WhatsApp"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-neutral-400 mb-3">
            Escolha o assunto para direcionarmos seu atendimento:
          </p>

          <div className="space-y-2">
            <a
              href={getWhatsAppUrl('consumer')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-white font-medium transition-all group"
            >
              <Smartphone className="w-4 h-4 text-[#D7FF32] shrink-0" />
              <span>Conhecer Planos e Chips</span>
            </a>

            <a
              href={getWhatsAppUrl('reseller')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-white font-medium transition-all group"
            >
              <Users className="w-4 h-4 text-[#25D5E8] shrink-0" />
              <span>Quero Ser Revendedor</span>
            </a>
          </div>

          <div className="mt-2.5 pt-2 border-t border-neutral-900 text-[10px] text-neutral-500 text-center">
            {BRAND.phoneDisplay}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-vii-gradient p-0.5 shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D5E8]"
        aria-label="Falar no WhatsApp comercial oficial"
        title="Falar no WhatsApp com a VII CONNECT"
      >
        <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center text-white hover:bg-[#050505]/85 transition-colors">
          <MessageSquare className="w-6 h-6 text-[#25D5E8]" />
        </div>
      </button>
    </div>
  );
}
