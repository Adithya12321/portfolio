import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import React from 'react'

const FeaturedProjects = () => {
  const bgColour = "bg-[#1A202C]"
  const textColour = "text-[#E2E8F0]"
  const accentColour = "[#63B3ED]"
  const secondary = "[#2D3748]"

  return (
    <section id='projects'>
    <div className={`px-[15%] py-[5%] h-screen w-full ${bgColour} ${textColour} `}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text text-[#63B3ED]">Featured Projects</h2>
      <div className='flex gap-x-10 h-auto'>
        <div className='border rounded-xl flex-1 hover:-translate-y-1'>
          <ProjectCard name='FocusFlowTimer' skills={["React", "TypeScript", "Tailwindcss"]} description="project description. this is soemthing to briefly descrive about projectproject description.
                      this is soemthing to briefly descrive about project" gitHubLink = "https://github.com/Adithya12321/FocusFlowTimer" liveDemoLink = "https://focus-flow-timer-spg2y14d6-adithyas-projects-6b3fc28c.vercel.app" />
        </div>
        <div className='border rounded-xl flex-1 hover:-translate-y-1'></div>
        <div className='border rounded-xl flex-1 hover:-translate-y-1'></div>
      </div>
      <div className='flex justify-center py-[5%]'>
        <Button variant="outline" className='mr-2 bg-[#63B3ED] !text-[#1A202C]'>View More Projects</Button>
      </div>    
    </div>
    </section>
  )
}

export default FeaturedProjects