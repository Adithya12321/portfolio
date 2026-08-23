import { Github, ExternalLink, Lock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
    name: string;
    company?: string;
    imgPath?: string;
    skills: string[];
    description: string;
    gitHubLink?: string;
    liveDemoLink?: string;
    isPrivate?: boolean;
}

const ProjectCard = ({ name, company, imgPath, skills, description, gitHubLink, liveDemoLink, isPrivate }: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='w-full h-full flex flex-col bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors duration-300'>
            <div className='relative overflow-hidden group'>
                {liveDemoLink ? (
                    <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                        <img src={imgPath} alt={name} width={800} height={432} loading='lazy' className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105' />
                    </a>
                ) : (
                    <div className='w-full h-48 bg-secondary/30 flex items-center justify-center overflow-hidden'>
                        {imgPath ? (
                            <img src={imgPath} alt={name} width={800} height={432} loading='lazy'
                                className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105' />
                        ) : (
                            // Internal systems have no shareable screenshot, so the card gets a typographic
                            // tile rather than a stock image that would imply something it isn't.
                            <div className='w-full h-48 flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand/20 via-secondary/30 to-background'>
                                <span className='text-5xl font-bold text-brand/60 tracking-tight select-none' aria-hidden='true'>
                                    {name.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className='flex-1 p-6 flex flex-col'>
                <div className='mb-4'>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className='text-xl font-bold text-card-foreground group-hover:text-brand transition-colors'>{name}</h3>
                            {company && <p className='text-xs text-muted-foreground mt-0.5'>{company}</p>}
                        </div>
                        {isPrivate && <span className="bg-secondary text-xs px-2 py-1 rounded-md text-muted-foreground flex items-center gap-1"><Lock size={12} /> Enterprise</span>}
                    </div>
                    <div>
                        <p className={`text-muted-foreground text-sm leading-relaxed mb-1 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                            {description}
                        </p>
                        {description.length > 100 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-xs text-brand hover:underline inline-flex items-center gap-1 font-medium bg-transparent border-none cursor-pointer py-3 -my-1 min-h-11"
                            >
                                {isExpanded ? (
                                    <>Show Less <ChevronUp size={12} /></>
                                ) : (
                                    <>Read More <ChevronDown size={12} /></>
                                )}
                            </button>
                        )}
                    </div>
                </div>

                <div className='mt-auto space-y-4'>
                    <div className='flex flex-wrap gap-2'>
                        {skills.map((skill, index) => (
                            <span key={index} className='px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium border border-border/50'>
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className='flex items-center gap-3 pt-4 border-t border-border/30'>
                        {gitHubLink && (
                            <a href={gitHubLink} target="_blank" rel="noopener noreferrer" aria-label={`${name} on GitHub`}
                                className="text-muted-foreground hover:text-brand transition-colors inline-flex items-center justify-center w-11 h-11 -m-2">
                                <Github size={20} aria-hidden="true" />
                            </a>
                        )}
                        {liveDemoLink && (
                            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" aria-label={`${name} live demo`}
                                className="text-muted-foreground hover:text-brand transition-colors inline-flex items-center justify-center w-11 h-11 -m-2">
                                <ExternalLink size={20} aria-hidden="true" />
                            </a>
                        )}
                        {isPrivate && (
                            <span className="text-xs text-muted-foreground italic ml-auto">Internal Project</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard