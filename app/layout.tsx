import type { Metadata } from "next";

import { Intro } from "@/components/Intro";
import { MotionProvider } from "@/components/MotionProvider";

import { gluten, montserrat, montserratAlternates, nunito } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café com Case",
  description: "Café com Case à Mesa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${montserratAlternates.variable} ${gluten.variable} ${nunito.variable} antialiased`}
    >
      <body>
        <Intro>
          <MotionProvider>{children}</MotionProvider>
        </Intro>
      </body>
    </html>
  );
}
