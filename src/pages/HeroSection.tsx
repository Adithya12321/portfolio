
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { useEffect, useRef} from "react";
import * as THREE from "three";
import ScrollTrigger from "gsap/ScrollTrigger";
import profileImage from '/profileImage.jpg'
import RenderCube from "../components/RenderCube";
import { OrbitControls } from "@react-three/drei";
import { RenderStars } from "../components/RenderStars";
import { TypingText } from "@/components/animate-ui/text/typing";


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const starRef = useRef<THREE.Mesh>(null);
  gsap.registerPlugin(ScrollTrigger);
  const summaryText = "I turn ideas into interactive, responsive, and performance-first websites using React, GSAP";
    useEffect(() => {
        const el = document.getElementById("typewriter");
        gsap.fromTo(boxRef.current, {x:1500 , opacity:0, scale:0.1}, {x:0, rotate: 360 ,duration:2, opacity:1, scale:1,
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
          gsap.to('.ppGsap', {x:-5, y:-5, duration:1, repeat:-1, yoyo: true,delay:2})
          gsap.fromTo('.cubeGPP', {y:-500}, {y: 20, duration:1.5})
          gsap.to('.cubeGPP', {y:-100, duration:1, repeat:-1, yoyo: true,delay:1.4})
          // gsap.to('.star', {scale:0.5, duration:1, repeat:-1, yoyo: true,delay:2})
    }, [])
  return (
    <section id="home">
      <div className="w-full h-screen bg-[rgb(18,18,18)] text-[#F3F3F3] p-10 flex">
        {/* <Canvas ref={boxRef} className="test"><Lines /></Canvas> */}
        <div ref={boxRef} className="h-full w-full flex-1  p-20 pt-0 pl-10">
          <img src={profileImage} alt="" className="ppGsap scale-80 rounded-2xl border drop-shadow-[0_0_6px_rgba(210,210,218,1)]"/>
        </div>
        <div  className="w-full h-full  flex-1 flex flex-col justify-end gap-y-4 text-right p-20">
          <div className="cubeGPP flex-1 flex justify-end">
          <Canvas className="star  flex drop-shadow-[0_0_6px_rgba(210,210,218,1)]">
            <RenderCube />
            {/* <RenderStars /> */}
            <OrbitControls/>
          </Canvas>
          </div>
          <div ref={textRef} className="flex-1 flex flex-col justify-end drop-shadow-[0_0_3px_rgba(210,210,218,1)]">
          <div className="flex-1"></div>
          <div className="flex-1">
            <h1 className="text-6xl p-2 ">Adithya Venkatesth P</h1>
          </div>
          <div className="flex-1">
            <p className="text-3xl p-2 "><TypingText text="Web Developer" delay={2000} loop={true}/></p>
          </div>
          <div className="flex-1  p-2">
            <p>{summaryText}</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection