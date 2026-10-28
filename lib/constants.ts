export const BRAND = {
  name: "VII CONNECT",
  slogan: "CONECTA O QUE IMPORTA.",
  headline: "CONECTE O QUE IMPORTA.",
  subheadline: "Conheça a VII CONNECT e descubra nossas opções de chips com planos de telefonia.",
  phoneDisplay: "(51) 98018-8226",
  phoneRaw: "5551980188226",
  colors: {
    black: "#050505",
    white: "#FFFFFF",
    lime: "#D7FF32",
    cyan: "#25D5E8",
    blue: "#477BFF",
    purple: "#A943F5",
  },
};

export const WHATSAPP_MESSAGES = {
  consumer: "Olá! Conheci a VII CONNECT pelo site e gostaria de conhecer os chips com planos de telefonia disponíveis.",
  reseller: "Olá! Tenho interesse em ser revendedor da VII CONNECT e gostaria de conhecer a proposta e as condições comerciais.",
};

export function getWhatsAppUrl(type: "consumer" | "reseller" | "custom", customMessage?: string): string {
  const base = `https://wa.me/${BRAND.phoneRaw}`;
  let text = "";
  if (type === "consumer") {
    text = WHATSAPP_MESSAGES.consumer;
  } else if (type === "reseller") {
    text = WHATSAPP_MESSAGES.reseller;
  } else if (customMessage) {
    text = customMessage;
  }
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Para você", href: "#para-voce" },
  { label: "Seja revendedor", href: "#seja-revendedor" },
  { label: "Dúvidas frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "O que é a VII CONNECT?",
    answer: "A VII CONNECT é uma marca que oferece chips com planos de telefonia. Entre em contato para conhecer as opções disponíveis.",
  },
  {
    id: "faq-2",
    question: "Como posso conhecer os planos?",
    answer: "Você pode falar diretamente com nossa equipe pelo WhatsApp e consultar os planos disponíveis.",
  },
  {
    id: "faq-3",
    question: "Como faço para adquirir um chip?",
    answer: "Entre em contato com a equipe comercial para receber informações sobre disponibilidade, contratação e ativação.",
  },
  {
    id: "faq-4",
    question: "Quero ser revendedor. Como funciona?",
    answer: "Preencha o formulário de interesse ou entre em contato pelo WhatsApp para conhecer a proposta e as condições comerciais.",
  },
  {
    id: "faq-5",
    question: "Quais são os preços e as condições dos planos?",
    answer: "Os valores e as condições devem ser consultados diretamente com nossa equipe comercial.",
  },
  {
    id: "faq-6",
    question: "Como posso falar com a VII CONNECT?",
    answer: "Você pode entrar em contato pelo WhatsApp comercial informado nesta página.",
  },
];
