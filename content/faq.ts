export type FaqCardColor = "tomate" | "cenoura" | "cafe" | "azul";

export type FaqLink = {
  label: string;
  url: string;
};

export type FaqQuestion = {
  id: string;
  question: string;
  paragraphs: string[];
  action?: FaqLink;
};

export type FaqMore = {
  label: string;
  title: string;
  questions: FaqQuestion[];
};

export type FaqItem = {
  id: string;
  number: string;
  question: string;
  paragraphs: string[];
  icon?: string;
  color: FaqCardColor;
  action: FaqLink | FaqMore;
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
        title: "Mais sobre o evento",
        questions: [
          {
            id: "when-where",
            question: "Quando e onde será o evento esse ano?",
            paragraphs: [
              "O evento acontecerá nos dias 1º, 2 e 3 de dezembro de 2026, na Universidade Federal de Sergipe (UFS), ocupando diferentes espaços da Didática VII.",
            ],
            action: {
              label: "Programação completa",
              url: "https://instagram.com/cafecomcase",
            },
          },
          {
            id: "accessibility",
            question: "O local do evento tem acessibilidade?",
            paragraphs: [
              "Sim. A Universidade Federal de Sergipe (UFS) conta com estrutura de acessibilidade para facilitar a circulação dos participantes durante o evento. Caso você necessite de algum atendimento ou condição específica de acesso, recomendamos entrar em contato antecipadamente com a organização.",
            ],
          },
          {
            id: "food",
            question: "Haverá opções para alimentação no local?",
            paragraphs: [
              "Sim. Durante os dias do evento, haverá uma feirinha com comerciantes locais, que estarão comercializando opções de alimentação para os participantes.",
            ],
          },
          {
            id: "certificate",
            question:
              "Como faço para me inscrever e ganhar certificado de horas?",
            paragraphs: [
              "O Café com Case é um evento gratuito e aberto ao público. Para se inscrever, basta acessar o Portal de Eventos da UFS, procurar pelo nome do evento e seguir as instruções do site para realizar a sua inscrição. Ao chegar no local, informe seu nome à equipe responsável e, em seguida, você assinará a lista de presença e receberá seu kit de participação.",
              "Os certificados de participação, com disponibilização de horas, serão disponibilizados aos participantes que estiverem inscritos e tiverem presença registrada em lista de presença pelo Sigaa após o evento.",
            ],
          },
        ],
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
        title: "Mais sobre o Prêmio Expresso",
        questions: [
          {
            id: "categories",
            question: "Quais são as modalidades presentes no Prêmio Expresso?",
            paragraphs: [
              "O Prêmio Expresso recebe trabalhos acadêmicos nas categorias de Arte Digital, Audiovisual, Colagem, Fotografia, Gravura, Mini Campanha e Texto Curto. Além da disputa tradicional, os trabalhos inscritos também têm a chance de concorrer à modalidade especial Prêmio de Impacto Social.",
              "Todas as produções devem estar relacionadas ao tema desta edição, Direito Humano à Alimentação Adequada, e seguir as orientações estabelecidas no edital.",
            ],
            action: {
              label: "Veja o regulamento",
              url: "https://drive.google.com/file/d/1HoN4hgtWivKaH1TEyY1onRCKI3dwQaGN/view",
            },
          },
          {
            id: "signup",
            question: "Como faço para me inscrever no Prêmio Expresso?",
            paragraphs: [
              "As inscrições são realizadas exclusivamente por formulário eletrônico disponibilizado pela organização. O período de inscrição vai de 14 de outubro a 7 de novembro de 2026, até as 23h59 (horário de Brasília).",
              "No formulário, será necessário preencher os dados solicitados, escolher a categoria e enviar a obra e os documentos exigidos no edital.",
            ],
          },
          {
            id: "popular-vote",
            question: "Como funciona a votação popular do Prêmio Expresso?",
            paragraphs: [
              "A votação popular é a segunda fase do processo de avaliação do prêmio. Nessa etapa, o público poderá participar da escolha de um dos cinco finalistas de cada categoria, através da sua interação pelo Instagram oficial do Prêmio Expresso.",
              "A obra com maior número de curtidas em cada categoria se classifica para a fase final da premiação.",
            ],
            action: {
              label: "Perfil do Prêmio",
              url: "https://www.instagram.com/premioexpressoo",
            },
          },
          {
            id: "results",
            question: "Quando será divulgado o resultado do Prêmio Expresso?",
            paragraphs: [
              "Os vencedores serão definidos na etapa final de avaliação, realizada de 23 a 27 de novembro de 2026, e anunciados durante o encerramento do Café com Case, no dia 3 de dezembro de 2026.",
            ],
          },
        ],
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
