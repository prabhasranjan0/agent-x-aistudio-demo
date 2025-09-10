import React from 'react';
import { AgentCoreIcon, ToolHubIcon, OrchestrationIcon, ObservabilityIcon, CheckIcon } from './icons';

const products = [
    {
        icon: <AgentCoreIcon />,
        title: "Agent Core",
        description: "A powerful reasoning engine that allows agents to plan, reflect, and execute complex, multi-step tasks.",
        features: ["Multi-modal understanding", "Long-term memory", "Self-correction capabilities"]
    },
    {
        icon: <ToolHubIcon />,
        title: "Tool Hub",
        description: "Integrate with any API or data source. Use our library of pre-built tools or create your own to extend agent capabilities.",
        features: ["100+ Pre-built integrations", "Custom tool creation SDK", "Secure credential management"]
    },
    {
        icon: <OrchestrationIcon />,
        title: "Orchestration Platform",
        description: "Deploy, manage, and scale fleets of agents with robust orchestration and workflow management for enterprise needs.",
        features: ["Serverless deployment", "Parallel task execution", "Version control & rollbacks"]
    },
    {
        icon: <ObservabilityIcon />,
        title: "Observability Suite",
        description: "Gain deep insights into agent performance with comprehensive logging, tracing, and debugging tools.",
        features: ["Real-time monitoring", "Token usage analytics", "Error tracking & alerts"]
    }
];

const Products: React.FC = () => {
    return (
        <section className="py-24 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-400 via-teal-300 to-lime-400 text-glow">
                            Our Product Suite
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        From core reasoning engines to enterprise-grade orchestration, AgenX provides everything you need to build, deploy, and scale autonomous agents.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map(product => (
                        <div key={product.title} className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 flex flex-col items-start hover:border-sky-500/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-sky-500/10">
                            <div className="text-sky-400 mb-5">{product.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                            <p className="text-slate-400 mb-6 flex-grow">{product.description}</p>
                            <ul className="space-y-3 text-slate-300 mb-6 w-full">
                                {product.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <CheckIcon />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="mt-auto inline-block text-sky-400 font-semibold hover:text-sky-300 transition-colors">
                                Learn More &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;