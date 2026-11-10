export type FaqCardColor = "tomate" | "areia" | "cafe" | "azul";

export type FaqItem = {
  id: string;
  number: string;
  question: string;
  paragraphs: string[];
  icon: string;
  color: FaqCardColor;
  action: {
    label: string;
    url: string;
  };
};

export const faq = {
  title: "Perguntas Frequentes",
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
        url: "#",
      },
    },
    {
      id: "faq-02",
      number: "02",
      question: "Qual o tema da 13ª edição do Café com Case?",
      paragraphs: [
        "A 13ª edição traz como tema central o Direito Humano à Alimentação Adequada, convidando a universidade e o mercado a colocarem reflexões, vivências e saberes à mesa.",
        "Através de palestras, oficinas e mostras criativas, buscamos conectar a comunicação social aos desafios contemporâneos da sociedade.",
      ],
      icon: "/images/illustrations/cutlery.png",
      color: "areia",
      action: {
        label: "Saiba mais aqui!",
        url: "#",
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
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfHsG0u9f7iGYkOnXqRTtYcFxF9WR9o3F6tcpWEmnZlFvLJDg/viewform",
      },
    },
    {
      id: "faq-04",
      number: "04",
      question: "O que é a Revista VIA?",
      paragraphs: [
        "A Revista VIA é uma publicação editorial independente produzida pelos estudantes, reunindo ensaios, entrevistas, artigos e coberturas das discussões promovidas no evento.",
        "Ela atua como um registro crítico e criativo das produções acadêmicas e profissionais que atravessam cada edição do Café com Case.",
      ],
      icon: "/images/illustrations/pot.png",
      color: "azul",
      action: {
        label: "Saiba mais aqui!",
        url: "#",
      },
    },
  ] satisfies FaqItem[],
};
