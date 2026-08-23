import { MapPin, Mail, GraduationCap } from 'lucide-react'
import { PROFILE, yearsOfExperience } from '@/lib/profile'

const About = () => {
    return (
        <section id='about'>
            <div className='px-6 sm:px-[10%] lg:px-[15%] py-24 w-full text-foreground bg-background'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 gradient-text text-brand'>About Me</h2>

                    <h3 className='text-2xl font-semibold mb-4'>Who am I?</h3>
                    <p className='text-muted-foreground mb-6 leading-relaxed'>
                        I'm an <strong className='text-foreground'>SDET</strong> with {yearsOfExperience()}+ years of
                        experience, focused on using AI-assisted development to scale testing faster than features ship.
                        At <strong className='text-foreground'>nRev.ai</strong> I was the sole QA owner through a
                        high-stakes public launch: multiple concurrent releases, zero critical bugs in production.
                    </p>
                    <p className='text-muted-foreground mb-6 leading-relaxed'>
                        Most of my work is building the tooling rather than just using it: automation that heals itself
                        when the UI shifts, bug reports that arrive with network traces and root-cause analysis already
                        attached, and test strategies for validating the correctness of AI agent output. I cut our suite's
                        runtime by 40% through refactoring and parallelisation.
                    </p>
                    <p className='text-muted-foreground mb-8 leading-relaxed'>
                        Before that I spent two years at <strong className='text-foreground'>CGI</strong> on{' '}
                        <strong className='text-foreground'>HotScan360</strong>, an anti-money-laundering platform used by
                        major global banks, where I personally surfaced around 40% of all bugs the team found during
                        release cycles. I also work across the stack (React, Next.js, Zustand and React Flow), which is
                        usually how I find the bugs worth reporting.
                    </p>

                    <div className='flex flex-wrap gap-x-8 gap-y-3 text-sm'>
                        <span className='flex items-center gap-2'>
                            <MapPin size={16} className='text-brand' aria-hidden='true' />
                            {PROFILE.location}
                        </span>
                        <a href={`mailto:${PROFILE.email}`} className='flex items-center gap-2 hover:text-brand transition-colors'>
                            <Mail size={16} className='text-brand' aria-hidden='true' />
                            {PROFILE.email}
                        </a>
                        <span className='flex items-center gap-2'>
                            <GraduationCap size={16} className='text-brand' aria-hidden='true' />
                            B.Tech ECE, IIIT Trichy
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
