import { lazy, Suspense } from 'react'

import Header from "./components/Header"
import Footer from "./components/Footer"

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Leetcode = lazy(() => import("./components/Leetcode"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));


function App() {

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="pt-16" >

        <Suspense fallback={
          <div className="space-y-4 p-6 animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-1/3"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          </div>
        }>
          <Hero />
          <About />
          <Skills />
          <Leetcode />
          <Projects />
          <Contact />
        </Suspense>

      </main>
      <Footer />
    </div>
  )
}


export default App
