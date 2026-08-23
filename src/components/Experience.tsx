const experiences = [
    {
        role: "SDET",
        company: "nRev.ai",
        period: "Nov 2025 - Present",
        points: [
            "Sole QA owner through a high-stakes public launch, with zero critical bugs reaching production across multiple rapid, concurrent feature releases.",
            "Built an autonomous test-healing system: it runs the suite, judges whether a failure is real or flaky, and when a UI or locator change is the cause, dispatches AI agents to fix it and open a pull request. The result is a fix ready for review, not just a failure report.",
            "Built an AI-assisted bug-reporting pipeline that captures network activity and root-cause analysis straight into tickets, cutting developer triage time.",
            "Introduced a Playwright MCP-driven workflow enabling same-day automation for newly shipped features.",
            "Cut total suite execution time by 40% through refactoring and parallelisation.",
            "Designed test strategies for evaluating AI agent responses, validating the correctness and reliability of AI-driven workflow output.",
            "Architected a createNodeTest() factory that removed boilerplate across 50+ node types.",
            "Contributed 100+ commits to the product frontend (Next.js/React), debugging race conditions and state-flow issues in Zustand and React Flow.",
        ],
    },
    {
        role: "Software Engineer",
        company: "CGI",
        period: "July 2023 - Oct 2025",
        points: [
            "Quality assurance for HotScan360, an anti-money-laundering platform for financial crime monitoring and big-data fraud analysis, personally surfacing roughly 40% of all bugs the team found during release cycles.",
            "Built a tool that automated screenshot capture for manual testers, replacing a fully manual process and highlighting the exact UI element clicked so testers could trace what was interacted with.",
            "Restructured the JIRA test suite organisation, improving test tracking and workflow efficiency across the team.",
            "Developed automated test scripts and performed functional manual testing for new features.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-background text-foreground">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text text-brand">Work Experience</h2>

                <div className="relative border-l border-border/50 ml-2 sm:ml-6 space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.company} className="relative pl-6 sm:pl-10">
                            <span className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" aria-hidden="true"></span>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                <h3 className="text-xl font-bold text-brand">{exp.role}</h3>
                                <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{exp.period}</span>
                            </div>

                            <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
                            <ul className="space-y-2.5">
                                {exp.points.map((p, i) => (
                                    <li key={i} className="text-muted-foreground leading-relaxed flex gap-3">
                                        <span className="text-brand mt-1.5 shrink-0" aria-hidden="true">▸</span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
