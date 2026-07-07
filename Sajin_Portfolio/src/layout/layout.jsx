import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToHash from '@/components/ScrollToHash';
import { Outlet } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';





export default function Layout() {


  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />

      <main className="flex-1 pt-16">
        <CustomCursor />
        <ScrollToHash />
        <Outlet />
      </main>
      <Footer />
    </div>

  );
};