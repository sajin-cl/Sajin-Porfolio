import { Toaster } from 'react-hot-toast';
import Testimonials from '../components/Testimonials';
import { TESTIMONIALS_DATA } from '../config/data';
import Hero from '@/sections/Hero';
import CodingProfiles from '@/sections/CodingProfiles';
import About from '@/sections/About';
import Updates from '@/sections/Updates';
import Skills from '@/sections/Skills';
import Leetcode from '@/sections/Leetcode';
import Projects from '@/sections/Projects';
import Certifications from '@/sections/Certifications';
import Contact from '@/sections/Contact';

function Home() {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ style: { width: "250px" } }} />
      <Hero />
      <CodingProfiles />
      <About />
      <Updates visible={false} />
      <Skills />
      <Leetcode />
      <Projects />
      <Certifications />
      <Testimonials testimonials={TESTIMONIALS_DATA} />
      <Contact />
    </>
  );
}

export default Home;
