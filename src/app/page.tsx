import { HeroSection } from "@/sections/Hero";
import { Header } from "../sections/Header";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
    </div>
  );
}
