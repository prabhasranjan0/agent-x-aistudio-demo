import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-glow">
            Ready to Build the Future?
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Join the growing community of developers building the next wave of AI.
            Get started with AgenX today and bring your most ambitious ideas to life.
          </p>
          <div className="mt-10">
            <a href="#" className="bg-gradient-to-r from-purple-600 to-sky-600 text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30 text-lg">
              Start Building for Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
