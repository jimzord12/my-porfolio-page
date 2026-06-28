import { Header, Hero, Projects, Tape, Testimonials, About, Contact, Footer } from '@/sections';

export default function Home() {
  return (
    <div className='select-none overflow-clip'>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
