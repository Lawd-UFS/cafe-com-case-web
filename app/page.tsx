import { Award } from "@/components/sections/award/Award";
import { Edition } from "@/components/sections/edition/Edition";
import { Footer } from "@/components/sections/footer/Footer";
import { Hero } from "@/components/sections/hero/Hero";
import { Supporters } from "@/components/sections/supporters/Supporters";
import { siteDescription, siteUrl } from "@/lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Café com Case",
    alternateName: "Café com Case à Mesa",
    url: `${siteUrl}/`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Café com Case à Mesa",
    description: siteDescription,
    url: `${siteUrl}/`,
    image: `${siteUrl}/opengraph-image.jpg`,
    startDate: "2026-12-01",
    endDate: "2026-12-03",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    location: {
      "@type": "Place",
      name: "Didática VII, Universidade Federal de Sergipe (UFS)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Marcelo Deda Chagas, s/n, Rosa Elze",
        addressLocality: "São Cristóvão",
        addressRegion: "SE",
        postalCode: "49107-230",
        addressCountry: "BR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Café com Case",
      url: `${siteUrl}/`,
      sameAs: ["https://www.instagram.com/cafecomcase/"],
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className="overflow-x-clip bg-laranja">
        <Hero />
        <Edition />
        <Award />
        <Supporters />
      </main>
      <Footer />
    </>
  );
}
