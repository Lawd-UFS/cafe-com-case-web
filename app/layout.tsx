import type { Metadata } from "next";

import { BrowserBars } from "@/components/BrowserBars";
import { MotionProvider } from "@/components/MotionProvider";
import { siteDescription, siteUrl } from "@/lib/site";

import { gluten, montserrat, montserratAlternates } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Café com Case",
  description: siteDescription,
  openGraph: {
    title: "Café com Case à Mesa",
    description: siteDescription,
    url: "./",
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
