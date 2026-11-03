"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  /** Atraso em segundos antes de começar. Útil para entrar um item depois do outro. */
  delay?: number;
  className?: string;
};

/**
 * Entrada padrão ao rolar a página: o conteúdo aparece subindo de leve,
 * uma vez só, quando entra na tela.
 *
 * <Reveal delay={0.1}>
 *   <h2>Prêmio Expresso</h2>
 * </Reveal>
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
