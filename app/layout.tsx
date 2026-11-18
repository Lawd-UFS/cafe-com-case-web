import type { Metadata } from "next";

import { BrowserBars } from "@/components/BrowserBars";
import { MotionProvider } from "@/components/MotionProvider";

import { gluten, montserrat, montserratAlternates } from "./fonts";
import "./globals.css";

const description =
  "O maior evento gratuito de Publicidade e Propaganda de Sergipe. Nos dias 1º, 2 e 3 de dezembro de 2026, na UFS.";

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "cafe-com-case-web.vercel.app"}`,
  ),
  title: "Café com Case",
  description,
  openGraph: {
    title: "Café com Case à Mesa",
    description,
    siteName: "Café com Case",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${montserratAlternates.variable} ${gluten.variable} antialiased`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
        <BrowserBars />
      </body>
    </html>
  );
}
