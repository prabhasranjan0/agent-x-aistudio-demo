import React from 'react';
import { SDKIcon, DocsIcon, APIReferenceIcon, CommunityIcon, GithubIcon, LinkedInIcon, XIcon } from './icons';

const toolkit = [
    {
        icon: <SDKIcon />,
        title: "Flexible SDK",
        description: "A powerful, intuitive SDK in Python and JS/TS that integrates into any application."
    },
    {
        icon: <DocsIcon />,
        title: "Comprehensive Docs",
        description: "Explore guides, tutorials, and examples to get up and running in minutes."
    },
    {
        icon: <APIReferenceIcon />,
        title: "Powerful API",
        description: "Full control over the agent lifecycle with a robust and scalable core API."
    },
    {
        icon: <CommunityIcon />,
        title: "Community Support",
        description: "Join our community on Discord to get help, share ideas, and build together."
    }
];

const developers = [
    {
        name: "Anya Sharma",
        title: "Principal SDK Engineer",
        quote: "We're obsessed with creating a seamless developer experience. Our goal is to make building powerful agents feel effortless.",
        social: {
            github: "#",
            linkedin: "#",
            x: "#",
        },
        initials: "AS"
    },
    {
        name: "Ben Carter",
        title: "Head of Agent Infrastructure",
        quote: "Reliability and scalability are paramount. We're building the bedrock that will support millions of autonomous agents.",
        social: {
            github: "#",
            linkedin: "#",
            x: "#",
        },
        initials: "BC"
    },
    {
        name: "Chloe Davis",
        title: "Core Contributor",
        quote: "My focus is on the core reasoning engine, pushing the boundaries of what's possible with autonomous planning and execution.",
        social: {
            github: "#",
            linkedin: "#",
            x: "#",
        },
        initials: "CD"
    }
];

const CodeSnippet: React.FC = () => (
    <div className="bg-slate-900/70 rounded-lg p-4 border border-slate-800 mt-4 text-sm font-mono text-left">
        <pre className="whitespace-pre-wrap"><code>
            <span className="text-purple-400">from</span> agenx <span className="text-purple-400">import</span> Agent<br/><br/>
            agent = Agent(<br/>
            {"  "}goal=<span className="text-sky-300">"Analyze market trends for AI startups"</span>,<br/>
            {"  "}tools=[<span className="text-sky-300">'web_search'</span>, <span className="text-sky-300">'file_reader'</span>]<br/>
            )<br/><br/>
            result = agent.run()<br/>
            <span className="text-slate-500"># Autonomous execution begins...</span>
        </code></pre>
    </div>
);


const Developers: React.FC = () => {
    return (
        <>
            <section className="py-24 md:py-28 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-teal-400 to-sky-400 text-glow">
                            Built for Developers, by Developers
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Explore our comprehensive SDK, detailed documentation, and vibrant community to start building your first AI agent in minutes.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {toolkit.map(item => (
                             <div key={item.title} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
                                <div className="text-purple-400 mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-slate-400 flex-grow">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <CodeSnippet />
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Meet Our Developers</h2>
                        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                            The core team dedicated to building the future of autonomous AI.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {developers.map(dev => (
                            <div key={dev.name} className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 flex flex-col text-center items-center transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-sky-500 flex items-center justify-center text-white font-bold text-3xl mb-6">
                                    {dev.initials}
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{dev.name}</h3>
                                <p className="text-purple-400 font-medium mb-4">{dev.title}</p>
                                <p className="text-slate-400 italic mb-6">"{dev.quote}"</p>
                                <div className="flex space-x-4 mt-auto">
                                    <a href={dev.social.github} className="text-slate-400 hover:text-white"><GithubIcon /></a>
                                    <a href={dev.social.linkedin} className="text-slate-400 hover:text-white"><LinkedInIcon /></a>
                                    <a href={dev.social.x} className="text-slate-400 hover:text-white"><XIcon /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Developers;