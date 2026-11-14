"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

let hasNavigated = false;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const fadeIn =
    hasNavigated && !matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      initial={fadeIn ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
