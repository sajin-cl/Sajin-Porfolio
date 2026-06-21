import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToHash from '@/components/ScrollToHash';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import CustomCursor from '@/components/CustomCursor';

const loader = (
  <div className="animate-bounce text-lime-400 w-full min-h-screen flex flex-col justify-center items-center">
    <img src="/logo.png" alt="Loading logo" className="h-25" />
    <p className="mt-4 font-mono text-center">WELCOME. LET ME SHOW YOU WHAT I’VE BUILT.</p>
  </div>
);

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-1 pt-16">
        <CustomCursor />
        <ScrollToHash />
        <Suspense fallback={loader}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};