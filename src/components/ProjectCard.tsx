import { Github, ExternalLink, Lock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
    name: string;
    imgPath: string;
    skills: string[];
    description: string;
    gitHubLink?: string;
    liveDemoLink?: string;
    isPrivate?: boolean;
}

const ProjectCard = ({ name, imgPath, skills, description, gitHubLink, liveDemoLink, isPrivate }: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='w-full h-full flex flex-col bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors duration-300'>
            <div className='relative overflow-hidden group'>
                {liveDemoLink ? (
                    <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                        <img src={imgPath} alt={name} className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105' />
                    </a>
                ) : (
                    <div className='w-full h-48 bg-secondary/30 flex items-center justify-center overflow-hidden'>
                        {imgPath ? (
                            <img src={imgPath} alt={name} className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105' />
                        ) : (
                            <span className="text-4xl">💼</span>
                        )}
                    </div>
                )}
            </div>

            <div className='flex-1 p-6 flex flex-col'>
                <div className='mb-4'>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className='text-xl font-bold text-card-foreground group-hover:text-primary transition-colors'>{name}</h3>
                        {isPrivate && <span className="bg-secondary text-xs px-2 py-1 rounded-md text-muted-foreground flex items-center gap-1"><Lock size={12} /> Enterprise</span>}
                    </div>
                    <div>
                        <p className={`text-muted-foreground text-sm leading-relaxed mb-1 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                            {description}
                        </p>
                        {description.length > 100 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-xs text-primary hover:underline flex items-center gap-1 font-medium bg-transparent border-none p-0 cursor-pointer"
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
                            <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {liveDemoLink && (
                            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <ExternalLink size={20} />
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