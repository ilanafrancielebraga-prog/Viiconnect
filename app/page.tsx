'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BrandPresentation } from '@/components/BrandPresentation';
import { ConsumerArea } from '@/components/ConsumerArea';
import { ProductSpotlight } from '@/components/ProductSpotlight';
import { ResellerArea } from '@/components/ResellerArea';
import { ResellerForm } from '@/components/ResellerForm';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function HomePage() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#25D5E8] selection:text-[#050505]">
      {/* Seção 1: Cabeçalho Fixo */}
      <Header />

      <main className="flex-1">
        {/* Seção 2: Hero Principal */}
        <Hero />

        {/* Seção 3: Apresentação da Marca */}
        <BrandPresentation />

        {/* Seção 4: Área para Consumidores */}
        <ConsumerArea />

        {/* Seção 5: Destaque do Produto */}
        <ProductSpotlight />

        {/* Seção 6: Área Exclusiva para Revendedores */}
        <ResellerArea />

        {/* Seção 7: Formulário para Revendedores */}
        <ResellerForm onOpenPrivacy={() => setPrivacyModalOpen(true)} />

        {/* Seção 8: Perguntas Frequentes */}
        <FAQ />

        {/* Seção 9: Chamada Final */}
        <FinalCTA />
      </main>

      {/* Seção 10: Rodapé */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Modal de Política de Privacidade */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Botão Flutuante de WhatsApp Comercial */}
      <FloatingWhatsApp />
    </div>
  );
}
