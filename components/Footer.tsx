'use client';

import React from 'react';
import { Logo } from './Logo';
import { NAV_LINKS, BRAND, getWhatsAppUrl } from '@/lib/constants';
import { Phone, MessageSquare, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export function Footer({ onOpenPrivacy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-[#030304] border-t border-neutral-900 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo size="lg" showSlogan={true} />

            <p className="mt-4 text-sm text-neutral-400 max-w-sm leading-relaxed">
              Chips físicos com opções flexíveis de planos de telefonia para aproximar você do que realmente importa. Atendimento consultivo e oportunidade de revenda.
            </p>

            {/* Direct Official Contact Pill */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={getWhatsAppUrl('consumer')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white text-xs sm:text-sm font-semibold transition-all hover:bg-neutral-850"
              >
                <MessageSquare className="w-4 h-4 text-[#25D5E8]" />
                <span>WhatsApp: {BRAND.phoneDisplay}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-150 inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors duration-150 inline-block py-0.5 text-left"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Commercial Desk & Institutional */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atendimento Oficial
            </h4>
            
            <div className="space-y-3 text-sm text-neutral-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D7FF32] shrink-0" />
                <span className="text-white font-medium">{BRAND.phoneDisplay}</span>
              </p>
              <p className="text-xs text-neutral-400">
                Atendimento comercial de Segunda a Sexta em horário comercial via WhatsApp.
              </p>
              
              {/* Institutional / CNPJ prepared placeholder */}
              <div className="pt-3 border-t border-neutral-900/90 text-xs text-neutral-400 space-y-1">
                <p>
                  <strong className="text-neutral-400 font-semibold">Razão Social & CNPJ:</strong> Disponíveis mediante solicitação comercial oficial.
                </p>
                <p>
                  <strong className="text-neutral-400 font-semibold">Redes Sociais:</strong> Canais oficiais em consolidação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & LGPD Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>
            © {currentYear} {BRAND.name}. Todos os direitos reservados. {BRAND.slogan}
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white underline underline-offset-4 transition-colors"
            >
              Termos e Privacidade (LGPD)
            </button>
            <span className="text-neutral-700">·</span>
            <span>Telefonia & Revenda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
