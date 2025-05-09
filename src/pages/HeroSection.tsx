
import { Canvas, useFrame } from "@react-three/fiber"
import Lines from "../components/lines"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  
  const summaryText = "I turn ideas into interactive, responsive, and performance-first websites using React, GSAP";
    useEffect(() => {
        const el = document.getElementById("typewriter");
        gsap.fromTo(boxRef.current, {x:1500 , opacity:0, scale:0.1}, {x:0, duration:2, opacity:1, scale:1,
          ScrollTrigger : {
            trigger: boxRef.current,
            start: "top 80%",
          }})
          gsap.fromTo(textRef.current, {x:-1500 , opacity:0, scale:0.1}, {x:0, duration:2, opacity:1, scale:1,
            ScrollTrigger : {
              trigger: textRef.current,
              start: "top 80%",
            }})
          gsap.to({}, {
            duration:2,
            repeat: 0, 
            delay: 2,
            onStart : () => {
              let index = 0;
              const interval = setInterval(() => {
                if (el) {
                  el.textContent += summaryText.charAt(index);
                }
                index++;
                if (index === summaryText.length) clearInterval(interval);
              },80)
            }
          })
    }, [])
  return (
    <section id="home">
      <div className="w-full h-screen bg-[rgb(18,18,18)] text-[#F3F3F3] p-10 flex">
        {/* <Canvas ref={boxRef} className="test"><Lines /></Canvas> */}
        <img ref={boxRef} src="" alt="" className="border w-1/2 h-full"/>
        <div ref={textRef} className="w-full h-full border flex-1 flex flex-col justify-center gap-y-4 text-right p-20">
          <h1 className="text-6xl p-4">Adithya Venkatesth P</h1>
          <p className="text-3xl p-4">Web Developer</p>
          <p id="typewriter" className="text-wrap"></p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection