"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  /** Delay in seconds before it starts. Useful to bring items in one after another. */
  delay?: number;
  className?: string;
};

/**
 * Default scroll entrance: the content slides up slightly and fades in,
 * only once, when it enters the screen.
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
