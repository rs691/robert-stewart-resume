import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { SkillsOverview } from "@/components/skills-overview";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectShowcase />
        <SkillsOverview />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
