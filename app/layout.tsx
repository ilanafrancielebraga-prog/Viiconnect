import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VII CONNECT | Chips com Planos de Telefonia',
  description: 'Conheça a VII CONNECT, consulte opções de chips com planos de telefonia e saiba como se tornar revendedor. Conecta o que importa.',
  keywords: [
    'VII CONNECT',
    'chips de telefonia',
    'planos de telefonia',
    'revenda de chips',
    'revendedor de telefonia',
    'conecta o que importa',
    'telefonia móvel',
  ],
  authors: [{ name: 'VII CONNECT' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'VII CONNECT | Chips com Planos de Telefonia',
    description: 'Conheça a VII CONNECT, consulte opções de chips com planos de telefonia e saiba como se tornar revendedor. Conecta o que importa.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'VII CONNECT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VII CONNECT | Chips com Planos de Telefonia',
    description: 'Conheça a VII CONNECT, consulte opções de chips com planos de telefonia e saiba como se tornar revendedor.',
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#050505] text-[#F3F4F6] font-sans antialiased selection:bg-[#25D5E8] selection:text-[#050505]">
        {children}
      </body>
    </html>
  );
}
