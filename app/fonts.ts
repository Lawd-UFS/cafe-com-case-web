import { Gluten, Montserrat, Montserrat_Alternates } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat-alternates",
});

export const gluten = Gluten({
  subsets: ["latin"],
  variable: "--font-gluten",
});
