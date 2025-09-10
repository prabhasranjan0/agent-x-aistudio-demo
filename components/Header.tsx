import React from 'react';
import { Page } from '../App';

interface HeaderProps {
    setPage: (page: Page, sectionId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  return (
    <header className="py-4 px-4 md:px-8 border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => setPage('home')} className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">
          AgenX
        </button>
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => setPage('products')} className="text-slate-300 hover:text-white transition-colors">Products</button>
          <button onClick={() => setPage('home', 'features')} className="text-slate-300 hover:text-white transition-colors">Solutions</button>
          <button onClick={() => setPage('home', 'how-it-works')} className="text-slate-300 hover:text-white transition-colors">Developers</button>
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
        </nav>
        <a href="#" className="hidden md:inline-block bg-white text-slate-900 font-semibold px-5 py-2 rounded-lg hover:bg-slate-200 transition-colors">
          Get Started
        </a>
        <button className="md:hidden p-2 rounded-md hover:bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;