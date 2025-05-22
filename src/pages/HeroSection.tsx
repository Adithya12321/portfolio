import { Button } from '@/components/ui/button'
import React from 'react'

const HeroSection = () => {
  const bgColour = "bg-[#1A202C]"
  const textColour = "text-[#E2E8F0]"
  const accentColour = "[#63B3ED]"
  const secondary = "[#2D3748]"


  return (
    <div className={`px-[15%] py-[10%] w-full h-screen ${bgColour} ${textColour}`}>
      <div className=' border-white w-full h-full flex'>
        <div className=' flex-1 flex flex-col justify-center'>
          <>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>Hi, i'm <span className={`text-[#63B3ED]`}>Adithya</span></h1>
            <h2 className='text-2xl md:text-3xl  mb-6'>I'm a Web Developer</h2>
            <p className='text-lg  mb-8'>I build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
          </>
          <div className=''>
            <Button variant="outline" className='mr-2 bg-[#63B3ED]'>View My Work</Button>
            <Button variant="ghost" className='border'>Contact</Button>
          </div>
        </div>
        <div className=' flex-1 flex justify-center items-center'>
          <p>add image</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection