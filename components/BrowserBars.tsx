"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const tintedSections = ["award", "supporters", "footer"];

export function BrowserBars() {
  const pathname = usePathname();

  useEffect(() => {
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    if (!iOS) return;

    const page = document.documentElement;
    const sections = tintedSections
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null)
      .map((section) => ({
        section,
        color: getComputedStyle(section).backgroundColor,
      }));

    let frame = 0;
    let current = "";
    const update = () => {
      frame = 0;
      let color = "";
      for (const { section, color: sectionColor } of sections) {
        if (section.getBoundingClientRect().top <= innerHeight) {
          color = sectionColor;
        }
      }
      if (color !== current) {
        current = color;
        page.style.backgroundColor = color;
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      page.style.backgroundColor = "";
    };
  }, [pathname]);

  return null;
}
