import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Loader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Infrastructure } from "@/components/site/Infrastructure";
import { Workflow } from "@/components/site/Workflow";
import { Grades } from "@/components/site/Grades";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground noise">
      <Loader />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Infrastructure />
      <Services />
      <Workflow />
      <Grades />
      <Projects />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
