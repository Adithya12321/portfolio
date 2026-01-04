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
              <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight'>
                Hi, I'm <span className={`text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]`}>Adithya</span>
              </h1>
              <h2 className='text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground'>FRONTEND DEVELOPER</h2>
              <p className='text-lg mb-8 max-w-xl text-muted-foreground leading-relaxed'>
                I build exceptional digital experiences that are fast, accessible, and visually appealing.
                Focused on creating scalable solutions tailored to user needs.
              </p>
            </>
            <div className='flex flex-wrap gap-4'>
              <Button className='bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8' onClick={() => handelClick("contact")}>Hire Me</Button>
              <Button variant="outline" className='border-primary text-primary hover:bg-primary/10 h-11 px-8' onClick={() => handelClick("projects")}>View Projects</Button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-border/50 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">3+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground">Projects Done</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Satisfaction</span>
              </div>
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