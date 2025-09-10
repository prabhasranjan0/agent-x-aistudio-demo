import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Products from './components/Products';
import Developers from './components/Developers';

export type Page = 'home' | 'products' | 'developers';

const App: React.FC = () => {
  const [page, setPage] = React.useState<Page>('home');

  const handleSetPage = (newPage: Page, sectionId?: string) => {
    setPage(newPage);
    if (newPage === 'home' && sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
        window.scrollTo(0, 0);
    }
  };


  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-pink-500/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10">
        <Header setPage={handleSetPage} />
        <main>
          {page === 'home' && (
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <UseCases />
            </>
          )}
          {page === 'products' && <Products />}
          {page === 'developers' && <Developers />}
          <CTA />
        </main>
        <Footer setPage={handleSetPage} />
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default App;