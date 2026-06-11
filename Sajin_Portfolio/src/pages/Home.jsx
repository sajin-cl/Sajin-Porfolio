import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Testimonials from '@/components/Testimonials';
import { TESTIMONIALS_DATA } from '@/config/data';


const BackToTop = lazy(() => import("@/components/BackToTop"));
const Hero = lazy(() => import("@/sections/Hero"));
const CodingProfiles = lazy(() => import("@/sections/CodingProfiles"));
const About = lazy(() => import("@/sections/About"));
const Updates = lazy(() => import("@/sections/Updates"));
const Skills = lazy(() => import("@/sections/Skills"));
const Leetcode = lazy(() => import("@/sections/Leetcode"));
const Projects = lazy(() => import("@/sections/Projects"));
const Certifications = lazy(() => import("@/sections/Certifications"));
const Contact = lazy(() => import("@/sections/Contact"));

const loader = (
  <div className="animate-pulse text-lime-400 w-full min-h-screen flex flex-col justify-center items-center">
    <img src="/logo.png" alt="Loading logo" className="h-25 animate-spin transition" />
    <p className="mt-4 font-mono text-center">WELCOME. LET ME SHOW YOU WHAT I’VE BUILT.</p>
  </div>
);

export default function Home() {
  return (
    <>

      <Toaster position="bottom-right" toastOptions={{ style: { width: "250px" } }} />
      <Suspense fallback={loader}>
        <Hero />
        <CodingProfiles />
        <BackToTop />
        <About />
        <Updates visible={false} />
        <Skills />
        <Leetcode />
        <Projects />
        <Certifications />
        <Testimonials testimonials={TESTIMONIALS_DATA} />
        <Contact />
      </Suspense>
    </>
  );
}
