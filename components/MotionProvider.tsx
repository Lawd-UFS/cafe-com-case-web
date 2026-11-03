"use client";

import { MotionConfig } from "motion/react";

/**
 * Configuração global das animações.
 * reducedMotion="user": quem desativou animações no sistema não vê
 * movimentos (só mudanças de opacidade), sem ninguém precisar tratar isso.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
