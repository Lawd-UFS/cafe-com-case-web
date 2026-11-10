export type FaqCardColor = "tomate" | "areia" | "cafe" | "azul";

export type FaqItem = {
  id: string;
  number: string;
  question: string;
  icon?: string;
  color: FaqCardColor;
};

export const faq = {
  title: "FAQ",
  backLink: {
    label: "Voltar",
    href: "/",
  },
  contacts: {
    title: {
      first: "Canais de",
      second: "contato",
    },
    subtitle: "Não encontrou a resposta que procurava?",
    description:
      "Entre em contato com a equipe do Café com Case pelos canais oficiais e tira todas as suas dúvidas!",
    items: [
      {
        id: "instagram",
        label: "Instagram",
        handle: "@cafecomcase",
        url: "https://instagram.com/cafecomcase",
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        handle: "+55 79 92000-4383",
        url: "https://wa.me/5579920004383",
      },
      {
        id: "email",
        label: "E-mail",
        handle: "cafecomcaseamesa@gmail.com",
        url: "mailto:cafecomcaseamesa@gmail.com",
      },
    ],
  },
  items: [
    {
      id: "faq-01",
      number: "01",
      question: "O que é o Café com Case?",
      icon: "/images/illustrations/cup.png",
      color: "tomate",
    },
    {
      id: "faq-02",
      number: "02",
      question: "Qual o tema da 13ª edição do Café com Case?",
      icon: "/images/illustrations/cutlery.png",
      color: "areia",
    },
    {
      id: "faq-03",
      number: "03",
      question: "O que é o Prêmio Expresso e quem pode se inscrever?",
      icon: "/images/illustrations/beans.png",
      color: "cafe",
    },
    {
      id: "faq-04",
      number: "04",
      question: "O que é a Revista VIA?",
      color: "azul",
    },
  ] satisfies FaqItem[],
};
