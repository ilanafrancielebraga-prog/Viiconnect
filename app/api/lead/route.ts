import { NextRequest, NextResponse } from 'next/server';
import { BRAND } from '@/lib/constants';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, cityState, salesExperience, motivation, privacyAccepted } = body;

    // Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 3) {
      return NextResponse.json(
        { error: 'Por favor, informe seu nome completo (mínimo 3 caracteres).' },
        { status: 400 }
      );
    }

    const cleanPhone = (phone || '').replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return NextResponse.json(
        { error: 'Por favor, informe um WhatsApp válido com DDD (10 ou 11 dígitos).' },
        { status: 400 }
      );
    }

    if (!cityState || typeof cityState !== 'string' || cityState.trim().length < 2) {
      return NextResponse.json(
        { error: 'Por favor, informe sua cidade e estado (UF).' },
        { status: 400 }
      );
    }

    if (!salesExperience || !['sim', 'nao'].includes(salesExperience)) {
      return NextResponse.json(
        { error: 'Por favor, selecione se você já possui experiência com vendas.' },
        { status: 400 }
      );
    }

    if (!privacyAccepted) {
      return NextResponse.json(
        { error: 'Você precisa concordar com o aviso de privacidade para prosseguir.' },
        { status: 400 }
      );
    }

    // Build WhatsApp message formatted for the official commercial desk
    const expText = salesExperience === 'sim' ? 'Sim, já possuo experiência em vendas' : 'Ainda não possuo experiência em vendas';
    const messageLines = [
      `*Novo Interesse em Revenda - VII CONNECT*`,
      ``,
      `*Nome:* ${fullName.trim()}`,
      `*WhatsApp:* ${phone.trim()}`,
      `*Cidade/UF:* ${cityState.trim()}`,
      `*Experiência prévia em vendas:* ${expText}`,
    ];

    if (motivation && motivation.trim().length > 0) {
      messageLines.push(`*Motivação:* ${motivation.trim()}`);
    }

    messageLines.push(``, `Olá! Gostaria de conhecer os detalhes comerciais para revender VII CONNECT.`);

    const formattedMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`;

    return NextResponse.json({
      success: true,
      whatsappUrl,
      message: 'Interesse registrado com sucesso! Você será direcionado para o WhatsApp comercial da VII CONNECT.',
    });
  } catch (error) {
    console.error('Lead processing error:', error);
    return NextResponse.json(
      { error: 'Ocorreu um erro ao processar sua solicitação. Tente novamente.' },
      { status: 500 }
    );
  }
}
