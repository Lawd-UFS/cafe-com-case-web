import type { Metadata } from "next";

import { MotionProvider } from "@/components/MotionProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Café com Case",
  description: "Café com Case à Mesa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
