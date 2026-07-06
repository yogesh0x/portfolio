import Hero from "@/components/Hero";
import SecurityMarquee from "@/components/SecurityMarquee";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Hero />

      
          <SecurityMarquee />
    
       {/* Actual space between Hero and Skills */}
      <div style={{ height: "120px" }} aria-hidden="true" />
      <div className="bg-zinc-950">
  <Skills />
</div>

<div className="bg-[#0c0c0f]">
  <Experience />
</div>

<div className="bg-zinc-950">
  <Profiles />
</div>

<div className="bg-[#0c0c0f]">
  <Contact />
</div>
    </main>
  );
}