import { HeroSection } from "@/sections/Hero";
import { Header } from "../sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
}
