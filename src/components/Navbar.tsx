import { Mail } from "lucide-react"
import { useState } from "react";
import MailModal from "./MailModal";

const Navbar = () => {
  const [isHome, setIsHome] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isSkills, setIsSkills] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [showMailModal, setShowMailModal] = useState(false)
  const handelClick = (id:string) => {
    const element = document.getElementById(id);
    if (id === 'home') {
      setIsHome(true)
      setIsProjects(false)
      setIsSkills(false)
      setIsAbout(false)
      setIsContact(false)
      
    } else if (id === 'projects') {
      setIsHome(false)
      setIsProjects(true)
      setIsSkills(false)
      setIsAbout(false)
      setIsContact(false)
    } else if (id === 'skills') {
      setIsHome(false)
      setIsProjects(false)
      setIsSkills(true)
      setIsAbout(false)
      setIsContact(false)
    } else if (id === 'about') {
      setIsHome(false)
      setIsProjects(false)
      setIsSkills(false)
      setIsAbout(true)
      setIsContact(false)
    } else if (id === 'contact') {
      setIsHome(false)
      setIsProjects(false)
      setIsSkills(false)
      setIsAbout(false)
      setIsContact(true)
    }
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
    }

  }
  return (
    <div className="navBar w-full h-10 flex px-2 fixed top-0 left-0 text-[#F3F3F3] bg-[#1A202C]/90 z-10">
      
      
      <div className="navigation w-full h-full flex items-center justify-center gap-8 text-lg">
        <a onClick={() => handelClick("home")} className={`${ isHome ? 'drop-shadow-[0_0_10px_rgba(253,253,253,1)]' : ''}`}>Home</a>
        <a onClick={() => handelClick("about")} className={`${ isAbout ? 'drop-shadow-[0_0_10px_rgba(253,253,253,1)]' : ''}`}>About</a>
        <a onClick={() => handelClick("projects")} className={`${ isProjects ? 'drop-shadow-[0_0_10px_rgba(253,253,253,1)]' : ''}`}>Projects</a>
        {/* <a onClick={() => handelClick("skills")} className={`${ isSkills ? 'drop-shadow-[0_0_10px_rgba(253,253,253,1)]' : ''}`}>Skills</a> */}
        <a onClick={() => handelClick("contact")} className={`${ isContact ? 'drop-shadow-[0_0_10px_rgba(253,253,253,1)]' : ''}`}>Contact</a>
      </div>
      
    </div>
  )
}

export default Navbar