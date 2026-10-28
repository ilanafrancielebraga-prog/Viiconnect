'use client';

import React, { useEffect } from 'react';
import { X, Shield, Lock, CheckCircle2 } from 'lucide-react';
import { BRAND } from '@/lib/constants';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0C0C0E] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-neutral-300 text-sm leading-relaxed"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#25D5E8]" />
            <h3 id="privacy-modal-title" className="text-lg font-bold text-white">
              Política de Privacidade e Proteção de Dados
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Fechar política de privacidade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-5">
          <p>
            A <strong>VII CONNECT</strong> preza pela transparência, privacidade e segurança das informações de seus clientes, parceiros e visitantes, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
          </p>

          <div>
            <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D7FF32]" />
              1. Coleta Mínima de Dados Pessoais
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Coletamos exclusivamente as informações estritamente necessárias para estabelecer contato e viabilizar o atendimento comercial solicitado pelo próprio usuário:
            </p>
            <ul className="list-disc list-inside mt-2 text-xs sm:text-sm text-neutral-400 space-y-1">
              <li>Nome completo;</li>
              <li>Número de telefone celular / WhatsApp com DDD;</li>
              <li>Cidade e Estado de atuação;</li>
              <li>Experiência profissional em vendas e motivação para revenda (quando fornecidos voluntariamente).</li>
            </ul>
            <p className="mt-2 text-xs text-neutral-400">
              <strong>Importante:</strong> Não coletamos CPF, RG, dados bancários, números de cartão de crédito ou quaisquer dados pessoais sensíveis neste ambiente inicial.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D7FF32]" />
              2. Finalidade do Tratamento
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Os dados fornecidos têm finalidade exclusiva de:
            </p>
            <ul className="list-disc list-inside mt-2 text-xs sm:text-sm text-neutral-400 space-y-1">
              <li>Retornar o contato para apresentação de chips e planos de telefonia disponíveis;</li>
              <li>Encaminhar proposta e condições comerciais para candidatos a revendedores;</li>
              <li>Prestar suporte e esclarecer dúvidas comerciais via WhatsApp.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D7FF32]" />
              3. Compartilhamento e Segurança
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              A VII CONNECT não comercializa, não aluga e não compartilha seus dados pessoais com terceiros para fins publicitários não autorizados. Os dados são manipulados exclusivamente pela equipe comercial autorizada.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D7FF32]" />
              4. Direitos do Titular (LGPD)
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Nos termos da LGPD, o titular poderá, a qualquer tempo, solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a exclusão de seus dados de nossa base de contatos, bastando solicitar diretamente através do WhatsApp oficial de atendimento: <strong>{BRAND.phoneDisplay}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#25D5E8] shrink-0" />
            <span>Este documento pode ser revisado e atualizado periodicamente para refletir aprimoramentos operacionais e legais da VII CONNECT.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs sm:text-sm font-bold text-[#050505] bg-white hover:bg-neutral-200 rounded-xl transition-colors"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
