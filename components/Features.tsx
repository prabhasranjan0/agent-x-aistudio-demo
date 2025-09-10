import React from 'react';
import { BrainIcon, CodeIcon, ScaleIcon, ShieldIcon, TargetIcon, ZapIcon } from './icons';

const features = [
  {
    icon: <BrainIcon />,
    title: "Advanced Reasoning",
    description: "Equip your agents with complex reasoning and multi-step planning capabilities."
  },
  {
    icon: <ZapIcon />,
    title: "Dynamic Execution",
    description: "Agents can interact with APIs, databases, and other tools to perform actions."
  },
  {
    icon: <CodeIcon />,
    title: "Developer-First",
    description: "Seamless integration with a flexible SDK and comprehensive documentation."
  },
  {
    icon: <ShieldIcon />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security, data privacy, and robust infrastructure."
  },
  {
    icon: <TargetIcon />,
    title: "Goal-Oriented",
    description: "Define high-level objectives and let agents figure out the optimal path to achieve them."
  },
  {
    icon: <ScaleIcon />,
    title: "Scalable Deployment",
    description: "From a single agent to millions, our platform scales with your needs."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Unleash the Power of Autonomous AI
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Our platform is built with cutting-edge features to help you build the next generation of AI applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
