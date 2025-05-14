import { Github, Instagram,  Mail, Phone, User } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Contact = () => {

  useEffect(() => {
    gsap.fromTo(".messageCard", {x:1000, y: -1000, scale:0.1}, {x:0, y:0,scale:1, duration:1, rotate:2*360, scrollTrigger :{
      trigger: ".page",
      start: "top 50%"
    }})
    gsap.fromTo(".socialCards", {y:500}, { y:0, duration:1, scrollTrigger :{
      trigger: ".page",
      start: "top 50%"
    }})
  })

  const contactRef = useRef(null);
  return (
    <section id="contact" className='page'>
      <div ref={contactRef} className="w-full h-screen flex justify-center items-center bg-[#121212] ">
        <div className="relative border rounded-2xl w-4/5 h-3/5 flex flex-col drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
          <div className="flex-1 border-b flex flex-col rounded-t-2xl">
            <div className="flex justify-end"><strong className="p-10 flex-1 text-2xl bg-[#F3F3F3] rounded-tl-2xl">Get In Touch</strong><strong className=" pt-8 flex-1 text-2xl bg-[#F3F3F3] rounded-tr-2xl">Message</strong></div>
            <div className="w-full text-wrap p-10 flex-1 bg-[#B0B0B0]"><p className="text-wrap w-1/2 font-semibold">Whether it's work, ideas, or opportunities, I’m just a message away — let’s connect.</p></div>
          </div>
          <div className="socialCards flex-1 flex w-1/2 justify-evenly items-center text-[#F3F3F3] ">
            <Mail size={36} className="drop-shadow-[0_0_6px_rgba(203,161,53,0.5)] hover:drop-shadow-[0_0_15px_rgba(235,235,235,1)] hover:scale-110 transition-all duration-300"/>
            <Phone size={36} className="drop-shadow-[0_0_6px_rgba(203,161,53,0.5)] hover:drop-shadow-[0_0_15px_rgba(235,235,235,1)] hover:scale-110 transition-all duration-300"/>
            <Github size={36} className="drop-shadow-[0_0_6px_rgba(203,161,53,0.5)] hover:drop-shadow-[0_0_15px_rgba(235,235,235,1)] hover:scale-110 transition-all duration-300"/>
            <Instagram size={36} className="drop-shadow-[0_0_6px_rgba(203,161,53,0.5)] hover:drop-shadow-[0_0_15px_rgba(235,235,235,1)] hover:scale-110 transition-all duration-300"/>
            <Instagram size={36} className="drop-shadow-[0_0_6px_rgba(203,161,53,0.5)] hover:drop-shadow-[0_0_15px_rgba(235,235,235,1)] hover:scale-110 transition-all duration-300"/>
          </div>
          <div className="messageCard absolute border rounded-2xl w-2/5 h-2/3 top-1/2 -translate-y-1/2 left-1/2 translate-x-10 bg-[#1E1E1E] text-[#F3F3F3] border-[#2E2E2E]">
          <form action="" className="flex flex-col gap-y-8 p-4 ">
            <div className="flex p-2 gap-2"><User size={28} strokeWidth={2.5} className="drop-shadow-[0_0_6px_rgba(203,161,53,1)]" /><input type="text" className="border rounded w-full"/></div>
            <div className="flex p-2 gap-2"><Mail size={28} strokeWidth={2.5} className="drop-shadow-[0_0_6px_rgba(203,161,53,1)]" /><input type="text" className="border rounded w-full"/></div>
            <div className="flex pl-10 pr-2"><div className="border rounded p-2 w-full"><textarea className="text-wrap w-full"></textarea></div></div>
            <div className="flex items-center justify-center"><button className="border rounded p-2 bg-[#CBA135] drop-shadow-[0_0_4px_rgba(203,161,53,1)] hover:drop-shadow-[0_0_8px_rgba(203,161,53,1)] hover:scale-110 transition-all duration-300 text-[#121212] ">send message</button></div>
          </form>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact