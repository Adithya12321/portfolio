import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import React from 'react'

const FeaturedProjects = () => {
  const bgColour = "bg-[#1A202C]"
  const textColour = "text-[#E2E8F0]"
  const accentColour = "[#63B3ED]"
  const secondary = "[#2D3748]"

  return (
    <div className={`px-[15%] py-[10%] h-screen w-full ${bgColour} ${textColour} `}>
      <div className='flex gap-x-10 h-full'>
        <div className='border rounded-xl flex-1'>
          <ProjectCard name='FocusFlowTimer' skills={["React", "TypeScript", "Tailwindcss"]} description="project description. this is soemthing to briefly descrive about projectproject description.
                      this is soemthing to briefly descrive about project" gitHubLink = "https://github.com/Adithya12321/FocusFlowTimer" liveDemoLink = "https://focus-flow-timer-spg2y14d6-adithyas-projects-6b3fc28c.vercel.app" />
        </div>
        <div className='border rounded-xl flex-1'></div>
        <div className='border rounded-xl flex-1'></div>
      </div>
      <div className='flex justify-center py-[5%]'>
        <Button variant="secondary">View More Projects</Button>
      </div>    
    </div>
  )
}

export default FeaturedProjects