import { lazy, Suspense } from 'react'

import Header from "./components/Header"


const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Leetcode = lazy(() => import("./components/Leetcode"));
const Projects = lazy(() => import("./components/Projects"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));


function App() {

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">

      <Header />

      <Suspense fallback={
        <div className=" animate-pulse text-lime-400 w-full min-h-screen flex flex-col justify-center items-center">
          <img src="/logo.png" alt="" className='h-25 animate-spin transition' />
          <p className='mt-4'> Loading...</p>
        </div>
      }>
        <main className="pt-16" >
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
  )
};


export default App
