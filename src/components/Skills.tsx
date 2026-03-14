
const skills = [
    "Next.js", "React", "TypeScript", "Playwright", "Zustand", "React Flow", "Tailwind CSS", "Node.js", "AI-Agents", "LLM-Paired Programming", "Git", "SQL"
];

const Skills = () => {
    return (
        <div className="w-full py-10 bg-background overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

            <div className="flex animate-scroll whitespace-nowrap">
                {/* First copy of skills */}
                <div className="flex gap-8 mx-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 px-6 py-3 bg-secondary/30 rounded-full border border-border/50 backdrop-blur-sm">
                            <span className="text-foreground font-medium">{skill}</span>
                        </div>
                    ))}
                </div>
                {/* Second copy for seamless loop */}
                <div className="flex gap-8 mx-4">
                    {skills.map((skill, index) => (
                        <div key={`duplicate-${index}`} className="flex items-center gap-2 px-6 py-3 bg-secondary/30 rounded-full border border-border/50 backdrop-blur-sm">
                            <span className="text-foreground font-medium">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
