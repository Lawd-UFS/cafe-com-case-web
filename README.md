# Café com Case

Site do Café com Case à Mesa, feito em Next.js.

## Como rodar

Precisa do [Node.js](https://nodejs.org) 20.9 ou mais novo (recomendado: a versão LTS).

```bash
npm install
npm run dev
```

Depois é só abrir http://localhost:3000.

## Comandos

| Comando                | O que faz                                                 |
| ---------------------- | --------------------------------------------------------- |
| `npm run dev`          | Sobe o site no seu computador, atualizando a cada mudança |
| `npm run build`        | Gera a versão de produção. É o que a checagem do PR roda  |
| `npm run lint`         | Procura erros no código                                   |
| `npm run format`       | Arruma a formatação de todos os arquivos                  |
| `npm run format:check` | Só confere a formatação, sem mudar nada                   |

Rode `npm run format` e `npm run lint` antes de abrir o PR.

## Onde fica cada coisa

```
app/
  page.tsx            página inicial (junta as seções na ordem)
  faq/page.tsx        página do FAQ
  layout.tsx          estrutura comum a todas as páginas
  globals.css         cores e fontes do Figma (@theme)
components/
  ui/                 peças usadas por todo mundo (botões, Reveal...)
  sections/<secao>/   uma pasta por seção: hero, edition, award, supporters, footer, faq
content/
  <secao>.ts          os textos de cada seção (em português, como aparecem no site)
public/               imagens
```

Cada seção já tem o seu componente vazio. Quem pega a issue mexe principalmente na pasta da própria seção e no arquivo de textos dela.

## Animações

Use o `<Reveal>` para o conteúdo aparecer subindo de leve quando entra na tela:

<!-- prettier-ignore -->
```tsx
import { Reveal } from "@/components/ui/Reveal";

<Reveal delay={0.1}>
  <h2>Prêmio Expresso</h2>
</Reveal>
```

Para animações próprias, use a biblioteca [motion](https://motion.dev) (`import { motion } from "motion/react"`). Quem desativou animações no sistema já fica protegido automaticamente.

## Como trabalhar

Branches, commits e código são em inglês. O README e a descrição dos PRs podem ser em português.

1. Pegue uma issue no [board](https://github.com/orgs/Lawd-UFS/projects/18) e mova para **Em andamento**.
2. Crie a branch a partir da `main`: `tipo/numero-descricao`, por exemplo `feat/5-hero-desktop`.
3. Commits no formato `feat: ...`, `fix: ...` ou `chore: ...`, com uma frase curta em inglês.
4. Abra o PR com `Closes #numero` na descrição e um print da tela.
5. Depois de aprovado, o PR entra na `main` e o card vai sozinho para **Concluído**.
