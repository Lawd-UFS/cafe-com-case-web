// import { Award } from "@/components/sections/award/Award";
import { Edition } from "@/components/sections/edition/Edition";
// import { Footer } from "@/components/sections/footer/Footer";
import { Hero } from "@/components/sections/hero/Hero";
// import { Supporters } from "@/components/sections/supporters/Supporters";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen overflow-x-clip bg-laranja">
        <Hero />
        <Edition />
        {/* <Award /> */}
        {/* <Supporters /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
