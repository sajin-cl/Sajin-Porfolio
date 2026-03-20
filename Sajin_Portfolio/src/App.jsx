import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from "@/components/Header";

const Hero = lazy(() => import("@/sections/Hero"));
const About = lazy(() => import("@/sections/About"));
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
            <p className="mt-4">Welcome. Let me show you what I’ve built.</p>
          </div>
        }
      >
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Leetcode />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
