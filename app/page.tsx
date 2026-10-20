import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Results from "@/components/sections/Results";
import Reviews from "@/components/sections/Reviews";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-cream pb-10">
        <main>
          <Hero />
          <Works />
          <Results />
          <Reviews />
          <Process />
          <Pricing />
          <Contact />
        </main>
      </div>
    </>
  );
}