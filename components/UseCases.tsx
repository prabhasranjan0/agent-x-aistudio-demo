import React from 'react';

const useCases = [
  {
    title: "Automated Market Research",
    description: "Deploy agents to autonomously scrape websites, analyze competitors, and generate in-depth market reports."
  },
  {
    title: "Personalized Customer Support",
    description: "Create AI agents that can handle complex customer queries, access knowledge bases, and resolve issues end-to-end."
  },
  {
    title: "Code Generation & Debugging",
    description: "An agent that can understand your codebase, write new functions, identify bugs, and even suggest optimizations."
  },
  {
    title: "Complex Data Analysis",
    description: "Let agents connect to your databases, run complex queries, and produce visualizations and summaries on demand."
  },
  {
    title: "Content Creation & Strategy",
    description: "Generate high-quality articles, social media posts, and marketing copy based on a strategic brief."
  },
  {
    title: "Streamlined Operations",
    description: "Automate internal workflows, from onboarding new employees to managing IT support tickets, with intelligent agents."
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built for Any Challenge
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Explore what's possible when you give your applications the power of autonomous action.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-teal-300">{useCase.title}</h3>
              <p className="text-slate-400 flex-grow">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
