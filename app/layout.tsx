import type { Metadata } from "next";

import { MotionProvider } from "@/components/MotionProvider";

import { gluten, montserrat, montserratAlternates } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café com Case",
  description: "Café com Case à Mesa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${montserratAlternates.variable} ${gluten.variable} antialiased`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
