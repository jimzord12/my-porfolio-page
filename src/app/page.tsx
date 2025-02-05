import HeroSection from '@/sections/Hero';
import Header from '@/sections/Header';
import ProjectsSection from '@/sections/Projects';
import TapeSection from '@/sections/Tape';
import TestimonialsSection from '@/sections/Testimonials';
import AboutSection from '@/sections/About';
import ContactSection from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className='select-none overflow-clip'>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
