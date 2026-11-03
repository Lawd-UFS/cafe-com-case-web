"use client";

import { MotionConfig } from "motion/react";

/**
 * Global animation settings.
 * reducedMotion="user": people who turned off animations in their system
 * see no movement (only opacity changes), with no extra work per component.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
