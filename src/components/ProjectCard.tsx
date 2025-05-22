import React from 'react'

const ProjectCard = ({name, skills, description, gitHubLink, liveDemoLink} : {name:string, skills:string[], description:string, gitHubLink:string, liveDemoLink:string}) => {
    const bgColour = "bg-[#1A202C]"
    const textColour = "text-[#E2E8F0]"
    const accentColour = "[#63B3ED]"
    const secondary = "[#2D3748]"

  return (
    <div className='w-full h-full flex flex-col'>
        <div className='flex-4'>
            <a href="https://focus-flow-timer-spg2y14d6-adithyas-projects-6b3fc28c.vercel.app/"><img src="./focusFlowTimer.png" alt="project-1" className='rounded-xl'/></a>
        </div>
        <div className=' flex-5 p-5 flex flex-col justify-evenly'>
            <div>
                <h1 className='text-2xl font-semibold mb-4'>{name}</h1>
                <p>{description}</p>
            </div>
            <div className={`flex flex-wrap gap-x-2 `}>
                {
                    skills.map((res, _) => (
                        <button className='bg-[#2D3748] rounded px-1'>{res}</button>
                    ))
                }
            </div>
            <div className={`flex flex-wrap gap-x-2 text-[#63B3ED]`}>
                <a href={gitHubLink} className=''>code</a>
                <a href={liveDemoLink} >live demo</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard