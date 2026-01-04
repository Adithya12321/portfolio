import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const handelClick = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id='home'>
      <div className={`px-[15%] py-[10%] w-full min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background`}>
        <div className=' border-white w-full h-full flex'>
          <div className=' flex-1 flex flex-col justify-center'>
            <>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>Hi, i'm <span className={`text-[#63B3ED] drop-shadow-[0_0_4px_rgba(99,179,237,1)]`}>Adithya</span></h1>
              <h2 className='text-2xl md:text-3xl  mb-6'>I'm a Web Developer</h2>
              <p className='text-lg  mb-8'>I build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
            </>
            <div className=''>
              <Button variant="outline" className='mr-2 bg-[#63B3ED] !text-[#1A202C]' onClick={() => handelClick("projects")}>View My Work</Button>
              <Button variant="ghost" className='border' onClick={() => handelClick("contact")}>Contact</Button>
            </div>
          </div>
          <div className='flex-1 flex justify-center items-center px-[10%] drop-shadow-[0_0_50px_rgba(99,179,237,0.4)]'>
            <img src="./profilePicture.png" alt="" className='rounded-4xl' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection