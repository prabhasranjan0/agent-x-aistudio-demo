import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-pink-400 to-sky-400 text-glow">
            Build Autonomous AI Agents
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-8">
          AgenX provides the complete toolkit for developers to create, deploy, and manage sophisticated AI agents that can reason, plan, and execute complex tasks.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#" className="bg-gradient-to-r from-purple-600 to-sky-600 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
            Get Started Free
          </a>
          <a href="#" className="bg-slate-800/50 text-slate-200 font-medium px-8 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
