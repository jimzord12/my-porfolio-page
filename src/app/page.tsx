import { HeroSection } from '@/sections/Hero';
import { Header } from '../sections/Header';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { TestimonialsSection } from '@/sections/Testimonials';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <div className='overflow-clip'>
      <Header />
      <HeroSection />
      {/* <div className='sticky top-0 h-56 w-full bg-red-600'></div> */}
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
