import reactLogo from '../assets/react.svg'
import htmlLogo from '../assets/html.svg'
import gitHubLogo from '../assets/github.svg'
import pythonLogo from '../assets/python.svg'
import tailwindLogo from '../assets/tailwind-css.svg'
import SkillCards from '../components/SkillCards'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)
const About = () => {

    useEffect(() => {
      gsap.fromTo([".rightDiv", ".centerDiv", ".leftDiv"], {opacity:0, scale:0.1}, {scale:1, opacity:1, duration:1, scrollTrigger: {
          trigger:".rightDiv",
          start:"top 80%"
        }})
    })

    return (
    <section id="about">
      <div className="w-full h-screen flex p-15 text-[#F3F3F3]">
        <div className='flex border rounded-2xl bg-[#1E1E1E]'>
          <div className="leftDiv flex-1  p-10 flex flex-col justify-between ">
          <h1 className=" rounded-xl text-center text-2xl font-bold drop-shadow-[0_0_6px_rgba(100,100,100,1)]">ABOUT ME</h1>
          <div className=" border"> render 3d model here</div>
          <p>Self-taught developer skilled in React, React Native, and Three.js, with a hands-on approach to learning. I build scalable, real-world projects and aim to contribute to teams focused on performance, design, and user experience.</p>
        </div>
        <div className="centerDiv flex-1  p-10">
          <h1 className=" rounded-xl text-center text-2xl font-bold drop-shadow-[0_0_6px_rgba(100,100,100,1)]">EXPERIENCE</h1>
          <p className="py-4"><strong>Software Engineer – CGI</strong><br /><p className="font-semibold">2023 - Present</p><br />
Working on enterprise-level applications with a focus on software quality, collaboration, and end-to-end system understanding. Gaining hands-on experience in Agile workflows, cross-functional teamwork, and modern development environments.</p>
        </div>
        <div className="rightDiv flex-1  p-10">
          <h1 className=" rounded-xl text-center text-2xl font-bold drop-shadow-[0_0_6px_rgba(100,100,100,1)]">EDUCATION</h1>
          <ul className="py-4">
            <li className="flex p-2"><p className="flex-1">2019 - 2023</p><p className="flex-2 pl-10">Indian Institute Of Information Technology, Trichy</p></li>
            <li className="flex p-2"><p className="flex-1">2017 - 2019</p><p className="flex-2 pl-10">Sri Chaitany Junior College, Visakhapatnam</p></li>
            <li className="flex p-2"><p className="flex-1">2019 - 2023</p><p className="flex-2 pl-10">St` Aloysius Anglo Indian High School</p></li>
          </ul>
          <div className=''>
            <h1 className="rounded-xl text-center text-2xl font-bold my-4  drop-shadow-[0_0_6px_rgba(100,100,100,1)]">SKILLS</h1>
            <div className='flex flex-wrap justify-center'>
              <SkillCards image={reactLogo} name='REACT'/>
              <SkillCards image={htmlLogo} name='HTML'/>
              <SkillCards image={gitHubLogo} name='GITHUB'/>
              <SkillCards image={pythonLogo} name='PYTHON'/>
              <SkillCards image={tailwindLogo} name='TAILWINDCSS'/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About