
const ProjectCard = ({name,imgPath, skills, description, gitHubLink, liveDemoLink} : {name:string,imgPath:string, skills:string[], description:string, gitHubLink:string, liveDemoLink:string}) => {
    

  return (
    <div className='w-full h-full flex flex-col '>
        <div className=''>
            <a href={liveDemoLink}><img src={imgPath} alt="project-1" className='rounded-xl'/></a>
        </div>
        <div className=' flex-5 p-5 flex flex-col justify-evenly'>
            <div className='pb-2'>
                <h1 className='text-2xl font-semibold mb-4'>{name}</h1>
                <p className='opacity-70'>{description}</p>
            </div>
            <div className={`flex flex-wrap gap-x-2 `}>
                {
                    skills.map((res, _) => (
                        <button className='bg-[#2D3748] rounded px-1'>{res}</button>
                    ))
                }
            </div>
            <div className={`flex flex-wrap gap-x-2 text-[#63B3ED] font-semibold `}>
                <a href={gitHubLink} className='hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)] hover:scale-110'>code</a>
                <a href={liveDemoLink} className='hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)] hover:scale-110'>live demo</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard