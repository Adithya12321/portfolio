const experiences = [
    {
        role: "QA Automation Engineer",
        company: "nRev.ai",
        period: "Nov 2025 - Present",
        description: "Utilizing AI-paired programming to scale test generation and automate coverage for complex AI-driven workflow nodes. Architected a comprehensive E2E suite using a createNodeTest() factory for 50+ node types. Contributed 100+ production commits to the nrev-ui-2 (Next.js/React) frontend, resolving UI bugs and improved UX. RCA and suggested fixes for complex state flow issues in Zustand and React Flow."
    },
    {
        role: "Software Engineer",
        company: "CGI",
        period: "July 2023 - Oct 2025",
        description: "Provided quality assurance for HotScan360, a complex AML application for financial crime monitoring and big data fraud analysis. Developed automated test scripts and performed functional manual testing for new features. Awarded Silver and Bronze Awards for outstanding performance and critical bug identification."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background text-foreground">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text text-primary">Work Experience</h2>

                <div className="relative border-l border-border/50 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            <span className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></span>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                                <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{exp.period}</span>
                            </div>

                            <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
                            <p className="text-muted-foreground leading-relaxed max-w-2xl">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
