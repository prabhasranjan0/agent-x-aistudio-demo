import React from 'react';
import { Page } from '../App';

interface FooterProps {
    setPage: (page: Page, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="border-t border-slate-800/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-2">
            <button onClick={() => setPage('home')} className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">
              AgenX
            </button>
            <p className="text-slate-400 mt-2 max-w-xs">
              The platform for building, deploying, and managing autonomous AI agents.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setPage('products')} className="text-slate-400 hover:text-white text-left">Products</button></li>
              <li><button onClick={() => setPage('home', 'features')} className="text-slate-400 hover:text-white text-left">Solutions</button></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Resources</h4>
             <ul className="space-y-2">
              <li><button onClick={() => setPage('developers')} className="text-slate-400 hover:text-white text-left">Developers</button></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Docs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Changelog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} AgenX, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Replace with actual icons */}
            <a href="#" className="text-slate-500 hover:text-white">X</a>
            <a href="#" className="text-slate-500 hover:text-white">LinkedIn</a>
            <a href="#" className="text-slate-500 hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;