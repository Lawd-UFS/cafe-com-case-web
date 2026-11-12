export type FaqCardColor = "tomate" | "cenoura" | "cafe" | "azul";

export type FaqItem = {
  id: string;
  number: string;
  question: string;
  paragraphs: string[];
  icon?: string;
  color: FaqCardColor;
  action: {
    label: string;
    url: string;
  };
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
      paragraphs: [
        "O Café com Case é um evento gratuito, realizado por estudantes do quarto período do curso de Publicidade e Propaganda da Universidade Federal de Sergipe, que promove a conexão entre universidade, mercado e sociedade.",
        "O evento reúne discussões, atividades e diferentes perspectivas sobre temas contemporâneos, estimulando o aprendizado, a troca de experiências e a formação de estudantes do curso.",
      ],
      icon: "/images/illustrations/cup.png",
      color: "tomate",
      action: {
        label: "Saiba mais aqui!",
        url: "/",
      },
    },
    {
      id: "faq-02",
      number: "02",
      question: "Qual o tema da 13ª edição do Café com Case?",
      paragraphs: [
        "Nomeada de “À Mesa”, a 13ª edição do Café com Case tem como tema o Direito Humano à Alimentação Adequada.",
        "A proposta é refletir sobre como a comunicação constrói narrativas e sentidos sobre a alimentação, considerando aspectos como memória, afeto, cultura e pertencimento. O evento acontece nos dias 1º, 2 e 3 de dezembro de 2026, na Universidade Federal de Sergipe (UFS), ocupando diferentes espaços da Didática VII.",
      ],
      icon: "/images/illustrations/cutlery.png",
      color: "cenoura",
      action: {
        label: "Programação completa",
        url: "https://instagram.com/cafecomcase",
      },
    },
    {
      id: "faq-03",
      number: "03",
      question: "O que é o Prêmio Expresso e quem pode se inscrever?",
      paragraphs: [
        "O Prêmio Expresso é uma premiação vinculada ao Café com Case, criada para incentivar, reconhecer e dar visibilidade às criações autorais dos estudantes regularmente matriculados em universidades e faculdades, públicas ou privadas, do estado de Sergipe.",
        "A proposta é receber trabalhos que dialoguem com o tema de cada edição do evento, que serão avaliados de acordo com os critérios definidos no edital por profissionais e figuras representativas das áreas correlacionadas.",
      ],
      icon: "/images/illustrations/beans.png",
      color: "cafe",
      action: {
        label: "Conheça a premiação!",
        url: "/#award",
      },
    },
    {
      id: "faq-04",
      number: "04",
      question: "O que é a Revista VIA?",
      paragraphs: [
        "A Revista VIA é um projeto interdisciplinar desenvolvido por estudantes do segundo período do curso de Publicidade e Propaganda da Universidade Federal de Sergipe (UFS).",
        "O periódico reúne artigos científicos produzidos pelos alunos da turma e tem seu lançamento realizado durante o Café com Case. O lançamento da Revista VIA acontece no segundo dia do Café com Case, faz parte da programação do evento e é aberto a todos os participantes.",
      ],
      icon: "/images/illustrations/cashew.png",
      color: "azul",
      action: {
        label: "Conheça a Revista VIA",
        url: "https://instagram.com/revistavia",
      },
    },
  ] satisfies FaqItem[],
};
