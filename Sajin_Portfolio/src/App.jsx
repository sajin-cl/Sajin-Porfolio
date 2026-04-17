import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from "@/components/Header";
import Testimonials from './components/Testimonials';
import { testimonialsData } from './config/data';


const Hero = lazy(() => import("@/sections/Hero"));
const CodingProfiles = lazy(() => import("@/sections/CodingProfiles"));
const About = lazy(() => import("@/sections/About"));
const Updates = lazy(() => import("@/sections/Updates"));
const Skills = lazy(() => import("@/sections/Skills"));
const Leetcode = lazy(() => import("@/sections/Leetcode"));
const Projects = lazy(() => import("@/sections/Projects"));
const Certifications = lazy(() => import("@/sections/Certifications"));
const Contact = lazy(() => import("@/sections/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <Toaster position="bottom-right" toastOptions={{ style: { width: "250px" } }} />

      <Suspense
        fallback={
          <div className="animate-pulse text-lime-400 w-full min-h-screen flex flex-col justify-center items-center">
            <img src="/logo.png" alt="Loading logo" className="h-25 animate-spin transition" />
            <p className="mt-4 font-mono text-center">WELCOME. LET ME SHOW YOU WHAT I’VE BUILT.</p>
          </div>
        }
      >
        <main className="pt-16">
          <Hero />
          <CodingProfiles />
          <About />
          <Updates visible={false} />
          <Skills />
          <Leetcode />
          <Projects />
          <Certifications />
          <Testimonials testimonials={testimonialsData} />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
