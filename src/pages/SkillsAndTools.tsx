import SkillCards from "../components/SkillCards"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import reactLogo from '../assets/react.svg'
import htmlLogo from '../assets/html.svg'
import gitHubLogo from '../assets/github.svg'
import pythonLogo from '../assets/python.svg'
import tailwindLogo from '../assets/tailwind-css.svg'
import { useEffect } from "react";


const SkillsAndTools = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.fromTo(".test", {opacity:0 , y:300}, {opacity:1, y:-50, duration:1.0, 
      scrollTrigger :{
        trigger:".test",
        start: "top 100%",
      }
    })
    gsap.fromTo(".skillGPP", {opacity:0 , x:-300}, {opacity:1, x:0, duration:1.5, 
      scrollTrigger :{
        trigger:".skillGPP",
        start: "top 100%",
      }
    })
  })
  return (
    <section id="skills">
      <div className="w-full h-screen p-20 text-[#F3F3F3]">
      <div className=" w-full h-full p-2 bg-[#1E1E1E] rounded-2xl drop-shadow-[0_0_6px_rgba(250,250,250,0.5)]">
          <div className=''><h1 className='skillGPP text-center text-3xl font-bold p-4 drop-shadow-[0_0_6px_rgba(250,250,250,0.7)]'>SKILLS</h1></div>
          <div className='test w-full h-full p-10  flex flex-wrap rounded-2xl items-center justify-center '>
            <SkillCards image={reactLogo} name='REACT'/>
            <SkillCards image={htmlLogo} name='HTML'/>
            <SkillCards image={gitHubLogo} name='GITHUB'/>
            <SkillCards image={pythonLogo} name='PYTHON'/>
            <SkillCards image={tailwindLogo} name='TAILWINDCSS'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsAndTools