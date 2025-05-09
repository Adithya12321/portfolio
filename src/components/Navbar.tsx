import { Mail } from "lucide-react"
import { useState } from "react";

const Navbar = () => {
  const [isContact, setIsContact] = useState(false);
  const handelClick = (id:string) => {
    const element = document.getElementById(id);
    if (id === 'contact') {
      setIsContact(true)
    }
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
    }

  }
  return (
    <div className="navBar w-full h-10 border flex px-2 fixed top-0 left-0 text-[#F3F3F3]">
      <div className="logo size-10 flex items-center justify-center">
        <img src="" alt="" onClick={() => handelClick("home")} className="logo size-8 rounded-full border"/>
      </div>
      <div className="navigation w-full h-full flex items-center justify-center gap-8 text-lg">
        <a onClick={() => handelClick("home")}>Home</a>
        <a onClick={() => handelClick("projects")}>Projects</a>
        <a onClick={() => handelClick("skills")}>Skills</a>
        <a onClick={() => handelClick("about")}>About</a>
        <a onClick={() => handelClick("contact")} className={`${ isContact ? 'drop-shadow-[0_0_10px_rgba(253,253,253,1)]' : ''}`}>Contact</a>
      </div>
      <div className="flex justify-center items-center"><Mail size={28} strokeWidth={2} className="drop-shadow-[0_0_6px_rgba(203,161,53,1)]"/></div>
    </div>
  )
}

export default Navbar