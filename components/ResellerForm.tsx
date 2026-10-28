'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Shield, ArrowUpRight } from 'lucide-react';
import { BRAND } from '@/lib/constants';

interface ResellerFormProps {
  onOpenPrivacy: () => void;
}

export function ResellerForm({ onOpenPrivacy }: ResellerFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [cityState, setCityState] = useState('');
  const [salesExperience, setSalesExperience] = useState<'sim' | 'nao' | ''>('');
  const [motivation, setMotivation] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ whatsappUrl: string } | null>(null);

  // Phone input formatting helper: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length <= 2) {
      setPhone(value.length > 0 ? `(${value}` : '');
    } else if (value.length <= 6) {
      setPhone(`(${value.slice(0, 2)}) ${value.slice(2)}`);
    } else if (value.length <= 10) {
      setPhone(`(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`);
    } else {
      setPhone(`(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`);
    }

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 3) {
      errs.fullName = 'Informe seu nome completo (mínimo de 3 letras).';
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      errs.phone = 'Informe um número com DDD válido (ex: 51 98018-8226).';
    }

    if (!cityState.trim() || cityState.trim().length < 2) {
      errs.cityState = 'Informe sua cidade e estado (ex: Porto Alegre - RS).';
    }

    if (!salesExperience) {
      errs.salesExperience = 'Selecione uma opção sobre sua experiência com vendas.';
    }

    if (!privacyAccepted) {
      errs.privacy = 'Você deve concordar com os termos de privacidade para continuar.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          cityState,
          salesExperience,
          motivation,
          privacyAccepted,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Falha ao processar formulário.');
      }

      setSuccessData({ whatsappUrl: data.whatsappUrl });

      // Automatically open the verified WhatsApp window after explicit user submission
      const newWindow = window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        // Pop-up blocker fallback is handled visually by the success UI
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Ocorreu um erro ao enviar. Tente novamente.';
      setServerError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setCityState('');
    setSalesExperience('');
    setMotivation('');
    setPrivacyAccepted(false);
    setErrors({});
    setSuccessData(null);
    setServerError(null);
  };

  return (
    <section id="formulario-revenda" className="relative py-24 bg-[#09090C] border-b border-neutral-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase text-[#D7FF32]">
            <span className="w-2 h-2 rounded-sm bg-[#D7FF32]" />
            <span>CADASTRO DE INTERESSE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            QUERO FAZER PARTE DA <br />
            <span className="text-vii-gradient">VII CONNECT.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Preencha seus dados abaixo para registrar seu interesse. Após o envio, você será direcionado ao nosso WhatsApp oficial para iniciar o atendimento comercial com a equipe.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-[#050505] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-vii-gradient" />

          {successData ? (
            /* Real Verified Success State */
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Interesse Registrado com Sucesso!
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 max-w-lg mb-8 leading-relaxed">
                Seus dados foram organizados. Para dar prosseguimento imediato, abra o WhatsApp comercial oficial da VII CONNECT e envie a mensagem pré-preenchida para a nossa equipe.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <a
                  href={successData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#050505] bg-vii-gradient rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-[#050505]" />
                  <span>ABRIR WHATSAPP COMERCIAL</span>
                  <ArrowUpRight className="w-4 h-4 text-[#050505]" />
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-neutral-400 hover:text-white transition-colors"
                >
                  Fazer outro cadastro
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-900 text-xs text-neutral-400 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#25D5E8]" />
                <span>Nenhum dado financeiro ou documento sensível foi solicitado. Seus dados são protegidos conforme a LGPD.</span>
              </div>
            </div>
          ) : (
            /* Functional Reseller Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {serverError && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/80 text-red-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nome completo */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Nome completo <span className="text-[#D7FF32]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                    }}
                    placeholder="Seu nome e sobrenome"
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#25D5E8] transition-all ${
                      errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-800'
                    }`}
                    disabled={loading}
                  />
                  {errors.fullName && <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>}
                </div>

                {/* WhatsApp com DDD */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    WhatsApp com DDD <span className="text-[#D7FF32]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(51) 98018-8226"
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#25D5E8] transition-all ${
                      errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-800'
                    }`}
                    disabled={loading}
                  />
                  {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Cidade e estado */}
                <div>
                  <label htmlFor="cityState" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Cidade e Estado (UF) <span className="text-[#D7FF32]">*</span>
                  </label>
                  <input
                    id="cityState"
                    type="text"
                    value={cityState}
                    onChange={(e) => {
                      setCityState(e.target.value);
                      if (errors.cityState) setErrors((prev) => ({ ...prev, cityState: '' }));
                    }}
                    placeholder="Ex: Porto Alegre - RS"
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#25D5E8] transition-all ${
                      errors.cityState ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-800'
                    }`}
                    disabled={loading}
                  />
                  {errors.cityState && <p className="mt-1.5 text-xs text-red-400">{errors.cityState}</p>}
                </div>

                {/* Experiência com vendas */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Você já trabalha com vendas? <span className="text-[#D7FF32]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSalesExperience('sim');
                        if (errors.salesExperience) setErrors((prev) => ({ ...prev, salesExperience: '' }));
                      }}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold border transition-all text-center ${
                        salesExperience === 'sim'
                          ? 'bg-[#25D5E8]/15 border-[#25D5E8] text-white shadow-sm'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      Sim, já vendo
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSalesExperience('nao');
                        if (errors.salesExperience) setErrors((prev) => ({ ...prev, salesExperience: '' }));
                      }}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold border transition-all text-center ${
                        salesExperience === 'nao'
                          ? 'bg-[#25D5E8]/15 border-[#25D5E8] text-white shadow-sm'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      Não trabalho ainda
                    </button>
                  </div>
                  {errors.salesExperience && <p className="mt-1.5 text-xs text-red-400">{errors.salesExperience}</p>}
                </div>
              </div>

              {/* Motivação (opcional) */}
              <div>
                <label htmlFor="motivation" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Conte brevemente por que deseja revender <span className="text-neutral-500 text-xs font-normal">(Opcional)</span>
                </label>
                <textarea
                  id="motivation"
                  rows={3}
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  placeholder="Ex: Gostaria de ter uma renda extra na minha região / já atuo no comércio local..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#25D5E8] transition-all resize-none"
                  disabled={loading}
                />
              </div>

              {/* Privacy consent checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => {
                      setPrivacyAccepted(e.target.checked);
                      if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: '' }));
                    }}
                    className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-[#25D5E8] focus:ring-[#25D5E8] focus:ring-offset-0"
                    disabled={loading}
                  />
                  <span className="text-xs text-neutral-400 leading-relaxed">
                    Concordo em compartilhar meus dados para contato comercial da VII CONNECT, conforme a{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenPrivacy();
                      }}
                      className="text-[#25D5E8] underline hover:text-[#D7FF32] transition-colors"
                    >
                      Política de Privacidade
                    </button>
                    . Nenhum dado financeiro ou documento é exigido nesta etapa.
                  </span>
                </label>
                {errors.privacy && <p className="mt-1.5 text-xs text-red-400">{errors.privacy}</p>}
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#050505] bg-vii-gradient rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#050505]" />
                      <span>PROCESSANDO INTERESSE...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-[#050505]" />
                      <span>ENVIAR MEU INTERESSE</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy reassurance note */}
              <p className="text-center text-xs text-neutral-400">
                Ao clicar em enviar, seus dados serão organizados e você abrirá a conversa comercial no WhatsApp oficial da VII CONNECT ({BRAND.phoneDisplay}).
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
