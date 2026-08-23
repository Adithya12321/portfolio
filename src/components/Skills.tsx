const skills = [
    // Testing
    "Playwright", "Playwright MCP", "Selenium", "Page Object Model", "API Testing", "Postman",
    // AI-assisted
    "AI Agents", "LLM-Paired Programming", "AI Response Evaluation",
    // CI/CD + languages
    "GitHub Actions", "TypeScript", "Python", "SQL",
    // Frontend
    "React", "Next.js", "Zustand", "React Flow", "Tailwind CSS", "Node.js", "Git",
];

const Skills = () => {
    return (
        <div className="w-full py-10 bg-background overflow-hidden relative">
            <h2 className="sr-only">Skills and tools</h2>
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" aria-hidden="true"></div>
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" aria-hidden="true"></div>

            <ul className="flex animate-scroll whitespace-nowrap list-none motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:whitespace-normal motion-reduce:justify-center">
                {[0, 1].map((copy) => (
                    <li key={copy} className="flex gap-8 mx-4 motion-reduce:flex-wrap motion-reduce:gap-3 motion-reduce:justify-center"
                        aria-hidden={copy === 1 ? 'true' : undefined}>
                        {skills.map((skill) => (
                            <span key={`${copy}-${skill}`}
                                className="flex items-center gap-2 px-6 py-3 bg-secondary/30 rounded-full border border-border/50 backdrop-blur-sm">
                                <span className="text-foreground font-medium">{skill}</span>
                            </span>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
