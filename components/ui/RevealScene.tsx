"use client";

import { useLayoutEffect, useRef } from "react";

type RevealSceneProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Marca o container para as animações de entrada.
 * Cada filho com `data-reveal` é escondido antes da primeira pintura e
 * animado uma única vez quando 5% dele aparece na tela.
 * Sem JavaScript nada é escondido, então o conteúdo continua legível.
 */
export function RevealScene({ id, className, children }: RevealSceneProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === "undefined") return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    for (const target of targets) target.dataset.reveal = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "in";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );

    for (const target of targets) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
