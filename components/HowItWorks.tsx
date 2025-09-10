import React from 'react';

const steps = [
  {
    step: 1,
    title: "Define Your Goal",
    description: "Describe the objective for your AI agent in natural language. Set constraints, and provide necessary tools and data access."
  },
  {
    step: 2,
    title: "Agent Assembly",
    description: "AgenX composes the optimal chain of models and tools needed to tackle the problem, creating a custom agent for the task."
  },
  {
    step: 3,
    title: "Autonomous Execution",
    description: "The agent runs, performing research, executing code, and utilizing tools to progress towards the goal, adapting as it goes."
  },
  {
    step: 4,
    title: "Review & Deploy",
    description: "Monitor the agent's progress, review the results, and deploy it into your application with a single API call."
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple to Start, Powerful to Scale
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Go from idea to a fully functional AI agent in just a few steps.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-5/12">
                  <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-sky-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center hidden md:flex shrink-0">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;