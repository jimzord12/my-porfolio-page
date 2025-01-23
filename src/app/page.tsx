import { HeroSection } from "@/sections/Hero";
import { Header } from "../sections/Header";
import { ProjectsSection } from "@/sections/Projects";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
