
const experiences = [
    {
        role: "Frontend Developer",
        company: "Freelance",
        period: "2023 - Present",
        description: "Building responsive and accessible web applications for miscellaneous clients using React, Tailwind CSS, and TypeScript."
    },
    {
        role: "Web Development Intern",
        company: "Tech Solutions Inc.",
        period: "2022 - 2023",
        description: "Collaborated with senior developers to implement UI features and fix bugs in a large-scale React application."
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
